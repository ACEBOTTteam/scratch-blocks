"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
goog.provide('Svg');
goog.require('SvgParser');
function formatNumber(v, d) {
  var minify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var result = v.toFixed(d).replace(/^(-?[0-9]*\.([0-9]*[1-9])?)0*$/, '$1').replace(/\.$/, '');
  if (minify) {
    result = result.replace(/^(-?)0\./, '$1.');
  }
  return result;
}
var Point = /*#__PURE__*/_createClass(function Point(x, y) {
  _classCallCheck(this, Point);
});
var SvgPoint = /*#__PURE__*/function (_Point) {
  _inherits(SvgPoint, _Point);
  function SvgPoint(x, y) {
    var _this;
    var movable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    _classCallCheck(this, SvgPoint);
    _this = _callSuper(this, SvgPoint, [x, y]);
    _defineProperty(_assertThisInitialized(_this), "itemReference", new DummySvgItem());
    _defineProperty(_assertThisInitialized(_this), "movable", true);
    _this.movable = movable;
    return _this;
  }
  return _createClass(SvgPoint);
}(Point);
var SvgControlPoint = /*#__PURE__*/function (_SvgPoint) {
  _inherits(SvgControlPoint, _SvgPoint);
  function SvgControlPoint(point, relations) {
    var _this2;
    var movable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    _classCallCheck(this, SvgControlPoint);
    _this2 = _callSuper(this, SvgControlPoint, [point.x, point.y, movable]);
    _defineProperty(_assertThisInitialized(_this2), "subIndex", 0);
    return _this2;
  }
  return _createClass(SvgControlPoint);
}(SvgPoint);
var SvgItem = /*#__PURE__*/function () {
  function SvgItem(values, relative) {
    _classCallCheck(this, SvgItem);
    _defineProperty(this, "relative", void 0);
    _defineProperty(this, "values", void 0);
    _defineProperty(this, "previousPoint", new Point(0, 0));
    _defineProperty(this, "absolutePoints", []);
    _defineProperty(this, "absoluteControlPoints", []);
    this.values = values;
    this.relative = relative;
  }
  _createClass(SvgItem, [{
    key: "refreshAbsolutePoints",
    value: function refreshAbsolutePoints(origin, previous) {
      this.previousPoint = previous ? previous.targetLocation() : new Point(0, 0);
      this.absolutePoints = [];
      var current = previous ? previous.targetLocation() : new Point(0, 0);
      if (!this.relative) {
        current = new Point(0, 0);
      }
      for (var i = 0; i < this.values.length - 1; i += 2) {
        this.absolutePoints.push(new SvgPoint(current.x + this.values[i], current.y + this.values[i + 1]));
      }
    }
  }, {
    key: "setRelative",
    value: function setRelative(newRelative) {
      if (this.relative !== newRelative) {
        this.relative = false;
        if (newRelative) {
          this.translate(-this.previousPoint.x, -this.previousPoint.y);
          this.relative = true;
        } else {
          this.translate(this.previousPoint.x, this.previousPoint.y);
        }
      }
    }
  }, {
    key: "refreshAbsoluteControlPoints",
    value: function refreshAbsoluteControlPoints(origin, previous) {
      this.absoluteControlPoints = [];
    }
  }, {
    key: "resetControlPoints",
    value: function resetControlPoints(previousTarget) {
      // Does nothing by default
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var _this3 = this;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.relative || force) {
        this.values.forEach(function (val, idx) {
          _this3.values[idx] = val + (idx % 2 === 0 ? x : y);
        });
      }
    }
  }, {
    key: "scale",
    value: function scale(kx, ky) {
      var _this4 = this;
      this.values.forEach(function (val, idx) {
        _this4.values[idx] = val * (idx % 2 === 0 ? kx : ky);
      });
    }
  }, {
    key: "rotate",
    value: function rotate(ox, oy, degrees) {
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var rad = degrees * Math.PI / 180;
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);
      for (var i = 0; i < this.values.length; i += 2) {
        var px = this.values[i];
        var py = this.values[i + 1];
        var x = this.relative && !force ? 0 : ox;
        var y = this.relative && !force ? 0 : oy;
        var qx = x + (px - x) * cos - (py - y) * sin;
        var qy = y + (px - x) * sin + (py - y) * cos;
        this.values[i] = qx;
        this.values[i + 1] = qy;
      }
    }
  }, {
    key: "targetLocation",
    value: function targetLocation() {
      var l = this.absolutePoints.length;
      return this.absolutePoints[l - 1];
    }
  }, {
    key: "setTargetLocation",
    value: function setTargetLocation(pts) {
      var loc = this.targetLocation();
      var dx = pts.x - loc.x;
      var dy = pts.y - loc.y;
      var l = this.values.length;
      this.values[l - 2] += dx;
      this.values[l - 1] += dy;
    }
  }, {
    key: "setControlLocation",
    value: function setControlLocation(idx, pts) {
      var loc = this.absolutePoints[idx];
      var dx = pts.x - loc.x;
      var dy = pts.y - loc.y;
      this.values[2 * idx] += dx;
      this.values[2 * idx + 1] += dy;
    }
  }, {
    key: "controlLocations",
    value: function controlLocations() {
      return this.absoluteControlPoints;
    }
  }, {
    key: "getType",
    value: function getType() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var typeKey = this.constructor.key;
      if (this.relative) {
        typeKey = typeKey.toLowerCase();
      }
      return typeKey;
    }
  }, {
    key: "asStandaloneString",
    value: function asStandaloneString() {
      return ['M', this.previousPoint.x, this.previousPoint.y, this.getType()].concat(_toConsumableArray(this.values)).join(' ');
    }
  }, {
    key: "asString",
    value: function asString() {
      var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var minify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var trailingItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var strValues = [this.values].concat(_toConsumableArray(trailingItems.map(function (it) {
        return it.values;
      }))).reduce(function (acc, val) {
        return acc.concat(val);
      }, []).map(function (it) {
        return formatNumber(it, decimals, minify);
      });
      return [this.getType()].concat(_toConsumableArray(strValues)).join(' ');
    }
  }], [{
    key: "Make",
    value: function Make(rawItem) {
      var result = undefined;
      var relative = rawItem[0].toUpperCase() !== rawItem[0];
      var values = rawItem.slice(1).map(function (it) {
        return parseFloat(it);
      });
      switch (rawItem[0].toUpperCase()) {
        case MoveTo.key:
          result = new MoveTo(values, relative);
          break;
        case LineTo.key:
          result = new LineTo(values, relative);
          break;
        case HorizontalLineTo.key:
          result = new HorizontalLineTo(values, relative);
          break;
        case VerticalLineTo.key:
          result = new VerticalLineTo(values, relative);
          break;
        case ClosePath.key:
          result = new ClosePath(values, relative);
          break;
        case CurveTo.key:
          result = new CurveTo(values, relative);
          break;
        case SmoothCurveTo.key:
          result = new SmoothCurveTo(values, relative);
          break;
        case QuadraticBezierCurveTo.key:
          result = new QuadraticBezierCurveTo(values, relative);
          break;
        case SmoothQuadraticBezierCurveTo.key:
          result = new SmoothQuadraticBezierCurveTo(values, relative);
          break;
        case EllipticalArcTo.key:
          result = new EllipticalArcTo(values, relative);
          break;
      }
      if (!result) {
        throw 'Invalid SVG item';
      }
      return result;
    }
  }, {
    key: "MakeFrom",
    value: function MakeFrom(origin, previous, newType) {
      var target = origin.targetLocation();
      var x = target.x.toString();
      var y = target.y.toString();
      var values = [];
      var absoluteType = newType.toUpperCase();
      switch (absoluteType) {
        case MoveTo.key:
          values = [MoveTo.key, x, y];
          break;
        case LineTo.key:
          values = [LineTo.key, x, y];
          break;
        case HorizontalLineTo.key:
          values = [HorizontalLineTo.key, x];
          break;
        case VerticalLineTo.key:
          values = [VerticalLineTo.key, y];
          break;
        case ClosePath.key:
          values = [ClosePath.key];
          break;
        case CurveTo.key:
          values = [CurveTo.key, '0', '0', '0', '0', x, y];
          break;
        case SmoothCurveTo.key:
          values = [SmoothCurveTo.key, '0', '0', x, y];
          break;
        case QuadraticBezierCurveTo.key:
          values = [QuadraticBezierCurveTo.key, '0', '0', x, y];
          break;
        case SmoothQuadraticBezierCurveTo.key:
          values = [SmoothQuadraticBezierCurveTo.key, x, y];
          break;
        case EllipticalArcTo.key:
          values = [EllipticalArcTo.key, '1', '1', '0', '0', '0', x, y];
          break;
      }
      var result = SvgItem.Make(values);
      var controlPoints = origin.absoluteControlPoints;
      result.previousPoint = previous.targetLocation();
      result.absolutePoints = [target];
      result.resetControlPoints(previous);
      if ((origin instanceof CurveTo || origin instanceof SmoothCurveTo) && (result instanceof CurveTo || result instanceof SmoothCurveTo)) {
        if (result instanceof CurveTo) {
          result.values[0] = controlPoints[0].x;
          result.values[1] = controlPoints[0].y;
          result.values[2] = controlPoints[1].x;
          result.values[3] = controlPoints[1].y;
        }
        if (result instanceof SmoothCurveTo) {
          result.values[0] = controlPoints[1].x;
          result.values[1] = controlPoints[1].y;
        }
      }
      if ((origin instanceof QuadraticBezierCurveTo || origin instanceof SmoothQuadraticBezierCurveTo) && result instanceof QuadraticBezierCurveTo) {
        result.values[0] = controlPoints[0].x;
        result.values[1] = controlPoints[0].y;
      }
      if (newType !== absoluteType) {
        result.setRelative(true);
      }
      return result;
    }
  }]);
  return SvgItem;
}();
var DummySvgItem = /*#__PURE__*/function (_SvgItem) {
  _inherits(DummySvgItem, _SvgItem);
  function DummySvgItem() {
    _classCallCheck(this, DummySvgItem);
    return _callSuper(this, DummySvgItem, [[], false]);
  }
  return _createClass(DummySvgItem);
}(SvgItem);
var MoveTo = /*#__PURE__*/function (_SvgItem2) {
  _inherits(MoveTo, _SvgItem2);
  function MoveTo() {
    _classCallCheck(this, MoveTo);
    return _callSuper(this, MoveTo, arguments);
  }
  return _createClass(MoveTo);
}(SvgItem);
_defineProperty(MoveTo, "key", 'M');
var LineTo = /*#__PURE__*/function (_SvgItem3) {
  _inherits(LineTo, _SvgItem3);
  function LineTo() {
    _classCallCheck(this, LineTo);
    return _callSuper(this, LineTo, arguments);
  }
  return _createClass(LineTo);
}(SvgItem);
_defineProperty(LineTo, "key", 'L');
var CurveTo = /*#__PURE__*/function (_SvgItem4) {
  _inherits(CurveTo, _SvgItem4);
  function CurveTo() {
    _classCallCheck(this, CurveTo);
    return _callSuper(this, CurveTo, arguments);
  }
  _createClass(CurveTo, [{
    key: "refreshAbsoluteControlPoints",
    value: function refreshAbsoluteControlPoints(origin, previousTarget) {
      if (!previousTarget) {
        throw 'Invalid path';
      }
      this.absoluteControlPoints = [new SvgControlPoint(this.absolutePoints[0], [previousTarget.targetLocation()]), new SvgControlPoint(this.absolutePoints[1], [this.targetLocation()])];
    }
  }, {
    key: "resetControlPoints",
    value: function resetControlPoints(previousTarget) {
      var a = previousTarget.targetLocation();
      var b = this.targetLocation();
      var d = this.relative ? a : new Point(0, 0);
      this.values[0] = 2 * a.x / 3 + b.x / 3 - d.x;
      this.values[1] = 2 * a.y / 3 + b.y / 3 - d.y;
      this.values[2] = a.x / 3 + 2 * b.x / 3 - d.x;
      this.values[3] = a.y / 3 + 2 * b.y / 3 - d.y;
    }
  }]);
  return CurveTo;
}(SvgItem);
_defineProperty(CurveTo, "key", 'C');
var SmoothCurveTo = /*#__PURE__*/function (_SvgItem5) {
  _inherits(SmoothCurveTo, _SvgItem5);
  function SmoothCurveTo() {
    _classCallCheck(this, SmoothCurveTo);
    return _callSuper(this, SmoothCurveTo, arguments);
  }
  _createClass(SmoothCurveTo, [{
    key: "refreshAbsoluteControlPoints",
    value: function refreshAbsoluteControlPoints(origin, previousTarget) {
      this.absoluteControlPoints = [];
      if (previousTarget instanceof CurveTo || previousTarget instanceof SmoothCurveTo) {
        var prevLoc = previousTarget.targetLocation();
        var prevControl = previousTarget.absoluteControlPoints[1];
        var pts = new Point(2 * prevLoc.x - prevControl.x, 2 * prevLoc.y - prevControl.y);
        this.absoluteControlPoints.push(new SvgControlPoint(pts, [prevLoc], false));
      } else {
        var current = previousTarget ? previousTarget.targetLocation() : new Point(0, 0);
        var _pts = new Point(current.x, current.y);
        this.absoluteControlPoints.push(new SvgControlPoint(_pts, [], false));
      }
      this.absoluteControlPoints.push(new SvgControlPoint(this.absolutePoints[0], [this.targetLocation()]));
    }
  }, {
    key: "asStandaloneString",
    value: function asStandaloneString() {
      return ['M', this.previousPoint.x, this.previousPoint.y, 'C', this.absoluteControlPoints[0].x, this.absoluteControlPoints[0].y, this.absoluteControlPoints[1].x, this.absoluteControlPoints[1].y, this.absolutePoints[1].x, this.absolutePoints[1].y].join(' ');
    }
  }, {
    key: "resetControlPoints",
    value: function resetControlPoints(previousTarget) {
      var a = previousTarget.targetLocation();
      var b = this.targetLocation();
      var d = this.relative ? a : new Point(0, 0);
      this.values[0] = a.x / 3 + 2 * b.x / 3 - d.x;
      this.values[1] = a.y / 3 + 2 * b.y / 3 - d.y;
    }
  }, {
    key: "setControlLocation",
    value: function setControlLocation(idx, pts) {
      var loc = this.absoluteControlPoints[1];
      var dx = pts.x - loc.x;
      var dy = pts.y - loc.y;
      this.values[0] += dx;
      this.values[1] += dy;
    }
  }]);
  return SmoothCurveTo;
}(SvgItem);
_defineProperty(SmoothCurveTo, "key", 'S');
var QuadraticBezierCurveTo = /*#__PURE__*/function (_SvgItem6) {
  _inherits(QuadraticBezierCurveTo, _SvgItem6);
  function QuadraticBezierCurveTo() {
    _classCallCheck(this, QuadraticBezierCurveTo);
    return _callSuper(this, QuadraticBezierCurveTo, arguments);
  }
  _createClass(QuadraticBezierCurveTo, [{
    key: "refreshAbsoluteControlPoints",
    value: function refreshAbsoluteControlPoints(origin, previousTarget) {
      if (!previousTarget) {
        throw 'Invalid path';
      }
      this.absoluteControlPoints = [new SvgControlPoint(this.absolutePoints[0], [previousTarget.targetLocation(), this.targetLocation()])];
    }
  }, {
    key: "resetControlPoints",
    value: function resetControlPoints(previousTarget) {
      var a = previousTarget.targetLocation();
      var b = this.targetLocation();
      var d = this.relative ? a : new Point(0, 0);
      this.values[0] = a.x / 2 + b.x / 2 - d.x;
      this.values[1] = a.y / 2 + b.y / 2 - d.y;
    }
  }]);
  return QuadraticBezierCurveTo;
}(SvgItem);
_defineProperty(QuadraticBezierCurveTo, "key", 'Q');
var SmoothQuadraticBezierCurveTo = /*#__PURE__*/function (_SvgItem7) {
  _inherits(SmoothQuadraticBezierCurveTo, _SvgItem7);
  function SmoothQuadraticBezierCurveTo() {
    _classCallCheck(this, SmoothQuadraticBezierCurveTo);
    return _callSuper(this, SmoothQuadraticBezierCurveTo, arguments);
  }
  _createClass(SmoothQuadraticBezierCurveTo, [{
    key: "refreshAbsoluteControlPoints",
    value: function refreshAbsoluteControlPoints(origin, previousTarget) {
      if (!(previousTarget instanceof QuadraticBezierCurveTo || previousTarget instanceof SmoothQuadraticBezierCurveTo)) {
        var previous = previousTarget ? previousTarget.targetLocation() : new Point(0, 0);
        var pts = new Point(previous.x, previous.y);
        this.absoluteControlPoints = [new SvgControlPoint(pts, [], false)];
      } else {
        var prevLoc = previousTarget.targetLocation();
        var prevControl = previousTarget.absoluteControlPoints[0];
        var _pts2 = new Point(2 * prevLoc.x - prevControl.x, 2 * prevLoc.y - prevControl.y);
        this.absoluteControlPoints = [new SvgControlPoint(_pts2, [prevLoc, this.targetLocation()], false)];
      }
    }
  }, {
    key: "asStandaloneString",
    value: function asStandaloneString() {
      return ['M', this.previousPoint.x, this.previousPoint.y, 'Q', this.absoluteControlPoints[0].x, this.absoluteControlPoints[0].y, this.absolutePoints[0].x, this.absolutePoints[0].y].join(' ');
    }
  }]);
  return SmoothQuadraticBezierCurveTo;
}(SvgItem);
_defineProperty(SmoothQuadraticBezierCurveTo, "key", 'T');
var ClosePath = /*#__PURE__*/function (_SvgItem8) {
  _inherits(ClosePath, _SvgItem8);
  function ClosePath() {
    _classCallCheck(this, ClosePath);
    return _callSuper(this, ClosePath, arguments);
  }
  _createClass(ClosePath, [{
    key: "refreshAbsolutePoints",
    value: function refreshAbsolutePoints(origin, previous) {
      this.previousPoint = previous ? previous.targetLocation() : new Point(0, 0);
      this.absolutePoints = [new SvgPoint(origin.x, origin.y, false)];
    }
  }]);
  return ClosePath;
}(SvgItem);
_defineProperty(ClosePath, "key", 'Z');
var HorizontalLineTo = /*#__PURE__*/function (_SvgItem9) {
  _inherits(HorizontalLineTo, _SvgItem9);
  function HorizontalLineTo() {
    _classCallCheck(this, HorizontalLineTo);
    return _callSuper(this, HorizontalLineTo, arguments);
  }
  _createClass(HorizontalLineTo, [{
    key: "rotate",
    value: function rotate(ox, oy, angle) {
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (angle == 180) {
        this.values[0] = -this.values[0];
      }
    }
  }, {
    key: "refreshAbsolutePoints",
    value: function refreshAbsolutePoints(origin, previous) {
      this.previousPoint = previous ? previous.targetLocation() : new Point(0, 0);
      if (this.relative) {
        this.absolutePoints = [new SvgPoint(this.values[0] + this.previousPoint.x, this.previousPoint.y)];
      } else {
        this.absolutePoints = [new SvgPoint(this.values[0], this.previousPoint.y)];
      }
    }
  }, {
    key: "setTargetLocation",
    value: function setTargetLocation(pts) {
      var loc = this.targetLocation();
      var dx = pts.x - loc.x;
      this.values[0] += dx;
    }
  }]);
  return HorizontalLineTo;
}(SvgItem);
_defineProperty(HorizontalLineTo, "key", 'H');
var VerticalLineTo = /*#__PURE__*/function (_SvgItem10) {
  _inherits(VerticalLineTo, _SvgItem10);
  function VerticalLineTo() {
    _classCallCheck(this, VerticalLineTo);
    return _callSuper(this, VerticalLineTo, arguments);
  }
  _createClass(VerticalLineTo, [{
    key: "rotate",
    value: function rotate(ox, oy, angle) {
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (angle == 180) {
        this.values[0] = -this.values[0];
      }
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.relative) {
        this.values[0] += y;
      }
    }
  }, {
    key: "scale",
    value: function scale(kx, ky) {
      this.values[0] *= ky;
    }
  }, {
    key: "refreshAbsolutePoints",
    value: function refreshAbsolutePoints(origin, previous) {
      this.previousPoint = previous ? previous.targetLocation() : new Point(0, 0);
      if (this.relative) {
        this.absolutePoints = [new SvgPoint(this.previousPoint.x, this.values[0] + this.previousPoint.y)];
      } else {
        this.absolutePoints = [new SvgPoint(this.previousPoint.x, this.values[0])];
      }
    }
  }, {
    key: "setTargetLocation",
    value: function setTargetLocation(pts) {
      var loc = this.targetLocation();
      var dy = pts.y - loc.y;
      this.values[0] += dy;
    }
  }]);
  return VerticalLineTo;
}(SvgItem);
_defineProperty(VerticalLineTo, "key", 'V');
var EllipticalArcTo = /*#__PURE__*/function (_SvgItem11) {
  _inherits(EllipticalArcTo, _SvgItem11);
  function EllipticalArcTo() {
    _classCallCheck(this, EllipticalArcTo);
    return _callSuper(this, EllipticalArcTo, arguments);
  }
  _createClass(EllipticalArcTo, [{
    key: "translate",
    value: function translate(x, y) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this.relative) {
        this.values[5] += x;
        this.values[6] += y;
      }
    }
  }, {
    key: "rotate",
    value: function rotate(ox, oy, degrees) {
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.values[2] = (this.values[2] + degrees) % 360;
      var rad = degrees * Math.PI / 180;
      var cos = Math.cos(rad);
      var sin = Math.sin(rad);
      var px = this.values[5];
      var py = this.values[6];
      var x = this.relative && !force ? 0 : ox;
      var y = this.relative && !force ? 0 : oy;
      var qx = (px - x) * cos - (py - y) * sin + x;
      var qy = (px - x) * sin + (py - y) * cos + y;
      this.values[5] = qx;
      this.values[6] = qy;
    }
  }, {
    key: "scale",
    value: function scale(kx, ky) {
      var a = this.values[0];
      var b = this.values[1];
      var angle = Math.PI * this.values[2] / 180.0;
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var A = b * b * ky * ky * cos * cos + a * a * ky * ky * sin * sin;
      var B = 2 * kx * ky * cos * sin * (b * b - a * a);
      var C = a * a * kx * kx * cos * cos + b * b * kx * kx * sin * sin;
      var F = -(a * a * b * b * kx * kx * ky * ky);
      var det = B * B - 4 * A * C;
      var val1 = Math.sqrt((A - C) * (A - C) + B * B);

      // New rotation:
      this.values[2] = B !== 0 ? Math.atan((C - A - val1) / B) * 180 / Math.PI : A < C ? 0 : 90;

      // New radius-x, radius-y
      if (det !== 0) {
        this.values[0] = -Math.sqrt(2 * det * F * (A + C + val1)) / det;
        this.values[1] = -Math.sqrt(2 * det * F * (A + C - val1)) / det;
      }

      // New target
      this.values[5] *= kx;
      this.values[6] *= ky;

      // New sweep flag
      this.values[4] = kx * ky >= 0 ? this.values[4] : 1 - this.values[4];
    }
  }, {
    key: "refreshAbsolutePoints",
    value: function refreshAbsolutePoints(origin, previous) {
      this.previousPoint = previous ? previous.targetLocation() : new Point(0, 0);
      if (this.relative) {
        this.absolutePoints = [new SvgPoint(this.values[5] + this.previousPoint.x, this.values[6] + this.previousPoint.y)];
      } else {
        this.absolutePoints = [new SvgPoint(this.values[5], this.values[6])];
      }
    }
  }, {
    key: "asString",
    value: function asString() {
      var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var minify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var trailingItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (!minify) {
        return _get(_getPrototypeOf(EllipticalArcTo.prototype), "asString", this).call(this, decimals, minify, trailingItems);
      } else {
        var strValues = [this.values].concat(_toConsumableArray(trailingItems.map(function (it) {
          return it.values;
        }))).map(function (it) {
          return it.map(function (it2) {
            return formatNumber(it2, decimals, minify);
          });
        }).map(function (v) {
          return "".concat(v[0], " ").concat(v[1], " ").concat(v[2], " ").concat(v[3]).concat(v[4]).concat(v[5], " ").concat(v[6]);
        });
        return [this.getType()].concat(_toConsumableArray(strValues)).join(' ');
      }
    }
  }]);
  return EllipticalArcTo;
}(SvgItem);
_defineProperty(EllipticalArcTo, "key", 'A');
Svg = /*#__PURE__*/function () {
  function Svg(path) {
    _classCallCheck(this, Svg);
    _defineProperty(this, "path", []);
    var rawPath = SvgParser.parse(path);
    this.path = rawPath.map(function (it) {
      return SvgItem.Make(it);
    });
    this.refreshAbsolutePositions();
  }
  _createClass(Svg, [{
    key: "translate",
    value: function translate(dx, dy) {
      this.path.forEach(function (it, idx) {
        it.translate(dx, dy, idx === 0);
      });
      this.refreshAbsolutePositions();
      return this;
    }
  }, {
    key: "scale",
    value: function scale(kx, ky) {
      this.path.forEach(function (it) {
        it.scale(kx, ky);
      });
      this.refreshAbsolutePositions();
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(ox, oy, degrees) {
      var _this5 = this;
      degrees %= 360;
      if (degrees == 0) {
        return this;
      }
      this.path.forEach(function (it, idx) {
        var lastInstanceOf = it.constructor;
        if (degrees !== 180) {
          if (it instanceof HorizontalLineTo || it instanceof VerticalLineTo) {
            var newType = it.relative ? LineTo.key.toLowerCase() : LineTo.key;
            it = _this5.changeType(it, newType) || it;
          }
        }
        it.rotate(ox, oy, degrees, idx === 0);
        if (degrees === 90 || degrees === 270) {
          if (lastInstanceOf === HorizontalLineTo) {
            _this5.refreshAbsolutePositions();
            var _newType = it.relative ? VerticalLineTo.key.toLowerCase() : VerticalLineTo.key;
            _this5.changeType(it, _newType);
          } else if (lastInstanceOf === VerticalLineTo) {
            _this5.refreshAbsolutePositions();
            var _newType2 = it.relative ? HorizontalLineTo.key.toLowerCase() : HorizontalLineTo.key;
            _this5.changeType(it, _newType2);
          }
        }
      });
      this.refreshAbsolutePositions();
      return this;
    }
  }, {
    key: "setRelative",
    value: function setRelative(newRelative) {
      this.path.forEach(function (it) {
        it.setRelative(newRelative);
      });
      this.refreshAbsolutePositions();
      return this;
    }
  }, {
    key: "delete",
    value: function _delete(item) {
      var idx = this.path.indexOf(item);
      if (idx !== -1) {
        this.path.splice(idx, 1);
        this.refreshAbsolutePositions();
      }
      return this;
    }
  }, {
    key: "insert",
    value: function insert(item, after) {
      var idx = after ? this.path.indexOf(after) : -1;
      if (idx !== -1) {
        this.path.splice(idx + 1, 0, item);
      } else {
        this.path.push(item);
      }
      this.refreshAbsolutePositions();
    }
  }, {
    key: "changeType",
    value: function changeType(item, newType) {
      var idx = this.path.indexOf(item);
      if (idx > 0) {
        var previous = this.path[idx - 1];
        this.path[idx] = SvgItem.MakeFrom(item, previous, newType);
        this.refreshAbsolutePositions();
        return this.path[idx];
      }
      return null;
    }
  }, {
    key: "asString",
    value: function asString() {
      var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var minify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.path.reduce(function (acc, it) {
        // Group together the items that can be merged (M 0 0 L 1 1 => M 0 0 1 1)
        var type = it.getType();
        if (minify && acc.length > 0) {
          var last = acc[acc.length - 1];
          if (last.type === type) {
            last.trailing.push(it);
            return acc;
          }
        }
        acc.push({
          type: type === 'm' ? 'l' : type === 'M' ? 'L' : type,
          item: it,
          trailing: []
        });
        return acc;
      }, []).map(function (it) {
        var str = it.item.asString(decimals, minify, it.trailing);
        if (minify) {
          return str.replace(/^([a-z]) /i, '$1').replace(/ -/g, '-').replace(/(\.[0-9]+) (?=\.)/g, '$1');
        } else {
          return str;
        }
      }).join(minify ? '' : ' ');
    }
  }, {
    key: "targetLocations",
    value: function targetLocations() {
      return this.path.map(function (it) {
        return it.targetLocation();
      });
    }
  }, {
    key: "controlLocations",
    value: function controlLocations() {
      var result = [];
      for (var i = 1; i < this.path.length; ++i) {
        var controls = this.path[i].controlLocations();
        controls.forEach(function (it, idx) {
          it.subIndex = idx;
        });
        result = [].concat(_toConsumableArray(result), _toConsumableArray(controls));
      }
      return result;
    }
  }, {
    key: "setLocation",
    value: function setLocation(ptReference, to) {
      if (ptReference instanceof SvgControlPoint) {
        ptReference.itemReference.setControlLocation(ptReference.subIndex, to);
      } else {
        ptReference.itemReference.setTargetLocation(to);
      }
      this.refreshAbsolutePositions();
    }
  }, {
    key: "refreshAbsolutePositions",
    value: function refreshAbsolutePositions() {
      var previous = null;
      var origin = new Point(0, 0);
      var _iterator = _createForOfIteratorHelper(this.path),
        _step;
      try {
        var _loop = function _loop() {
          var item = _step.value;
          item.refreshAbsolutePoints(origin, previous);
          item.refreshAbsoluteControlPoints(origin, previous);
          item.absolutePoints.forEach(function (it) {
            return it.itemReference = item;
          });
          item.absoluteControlPoints.forEach(function (it) {
            return it.itemReference = item;
          });
          if (item instanceof MoveTo || item instanceof ClosePath) {
            origin = item.targetLocation();
          }
          previous = item;
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return Svg;
}();
