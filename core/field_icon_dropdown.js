'use strict';
 
goog.provide('Blockly.FieldIconDropDown');
goog.require('Blockly.DropDownDiv');
 
 
/**
 * 构造器
 * @param icons
 * @constructor
 */
Blockly.FieldIconDropDown = function (icons) {
  this.icons_ = icons;
  // Example:
  // [{src: '...', width: 20, height: 20, value: 'machine_value'}, ...]
  // 选择第一个为默认值
  const defaultValue = icons[0].value;
  Blockly.FieldIconDropDown.superClass_.constructor.call(this, defaultValue);
  this.addArgType('icon_dropdown');
};
goog.inherits(Blockly.FieldIconDropDown, Blockly.Field);
 
/**
 * Json配置
 */
Blockly.FieldIconDropDown.fromJson = function (element) {
  return new Blockly.FieldIconDropDown(element['options']);
};
 
/**
 * 下拉面板宽度
 * @type {number}
 * @const
 */
Blockly.FieldIconDropDown.DROPDOWN_WIDTH = 300;
 
/**
 * 颜色记录
 */
Blockly.FieldIconDropDown.savedPrimary_ = null;
 
/**
 * 初始化
 */
Blockly.FieldIconDropDown.prototype.init = function (block) {
  if (this.fieldGroup_) {
    return;
  }
  // 下拉箭头大小
  const arrowSize = 12;
 
  // 重建dom
  this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
  this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);
 
  // 字段宽度
  this.size_.width = 44;
 
  // 图标
  this.imageElement_ = Blockly.utils.createSvgElement('image', {
    'height': 24 + 'px',
    'width': 24 + 'px',
    'x': 4 + "px",
    'y': 4 + "px",
  }, this.fieldGroup_);
  this.setParentFieldImage(this.getSrcForValue(this.value_));
 
  // 下拉箭头位置
  this.arrowX_ = 32;
  this.arrowY_ = 10;
  if (block.RTL) {
    this.arrowX_ = -this.arrowX_ - arrowSize;
  }
 
  // 下拉图标
  this.arrowIcon_ = Blockly.utils.createSvgElement('image', {
    'height': arrowSize + 'px',
    'width': arrowSize + 'px',
    'transform': 'translate(' + this.arrowX_ + ',' + this.arrowY_ + ')'
  }, this.fieldGroup_);
  this.arrowIcon_.setAttributeNS('http://www.w3.org/1999/xlink',
    'xlink:href', Blockly.mainWorkspace.options.pathToMedia + 'dropdown-arrow.svg');
 
  this.mouseDownWrapper_ = Blockly.bindEventWithChecks_(
    this.getClickTarget_(), 'mousedown', this, this.onMouseDown_);
};
 
/**
 * 鼠标放置样式
 */
Blockly.FieldIconDropDown.prototype.CURSOR = 'default';
 
/**
 * 设置值
 */
Blockly.FieldIconDropDown.prototype.setValue = function (newValue) {
  if (newValue === null || newValue === this.value_) {
    return;  // No change
  }
  if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.Change(
      this.sourceBlock_, 'field', this.name, this.value_, newValue));
  }
  this.value_ = newValue;
  this.setParentFieldImage(this.getSrcForValue(this.value_));
};
 
/**
 * 设置当前选择图片
 */
Blockly.FieldIconDropDown.prototype.setParentFieldImage = function (src) {
  if (this.imageElement_ && src) {
    this.imageElement_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src || '');
  }
};
 
/**
 * 获取值
 */
Blockly.FieldIconDropDown.prototype.getValue = function () {
  return this.value_;
};
 
/**
 * 根据src获取值
 * @param value
 * @returns {*}
 */
Blockly.FieldIconDropDown.prototype.getSrcForValue = function (value) {
  for (var i = 0, icon; icon = this.icons_[i]; i++) {
    if (icon.value === value) {
      return icon.src;
    }
  }
};
 
/**
 * 下拉选择
 */
Blockly.FieldIconDropDown.prototype.showEditor_ = function () {
  if (Blockly.DropDownDiv.hideIfOwner(this)) {
    return;
  }
  Blockly.DropDownDiv.hideWithoutAnimation();
  Blockly.DropDownDiv.clearContent();
  // 构建下拉内容
  const contentDiv = Blockly.DropDownDiv.getContentDiv();
  // Accessibility properties
  contentDiv.setAttribute('role', 'menu');
  contentDiv.setAttribute('aria-haspopup', 'true');
  for (let i = 0, icon; icon = this.icons_[i]; i++) {
 
    // 按钮
    const button = document.createElement('button');
    button.setAttribute('id', ':' + i);
    button.setAttribute('role', 'menuitem');
    button.setAttribute('class', 'blocklyDropDownButton');
    button.title = icon.alt;
    button.style.width = icon.width + 'px';
    button.style.height = icon.height + 'px';
    let backgroundColor = this.sourceBlock_.getColour();
    if (icon.value === this.getValue()) {
      backgroundColor = this.sourceBlock_.getColourTertiary();
      button.setAttribute('aria-selected', 'true');
    }
    button.style.backgroundColor = backgroundColor;
    button.style.borderColor = this.sourceBlock_.getColourTertiary();
 
    // 事件
    Blockly.bindEvent_(button, 'click', this, this.buttonClick_);
    Blockly.bindEvent_(button, 'mouseup', this, this.buttonClick_);
    Blockly.bindEvent_(button, 'mousedown', button, function (e) {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
      e.preventDefault();
    });
    Blockly.bindEvent_(button, 'mouseover', button, function () {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
      contentDiv.setAttribute('aria-activedescendant', this.id);
    });
    Blockly.bindEvent_(button, 'mouseout', button, function () {
      this.setAttribute('class', 'blocklyDropDownButton');
      contentDiv.removeAttribute('aria-activedescendant');
    });
 
    // 图标
    const buttonImg = document.createElement('img');
    buttonImg.src = icon.src;
    button.setAttribute('data-value', icon.value);
    buttonImg.setAttribute('data-value', icon.value);
    button.appendChild(buttonImg);
    contentDiv.appendChild(button);
  }
  contentDiv.style.width = Blockly.FieldIconDropDown.DROPDOWN_WIDTH + 'px';
 
  // 设置颜色
  Blockly.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.getColourTertiary());
  Blockly.DropDownDiv.setCategory(this.sourceBlock_.parentBlock_.getCategory());
  this.savedPrimary_ = this.sourceBlock_.getColour();
  this.sourceBlock_.setColour(this.sourceBlock_.getColourSecondary(),
    this.sourceBlock_.getColourSecondary(),
    this.sourceBlock_.getColourTertiary());
 
  const scale = this.sourceBlock_.workspace.scale;
  const secondaryYOffset = (
    -(Blockly.BlockSvg.MIN_BLOCK_Y * scale) - (Blockly.BlockSvg.FIELD_Y_OFFSET * scale)
  );
  const renderedPrimary = Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_, this.onHide_.bind(this), secondaryYOffset);
  if (!renderedPrimary) {
    const arrowX = this.arrowX_ + Blockly.DropDownDiv.ARROW_SIZE / 1.5 + 1;
    const arrowY = this.arrowY_ + Blockly.DropDownDiv.ARROW_SIZE / 1.5;
    this.arrowIcon_.setAttribute('transform', 'translate(' + arrowX + ',' + arrowY + ') rotate(180)');
  }
};
 
/**
 * 点击按钮
 */
Blockly.FieldIconDropDown.prototype.buttonClick_ = function (e) {
  const value = e.target.getAttribute('data-value');
  this.setValue(value);
  Blockly.DropDownDiv.hide();
};
 
/**
 * 关闭下拉面板时回掉
 */
Blockly.FieldIconDropDown.prototype.onHide_ = function () {
  if (this.sourceBlock_) {
    this.sourceBlock_.setColour(this.savedPrimary_,
      this.sourceBlock_.getColourSecondary(),
      this.sourceBlock_.getColourTertiary());
  }
  Blockly.DropDownDiv.content_.removeAttribute('role');
  Blockly.DropDownDiv.content_.removeAttribute('aria-haspopup');
  Blockly.DropDownDiv.content_.removeAttribute('aria-activedescendant');
  this.arrowIcon_.setAttribute('transform', 'translate(' + this.arrowX_ + ',' + this.arrowY_ + ')');
};
 
Blockly.Field.register('field_icon_dropdown', Blockly.FieldIconDropDown);