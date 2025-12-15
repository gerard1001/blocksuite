(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2[ErrorCode2["DefaultRuntimeError"] = 1] = "DefaultRuntimeError";
    ErrorCode2[ErrorCode2["ValueNotExists"] = 2] = "ValueNotExists";
    ErrorCode2[ErrorCode2["ValueNotInstanceOf"] = 3] = "ValueNotInstanceOf";
    ErrorCode2[ErrorCode2["ValueNotEqual"] = 4] = "ValueNotEqual";
    ErrorCode2[ErrorCode2["MigrationError"] = 5] = "MigrationError";
    ErrorCode2[ErrorCode2["SchemaValidateError"] = 6] = "SchemaValidateError";
    ErrorCode2[ErrorCode2["DefaultFatalError"] = 1e4] = "DefaultFatalError";
  })(ErrorCode || (ErrorCode = {}));
  class BlockSuiteError extends Error {
    constructor(code, message) {
      super(message);
      this.name = "BlockSuiteError";
      this.code = code;
      this.isFatal = code >= 1e4;
    }
  }
  function isPrimitive(a2) {
    return a2 !== Object(a2);
  }
  function assertExists(val, message = "val does not exist") {
    if (val === null || val === void 0) {
      if (message instanceof Error) {
        throw message;
      }
      throw new BlockSuiteError(ErrorCode.ValueNotExists, message);
    }
  }
  function isEqual(val, expected) {
    const a2 = isPrimitive(val);
    const b2 = isPrimitive(expected);
    if (a2 && b2) {
      if (!Object.is(val, expected)) {
        return false;
      }
    } else if (a2 !== b2) {
      return false;
    } else {
      if (Array.isArray(val) && Array.isArray(expected)) {
        if (val.length !== expected.length) {
          return false;
        }
        return val.every((x2, i2) => isEqual(x2, expected[i2]));
      } else if (typeof val === "object" && typeof expected === "object") {
        const obj1 = Object.entries(val);
        const obj2 = Object.entries(expected);
        if (obj1.length !== obj2.length) {
          return false;
        }
        return obj1.every((x2, i2) => isEqual(x2, obj2[i2]));
      }
    }
    return true;
  }
  function assertEquals(val, expected, message = "val is not same as expected") {
    if (!isEqual(val, expected)) {
      throw new BlockSuiteError(ErrorCode.ValueNotEqual, message);
    }
  }
  const create$5 = () => /* @__PURE__ */ new Set();
  const last = (arr) => arr[arr.length - 1];
  const appendTo = (dest, src2) => {
    for (let i2 = 0; i2 < src2.length; i2++) {
      dest.push(src2[i2]);
    }
  };
  const from = Array.from;
  const some = (arr, f2) => {
    for (let i2 = 0; i2 < arr.length; i2++) {
      if (f2(arr[i2], i2, arr)) {
        return true;
      }
    }
    return false;
  };
  const unfold = (len, f2) => {
    const array = new Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      array[i2] = f2(i2, array);
    }
    return array;
  };
  const isArray = Array.isArray;
  const fromCharCode = String.fromCharCode;
  const toLowerCase = (s2) => s2.toLowerCase();
  const trimLeftRegex = /^\s*/g;
  const trimLeft = (s2) => s2.replace(trimLeftRegex, "");
  const fromCamelCaseRegex = /([A-Z])/g;
  const fromCamelCase = (s2, separator) => trimLeft(s2.replace(fromCamelCaseRegex, (match2) => `${separator}${toLowerCase(match2)}`));
  const _encodeUtf8Polyfill = (str) => {
    const encodedString = unescape(encodeURIComponent(str));
    const len = encodedString.length;
    const buf = new Uint8Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      buf[i2] = /** @type {number} */
      encodedString.codePointAt(i2);
    }
    return buf;
  };
  const utf8TextEncoder = (
    /** @type {TextEncoder} */
    typeof TextEncoder !== "undefined" ? new TextEncoder() : null
  );
  const _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
  const encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
  let utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
  if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
    utf8TextDecoder = null;
  }
  const repeat = (source, n2) => unfold(n2, () => source).join("");
  const create$4 = () => /* @__PURE__ */ new Map();
  const copy = (m2) => {
    const r2 = create$4();
    m2.forEach((v2, k2) => {
      r2.set(k2, v2);
    });
    return r2;
  };
  const setIfUndefined = (map2, key, createT) => {
    let set = map2.get(key);
    if (set === void 0) {
      map2.set(key, set = createT());
    }
    return set;
  };
  const map = (m2, f2) => {
    const res = [];
    for (const [key, value] of m2) {
      res.push(f2(value, key));
    }
    return res;
  };
  const any = (m2, f2) => {
    for (const [key, value] of m2) {
      if (f2(value, key)) {
        return true;
      }
    }
    return false;
  };
  const undefinedToNull = (v2) => v2 === void 0 ? null : v2;
  class VarStoragePolyfill {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    /**
     * @param {string} key
     * @param {any} newValue
     */
    setItem(key, newValue) {
      this.map.set(key, newValue);
    }
    /**
     * @param {string} key
     */
    getItem(key) {
      return this.map.get(key);
    }
  }
  let _localStorage = new VarStoragePolyfill();
  let usePolyfill = true;
  try {
    if (typeof localStorage !== "undefined" && localStorage) {
      _localStorage = localStorage;
      usePolyfill = false;
    }
  } catch (e2) {
  }
  const varStorage = _localStorage;
  const assign = Object.assign;
  const keys = Object.keys;
  const forEach = (obj, f2) => {
    for (const key in obj) {
      f2(obj[key], key);
    }
  };
  const length$2 = (obj) => keys(obj).length;
  const size = (obj) => keys(obj).length;
  const isEmpty = (obj) => {
    for (const _k in obj) {
      return false;
    }
    return true;
  };
  const every = (obj, f2) => {
    for (const key in obj) {
      if (!f2(obj[key], key)) {
        return false;
      }
    }
    return true;
  };
  const hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const equalFlat = (a2, b2) => a2 === b2 || size(a2) === size(b2) && every(a2, (val, key) => (val !== void 0 || hasProperty(b2, key)) && b2[key] === val);
  const freeze = Object.freeze;
  const deepFreeze = (o2) => {
    for (const key in o2) {
      const c2 = o2[key];
      if (typeof c2 === "object" || typeof c2 === "function") {
        deepFreeze(o2[key]);
      }
    }
    return freeze(o2);
  };
  const EqualityTraitSymbol = Symbol("Equality");
  const callAll = (fs, args, i2 = 0) => {
    try {
      for (; i2 < fs.length; i2++) {
        fs[i2](...args);
      }
    } finally {
      if (i2 < fs.length) {
        callAll(fs, args, i2 + 1);
      }
    }
  };
  const id = (a2) => a2;
  const equalityDeep = (a2, b2) => {
    if (a2 === b2) {
      return true;
    }
    if (a2 == null || b2 == null || a2.constructor !== b2.constructor) {
      return false;
    }
    if (a2[EqualityTraitSymbol] != null) {
      return a2[EqualityTraitSymbol](b2);
    }
    switch (a2.constructor) {
      case ArrayBuffer:
        a2 = new Uint8Array(a2);
        b2 = new Uint8Array(b2);
      // eslint-disable-next-line no-fallthrough
      case Uint8Array: {
        if (a2.byteLength !== b2.byteLength) {
          return false;
        }
        for (let i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] !== b2[i2]) {
            return false;
          }
        }
        break;
      }
      case Set: {
        if (a2.size !== b2.size) {
          return false;
        }
        for (const value of a2) {
          if (!b2.has(value)) {
            return false;
          }
        }
        break;
      }
      case Map: {
        if (a2.size !== b2.size) {
          return false;
        }
        for (const key of a2.keys()) {
          if (!b2.has(key) || !equalityDeep(a2.get(key), b2.get(key))) {
            return false;
          }
        }
        break;
      }
      case Object:
        if (length$2(a2) !== length$2(b2)) {
          return false;
        }
        for (const key in a2) {
          if (!hasProperty(a2, key) || !equalityDeep(a2[key], b2[key])) {
            return false;
          }
        }
        break;
      case Array:
        if (a2.length !== b2.length) {
          return false;
        }
        for (let i2 = 0; i2 < a2.length; i2++) {
          if (!equalityDeep(a2[i2], b2[i2])) {
            return false;
          }
        }
        break;
      default:
        return false;
    }
    return true;
  };
  const isOneOf = (value, options) => options.includes(value);
  const isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  const isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && !isNode;
  let params;
  const computeParams = () => {
    if (params === void 0) {
      if (isNode) {
        params = create$4();
        const pargs = process.argv;
        let currParamName = null;
        for (let i2 = 0; i2 < pargs.length; i2++) {
          const parg = pargs[i2];
          if (parg[0] === "-") {
            if (currParamName !== null) {
              params.set(currParamName, "");
            }
            currParamName = parg;
          } else {
            if (currParamName !== null) {
              params.set(currParamName, parg);
              currParamName = null;
            }
          }
        }
        if (currParamName !== null) {
          params.set(currParamName, "");
        }
      } else if (typeof location === "object") {
        params = create$4();
        (location.search || "?").slice(1).split("&").forEach((kv) => {
          if (kv.length !== 0) {
            const [key, value] = kv.split("=");
            params.set(`--${fromCamelCase(key, "-")}`, value);
            params.set(`-${fromCamelCase(key, "-")}`, value);
          }
        });
      } else {
        params = create$4();
      }
    }
    return params;
  };
  const hasParam = (name) => computeParams().has(name);
  const getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
  const hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
  hasConf("production");
  const forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
  const supportsColor = forceColor || !hasParam("--no-colors") && // @todo deprecate --no-colors
  !hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
  const floor = Math.floor;
  const abs = Math.abs;
  const min = (a2, b2) => a2 < b2 ? a2 : b2;
  const max = (a2, b2) => a2 > b2 ? a2 : b2;
  const isNegativeZero = (n2) => n2 !== 0 ? n2 < 0 : 1 / n2 < 0;
  const BIT1 = 1;
  const BIT2 = 2;
  const BIT3 = 4;
  const BIT4 = 8;
  const BIT6 = 32;
  const BIT7 = 64;
  const BIT8 = 128;
  const BIT30 = 1 << 29;
  const BITS5 = 31;
  const BITS6 = 63;
  const BITS7 = 127;
  const BITS31 = 2147483647;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  const isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
  class Encoder {
    constructor() {
      this.cpos = 0;
      this.cbuf = new Uint8Array(100);
      this.bufs = [];
    }
  }
  const createEncoder = () => new Encoder();
  const length$1 = (encoder) => {
    let len = encoder.cpos;
    for (let i2 = 0; i2 < encoder.bufs.length; i2++) {
      len += encoder.bufs[i2].length;
    }
    return len;
  };
  const toUint8Array = (encoder) => {
    const uint8arr = new Uint8Array(length$1(encoder));
    let curPos = 0;
    for (let i2 = 0; i2 < encoder.bufs.length; i2++) {
      const d2 = encoder.bufs[i2];
      uint8arr.set(d2, curPos);
      curPos += d2.length;
    }
    uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
    return uint8arr;
  };
  const verifyLen = (encoder, len) => {
    const bufferLen = encoder.cbuf.length;
    if (bufferLen - encoder.cpos < len) {
      encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
      encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
      encoder.cpos = 0;
    }
  };
  const write = (encoder, num) => {
    const bufferLen = encoder.cbuf.length;
    if (encoder.cpos === bufferLen) {
      encoder.bufs.push(encoder.cbuf);
      encoder.cbuf = new Uint8Array(bufferLen * 2);
      encoder.cpos = 0;
    }
    encoder.cbuf[encoder.cpos++] = num;
  };
  const writeUint8 = write;
  const writeVarUint = (encoder, num) => {
    while (num > BITS7) {
      write(encoder, BIT8 | BITS7 & num);
      num = floor(num / 128);
    }
    write(encoder, BITS7 & num);
  };
  const writeVarInt = (encoder, num) => {
    const isNegative = isNegativeZero(num);
    if (isNegative) {
      num = -num;
    }
    write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
    num = floor(num / 64);
    while (num > 0) {
      write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
      num = floor(num / 128);
    }
  };
  const _strBuffer = new Uint8Array(3e4);
  const _maxStrBSize = _strBuffer.length / 3;
  const _writeVarStringNative = (encoder, str) => {
    if (str.length < _maxStrBSize) {
      const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
      writeVarUint(encoder, written);
      for (let i2 = 0; i2 < written; i2++) {
        write(encoder, _strBuffer[i2]);
      }
    } else {
      writeVarUint8Array(encoder, encodeUtf8(str));
    }
  };
  const _writeVarStringPolyfill = (encoder, str) => {
    const encodedString = unescape(encodeURIComponent(str));
    const len = encodedString.length;
    writeVarUint(encoder, len);
    for (let i2 = 0; i2 < len; i2++) {
      write(
        encoder,
        /** @type {number} */
        encodedString.codePointAt(i2)
      );
    }
  };
  const writeVarString = utf8TextEncoder && /** @type {any} */
  utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
  const writeBinaryEncoder = (encoder, append) => writeUint8Array(encoder, toUint8Array(append));
  const writeUint8Array = (encoder, uint8Array) => {
    const bufferLen = encoder.cbuf.length;
    const cpos = encoder.cpos;
    const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
    const rightCopyLen = uint8Array.length - leftCopyLen;
    encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
    encoder.cpos += leftCopyLen;
    if (rightCopyLen > 0) {
      encoder.bufs.push(encoder.cbuf);
      encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
      encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
      encoder.cpos = rightCopyLen;
    }
  };
  const writeVarUint8Array = (encoder, uint8Array) => {
    writeVarUint(encoder, uint8Array.byteLength);
    writeUint8Array(encoder, uint8Array);
  };
  const writeOnDataView = (encoder, len) => {
    verifyLen(encoder, len);
    const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
    encoder.cpos += len;
    return dview;
  };
  const writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
  const writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
  const writeBigInt64 = (encoder, num) => (
    /** @type {any} */
    writeOnDataView(encoder, 8).setBigInt64(0, num, false)
  );
  const floatTestBed = new DataView(new ArrayBuffer(4));
  const isFloat32 = (num) => {
    floatTestBed.setFloat32(0, num);
    return floatTestBed.getFloat32(0) === num;
  };
  const writeAny = (encoder, data) => {
    switch (typeof data) {
      case "string":
        write(encoder, 119);
        writeVarString(encoder, data);
        break;
      case "number":
        if (isInteger(data) && abs(data) <= BITS31) {
          write(encoder, 125);
          writeVarInt(encoder, data);
        } else if (isFloat32(data)) {
          write(encoder, 124);
          writeFloat32(encoder, data);
        } else {
          write(encoder, 123);
          writeFloat64(encoder, data);
        }
        break;
      case "bigint":
        write(encoder, 122);
        writeBigInt64(encoder, data);
        break;
      case "object":
        if (data === null) {
          write(encoder, 126);
        } else if (isArray(data)) {
          write(encoder, 117);
          writeVarUint(encoder, data.length);
          for (let i2 = 0; i2 < data.length; i2++) {
            writeAny(encoder, data[i2]);
          }
        } else if (data instanceof Uint8Array) {
          write(encoder, 116);
          writeVarUint8Array(encoder, data);
        } else {
          write(encoder, 118);
          const keys2 = Object.keys(data);
          writeVarUint(encoder, keys2.length);
          for (let i2 = 0; i2 < keys2.length; i2++) {
            const key = keys2[i2];
            writeVarString(encoder, key);
            writeAny(encoder, data[key]);
          }
        }
        break;
      case "boolean":
        write(encoder, data ? 120 : 121);
        break;
      default:
        write(encoder, 127);
    }
  };
  class RleEncoder extends Encoder {
    /**
     * @param {function(Encoder, T):void} writer
     */
    constructor(writer) {
      super();
      this.w = writer;
      this.s = null;
      this.count = 0;
    }
    /**
     * @param {T} v
     */
    write(v2) {
      if (this.s === v2) {
        this.count++;
      } else {
        if (this.count > 0) {
          writeVarUint(this, this.count - 1);
        }
        this.count = 1;
        this.w(this, v2);
        this.s = v2;
      }
    }
  }
  const flushUintOptRleEncoder = (encoder) => {
    if (encoder.count > 0) {
      writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
      if (encoder.count > 1) {
        writeVarUint(encoder.encoder, encoder.count - 2);
      }
    }
  };
  class UintOptRleEncoder {
    constructor() {
      this.encoder = new Encoder();
      this.s = 0;
      this.count = 0;
    }
    /**
     * @param {number} v
     */
    write(v2) {
      if (this.s === v2) {
        this.count++;
      } else {
        flushUintOptRleEncoder(this);
        this.count = 1;
        this.s = v2;
      }
    }
    /**
     * Flush the encoded state and transform this to a Uint8Array.
     *
     * Note that this should only be called once.
     */
    toUint8Array() {
      flushUintOptRleEncoder(this);
      return toUint8Array(this.encoder);
    }
  }
  const flushIntDiffOptRleEncoder = (encoder) => {
    if (encoder.count > 0) {
      const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
      writeVarInt(encoder.encoder, encodedDiff);
      if (encoder.count > 1) {
        writeVarUint(encoder.encoder, encoder.count - 2);
      }
    }
  };
  class IntDiffOptRleEncoder {
    constructor() {
      this.encoder = new Encoder();
      this.s = 0;
      this.count = 0;
      this.diff = 0;
    }
    /**
     * @param {number} v
     */
    write(v2) {
      if (this.diff === v2 - this.s) {
        this.s = v2;
        this.count++;
      } else {
        flushIntDiffOptRleEncoder(this);
        this.count = 1;
        this.diff = v2 - this.s;
        this.s = v2;
      }
    }
    /**
     * Flush the encoded state and transform this to a Uint8Array.
     *
     * Note that this should only be called once.
     */
    toUint8Array() {
      flushIntDiffOptRleEncoder(this);
      return toUint8Array(this.encoder);
    }
  }
  class StringEncoder {
    constructor() {
      this.sarr = [];
      this.s = "";
      this.lensE = new UintOptRleEncoder();
    }
    /**
     * @param {string} string
     */
    write(string) {
      this.s += string;
      if (this.s.length > 19) {
        this.sarr.push(this.s);
        this.s = "";
      }
      this.lensE.write(string.length);
    }
    toUint8Array() {
      const encoder = new Encoder();
      this.sarr.push(this.s);
      this.s = "";
      writeVarString(encoder, this.sarr.join(""));
      writeUint8Array(encoder, this.lensE.toUint8Array());
      return toUint8Array(encoder);
    }
  }
  const create$3 = (s2) => new Error(s2);
  const methodUnimplemented = () => {
    throw create$3("Method unimplemented");
  };
  const unexpectedCase = () => {
    throw create$3("Unexpected case");
  };
  const errorUnexpectedEndOfArray = create$3("Unexpected end of array");
  const errorIntegerOutOfRange = create$3("Integer out of Range");
  class Decoder {
    /**
     * @param {Uint8Array} uint8Array Binary data to decode
     */
    constructor(uint8Array) {
      this.arr = uint8Array;
      this.pos = 0;
    }
  }
  const createDecoder = (uint8Array) => new Decoder(uint8Array);
  const hasContent = (decoder) => decoder.pos !== decoder.arr.length;
  const readUint8Array = (decoder, len) => {
    const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
    decoder.pos += len;
    return view;
  };
  const readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
  const readUint8 = (decoder) => decoder.arr[decoder.pos++];
  const readVarUint = (decoder) => {
    let num = 0;
    let mult = 1;
    const len = decoder.arr.length;
    while (decoder.pos < len) {
      const r2 = decoder.arr[decoder.pos++];
      num = num + (r2 & BITS7) * mult;
      mult *= 128;
      if (r2 < BIT8) {
        return num;
      }
      if (num > MAX_SAFE_INTEGER) {
        throw errorIntegerOutOfRange;
      }
    }
    throw errorUnexpectedEndOfArray;
  };
  const readVarInt = (decoder) => {
    let r2 = decoder.arr[decoder.pos++];
    let num = r2 & BITS6;
    let mult = 64;
    const sign = (r2 & BIT7) > 0 ? -1 : 1;
    if ((r2 & BIT8) === 0) {
      return sign * num;
    }
    const len = decoder.arr.length;
    while (decoder.pos < len) {
      r2 = decoder.arr[decoder.pos++];
      num = num + (r2 & BITS7) * mult;
      mult *= 128;
      if (r2 < BIT8) {
        return sign * num;
      }
      if (num > MAX_SAFE_INTEGER) {
        throw errorIntegerOutOfRange;
      }
    }
    throw errorUnexpectedEndOfArray;
  };
  const _readVarStringPolyfill = (decoder) => {
    let remainingLen = readVarUint(decoder);
    if (remainingLen === 0) {
      return "";
    } else {
      let encodedString = String.fromCodePoint(readUint8(decoder));
      if (--remainingLen < 100) {
        while (remainingLen--) {
          encodedString += String.fromCodePoint(readUint8(decoder));
        }
      } else {
        while (remainingLen > 0) {
          const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
          const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
          decoder.pos += nextLen;
          encodedString += String.fromCodePoint.apply(
            null,
            /** @type {any} */
            bytes
          );
          remainingLen -= nextLen;
        }
      }
      return decodeURIComponent(escape(encodedString));
    }
  };
  const _readVarStringNative = (decoder) => (
    /** @type any */
    utf8TextDecoder.decode(readVarUint8Array(decoder))
  );
  const readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
  const readFromDataView = (decoder, len) => {
    const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
    decoder.pos += len;
    return dv;
  };
  const readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
  const readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
  const readBigInt64 = (decoder) => (
    /** @type {any} */
    readFromDataView(decoder, 8).getBigInt64(0, false)
  );
  const readAnyLookupTable = [
    (decoder) => void 0,
    // CASE 127: undefined
    (decoder) => null,
    // CASE 126: null
    readVarInt,
    // CASE 125: integer
    readFloat32,
    // CASE 124: float32
    readFloat64,
    // CASE 123: float64
    readBigInt64,
    // CASE 122: bigint
    (decoder) => false,
    // CASE 121: boolean (false)
    (decoder) => true,
    // CASE 120: boolean (true)
    readVarString,
    // CASE 119: string
    (decoder) => {
      const len = readVarUint(decoder);
      const obj = {};
      for (let i2 = 0; i2 < len; i2++) {
        const key = readVarString(decoder);
        obj[key] = readAny(decoder);
      }
      return obj;
    },
    (decoder) => {
      const len = readVarUint(decoder);
      const arr = [];
      for (let i2 = 0; i2 < len; i2++) {
        arr.push(readAny(decoder));
      }
      return arr;
    },
    readVarUint8Array
    // CASE 116: Uint8Array
  ];
  const readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
  class RleDecoder extends Decoder {
    /**
     * @param {Uint8Array} uint8Array
     * @param {function(Decoder):T} reader
     */
    constructor(uint8Array, reader) {
      super(uint8Array);
      this.reader = reader;
      this.s = null;
      this.count = 0;
    }
    read() {
      if (this.count === 0) {
        this.s = this.reader(this);
        if (hasContent(this)) {
          this.count = readVarUint(this) + 1;
        } else {
          this.count = -1;
        }
      }
      this.count--;
      return (
        /** @type {T} */
        this.s
      );
    }
  }
  class UintOptRleDecoder extends Decoder {
    /**
     * @param {Uint8Array} uint8Array
     */
    constructor(uint8Array) {
      super(uint8Array);
      this.s = 0;
      this.count = 0;
    }
    read() {
      if (this.count === 0) {
        this.s = readVarInt(this);
        const isNegative = isNegativeZero(this.s);
        this.count = 1;
        if (isNegative) {
          this.s = -this.s;
          this.count = readVarUint(this) + 2;
        }
      }
      this.count--;
      return (
        /** @type {number} */
        this.s
      );
    }
  }
  class IntDiffOptRleDecoder extends Decoder {
    /**
     * @param {Uint8Array} uint8Array
     */
    constructor(uint8Array) {
      super(uint8Array);
      this.s = 0;
      this.count = 0;
      this.diff = 0;
    }
    /**
     * @return {number}
     */
    read() {
      if (this.count === 0) {
        const diff = readVarInt(this);
        const hasCount = diff & 1;
        this.diff = floor(diff / 2);
        this.count = 1;
        if (hasCount) {
          this.count = readVarUint(this) + 2;
        }
      }
      this.s += this.diff;
      this.count--;
      return this.s;
    }
  }
  class StringDecoder {
    /**
     * @param {Uint8Array} uint8Array
     */
    constructor(uint8Array) {
      this.decoder = new UintOptRleDecoder(uint8Array);
      this.str = readVarString(this.decoder);
      this.spos = 0;
    }
    /**
     * @return {string}
     */
    read() {
      const end = this.spos + this.decoder.read();
      const res = this.str.slice(this.spos, end);
      this.spos = end;
      return res;
    }
  }
  const createUint8ArrayFromLen = (len) => new Uint8Array(len);
  const toBase64Browser = (bytes) => {
    let s2 = "";
    for (let i2 = 0; i2 < bytes.byteLength; i2++) {
      s2 += fromCharCode(bytes[i2]);
    }
    return btoa(s2);
  };
  const toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
  const toBase64 = isBrowser ? toBase64Browser : toBase64Node;
  const copyUint8Array = (uint8Array) => {
    const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
    newBuf.set(uint8Array);
    return newBuf;
  };
  const rotr = (w2, shift) => w2 >>> shift | w2 << 32 - shift;
  const sum0to256 = (x2) => rotr(x2, 2) ^ rotr(x2, 13) ^ rotr(x2, 22);
  const sum1to256 = (x2) => rotr(x2, 6) ^ rotr(x2, 11) ^ rotr(x2, 25);
  const sigma0to256 = (x2) => rotr(x2, 7) ^ rotr(x2, 18) ^ x2 >>> 3;
  const sigma1to256 = (x2) => rotr(x2, 17) ^ rotr(x2, 19) ^ x2 >>> 10;
  const K$1 = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  const HINIT = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  class Hasher {
    constructor() {
      const buf = new ArrayBuffer(64 + 64 * 4);
      this._H = new Uint32Array(buf, 0, 8);
      this._H.set(HINIT);
      this._W = new Uint32Array(buf, 64, 64);
    }
    _updateHash() {
      const H2 = this._H;
      const W = this._W;
      for (let t2 = 16; t2 < 64; t2++) {
        W[t2] = sigma1to256(W[t2 - 2]) + W[t2 - 7] + sigma0to256(W[t2 - 15]) + W[t2 - 16];
      }
      let a2 = H2[0];
      let b2 = H2[1];
      let c2 = H2[2];
      let d2 = H2[3];
      let e2 = H2[4];
      let f2 = H2[5];
      let g2 = H2[6];
      let h2 = H2[7];
      for (let tt = 0, T1, T2; tt < 64; tt++) {
        T1 = h2 + sum1to256(e2) + (e2 & f2 ^ ~e2 & g2) + K$1[tt] + W[tt] >>> 0;
        T2 = sum0to256(a2) + (a2 & b2 ^ a2 & c2 ^ b2 & c2) >>> 0;
        h2 = g2;
        g2 = f2;
        f2 = e2;
        e2 = d2 + T1 >>> 0;
        d2 = c2;
        c2 = b2;
        b2 = a2;
        a2 = T1 + T2 >>> 0;
      }
      H2[0] += a2;
      H2[1] += b2;
      H2[2] += c2;
      H2[3] += d2;
      H2[4] += e2;
      H2[5] += f2;
      H2[6] += g2;
      H2[7] += h2;
    }
    /**
     * Returns a 32-byte hash.
     *
     * @param {Uint8Array} data
     */
    digest(data) {
      let i2 = 0;
      for (; i2 + 56 <= data.length; ) {
        let j3 = 0;
        for (; j3 < 16 && i2 + 3 < data.length; j3++) {
          this._W[j3] = data[i2++] << 24 | data[i2++] << 16 | data[i2++] << 8 | data[i2++];
        }
        if (i2 % 64 !== 0) {
          this._W.fill(0, j3, 16);
          while (i2 < data.length) {
            this._W[j3] |= data[i2] << (3 - i2 % 4) * 8;
            i2++;
          }
          this._W[j3] |= BIT8 << (3 - i2 % 4) * 8;
        }
        this._updateHash();
      }
      const isPaddedWith1 = i2 % 64 !== 0;
      this._W.fill(0, 0, 16);
      let j2 = 0;
      for (; i2 < data.length; j2++) {
        for (let ci = 3; ci >= 0 && i2 < data.length; ci--) {
          this._W[j2] |= data[i2++] << ci * 8;
        }
      }
      if (!isPaddedWith1) {
        this._W[j2 - (i2 % 4 === 0 ? 0 : 1)] |= BIT8 << (3 - i2 % 4) * 8;
      }
      this._W[14] = data.byteLength / BIT30;
      this._W[15] = data.byteLength * 8;
      this._updateHash();
      const dv = new Uint8Array(32);
      for (let i3 = 0; i3 < this._H.length; i3++) {
        for (let ci = 0; ci < 4; ci++) {
          dv[i3 * 4 + ci] = this._H[i3] >>> (3 - ci) * 8;
        }
      }
      return dv;
    }
  }
  const digest = (data) => new Hasher().digest(data);
  async function sha(input) {
    const hash2 = crypto.subtle === void 0 ? digest(new Uint8Array(input)) : await crypto.subtle.digest("SHA-256", input);
    return toBase64(new Uint8Array(hash2)).replace(/\+/g, "-").replace(/\//g, "_");
  }
  class DisposableGroup {
    constructor() {
      this._disposed = false;
      this._disposables = [];
    }
    get disposed() {
      return this._disposed;
    }
    /**
     * Add to group to be disposed with others.
     * This will be immediately disposed if this group has already been disposed.
     */
    add(d2) {
      if (typeof d2 === "function") {
        if (this._disposed)
          d2();
        else
          this._disposables.push({ dispose: d2 });
      } else {
        if (this._disposed)
          d2.dispose();
        else
          this._disposables.push(d2);
      }
    }
    addFromEvent(target, type, handler, eventOptions) {
      this.add({
        dispose: () => {
          target.removeEventListener(type, handler, eventOptions);
        }
      });
      target.addEventListener(type, handler, eventOptions);
    }
    dispose() {
      disposeAll(this._disposables);
      this._disposables = [];
      this._disposed = true;
    }
  }
  function flattenDisposables(disposables) {
    return {
      dispose: () => disposeAll(disposables)
    };
  }
  function disposeAll(disposables) {
    for (const disposable of disposables) {
      try {
        disposable.dispose();
      } catch (err) {
        console.error(err);
      }
    }
  }
  class NoopLogger {
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  }
  class Slot {
    constructor() {
      this._emitting = false;
      this._callbacks = [];
      this._disposables = [];
      this.subscribe = (selector, callback, config) => {
        let prevState;
        const { filter: filter2, equalityFn = Object.is } = config ?? {};
        return this.on((state) => {
          if (filter2 && !filter2(state)) {
            return;
          }
          const nextState = selector(state);
          if (prevState === void 0 || !equalityFn(prevState, nextState)) {
            callback(nextState);
            prevState = nextState;
          }
        });
      };
    }
    filter(testFun) {
      const result = new Slot();
      this._disposables.push({
        dispose: () => result.dispose()
      });
      this.on((v2) => {
        if (testFun(v2)) {
          result.emit(v2);
        }
      });
      return result;
    }
    flatMap(mapper) {
      const result = new Slot();
      this._disposables.push({
        dispose: () => result.dispose()
      });
      this.on((v2) => {
        const data = mapper(v2);
        if (Array.isArray(data)) {
          data.forEach((v3) => result.emit(v3));
        } else {
          result.emit(data);
        }
      });
      return result;
    }
    on(callback) {
      if (this._emitting) {
        const newCallback = [...this._callbacks, callback];
        this._callbacks = newCallback;
      } else {
        this._callbacks.push(callback);
      }
      return {
        dispose: () => {
          if (this._emitting) {
            this._callbacks = this._callbacks.filter((v2) => v2 !== callback);
          } else {
            const index = this._callbacks.indexOf(callback);
            if (index > -1) {
              this._callbacks.splice(index, 1);
            }
          }
        }
      };
    }
    once(callback) {
      let dispose = void 0;
      const handler = (v2) => {
        callback(v2);
        if (dispose) {
          dispose();
        }
      };
      const disposable = this.on(handler);
      dispose = disposable.dispose;
      return disposable;
    }
    unshift(callback) {
      if (this._emitting) {
        const newCallback = [callback, ...this._callbacks];
        this._callbacks = newCallback;
      } else {
        this._callbacks.unshift(callback);
      }
      return {
        dispose: () => {
          if (this._emitting) {
            this._callbacks = this._callbacks.filter((v2) => v2 !== callback);
          } else {
            const index = this._callbacks.indexOf(callback);
            if (index > -1) {
              this._callbacks.splice(index, 1);
            }
          }
        }
      };
    }
    emit(v2) {
      const prevEmitting = this._emitting;
      this._emitting = true;
      this._callbacks.forEach((f2) => {
        try {
          f2(v2);
        } catch (err) {
          console.error(err);
        }
      });
      this._emitting = prevEmitting;
    }
    pipe(that) {
      this._callbacks.push((v2) => that.emit(v2));
      return this;
    }
    dispose() {
      flattenDisposables(this._disposables).dispose();
      this._callbacks = [];
      this._disposables = [];
    }
    toDispose(disposables) {
      disposables.push(this);
      return this;
    }
  }
  class MemoryBlobCRUD {
    constructor() {
      this._map = /* @__PURE__ */ new Map();
    }
    get(key) {
      return this._map.get(key) ?? null;
    }
    async set(valueOrKey, _value) {
      const key = typeof valueOrKey === "string" ? valueOrKey : await sha(await valueOrKey.arrayBuffer());
      const value = typeof valueOrKey === "string" ? _value : valueOrKey;
      if (!value) {
        throw new Error("value is required");
      }
      this._map.set(key, value);
      return key;
    }
    delete(key) {
      this._map.delete(key);
    }
    list() {
      return Array.from(this._map.keys());
    }
  }
  const mimeExtMap = /* @__PURE__ */ new Map([
    ["audio/aac", "aac"],
    ["application/x-abiword", "abw"],
    ["image/apng", "apng"],
    ["application/x-freearc", "arc"],
    ["image/avif", "avif"],
    ["video/x-msvideo", "avi"],
    ["application/vnd.amazon.ebook", "azw"],
    ["application/octet-stream", "bin"],
    ["image/bmp", "bmp"],
    ["application/x-bzip", "bz"],
    ["application/x-bzip2", "bz2"],
    ["application/x-cdf", "cda"],
    ["application/x-csh", "csh"],
    ["text/css", "css"],
    ["text/csv", "csv"],
    ["application/msword", "doc"],
    [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "docx"
    ],
    ["application/vnd.ms-fontobject", "eot"],
    ["application/epub+zip", "epub"],
    ["application/gzip", "gz"],
    ["image/gif", "gif"],
    ["text/html", "html"],
    ["image/vnd.microsoft.icon", "ico"],
    ["text/calendar", "ics"],
    ["application/java-archive", "jar"],
    ["image/jpeg", "jpeg"],
    ["text/javascript", "js"],
    ["application/json", "json"],
    ["application/ld+json", "jsonld"],
    ["audio/midi", "mid"],
    ["audio/x-midi", "midi"],
    ["audio/mpeg", "mp3"],
    ["video/mp4", "mp4"],
    ["video/mpeg", "mpeg"],
    ["application/vnd.apple.installer+xml", "mpkg"],
    ["application/vnd.oasis.opendocument.presentation", "odp"],
    ["application/vnd.oasis.opendocument.spreadsheet", "ods"],
    ["application/vnd.oasis.opendocument.text", "odt"],
    ["audio/ogg", "oga"],
    ["video/ogg", "ogv"],
    ["application/ogg", "ogx"],
    ["audio/opus", "opus"],
    ["font/otf", "otf"],
    ["image/png", "png"],
    ["application/pdf", "pdf"],
    ["application/x-httpd-php", "php"],
    ["application/vnd.ms-powerpoint", "ppt"],
    [
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "pptx"
    ],
    ["application/vnd.rar", "rar"],
    ["application/rtf", "rtf"],
    ["application/x-sh", "sh"],
    ["image/svg+xml", "svg"],
    ["application/x-tar", "tar"],
    ["image/tiff", "tiff"],
    ["video/mp2t", "ts"],
    ["font/ttf", "ttf"],
    ["text/plain", "txt"],
    ["application/vnd.visio", "vsd"],
    ["audio/wav", "wav"],
    ["audio/webm", "weba"],
    ["video/webm", "webm"],
    ["image/webp", "webp"],
    ["font/woff", "woff"],
    ["font/woff2", "woff2"],
    ["application/xhtml+xml", "xhtml"],
    ["application/vnd.ms-excel", "xls"],
    ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
    ["application/xml", "xml"],
    ["text/xml", "xml"],
    ["application/vnd.mozilla.xul+xml", "xul"],
    ["application/zip", "zip"],
    ["application/zstd", "zst"],
    ["video/3gpp", "3gp"],
    ["audio/3gpp", "3gp"],
    ["video/3gpp2", "3g2"],
    ["audio/3gpp2", "3g2"],
    ["application/x-7z-compressed", "7z"]
  ]);
  const extMimeMap = new Map(Array.from(mimeExtMap.entries()).map(([mime, ext2]) => [ext2, mime]));
  function getAssetName(assets, blobId) {
    const getExt = (type) => {
      if (type === "")
        return "blob";
      const ext3 = mimeExtMap.get(type);
      if (ext3)
        return ext3;
      const exts = type.split("/");
      return exts.at(-1) ?? "blob";
    };
    const blob = assets.get(blobId);
    assertExists(blob);
    const name = blob.name ?? void 0;
    const ext2 = name !== void 0 && name.includes(".") ? name.split(".").at(-1) : getExt(blob.type);
    return `${name?.split(".").at(0) ?? blobId}.${ext2}`;
  }
  class ASTWalkerContext {
    constructor() {
      this._stack = [];
      this._globalContext = /* @__PURE__ */ Object.create(null);
      this._defaultProp = "children";
      this._skip = false;
      this._skipChildrenNum = 0;
      this.setDefaultProp = (parentProp) => {
        this._defaultProp = parentProp;
      };
    }
    get stack() {
      return this._stack;
    }
    current() {
      return this._stack[this._stack.length - 1];
    }
    previousNode() {
      return this._stack[this._stack.length - 2]?.node;
    }
    currentNode() {
      return this.current()?.node;
    }
    openNode(node, parentProp) {
      this._stack.push({
        node,
        prop: parentProp ?? this._defaultProp,
        context: /* @__PURE__ */ Object.create(null)
      });
      return this;
    }
    setNodeContext(key, value) {
      this._stack[this._stack.length - 1].context[key] = value;
      return this;
    }
    getPreviousNodeContext(key) {
      return this._stack[this._stack.length - 2]?.context[key];
    }
    getNodeContext(key) {
      return this.current().context[key];
    }
    getGlobalContext(key) {
      return this._globalContext[key];
    }
    pushGlobalContextStack(key, value) {
      const stack = this._globalContext[key];
      if (stack instanceof Array) {
        stack.push(value);
      } else {
        this._globalContext[key] = [value];
      }
    }
    getGlobalContextStack(key) {
      const stack = this._globalContext[key];
      if (stack instanceof Array) {
        return stack;
      } else {
        return [];
      }
    }
    setGlobalContextStack(key, value) {
      this._globalContext[key] = value;
    }
    setGlobalContext(key, value) {
      this._globalContext[key] = value;
      return this;
    }
    closeNode() {
      const ele = this._stack.pop();
      if (!ele)
        return this;
      const parent = this._stack.pop();
      if (!parent) {
        this._stack.push(ele);
        return this;
      }
      if (parent.node[ele.prop] instanceof Array) {
        parent.node[ele.prop].push(ele.node);
      }
      this._stack.push(parent);
      return this;
    }
    skipAllChildren() {
      this._skip = true;
    }
    skipChildren(num = 1) {
      this._skipChildrenNum = num;
    }
  }
  class BaseAdapter {
    constructor(job) {
      this.configs = /* @__PURE__ */ new Map();
      this.job = job;
      this.applyConfigs(job.adapterConfigs);
    }
    async fromDoc(doc) {
      const docSnapshot = await this.job.docToSnapshot(doc);
      return this.fromDocSnapshot({
        snapshot: docSnapshot,
        assets: this.job.assetsManager
      });
    }
    async toDoc(payload) {
      const snapshot2 = await this.toDocSnapshot(payload);
      return this.job.snapshotToDoc(snapshot2);
    }
    async fromBlock(mode) {
      const blockSnapshot = await this.job.blockToSnapshot(mode);
      return this.fromBlockSnapshot({
        snapshot: blockSnapshot,
        assets: this.job.assetsManager
      });
    }
    async toBlock(payload, doc, parent, index) {
      const snapshot2 = await this.toBlockSnapshot(payload);
      return this.job.snapshotToBlock(snapshot2, doc, parent, index);
    }
    async fromSlice(slice) {
      const sliceSnapshot = await this.job.sliceToSnapshot(slice);
      return this.fromSliceSnapshot({
        snapshot: sliceSnapshot,
        assets: this.job.assetsManager
      });
    }
    async toSlice(payload, doc, parent, index) {
      const snapshot2 = await this.toSliceSnapshot(payload);
      if (!snapshot2)
        return;
      return this.job.snapshotToSlice(snapshot2, doc, parent, index);
    }
    applyConfigs(configs) {
      this.configs = new Map(configs);
    }
  }
  class ASTWalker {
    constructor() {
      this._visit = async (o2) => {
        if (!o2.node)
          return;
        this.context._skipChildrenNum = 0;
        this.context._skip = false;
        if (this._enter) {
          await this._enter(o2, this.context);
        }
        if (this.context._skip) {
          return;
        }
        for (const key in o2.node) {
          const value = o2.node[key];
          if (value && typeof value === "object") {
            if (Array.isArray(value)) {
              for (let i2 = this.context._skipChildrenNum; i2 < value.length; i2 += 1) {
                const item = value[i2];
                if (item !== null && typeof item === "object" && this._isONode(item)) {
                  const nextItem = value[i2 + 1] ?? null;
                  await this._visit({
                    node: item,
                    next: nextItem,
                    parent: o2,
                    prop: key,
                    index: i2
                  });
                }
              }
            } else if (this.context._skipChildrenNum === 0 && this._isONode(value)) {
              await this._visit({
                node: value,
                next: null,
                parent: o2,
                prop: key,
                index: null
              });
            }
          }
        }
        if (this._leave) {
          await this._leave(o2, this.context);
        }
      };
      this.setEnter = (fn) => {
        this._enter = fn;
      };
      this.setLeave = (fn) => {
        this._leave = fn;
      };
      this.setONodeTypeGuard = (fn) => {
        this._isONode = fn;
      };
      this.walk = async (oNode, tNode) => {
        this.context.openNode(tNode);
        await this._visit({ node: oNode, parent: null, prop: null, index: null });
        assertEquals(this.context.stack.length, 1, "There are unclosed nodes");
        return this.context.currentNode();
      };
      this.walkONode = async (oNode) => {
        await this._visit({ node: oNode, parent: null, prop: null, index: null });
      };
      this.context = new ASTWalkerContext();
    }
  }
  const collectionMigrations = [
    {
      desc: "add pageVersion in meta",
      condition: (rootDoc) => {
        const meta = rootDoc.getMap("meta");
        const workspaceVersion = meta.get("workspaceVersion");
        return workspaceVersion < 2;
      },
      migrate: (rootDoc) => {
        const meta = rootDoc.getMap("meta");
        meta.set("pageVersion", 1);
        meta.set("workspaceVersion", 2);
      }
    }
  ];
  class ObservableV2 {
    constructor() {
      this._observers = create$4();
    }
    /**
     * @template {keyof EVENTS & string} NAME
     * @param {NAME} name
     * @param {EVENTS[NAME]} f
     */
    on(name, f2) {
      setIfUndefined(
        this._observers,
        /** @type {string} */
        name,
        create$5
      ).add(f2);
      return f2;
    }
    /**
     * @template {keyof EVENTS & string} NAME
     * @param {NAME} name
     * @param {EVENTS[NAME]} f
     */
    once(name, f2) {
      const _f = (...args) => {
        this.off(
          name,
          /** @type {any} */
          _f
        );
        f2(...args);
      };
      this.on(
        name,
        /** @type {any} */
        _f
      );
    }
    /**
     * @template {keyof EVENTS & string} NAME
     * @param {NAME} name
     * @param {EVENTS[NAME]} f
     */
    off(name, f2) {
      const observers = this._observers.get(name);
      if (observers !== void 0) {
        observers.delete(f2);
        if (observers.size === 0) {
          this._observers.delete(name);
        }
      }
    }
    /**
     * Emit a named event. All registered event listeners that listen to the
     * specified name will receive the event.
     *
     * @todo This should catch exceptions
     *
     * @template {keyof EVENTS & string} NAME
     * @param {NAME} name The event name.
     * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
     */
    emit(name, args) {
      return from((this._observers.get(name) || create$4()).values()).forEach((f2) => f2(...args));
    }
    destroy() {
      this._observers = create$4();
    }
  }
  class Observable {
    constructor() {
      this._observers = create$4();
    }
    /**
     * @param {N} name
     * @param {function} f
     */
    on(name, f2) {
      setIfUndefined(this._observers, name, create$5).add(f2);
    }
    /**
     * @param {N} name
     * @param {function} f
     */
    once(name, f2) {
      const _f = (...args) => {
        this.off(name, _f);
        f2(...args);
      };
      this.on(name, _f);
    }
    /**
     * @param {N} name
     * @param {function} f
     */
    off(name, f2) {
      const observers = this._observers.get(name);
      if (observers !== void 0) {
        observers.delete(f2);
        if (observers.size === 0) {
          this._observers.delete(name);
        }
      }
    }
    /**
     * Emit a named event. All registered event listeners that listen to the
     * specified name will receive the event.
     *
     * @todo This should catch exceptions
     *
     * @param {N} name The event name.
     * @param {Array<any>} args The arguments that are applied to the event listener.
     */
    emit(name, args) {
      return from((this._observers.get(name) || create$4()).values()).forEach((f2) => f2(...args));
    }
    destroy() {
      this._observers = create$4();
    }
  }
  const getRandomValues = crypto.getRandomValues.bind(crypto);
  const uint32 = () => getRandomValues(new Uint32Array(1))[0];
  const uuidv4Template = "10000000-1000-4000-8000" + -1e11;
  const uuidv4$1 = () => uuidv4Template.replace(
    /[018]/g,
    /** @param {number} c */
    (c2) => (c2 ^ uint32() & 15 >> c2 / 4).toString(16)
  );
  const getUnixTime = Date.now;
  const create$2 = (f2) => (
    /** @type {Promise<T>} */
    new Promise(f2)
  );
  Promise.all.bind(Promise);
  class Pair {
    /**
     * @param {L} left
     * @param {R} right
     */
    constructor(left, right) {
      this.left = left;
      this.right = right;
    }
  }
  const create$1 = (left, right) => new Pair(left, right);
  typeof DOMParser !== "undefined" ? new DOMParser() : null;
  const mapToStyleString = (m2) => map(m2, (value, key) => `${key}:${value};`).join("");
  const create = Symbol;
  const BOLD = create();
  const UNBOLD = create();
  const BLUE = create();
  const GREY = create();
  const GREEN = create();
  const RED = create();
  const PURPLE = create();
  const ORANGE = create();
  const UNCOLOR = create();
  const computeNoColorLoggingArgs = (args) => {
    if (args.length === 1 && args[0]?.constructor === Function) {
      args = /** @type {Array<string|Symbol|Object|number>} */
      /** @type {[function]} */
      args[0]();
    }
    const strBuilder = [];
    const logArgs = [];
    let i2 = 0;
    for (; i2 < args.length; i2++) {
      const arg = args[i2];
      if (arg === void 0) {
        break;
      } else if (arg.constructor === String || arg.constructor === Number) {
        strBuilder.push(arg);
      } else if (arg.constructor === Object) {
        break;
      }
    }
    if (i2 > 0) {
      logArgs.push(strBuilder.join(""));
    }
    for (; i2 < args.length; i2++) {
      const arg = args[i2];
      if (!(arg instanceof Symbol)) {
        logArgs.push(arg);
      }
    }
    return logArgs;
  };
  const _browserStyleMap = {
    [BOLD]: create$1("font-weight", "bold"),
    [UNBOLD]: create$1("font-weight", "normal"),
    [BLUE]: create$1("color", "blue"),
    [GREEN]: create$1("color", "green"),
    [GREY]: create$1("color", "grey"),
    [RED]: create$1("color", "red"),
    [PURPLE]: create$1("color", "purple"),
    [ORANGE]: create$1("color", "orange"),
    // not well supported in chrome when debugging node with inspector - TODO: deprecate
    [UNCOLOR]: create$1("color", "black")
  };
  const computeBrowserLoggingArgs = (args) => {
    if (args.length === 1 && args[0]?.constructor === Function) {
      args = /** @type {Array<string|Symbol|Object|number>} */
      /** @type {[function]} */
      args[0]();
    }
    const strBuilder = [];
    const styles = [];
    const currentStyle = create$4();
    let logArgs = [];
    let i2 = 0;
    for (; i2 < args.length; i2++) {
      const arg = args[i2];
      const style = _browserStyleMap[arg];
      if (style !== void 0) {
        currentStyle.set(style.left, style.right);
      } else {
        if (arg === void 0) {
          break;
        }
        if (arg.constructor === String || arg.constructor === Number) {
          const style2 = mapToStyleString(currentStyle);
          if (i2 > 0 || style2.length > 0) {
            strBuilder.push("%c" + arg);
            styles.push(style2);
          } else {
            strBuilder.push(arg);
          }
        } else {
          break;
        }
      }
    }
    if (i2 > 0) {
      logArgs = styles;
      logArgs.unshift(strBuilder.join(""));
    }
    for (; i2 < args.length; i2++) {
      const arg = args[i2];
      if (!(arg instanceof Symbol)) {
        logArgs.push(arg);
      }
    }
    return logArgs;
  };
  const computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
  const print = (...args) => {
    console.log(...computeLoggingArgs(args));
    vconsoles.forEach((vc) => vc.print(args));
  };
  const warn = (...args) => {
    console.warn(...computeLoggingArgs(args));
    args.unshift(ORANGE);
    vconsoles.forEach((vc) => vc.print(args));
  };
  const vconsoles = create$5();
  const createIterator = (next) => ({
    /**
     * @return {IterableIterator<T>}
     */
    [Symbol.iterator]() {
      return this;
    },
    // @ts-ignore
    next
  });
  const iteratorFilter = (iterator, filter2) => createIterator(() => {
    let res;
    do {
      res = iterator.next();
    } while (!res.done && !filter2(res.value));
    return res;
  });
  const iteratorMap = (iterator, fmap) => createIterator(() => {
    const { done, value } = iterator.next();
    return { done, value: done ? void 0 : fmap(value) };
  });
  class AbstractConnector extends ObservableV2 {
    /**
     * @param {Doc} ydoc
     * @param {any} awareness
     */
    constructor(ydoc, awareness) {
      super();
      this.doc = ydoc;
      this.awareness = awareness;
    }
  }
  class DeleteItem {
    /**
     * @param {number} clock
     * @param {number} len
     */
    constructor(clock, len) {
      this.clock = clock;
      this.len = len;
    }
  }
  class DeleteSet {
    constructor() {
      this.clients = /* @__PURE__ */ new Map();
    }
  }
  const iterateDeletedStructs = (transaction, ds, f2) => ds.clients.forEach((deletes, clientid) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      transaction.doc.store.clients.get(clientid)
    );
    if (structs != null) {
      const lastStruct = structs[structs.length - 1];
      const clockState = lastStruct.id.clock + lastStruct.length;
      for (let i2 = 0, del = deletes[i2]; i2 < deletes.length && del.clock < clockState; del = deletes[++i2]) {
        iterateStructs(transaction, structs, del.clock, del.len, f2);
      }
    }
  });
  const findIndexDS = (dis, clock) => {
    let left = 0;
    let right = dis.length - 1;
    while (left <= right) {
      const midindex = floor((left + right) / 2);
      const mid = dis[midindex];
      const midclock = mid.clock;
      if (midclock <= clock) {
        if (clock < midclock + mid.len) {
          return midindex;
        }
        left = midindex + 1;
      } else {
        right = midindex - 1;
      }
    }
    return null;
  };
  const isDeleted = (ds, id2) => {
    const dis = ds.clients.get(id2.client);
    return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
  };
  const sortAndMergeDeleteSet = (ds) => {
    ds.clients.forEach((dels) => {
      dels.sort((a2, b2) => a2.clock - b2.clock);
      let i2, j2;
      for (i2 = 1, j2 = 1; i2 < dels.length; i2++) {
        const left = dels[j2 - 1];
        const right = dels[i2];
        if (left.clock + left.len >= right.clock) {
          left.len = max(left.len, right.clock + right.len - left.clock);
        } else {
          if (j2 < i2) {
            dels[j2] = right;
          }
          j2++;
        }
      }
      dels.length = j2;
    });
  };
  const mergeDeleteSets = (dss) => {
    const merged = new DeleteSet();
    for (let dssI = 0; dssI < dss.length; dssI++) {
      dss[dssI].clients.forEach((delsLeft, client) => {
        if (!merged.clients.has(client)) {
          const dels = delsLeft.slice();
          for (let i2 = dssI + 1; i2 < dss.length; i2++) {
            appendTo(dels, dss[i2].clients.get(client) || []);
          }
          merged.clients.set(client, dels);
        }
      });
    }
    sortAndMergeDeleteSet(merged);
    return merged;
  };
  const addToDeleteSet = (ds, client, clock, length2) => {
    setIfUndefined(ds.clients, client, () => (
      /** @type {Array<DeleteItem>} */
      []
    )).push(new DeleteItem(clock, length2));
  };
  const createDeleteSet = () => new DeleteSet();
  const createDeleteSetFromStructStore = (ss) => {
    const ds = createDeleteSet();
    ss.clients.forEach((structs, client) => {
      const dsitems = [];
      for (let i2 = 0; i2 < structs.length; i2++) {
        const struct = structs[i2];
        if (struct.deleted) {
          const clock = struct.id.clock;
          let len = struct.length;
          if (i2 + 1 < structs.length) {
            for (let next = structs[i2 + 1]; i2 + 1 < structs.length && next.deleted; next = structs[++i2 + 1]) {
              len += next.length;
            }
          }
          dsitems.push(new DeleteItem(clock, len));
        }
      }
      if (dsitems.length > 0) {
        ds.clients.set(client, dsitems);
      }
    });
    return ds;
  };
  const writeDeleteSet = (encoder, ds) => {
    writeVarUint(encoder.restEncoder, ds.clients.size);
    from(ds.clients.entries()).sort((a2, b2) => b2[0] - a2[0]).forEach(([client, dsitems]) => {
      encoder.resetDsCurVal();
      writeVarUint(encoder.restEncoder, client);
      const len = dsitems.length;
      writeVarUint(encoder.restEncoder, len);
      for (let i2 = 0; i2 < len; i2++) {
        const item = dsitems[i2];
        encoder.writeDsClock(item.clock);
        encoder.writeDsLen(item.len);
      }
    });
  };
  const readDeleteSet = (decoder) => {
    const ds = new DeleteSet();
    const numClients = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numClients; i2++) {
      decoder.resetDsCurVal();
      const client = readVarUint(decoder.restDecoder);
      const numberOfDeletes = readVarUint(decoder.restDecoder);
      if (numberOfDeletes > 0) {
        const dsField = setIfUndefined(ds.clients, client, () => (
          /** @type {Array<DeleteItem>} */
          []
        ));
        for (let i3 = 0; i3 < numberOfDeletes; i3++) {
          dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
        }
      }
    }
    return ds;
  };
  const readAndApplyDeleteSet = (decoder, transaction, store2) => {
    const unappliedDS = new DeleteSet();
    const numClients = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numClients; i2++) {
      decoder.resetDsCurVal();
      const client = readVarUint(decoder.restDecoder);
      const numberOfDeletes = readVarUint(decoder.restDecoder);
      const structs = store2.clients.get(client) || [];
      const state = getState(store2, client);
      for (let i3 = 0; i3 < numberOfDeletes; i3++) {
        const clock = decoder.readDsClock();
        const clockEnd = clock + decoder.readDsLen();
        if (clock < state) {
          if (state < clockEnd) {
            addToDeleteSet(unappliedDS, client, state, clockEnd - state);
          }
          let index = findIndexSS(structs, clock);
          let struct = structs[index];
          if (!struct.deleted && struct.id.clock < clock) {
            structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
            index++;
          }
          while (index < structs.length) {
            struct = structs[index++];
            if (struct.id.clock < clockEnd) {
              if (!struct.deleted) {
                if (clockEnd < struct.id.clock + struct.length) {
                  structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
                }
                struct.delete(transaction);
              }
            } else {
              break;
            }
          }
        } else {
          addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
        }
      }
    }
    if (unappliedDS.clients.size > 0) {
      const ds = new UpdateEncoderV2();
      writeVarUint(ds.restEncoder, 0);
      writeDeleteSet(ds, unappliedDS);
      return ds.toUint8Array();
    }
    return null;
  };
  const equalDeleteSets = (ds1, ds2) => {
    if (ds1.clients.size !== ds2.clients.size) return false;
    for (const [client, deleteItems1] of ds1.clients.entries()) {
      const deleteItems2 = (
        /** @type {Array<import('../internals.js').DeleteItem>} */
        ds2.clients.get(client)
      );
      if (deleteItems2 === void 0 || deleteItems1.length !== deleteItems2.length) return false;
      for (let i2 = 0; i2 < deleteItems1.length; i2++) {
        const di1 = deleteItems1[i2];
        const di2 = deleteItems2[i2];
        if (di1.clock !== di2.clock || di1.len !== di2.len) {
          return false;
        }
      }
    }
    return true;
  };
  const generateNewClientId = uint32;
  let Doc$1 = class Doc2 extends ObservableV2 {
    /**
     * @param {DocOpts} opts configuration
     */
    constructor({ guid = uuidv4$1(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
      super();
      this.gc = gc;
      this.gcFilter = gcFilter;
      this.clientID = generateNewClientId();
      this.guid = guid;
      this.collectionid = collectionid;
      this.share = /* @__PURE__ */ new Map();
      this.store = new StructStore();
      this._transaction = null;
      this._transactionCleanups = [];
      this.subdocs = /* @__PURE__ */ new Set();
      this._item = null;
      this.shouldLoad = shouldLoad;
      this.autoLoad = autoLoad;
      this.meta = meta;
      this.isLoaded = false;
      this.isSynced = false;
      this.isDestroyed = false;
      this.whenLoaded = create$2((resolve) => {
        this.on("load", () => {
          this.isLoaded = true;
          resolve(this);
        });
      });
      const provideSyncedPromise = () => create$2((resolve) => {
        const eventHandler = (isSynced) => {
          if (isSynced === void 0 || isSynced === true) {
            this.off("sync", eventHandler);
            resolve();
          }
        };
        this.on("sync", eventHandler);
      });
      this.on("sync", (isSynced) => {
        if (isSynced === false && this.isSynced) {
          this.whenSynced = provideSyncedPromise();
        }
        this.isSynced = isSynced === void 0 || isSynced === true;
        if (this.isSynced && !this.isLoaded) {
          this.emit("load", [this]);
        }
      });
      this.whenSynced = provideSyncedPromise();
    }
    /**
     * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
     *
     * `load()` might be used in the future to request any provider to load the most current data.
     *
     * It is safe to call `load()` multiple times.
     */
    load() {
      const item = this._item;
      if (item !== null && !this.shouldLoad) {
        transact(
          /** @type {any} */
          item.parent.doc,
          (transaction) => {
            transaction.subdocsLoaded.add(this);
          },
          null,
          true
        );
      }
      this.shouldLoad = true;
    }
    getSubdocs() {
      return this.subdocs;
    }
    getSubdocGuids() {
      return new Set(from(this.subdocs).map((doc) => doc.guid));
    }
    /**
     * Changes that happen inside of a transaction are bundled. This means that
     * the observer fires _after_ the transaction is finished and that all changes
     * that happened inside of the transaction are sent as one message to the
     * other peers.
     *
     * @template T
     * @param {function(Transaction):T} f The function that should be executed as a transaction
     * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
     * @return T
     *
     * @public
     */
    transact(f2, origin = null) {
      return transact(this, f2, origin);
    }
    /**
     * Define a shared data type.
     *
     * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
     * and do not overwrite each other. I.e.
     * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
     *
     * After this method is called, the type is also available on `ydoc.share.get(name)`.
     *
     * *Best Practices:*
     * Define all types right after the Y.Doc instance is created and store them in a separate object.
     * Also use the typed methods `getText(name)`, `getArray(name)`, ..
     *
     * @template {typeof AbstractType<any>} Type
     * @example
     *   const ydoc = new Y.Doc(..)
     *   const appState = {
     *     document: ydoc.getText('document')
     *     comments: ydoc.getArray('comments')
     *   }
     *
     * @param {string} name
     * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
     * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
     *
     * @public
     */
    get(name, TypeConstructor = (
      /** @type {any} */
      AbstractType
    )) {
      const type = setIfUndefined(this.share, name, () => {
        const t2 = new TypeConstructor();
        t2._integrate(this, null);
        return t2;
      });
      const Constr = type.constructor;
      if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
        if (Constr === AbstractType) {
          const t2 = new TypeConstructor();
          t2._map = type._map;
          type._map.forEach(
            /** @param {Item?} n */
            (n2) => {
              for (; n2 !== null; n2 = n2.left) {
                n2.parent = t2;
              }
            }
          );
          t2._start = type._start;
          for (let n2 = t2._start; n2 !== null; n2 = n2.right) {
            n2.parent = t2;
          }
          t2._length = type._length;
          this.share.set(name, t2);
          t2._integrate(this, null);
          return (
            /** @type {InstanceType<Type>} */
            t2
          );
        } else {
          throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
        }
      }
      return (
        /** @type {InstanceType<Type>} */
        type
      );
    }
    /**
     * @template T
     * @param {string} [name]
     * @return {YArray<T>}
     *
     * @public
     */
    getArray(name = "") {
      return (
        /** @type {YArray<T>} */
        this.get(name, YArray)
      );
    }
    /**
     * @param {string} [name]
     * @return {YText}
     *
     * @public
     */
    getText(name = "") {
      return this.get(name, YText);
    }
    /**
     * @template T
     * @param {string} [name]
     * @return {YMap<T>}
     *
     * @public
     */
    getMap(name = "") {
      return (
        /** @type {YMap<T>} */
        this.get(name, YMap)
      );
    }
    /**
     * @param {string} [name]
     * @return {YXmlElement}
     *
     * @public
     */
    getXmlElement(name = "") {
      return (
        /** @type {YXmlElement<{[key:string]:string}>} */
        this.get(name, YXmlElement)
      );
    }
    /**
     * @param {string} [name]
     * @return {YXmlFragment}
     *
     * @public
     */
    getXmlFragment(name = "") {
      return this.get(name, YXmlFragment);
    }
    /**
     * Converts the entire document into a js object, recursively traversing each yjs type
     * Doesn't log types that have not been defined (using ydoc.getType(..)).
     *
     * @deprecated Do not use this method and rather call toJSON directly on the shared types.
     *
     * @return {Object<string, any>}
     */
    toJSON() {
      const doc = {};
      this.share.forEach((value, key) => {
        doc[key] = value.toJSON();
      });
      return doc;
    }
    /**
     * Emit `destroy` event and unregister all event handlers.
     */
    destroy() {
      this.isDestroyed = true;
      from(this.subdocs).forEach((subdoc) => subdoc.destroy());
      const item = this._item;
      if (item !== null) {
        this._item = null;
        const content = (
          /** @type {ContentDoc} */
          item.content
        );
        content.doc = new Doc2({ guid: this.guid, ...content.opts, shouldLoad: false });
        content.doc._item = item;
        transact(
          /** @type {any} */
          item.parent.doc,
          (transaction) => {
            const doc = content.doc;
            if (!item.deleted) {
              transaction.subdocsAdded.add(doc);
            }
            transaction.subdocsRemoved.add(this);
          },
          null,
          true
        );
      }
      this.emit("destroyed", [true]);
      this.emit("destroy", [this]);
      super.destroy();
    }
  };
  class DSDecoderV1 {
    /**
     * @param {decoding.Decoder} decoder
     */
    constructor(decoder) {
      this.restDecoder = decoder;
    }
    resetDsCurVal() {
    }
    /**
     * @return {number}
     */
    readDsClock() {
      return readVarUint(this.restDecoder);
    }
    /**
     * @return {number}
     */
    readDsLen() {
      return readVarUint(this.restDecoder);
    }
  }
  class UpdateDecoderV1 extends DSDecoderV1 {
    /**
     * @return {ID}
     */
    readLeftID() {
      return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
    }
    /**
     * @return {ID}
     */
    readRightID() {
      return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
    }
    /**
     * Read the next client id.
     * Use this in favor of readID whenever possible to reduce the number of objects created.
     */
    readClient() {
      return readVarUint(this.restDecoder);
    }
    /**
     * @return {number} info An unsigned 8-bit integer
     */
    readInfo() {
      return readUint8(this.restDecoder);
    }
    /**
     * @return {string}
     */
    readString() {
      return readVarString(this.restDecoder);
    }
    /**
     * @return {boolean} isKey
     */
    readParentInfo() {
      return readVarUint(this.restDecoder) === 1;
    }
    /**
     * @return {number} info An unsigned 8-bit integer
     */
    readTypeRef() {
      return readVarUint(this.restDecoder);
    }
    /**
     * Write len of a struct - well suited for Opt RLE encoder.
     *
     * @return {number} len
     */
    readLen() {
      return readVarUint(this.restDecoder);
    }
    /**
     * @return {any}
     */
    readAny() {
      return readAny(this.restDecoder);
    }
    /**
     * @return {Uint8Array}
     */
    readBuf() {
      return copyUint8Array(readVarUint8Array(this.restDecoder));
    }
    /**
     * Legacy implementation uses JSON parse. We use any-decoding in v2.
     *
     * @return {any}
     */
    readJSON() {
      return JSON.parse(readVarString(this.restDecoder));
    }
    /**
     * @return {string}
     */
    readKey() {
      return readVarString(this.restDecoder);
    }
  }
  class DSDecoderV2 {
    /**
     * @param {decoding.Decoder} decoder
     */
    constructor(decoder) {
      this.dsCurrVal = 0;
      this.restDecoder = decoder;
    }
    resetDsCurVal() {
      this.dsCurrVal = 0;
    }
    /**
     * @return {number}
     */
    readDsClock() {
      this.dsCurrVal += readVarUint(this.restDecoder);
      return this.dsCurrVal;
    }
    /**
     * @return {number}
     */
    readDsLen() {
      const diff = readVarUint(this.restDecoder) + 1;
      this.dsCurrVal += diff;
      return diff;
    }
  }
  class UpdateDecoderV2 extends DSDecoderV2 {
    /**
     * @param {decoding.Decoder} decoder
     */
    constructor(decoder) {
      super(decoder);
      this.keys = [];
      readVarUint(decoder);
      this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
      this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
      this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
      this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
      this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
      this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
      this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
      this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
      this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    }
    /**
     * @return {ID}
     */
    readLeftID() {
      return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
    }
    /**
     * @return {ID}
     */
    readRightID() {
      return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
    }
    /**
     * Read the next client id.
     * Use this in favor of readID whenever possible to reduce the number of objects created.
     */
    readClient() {
      return this.clientDecoder.read();
    }
    /**
     * @return {number} info An unsigned 8-bit integer
     */
    readInfo() {
      return (
        /** @type {number} */
        this.infoDecoder.read()
      );
    }
    /**
     * @return {string}
     */
    readString() {
      return this.stringDecoder.read();
    }
    /**
     * @return {boolean}
     */
    readParentInfo() {
      return this.parentInfoDecoder.read() === 1;
    }
    /**
     * @return {number} An unsigned 8-bit integer
     */
    readTypeRef() {
      return this.typeRefDecoder.read();
    }
    /**
     * Write len of a struct - well suited for Opt RLE encoder.
     *
     * @return {number}
     */
    readLen() {
      return this.lenDecoder.read();
    }
    /**
     * @return {any}
     */
    readAny() {
      return readAny(this.restDecoder);
    }
    /**
     * @return {Uint8Array}
     */
    readBuf() {
      return readVarUint8Array(this.restDecoder);
    }
    /**
     * This is mainly here for legacy purposes.
     *
     * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
     *
     * @return {any}
     */
    readJSON() {
      return readAny(this.restDecoder);
    }
    /**
     * @return {string}
     */
    readKey() {
      const keyClock = this.keyClockDecoder.read();
      if (keyClock < this.keys.length) {
        return this.keys[keyClock];
      } else {
        const key = this.stringDecoder.read();
        this.keys.push(key);
        return key;
      }
    }
  }
  class DSEncoderV1 {
    constructor() {
      this.restEncoder = createEncoder();
    }
    toUint8Array() {
      return toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
    }
    /**
     * @param {number} clock
     */
    writeDsClock(clock) {
      writeVarUint(this.restEncoder, clock);
    }
    /**
     * @param {number} len
     */
    writeDsLen(len) {
      writeVarUint(this.restEncoder, len);
    }
  }
  class UpdateEncoderV1 extends DSEncoderV1 {
    /**
     * @param {ID} id
     */
    writeLeftID(id2) {
      writeVarUint(this.restEncoder, id2.client);
      writeVarUint(this.restEncoder, id2.clock);
    }
    /**
     * @param {ID} id
     */
    writeRightID(id2) {
      writeVarUint(this.restEncoder, id2.client);
      writeVarUint(this.restEncoder, id2.clock);
    }
    /**
     * Use writeClient and writeClock instead of writeID if possible.
     * @param {number} client
     */
    writeClient(client) {
      writeVarUint(this.restEncoder, client);
    }
    /**
     * @param {number} info An unsigned 8-bit integer
     */
    writeInfo(info) {
      writeUint8(this.restEncoder, info);
    }
    /**
     * @param {string} s
     */
    writeString(s2) {
      writeVarString(this.restEncoder, s2);
    }
    /**
     * @param {boolean} isYKey
     */
    writeParentInfo(isYKey) {
      writeVarUint(this.restEncoder, isYKey ? 1 : 0);
    }
    /**
     * @param {number} info An unsigned 8-bit integer
     */
    writeTypeRef(info) {
      writeVarUint(this.restEncoder, info);
    }
    /**
     * Write len of a struct - well suited for Opt RLE encoder.
     *
     * @param {number} len
     */
    writeLen(len) {
      writeVarUint(this.restEncoder, len);
    }
    /**
     * @param {any} any
     */
    writeAny(any2) {
      writeAny(this.restEncoder, any2);
    }
    /**
     * @param {Uint8Array} buf
     */
    writeBuf(buf) {
      writeVarUint8Array(this.restEncoder, buf);
    }
    /**
     * @param {any} embed
     */
    writeJSON(embed) {
      writeVarString(this.restEncoder, JSON.stringify(embed));
    }
    /**
     * @param {string} key
     */
    writeKey(key) {
      writeVarString(this.restEncoder, key);
    }
  }
  class DSEncoderV2 {
    constructor() {
      this.restEncoder = createEncoder();
      this.dsCurrVal = 0;
    }
    toUint8Array() {
      return toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
      this.dsCurrVal = 0;
    }
    /**
     * @param {number} clock
     */
    writeDsClock(clock) {
      const diff = clock - this.dsCurrVal;
      this.dsCurrVal = clock;
      writeVarUint(this.restEncoder, diff);
    }
    /**
     * @param {number} len
     */
    writeDsLen(len) {
      if (len === 0) {
        unexpectedCase();
      }
      writeVarUint(this.restEncoder, len - 1);
      this.dsCurrVal += len;
    }
  }
  class UpdateEncoderV2 extends DSEncoderV2 {
    constructor() {
      super();
      this.keyMap = /* @__PURE__ */ new Map();
      this.keyClock = 0;
      this.keyClockEncoder = new IntDiffOptRleEncoder();
      this.clientEncoder = new UintOptRleEncoder();
      this.leftClockEncoder = new IntDiffOptRleEncoder();
      this.rightClockEncoder = new IntDiffOptRleEncoder();
      this.infoEncoder = new RleEncoder(writeUint8);
      this.stringEncoder = new StringEncoder();
      this.parentInfoEncoder = new RleEncoder(writeUint8);
      this.typeRefEncoder = new UintOptRleEncoder();
      this.lenEncoder = new UintOptRleEncoder();
    }
    toUint8Array() {
      const encoder = createEncoder();
      writeVarUint(encoder, 0);
      writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
      writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
      writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
      writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
      writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
      writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
      writeUint8Array(encoder, toUint8Array(this.restEncoder));
      return toUint8Array(encoder);
    }
    /**
     * @param {ID} id
     */
    writeLeftID(id2) {
      this.clientEncoder.write(id2.client);
      this.leftClockEncoder.write(id2.clock);
    }
    /**
     * @param {ID} id
     */
    writeRightID(id2) {
      this.clientEncoder.write(id2.client);
      this.rightClockEncoder.write(id2.clock);
    }
    /**
     * @param {number} client
     */
    writeClient(client) {
      this.clientEncoder.write(client);
    }
    /**
     * @param {number} info An unsigned 8-bit integer
     */
    writeInfo(info) {
      this.infoEncoder.write(info);
    }
    /**
     * @param {string} s
     */
    writeString(s2) {
      this.stringEncoder.write(s2);
    }
    /**
     * @param {boolean} isYKey
     */
    writeParentInfo(isYKey) {
      this.parentInfoEncoder.write(isYKey ? 1 : 0);
    }
    /**
     * @param {number} info An unsigned 8-bit integer
     */
    writeTypeRef(info) {
      this.typeRefEncoder.write(info);
    }
    /**
     * Write len of a struct - well suited for Opt RLE encoder.
     *
     * @param {number} len
     */
    writeLen(len) {
      this.lenEncoder.write(len);
    }
    /**
     * @param {any} any
     */
    writeAny(any2) {
      writeAny(this.restEncoder, any2);
    }
    /**
     * @param {Uint8Array} buf
     */
    writeBuf(buf) {
      writeVarUint8Array(this.restEncoder, buf);
    }
    /**
     * This is mainly here for legacy purposes.
     *
     * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
     *
     * @param {any} embed
     */
    writeJSON(embed) {
      writeAny(this.restEncoder, embed);
    }
    /**
     * Property keys are often reused. For example, in y-prosemirror the key `bold` might
     * occur very often. For a 3d application, the key `position` might occur very often.
     *
     * We cache these keys in a Map and refer to them via a unique number.
     *
     * @param {string} key
     */
    writeKey(key) {
      const clock = this.keyMap.get(key);
      if (clock === void 0) {
        this.keyClockEncoder.write(this.keyClock++);
        this.stringEncoder.write(key);
      } else {
        this.keyClockEncoder.write(clock);
      }
    }
  }
  const writeStructs = (encoder, structs, client, clock) => {
    clock = max(clock, structs[0].id.clock);
    const startNewStructs = findIndexSS(structs, clock);
    writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
    encoder.writeClient(client);
    writeVarUint(encoder.restEncoder, clock);
    const firstStruct = structs[startNewStructs];
    firstStruct.write(encoder, clock - firstStruct.id.clock);
    for (let i2 = startNewStructs + 1; i2 < structs.length; i2++) {
      structs[i2].write(encoder, 0);
    }
  };
  const writeClientsStructs = (encoder, store2, _sm) => {
    const sm = /* @__PURE__ */ new Map();
    _sm.forEach((clock, client) => {
      if (getState(store2, client) > clock) {
        sm.set(client, clock);
      }
    });
    getStateVector(store2).forEach((_clock, client) => {
      if (!_sm.has(client)) {
        sm.set(client, 0);
      }
    });
    writeVarUint(encoder.restEncoder, sm.size);
    from(sm.entries()).sort((a2, b2) => b2[0] - a2[0]).forEach(([client, clock]) => {
      writeStructs(
        encoder,
        /** @type {Array<GC|Item>} */
        store2.clients.get(client),
        client,
        clock
      );
    });
  };
  const readClientsStructRefs = (decoder, doc) => {
    const clientRefs = create$4();
    const numOfStateUpdates = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numOfStateUpdates; i2++) {
      const numberOfStructs = readVarUint(decoder.restDecoder);
      const refs = new Array(numberOfStructs);
      const client = decoder.readClient();
      let clock = readVarUint(decoder.restDecoder);
      clientRefs.set(client, { i: 0, refs });
      for (let i3 = 0; i3 < numberOfStructs; i3++) {
        const info = decoder.readInfo();
        switch (BITS5 & info) {
          case 0: {
            const len = decoder.readLen();
            refs[i3] = new GC(createID(client, clock), len);
            clock += len;
            break;
          }
          case 10: {
            const len = readVarUint(decoder.restDecoder);
            refs[i3] = new Skip(createID(client, clock), len);
            clock += len;
            break;
          }
          default: {
            const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
            const struct = new Item(
              createID(client, clock),
              null,
              // left
              (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
              // origin
              null,
              // right
              (info & BIT7) === BIT7 ? decoder.readRightID() : null,
              // right origin
              cantCopyParentInfo ? decoder.readParentInfo() ? doc.get(decoder.readString()) : decoder.readLeftID() : null,
              // parent
              cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
              // parentSub
              readItemContent(decoder, info)
              // item content
            );
            refs[i3] = struct;
            clock += struct.length;
          }
        }
      }
    }
    return clientRefs;
  };
  const integrateStructs = (transaction, store2, clientsStructRefs) => {
    const stack = [];
    let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a2, b2) => a2 - b2);
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    const getNextStructTarget = () => {
      if (clientsStructRefsIds.length === 0) {
        return null;
      }
      let nextStructsTarget = (
        /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
      );
      while (nextStructsTarget.refs.length === nextStructsTarget.i) {
        clientsStructRefsIds.pop();
        if (clientsStructRefsIds.length > 0) {
          nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
          clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
        } else {
          return null;
        }
      }
      return nextStructsTarget;
    };
    let curStructsTarget = getNextStructTarget();
    if (curStructsTarget === null) {
      return null;
    }
    const restStructs = new StructStore();
    const missingSV = /* @__PURE__ */ new Map();
    const updateMissingSv = (client, clock) => {
      const mclock = missingSV.get(client);
      if (mclock == null || mclock > clock) {
        missingSV.set(client, clock);
      }
    };
    let stackHead = (
      /** @type {any} */
      curStructsTarget.refs[
        /** @type {any} */
        curStructsTarget.i++
      ]
    );
    const state = /* @__PURE__ */ new Map();
    const addStackToRestSS = () => {
      for (const item of stack) {
        const client = item.id.client;
        const inapplicableItems = clientsStructRefs.get(client);
        if (inapplicableItems) {
          inapplicableItems.i--;
          restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
          clientsStructRefs.delete(client);
          inapplicableItems.i = 0;
          inapplicableItems.refs = [];
        } else {
          restStructs.clients.set(client, [item]);
        }
        clientsStructRefsIds = clientsStructRefsIds.filter((c2) => c2 !== client);
      }
      stack.length = 0;
    };
    while (true) {
      if (stackHead.constructor !== Skip) {
        const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store2, stackHead.id.client));
        const offset = localClock - stackHead.id.clock;
        if (offset < 0) {
          stack.push(stackHead);
          updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
          addStackToRestSS();
        } else {
          const missing = stackHead.getMissing(transaction, store2);
          if (missing !== null) {
            stack.push(stackHead);
            const structRefs = clientsStructRefs.get(
              /** @type {number} */
              missing
            ) || { refs: [], i: 0 };
            if (structRefs.refs.length === structRefs.i) {
              updateMissingSv(
                /** @type {number} */
                missing,
                getState(store2, missing)
              );
              addStackToRestSS();
            } else {
              stackHead = structRefs.refs[structRefs.i++];
              continue;
            }
          } else if (offset === 0 || offset < stackHead.length) {
            stackHead.integrate(transaction, offset);
            state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
          }
        }
      }
      if (stack.length > 0) {
        stackHead = /** @type {GC|Item} */
        stack.pop();
      } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      } else {
        curStructsTarget = getNextStructTarget();
        if (curStructsTarget === null) {
          break;
        } else {
          stackHead = /** @type {GC|Item} */
          curStructsTarget.refs[curStructsTarget.i++];
        }
      }
    }
    if (restStructs.clients.size > 0) {
      const encoder = new UpdateEncoderV2();
      writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
      writeVarUint(encoder.restEncoder, 0);
      return { missing: missingSV, update: encoder.toUint8Array() };
    }
    return null;
  };
  const writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
  const readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
    transaction.local = false;
    let retry = false;
    const doc = transaction.doc;
    const store2 = doc.store;
    const ss = readClientsStructRefs(structDecoder, doc);
    const restStructs = integrateStructs(transaction, store2, ss);
    const pending = store2.pendingStructs;
    if (pending) {
      for (const [client, clock] of pending.missing) {
        if (clock < getState(store2, client)) {
          retry = true;
          break;
        }
      }
      if (restStructs) {
        for (const [client, clock] of restStructs.missing) {
          const mclock = pending.missing.get(client);
          if (mclock == null || mclock > clock) {
            pending.missing.set(client, clock);
          }
        }
        pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
      }
    } else {
      store2.pendingStructs = restStructs;
    }
    const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store2);
    if (store2.pendingDs) {
      const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store2.pendingDs));
      readVarUint(pendingDSUpdate.restDecoder);
      const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store2);
      if (dsRest && dsRest2) {
        store2.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
      } else {
        store2.pendingDs = dsRest || dsRest2;
      }
    } else {
      store2.pendingDs = dsRest;
    }
    if (retry) {
      const update = (
        /** @type {{update: Uint8Array}} */
        store2.pendingStructs.update
      );
      store2.pendingStructs = null;
      applyUpdateV2(transaction.doc, update);
    }
  }, transactionOrigin, false);
  const readUpdate = (decoder, ydoc, transactionOrigin) => readUpdateV2(decoder, ydoc, transactionOrigin, new UpdateDecoderV1(decoder));
  const applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
    const decoder = createDecoder(update);
    readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
  };
  const applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
  const writeStateAsUpdate = (encoder, doc, targetStateVector = /* @__PURE__ */ new Map()) => {
    writeClientsStructs(encoder, doc.store, targetStateVector);
    writeDeleteSet(encoder, createDeleteSetFromStructStore(doc.store));
  };
  const encodeStateAsUpdateV2 = (doc, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
    const targetStateVector = decodeStateVector(encodedTargetStateVector);
    writeStateAsUpdate(encoder, doc, targetStateVector);
    const updates = [encoder.toUint8Array()];
    if (doc.store.pendingDs) {
      updates.push(doc.store.pendingDs);
    }
    if (doc.store.pendingStructs) {
      updates.push(diffUpdateV2(doc.store.pendingStructs.update, encodedTargetStateVector));
    }
    if (updates.length > 1) {
      if (encoder.constructor === UpdateEncoderV1) {
        return mergeUpdates(updates.map((update, i2) => i2 === 0 ? update : convertUpdateFormatV2ToV1(update)));
      } else if (encoder.constructor === UpdateEncoderV2) {
        return mergeUpdatesV2(updates);
      }
    }
    return updates[0];
  };
  const encodeStateAsUpdate = (doc, encodedTargetStateVector) => encodeStateAsUpdateV2(doc, encodedTargetStateVector, new UpdateEncoderV1());
  const readStateVector = (decoder) => {
    const ss = /* @__PURE__ */ new Map();
    const ssLength = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < ssLength; i2++) {
      const client = readVarUint(decoder.restDecoder);
      const clock = readVarUint(decoder.restDecoder);
      ss.set(client, clock);
    }
    return ss;
  };
  const decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
  const writeStateVector = (encoder, sv) => {
    writeVarUint(encoder.restEncoder, sv.size);
    from(sv.entries()).sort((a2, b2) => b2[0] - a2[0]).forEach(([client, clock]) => {
      writeVarUint(encoder.restEncoder, client);
      writeVarUint(encoder.restEncoder, clock);
    });
    return encoder;
  };
  const writeDocumentStateVector = (encoder, doc) => writeStateVector(encoder, getStateVector(doc.store));
  const encodeStateVectorV2 = (doc, encoder = new DSEncoderV2()) => {
    if (doc instanceof Map) {
      writeStateVector(encoder, doc);
    } else {
      writeDocumentStateVector(encoder, doc);
    }
    return encoder.toUint8Array();
  };
  const encodeStateVector = (doc) => encodeStateVectorV2(doc, new DSEncoderV1());
  class EventHandler {
    constructor() {
      this.l = [];
    }
  }
  const createEventHandler = () => new EventHandler();
  const addEventHandlerListener = (eventHandler, f2) => eventHandler.l.push(f2);
  const removeEventHandlerListener = (eventHandler, f2) => {
    const l2 = eventHandler.l;
    const len = l2.length;
    eventHandler.l = l2.filter((g2) => f2 !== g2);
    if (len === eventHandler.l.length) {
      console.error("[yjs] Tried to remove event handler that doesn't exist.");
    }
  };
  const callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
  class ID {
    /**
     * @param {number} client client id
     * @param {number} clock unique per client id, continuous number
     */
    constructor(client, clock) {
      this.client = client;
      this.clock = clock;
    }
  }
  const compareIDs = (a2, b2) => a2 === b2 || a2 !== null && b2 !== null && a2.client === b2.client && a2.clock === b2.clock;
  const createID = (client, clock) => new ID(client, clock);
  const writeID = (encoder, id2) => {
    writeVarUint(encoder, id2.client);
    writeVarUint(encoder, id2.clock);
  };
  const readID = (decoder) => createID(readVarUint(decoder), readVarUint(decoder));
  const findRootTypeKey = (type) => {
    for (const [key, value] of type.doc.share.entries()) {
      if (value === type) {
        return key;
      }
    }
    throw unexpectedCase();
  };
  const isParentOf = (parent, child) => {
    while (child !== null) {
      if (child.parent === parent) {
        return true;
      }
      child = /** @type {AbstractType<any>} */
      child.parent._item;
    }
    return false;
  };
  const logType = (type) => {
    const res = [];
    let n2 = type._start;
    while (n2) {
      res.push(n2);
      n2 = n2.right;
    }
    console.log("Children: ", res);
    console.log("Children content: ", res.filter((m2) => !m2.deleted).map((m2) => m2.content));
  };
  class PermanentUserData {
    /**
     * @param {Doc} doc
     * @param {YMap<any>} [storeType]
     */
    constructor(doc, storeType = doc.getMap("users")) {
      const dss = /* @__PURE__ */ new Map();
      this.yusers = storeType;
      this.doc = doc;
      this.clients = /* @__PURE__ */ new Map();
      this.dss = dss;
      const initUser = (user, userDescription) => {
        const ds = user.get("ds");
        const ids = user.get("ids");
        const addClientId = (
          /** @param {number} clientid */
          (clientid) => this.clients.set(clientid, userDescription)
        );
        ds.observe(
          /** @param {YArrayEvent<any>} event */
          (event) => {
            event.changes.added.forEach((item) => {
              item.content.getContent().forEach((encodedDs) => {
                if (encodedDs instanceof Uint8Array) {
                  this.dss.set(userDescription, mergeDeleteSets([this.dss.get(userDescription) || createDeleteSet(), readDeleteSet(new DSDecoderV1(createDecoder(encodedDs)))]));
                }
              });
            });
          }
        );
        this.dss.set(userDescription, mergeDeleteSets(ds.map((encodedDs) => readDeleteSet(new DSDecoderV1(createDecoder(encodedDs))))));
        ids.observe(
          /** @param {YArrayEvent<any>} event */
          (event) => event.changes.added.forEach((item) => item.content.getContent().forEach(addClientId))
        );
        ids.forEach(addClientId);
      };
      storeType.observe((event) => {
        event.keysChanged.forEach(
          (userDescription) => initUser(storeType.get(userDescription), userDescription)
        );
      });
      storeType.forEach(initUser);
    }
    /**
     * @param {Doc} doc
     * @param {number} clientid
     * @param {string} userDescription
     * @param {Object} conf
     * @param {function(Transaction, DeleteSet):boolean} [conf.filter]
     */
    setUserMapping(doc, clientid, userDescription, { filter: filter2 = () => true } = {}) {
      const users = this.yusers;
      let user = users.get(userDescription);
      if (!user) {
        user = new YMap();
        user.set("ids", new YArray());
        user.set("ds", new YArray());
        users.set(userDescription, user);
      }
      user.get("ids").push([clientid]);
      users.observe((_event) => {
        setTimeout(() => {
          const userOverwrite = users.get(userDescription);
          if (userOverwrite !== user) {
            user = userOverwrite;
            this.clients.forEach((_userDescription, clientid2) => {
              if (userDescription === _userDescription) {
                user.get("ids").push([clientid2]);
              }
            });
            const encoder = new DSEncoderV1();
            const ds = this.dss.get(userDescription);
            if (ds) {
              writeDeleteSet(encoder, ds);
              user.get("ds").push([encoder.toUint8Array()]);
            }
          }
        }, 0);
      });
      doc.on(
        "afterTransaction",
        /** @param {Transaction} transaction */
        (transaction) => {
          setTimeout(() => {
            const yds = user.get("ds");
            const ds = transaction.deleteSet;
            if (transaction.local && ds.clients.size > 0 && filter2(transaction, ds)) {
              const encoder = new DSEncoderV1();
              writeDeleteSet(encoder, ds);
              yds.push([encoder.toUint8Array()]);
            }
          });
        }
      );
    }
    /**
     * @param {number} clientid
     * @return {any}
     */
    getUserByClientId(clientid) {
      return this.clients.get(clientid) || null;
    }
    /**
     * @param {ID} id
     * @return {string | null}
     */
    getUserByDeletedId(id2) {
      for (const [userDescription, ds] of this.dss.entries()) {
        if (isDeleted(ds, id2)) {
          return userDescription;
        }
      }
      return null;
    }
  }
  class RelativePosition {
    /**
     * @param {ID|null} type
     * @param {string|null} tname
     * @param {ID|null} item
     * @param {number} assoc
     */
    constructor(type, tname, item, assoc = 0) {
      this.type = type;
      this.tname = tname;
      this.item = item;
      this.assoc = assoc;
    }
  }
  const relativePositionToJSON = (rpos) => {
    const json = {};
    if (rpos.type) {
      json.type = rpos.type;
    }
    if (rpos.tname) {
      json.tname = rpos.tname;
    }
    if (rpos.item) {
      json.item = rpos.item;
    }
    if (rpos.assoc != null) {
      json.assoc = rpos.assoc;
    }
    return json;
  };
  const createRelativePositionFromJSON = (json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname ?? null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
  class AbsolutePosition {
    /**
     * @param {AbstractType<any>} type
     * @param {number} index
     * @param {number} [assoc]
     */
    constructor(type, index, assoc = 0) {
      this.type = type;
      this.index = index;
      this.assoc = assoc;
    }
  }
  const createAbsolutePosition = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
  const createRelativePosition = (type, item, assoc) => {
    let typeid = null;
    let tname = null;
    if (type._item === null) {
      tname = findRootTypeKey(type);
    } else {
      typeid = createID(type._item.id.client, type._item.id.clock);
    }
    return new RelativePosition(typeid, tname, item, assoc);
  };
  const createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
    let t2 = type._start;
    if (assoc < 0) {
      if (index === 0) {
        return createRelativePosition(type, null, assoc);
      }
      index--;
    }
    while (t2 !== null) {
      if (!t2.deleted && t2.countable) {
        if (t2.length > index) {
          return createRelativePosition(type, createID(t2.id.client, t2.id.clock + index), assoc);
        }
        index -= t2.length;
      }
      if (t2.right === null && assoc < 0) {
        return createRelativePosition(type, t2.lastId, assoc);
      }
      t2 = t2.right;
    }
    return createRelativePosition(type, null, assoc);
  };
  const writeRelativePosition = (encoder, rpos) => {
    const { type, tname, item, assoc } = rpos;
    if (item !== null) {
      writeVarUint(encoder, 0);
      writeID(encoder, item);
    } else if (tname !== null) {
      writeUint8(encoder, 1);
      writeVarString(encoder, tname);
    } else if (type !== null) {
      writeUint8(encoder, 2);
      writeID(encoder, type);
    } else {
      throw unexpectedCase();
    }
    writeVarInt(encoder, assoc);
    return encoder;
  };
  const encodeRelativePosition = (rpos) => {
    const encoder = createEncoder();
    writeRelativePosition(encoder, rpos);
    return toUint8Array(encoder);
  };
  const readRelativePosition = (decoder) => {
    let type = null;
    let tname = null;
    let itemID = null;
    switch (readVarUint(decoder)) {
      case 0:
        itemID = readID(decoder);
        break;
      case 1:
        tname = readVarString(decoder);
        break;
      case 2: {
        type = readID(decoder);
      }
    }
    const assoc = hasContent(decoder) ? readVarInt(decoder) : 0;
    return new RelativePosition(type, tname, itemID, assoc);
  };
  const decodeRelativePosition = (uint8Array) => readRelativePosition(createDecoder(uint8Array));
  const getItemWithOffset = (store2, id2) => {
    const item = getItem(store2, id2);
    const diff = id2.clock - item.id.clock;
    return {
      item,
      diff
    };
  };
  const createAbsolutePositionFromRelativePosition = (rpos, doc, followUndoneDeletions = true) => {
    const store2 = doc.store;
    const rightID = rpos.item;
    const typeID = rpos.type;
    const tname = rpos.tname;
    const assoc = rpos.assoc;
    let type = null;
    let index = 0;
    if (rightID !== null) {
      if (getState(store2, rightID.client) <= rightID.clock) {
        return null;
      }
      const res = followUndoneDeletions ? followRedone(store2, rightID) : getItemWithOffset(store2, rightID);
      const right = res.item;
      if (!(right instanceof Item)) {
        return null;
      }
      type = /** @type {AbstractType<any>} */
      right.parent;
      if (type._item === null || !type._item.deleted) {
        index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
        let n2 = right.left;
        while (n2 !== null) {
          if (!n2.deleted && n2.countable) {
            index += n2.length;
          }
          n2 = n2.left;
        }
      }
    } else {
      if (tname !== null) {
        type = doc.get(tname);
      } else if (typeID !== null) {
        if (getState(store2, typeID.client) <= typeID.clock) {
          return null;
        }
        const { item } = followUndoneDeletions ? followRedone(store2, typeID) : { item: getItem(store2, typeID) };
        if (item instanceof Item && item.content instanceof ContentType) {
          type = item.content.type;
        } else {
          return null;
        }
      } else {
        throw unexpectedCase();
      }
      if (assoc >= 0) {
        index = type._length;
      } else {
        index = 0;
      }
    }
    return createAbsolutePosition(type, index, rpos.assoc);
  };
  const compareRelativePositions = (a2, b2) => a2 === b2 || a2 !== null && b2 !== null && a2.tname === b2.tname && compareIDs(a2.item, b2.item) && compareIDs(a2.type, b2.type) && a2.assoc === b2.assoc;
  class Snapshot {
    /**
     * @param {DeleteSet} ds
     * @param {Map<number,number>} sv state map
     */
    constructor(ds, sv) {
      this.ds = ds;
      this.sv = sv;
    }
  }
  const equalSnapshots = (snap1, snap2) => {
    const ds1 = snap1.ds.clients;
    const ds2 = snap2.ds.clients;
    const sv1 = snap1.sv;
    const sv2 = snap2.sv;
    if (sv1.size !== sv2.size || ds1.size !== ds2.size) {
      return false;
    }
    for (const [key, value] of sv1.entries()) {
      if (sv2.get(key) !== value) {
        return false;
      }
    }
    for (const [client, dsitems1] of ds1.entries()) {
      const dsitems2 = ds2.get(client) || [];
      if (dsitems1.length !== dsitems2.length) {
        return false;
      }
      for (let i2 = 0; i2 < dsitems1.length; i2++) {
        const dsitem1 = dsitems1[i2];
        const dsitem2 = dsitems2[i2];
        if (dsitem1.clock !== dsitem2.clock || dsitem1.len !== dsitem2.len) {
          return false;
        }
      }
    }
    return true;
  };
  const encodeSnapshotV2 = (snapshot2, encoder = new DSEncoderV2()) => {
    writeDeleteSet(encoder, snapshot2.ds);
    writeStateVector(encoder, snapshot2.sv);
    return encoder.toUint8Array();
  };
  const encodeSnapshot = (snapshot2) => encodeSnapshotV2(snapshot2, new DSEncoderV1());
  const decodeSnapshotV2 = (buf, decoder = new DSDecoderV2(createDecoder(buf))) => {
    return new Snapshot(readDeleteSet(decoder), readStateVector(decoder));
  };
  const decodeSnapshot = (buf) => decodeSnapshotV2(buf, new DSDecoderV1(createDecoder(buf)));
  const createSnapshot = (ds, sm) => new Snapshot(ds, sm);
  const emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
  const snapshot = (doc) => createSnapshot(createDeleteSetFromStructStore(doc.store), getStateVector(doc.store));
  const isVisible = (item, snapshot2) => snapshot2 === void 0 ? !item.deleted : snapshot2.sv.has(item.id.client) && (snapshot2.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot2.ds, item.id);
  const splitSnapshotAffectedStructs = (transaction, snapshot2) => {
    const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create$5);
    const store2 = transaction.doc.store;
    if (!meta.has(snapshot2)) {
      snapshot2.sv.forEach((clock, client) => {
        if (clock < getState(store2, client)) {
          getItemCleanStart(transaction, createID(client, clock));
        }
      });
      iterateDeletedStructs(transaction, snapshot2.ds, (_item) => {
      });
      meta.add(snapshot2);
    }
  };
  const createDocFromSnapshot = (originDoc, snapshot2, newDoc = new Doc$1()) => {
    if (originDoc.gc) {
      throw new Error("Garbage-collection must be disabled in `originDoc`!");
    }
    const { sv, ds } = snapshot2;
    const encoder = new UpdateEncoderV2();
    originDoc.transact((transaction) => {
      let size2 = 0;
      sv.forEach((clock) => {
        if (clock > 0) {
          size2++;
        }
      });
      writeVarUint(encoder.restEncoder, size2);
      for (const [client, clock] of sv) {
        if (clock === 0) {
          continue;
        }
        if (clock < getState(originDoc.store, client)) {
          getItemCleanStart(transaction, createID(client, clock));
        }
        const structs = originDoc.store.clients.get(client) || [];
        const lastStructIndex = findIndexSS(structs, clock - 1);
        writeVarUint(encoder.restEncoder, lastStructIndex + 1);
        encoder.writeClient(client);
        writeVarUint(encoder.restEncoder, 0);
        for (let i2 = 0; i2 <= lastStructIndex; i2++) {
          structs[i2].write(encoder, 0);
        }
      }
      writeDeleteSet(encoder, ds);
    });
    applyUpdateV2(newDoc, encoder.toUint8Array(), "snapshot");
    return newDoc;
  };
  const snapshotContainsUpdateV2 = (snapshot2, update, YDecoder = UpdateDecoderV2) => {
    const updateDecoder = new YDecoder(createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
      if ((snapshot2.sv.get(curr.id.client) || 0) < curr.id.clock + curr.length) {
        return false;
      }
    }
    const mergedDS = mergeDeleteSets([snapshot2.ds, readDeleteSet(updateDecoder)]);
    return equalDeleteSets(snapshot2.ds, mergedDS);
  };
  const snapshotContainsUpdate = (snapshot2, update) => snapshotContainsUpdateV2(snapshot2, update, UpdateDecoderV1);
  class StructStore {
    constructor() {
      this.clients = /* @__PURE__ */ new Map();
      this.pendingStructs = null;
      this.pendingDs = null;
    }
  }
  const getStateVector = (store2) => {
    const sm = /* @__PURE__ */ new Map();
    store2.clients.forEach((structs, client) => {
      const struct = structs[structs.length - 1];
      sm.set(client, struct.id.clock + struct.length);
    });
    return sm;
  };
  const getState = (store2, client) => {
    const structs = store2.clients.get(client);
    if (structs === void 0) {
      return 0;
    }
    const lastStruct = structs[structs.length - 1];
    return lastStruct.id.clock + lastStruct.length;
  };
  const addStruct = (store2, struct) => {
    let structs = store2.clients.get(struct.id.client);
    if (structs === void 0) {
      structs = [];
      store2.clients.set(struct.id.client, structs);
    } else {
      const lastStruct = structs[structs.length - 1];
      if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
        throw unexpectedCase();
      }
    }
    structs.push(struct);
  };
  const findIndexSS = (structs, clock) => {
    let left = 0;
    let right = structs.length - 1;
    let mid = structs[right];
    let midclock = mid.id.clock;
    if (midclock === clock) {
      return right;
    }
    let midindex = floor(clock / (midclock + mid.length - 1) * right);
    while (left <= right) {
      mid = structs[midindex];
      midclock = mid.id.clock;
      if (midclock <= clock) {
        if (clock < midclock + mid.length) {
          return midindex;
        }
        left = midindex + 1;
      } else {
        right = midindex - 1;
      }
      midindex = floor((left + right) / 2);
    }
    throw unexpectedCase();
  };
  const find = (store2, id2) => {
    const structs = store2.clients.get(id2.client);
    return structs[findIndexSS(structs, id2.clock)];
  };
  const getItem = (
    /** @type {function(StructStore,ID):Item} */
    find
  );
  const findIndexCleanStart = (transaction, structs, clock) => {
    const index = findIndexSS(structs, clock);
    const struct = structs[index];
    if (struct.id.clock < clock && struct instanceof Item) {
      structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
      return index + 1;
    }
    return index;
  };
  const getItemCleanStart = (transaction, id2) => {
    const structs = (
      /** @type {Array<Item>} */
      transaction.doc.store.clients.get(id2.client)
    );
    return structs[findIndexCleanStart(transaction, structs, id2.clock)];
  };
  const getItemCleanEnd = (transaction, store2, id2) => {
    const structs = store2.clients.get(id2.client);
    const index = findIndexSS(structs, id2.clock);
    const struct = structs[index];
    if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
      structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
    }
    return struct;
  };
  const replaceStruct = (store2, struct, newStruct) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store2.clients.get(struct.id.client)
    );
    structs[findIndexSS(structs, struct.id.clock)] = newStruct;
  };
  const iterateStructs = (transaction, structs, clockStart, len, f2) => {
    if (len === 0) {
      return;
    }
    const clockEnd = clockStart + len;
    let index = findIndexCleanStart(transaction, structs, clockStart);
    let struct;
    do {
      struct = structs[index++];
      if (clockEnd < struct.id.clock + struct.length) {
        findIndexCleanStart(transaction, structs, clockEnd);
      }
      f2(struct);
    } while (index < structs.length && structs[index].id.clock < clockEnd);
  };
  class Transaction {
    /**
     * @param {Doc} doc
     * @param {any} origin
     * @param {boolean} local
     */
    constructor(doc, origin, local) {
      this.doc = doc;
      this.deleteSet = new DeleteSet();
      this.beforeState = getStateVector(doc.store);
      this.afterState = /* @__PURE__ */ new Map();
      this.changed = /* @__PURE__ */ new Map();
      this.changedParentTypes = /* @__PURE__ */ new Map();
      this._mergeStructs = [];
      this.origin = origin;
      this.meta = /* @__PURE__ */ new Map();
      this.local = local;
      this.subdocsAdded = /* @__PURE__ */ new Set();
      this.subdocsRemoved = /* @__PURE__ */ new Set();
      this.subdocsLoaded = /* @__PURE__ */ new Set();
      this._needFormattingCleanup = false;
    }
  }
  const writeUpdateMessageFromTransaction = (encoder, transaction) => {
    if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
      return false;
    }
    sortAndMergeDeleteSet(transaction.deleteSet);
    writeStructsFromTransaction(encoder, transaction);
    writeDeleteSet(encoder, transaction.deleteSet);
    return true;
  };
  const addChangedTypeToTransaction = (transaction, type, parentSub) => {
    const item = type._item;
    if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
      setIfUndefined(transaction.changed, type, create$5).add(parentSub);
    }
  };
  const tryToMergeWithLefts = (structs, pos) => {
    let right = structs[pos];
    let left = structs[pos - 1];
    let i2 = pos;
    for (; i2 > 0; right = left, left = structs[--i2 - 1]) {
      if (left.deleted === right.deleted && left.constructor === right.constructor) {
        if (left.mergeWith(right)) {
          if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
          right.parent._map.get(right.parentSub) === right) {
            right.parent._map.set(
              right.parentSub,
              /** @type {Item} */
              left
            );
          }
          continue;
        }
      }
      break;
    }
    const merged = pos - i2;
    if (merged) {
      structs.splice(pos + 1 - merged, merged);
    }
    return merged;
  };
  const tryGcDeleteSet = (ds, store2, gcFilter) => {
    for (const [client, deleteItems] of ds.clients.entries()) {
      const structs = (
        /** @type {Array<GC|Item>} */
        store2.clients.get(client)
      );
      for (let di = deleteItems.length - 1; di >= 0; di--) {
        const deleteItem = deleteItems[di];
        const endDeleteItemClock = deleteItem.clock + deleteItem.len;
        for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
          const struct2 = structs[si];
          if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
            break;
          }
          if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
            struct2.gc(store2, false);
          }
        }
      }
    }
  };
  const tryMergeDeleteSet = (ds, store2) => {
    ds.clients.forEach((deleteItems, client) => {
      const structs = (
        /** @type {Array<GC|Item>} */
        store2.clients.get(client)
      );
      for (let di = deleteItems.length - 1; di >= 0; di--) {
        const deleteItem = deleteItems[di];
        const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
        for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
          si -= 1 + tryToMergeWithLefts(structs, si);
        }
      }
    });
  };
  const tryGc = (ds, store2, gcFilter) => {
    tryGcDeleteSet(ds, store2, gcFilter);
    tryMergeDeleteSet(ds, store2);
  };
  const cleanupTransactions = (transactionCleanups, i2) => {
    if (i2 < transactionCleanups.length) {
      const transaction = transactionCleanups[i2];
      const doc = transaction.doc;
      const store2 = doc.store;
      const ds = transaction.deleteSet;
      const mergeStructs = transaction._mergeStructs;
      try {
        sortAndMergeDeleteSet(ds);
        transaction.afterState = getStateVector(transaction.doc.store);
        doc.emit("beforeObserverCalls", [transaction, doc]);
        const fs = [];
        transaction.changed.forEach(
          (subs, itemtype) => fs.push(() => {
            if (itemtype._item === null || !itemtype._item.deleted) {
              itemtype._callObserver(transaction, subs);
            }
          })
        );
        fs.push(() => {
          transaction.changedParentTypes.forEach((events, type) => {
            if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
              events = events.filter(
                (event) => event.target._item === null || !event.target._item.deleted
              );
              events.forEach((event) => {
                event.currentTarget = type;
                event._path = null;
              });
              events.sort((event1, event2) => event1.path.length - event2.path.length);
              callEventHandlerListeners(type._dEH, events, transaction);
            }
          });
        });
        fs.push(() => doc.emit("afterTransaction", [transaction, doc]));
        callAll(fs, []);
        if (transaction._needFormattingCleanup) {
          cleanupYTextAfterTransaction(transaction);
        }
      } finally {
        if (doc.gc) {
          tryGcDeleteSet(ds, store2, doc.gcFilter);
        }
        tryMergeDeleteSet(ds, store2);
        transaction.afterState.forEach((clock, client) => {
          const beforeClock = transaction.beforeState.get(client) || 0;
          if (beforeClock !== clock) {
            const structs = (
              /** @type {Array<GC|Item>} */
              store2.clients.get(client)
            );
            const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
            for (let i3 = structs.length - 1; i3 >= firstChangePos; ) {
              i3 -= 1 + tryToMergeWithLefts(structs, i3);
            }
          }
        });
        for (let i3 = mergeStructs.length - 1; i3 >= 0; i3--) {
          const { client, clock } = mergeStructs[i3].id;
          const structs = (
            /** @type {Array<GC|Item>} */
            store2.clients.get(client)
          );
          const replacedStructPos = findIndexSS(structs, clock);
          if (replacedStructPos + 1 < structs.length) {
            if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
              continue;
            }
          }
          if (replacedStructPos > 0) {
            tryToMergeWithLefts(structs, replacedStructPos);
          }
        }
        if (!transaction.local && transaction.afterState.get(doc.clientID) !== transaction.beforeState.get(doc.clientID)) {
          print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
          doc.clientID = generateNewClientId();
        }
        doc.emit("afterTransactionCleanup", [transaction, doc]);
        if (doc._observers.has("update")) {
          const encoder = new UpdateEncoderV1();
          const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
          if (hasContent2) {
            doc.emit("update", [encoder.toUint8Array(), transaction.origin, doc, transaction]);
          }
        }
        if (doc._observers.has("updateV2")) {
          const encoder = new UpdateEncoderV2();
          const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
          if (hasContent2) {
            doc.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc, transaction]);
          }
        }
        const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
        if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
          subdocsAdded.forEach((subdoc) => {
            subdoc.clientID = doc.clientID;
            if (subdoc.collectionid == null) {
              subdoc.collectionid = doc.collectionid;
            }
            doc.subdocs.add(subdoc);
          });
          subdocsRemoved.forEach((subdoc) => doc.subdocs.delete(subdoc));
          doc.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc, transaction]);
          subdocsRemoved.forEach((subdoc) => subdoc.destroy());
        }
        if (transactionCleanups.length <= i2 + 1) {
          doc._transactionCleanups = [];
          doc.emit("afterAllTransactions", [doc, transactionCleanups]);
        } else {
          cleanupTransactions(transactionCleanups, i2 + 1);
        }
      }
    }
  };
  const transact = (doc, f2, origin = null, local = true) => {
    const transactionCleanups = doc._transactionCleanups;
    let initialCall = false;
    let result = null;
    if (doc._transaction === null) {
      initialCall = true;
      doc._transaction = new Transaction(doc, origin, local);
      transactionCleanups.push(doc._transaction);
      if (transactionCleanups.length === 1) {
        doc.emit("beforeAllTransactions", [doc]);
      }
      doc.emit("beforeTransaction", [doc._transaction, doc]);
    }
    try {
      result = f2(doc._transaction);
    } finally {
      if (initialCall) {
        const finishCleanup = doc._transaction === transactionCleanups[0];
        doc._transaction = null;
        if (finishCleanup) {
          cleanupTransactions(transactionCleanups, 0);
        }
      }
    }
    return result;
  };
  class StackItem {
    /**
     * @param {DeleteSet} deletions
     * @param {DeleteSet} insertions
     */
    constructor(deletions, insertions) {
      this.insertions = insertions;
      this.deletions = deletions;
      this.meta = /* @__PURE__ */ new Map();
    }
  }
  const clearUndoManagerStackItem = (tr, um, stackItem) => {
    iterateDeletedStructs(tr, stackItem.deletions, (item) => {
      if (item instanceof Item && um.scope.some((type) => type === tr.doc || isParentOf(
        /** @type {AbstractType<any>} */
        type,
        item
      ))) {
        keepItem(item, false);
      }
    });
  };
  const popStackItem = (undoManager, stack, eventType) => {
    let _tr = null;
    const doc = undoManager.doc;
    const scope = undoManager.scope;
    transact(doc, (transaction) => {
      while (stack.length > 0 && undoManager.currStackItem === null) {
        const store2 = doc.store;
        const stackItem = (
          /** @type {StackItem} */
          stack.pop()
        );
        const itemsToRedo = /* @__PURE__ */ new Set();
        const itemsToDelete = [];
        let performedChange = false;
        iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
          if (struct instanceof Item) {
            if (struct.redone !== null) {
              let { item, diff } = followRedone(store2, struct.id);
              if (diff > 0) {
                item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
              }
              struct = item;
            }
            if (!struct.deleted && scope.some((type) => type === transaction.doc || isParentOf(
              /** @type {AbstractType<any>} */
              type,
              /** @type {Item} */
              struct
            ))) {
              itemsToDelete.push(struct);
            }
          }
        });
        iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
          if (struct instanceof Item && scope.some((type) => type === transaction.doc || isParentOf(
            /** @type {AbstractType<any>} */
            type,
            struct
          )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
          !isDeleted(stackItem.insertions, struct.id)) {
            itemsToRedo.add(struct);
          }
        });
        itemsToRedo.forEach((struct) => {
          performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
        });
        for (let i2 = itemsToDelete.length - 1; i2 >= 0; i2--) {
          const item = itemsToDelete[i2];
          if (undoManager.deleteFilter(item)) {
            item.delete(transaction);
            performedChange = true;
          }
        }
        undoManager.currStackItem = performedChange ? stackItem : null;
      }
      transaction.changed.forEach((subProps, type) => {
        if (subProps.has(null) && type._searchMarker) {
          type._searchMarker.length = 0;
        }
      });
      _tr = transaction;
    }, undoManager);
    const res = undoManager.currStackItem;
    if (res != null) {
      const changedParentTypes = _tr.changedParentTypes;
      undoManager.emit("stack-item-popped", [{ stackItem: res, type: eventType, changedParentTypes, origin: undoManager }, undoManager]);
      undoManager.currStackItem = null;
    }
    return res;
  };
  class UndoManager extends ObservableV2 {
    /**
     * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
     * @param {UndoManagerOptions} options
     */
    constructor(typeScope, {
      captureTimeout = 500,
      captureTransaction = (_tr) => true,
      deleteFilter = () => true,
      trackedOrigins = /* @__PURE__ */ new Set([null]),
      ignoreRemoteMapChanges = false,
      doc = (
        /** @type {Doc} */
        isArray(typeScope) ? typeScope[0].doc : typeScope instanceof Doc$1 ? typeScope : typeScope.doc
      )
    } = {}) {
      super();
      this.scope = [];
      this.doc = doc;
      this.addToScope(typeScope);
      this.deleteFilter = deleteFilter;
      trackedOrigins.add(this);
      this.trackedOrigins = trackedOrigins;
      this.captureTransaction = captureTransaction;
      this.undoStack = [];
      this.redoStack = [];
      this.undoing = false;
      this.redoing = false;
      this.currStackItem = null;
      this.lastChange = 0;
      this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
      this.captureTimeout = captureTimeout;
      this.afterTransactionHandler = (transaction) => {
        if (!this.captureTransaction(transaction) || !this.scope.some((type) => transaction.changedParentTypes.has(
          /** @type {AbstractType<any>} */
          type
        ) || type === this.doc) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
          return;
        }
        const undoing = this.undoing;
        const redoing = this.redoing;
        const stack = undoing ? this.redoStack : this.undoStack;
        if (undoing) {
          this.stopCapturing();
        } else if (!redoing) {
          this.clear(false, true);
        }
        const insertions = new DeleteSet();
        transaction.afterState.forEach((endClock, client) => {
          const startClock = transaction.beforeState.get(client) || 0;
          const len = endClock - startClock;
          if (len > 0) {
            addToDeleteSet(insertions, client, startClock, len);
          }
        });
        const now = getUnixTime();
        let didAdd = false;
        if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
          const lastOp = stack[stack.length - 1];
          lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
          lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
        } else {
          stack.push(new StackItem(transaction.deleteSet, insertions));
          didAdd = true;
        }
        if (!undoing && !redoing) {
          this.lastChange = now;
        }
        iterateDeletedStructs(
          transaction,
          transaction.deleteSet,
          /** @param {Item|GC} item */
          (item) => {
            if (item instanceof Item && this.scope.some((type) => type === transaction.doc || isParentOf(
              /** @type {AbstractType<any>} */
              type,
              item
            ))) {
              keepItem(item, true);
            }
          }
        );
        const changeEvent = [{ stackItem: stack[stack.length - 1], origin: transaction.origin, type: undoing ? "redo" : "undo", changedParentTypes: transaction.changedParentTypes }, this];
        if (didAdd) {
          this.emit("stack-item-added", changeEvent);
        } else {
          this.emit("stack-item-updated", changeEvent);
        }
      };
      this.doc.on("afterTransaction", this.afterTransactionHandler);
      this.doc.on("destroy", () => {
        this.destroy();
      });
    }
    /**
     * Extend the scope.
     *
     * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
     */
    addToScope(ytypes) {
      const tmpSet = new Set(this.scope);
      ytypes = isArray(ytypes) ? ytypes : [ytypes];
      ytypes.forEach((ytype) => {
        if (!tmpSet.has(ytype)) {
          tmpSet.add(ytype);
          if (ytype instanceof AbstractType ? ytype.doc !== this.doc : ytype !== this.doc) warn("[yjs#509] Not same Y.Doc");
          this.scope.push(ytype);
        }
      });
    }
    /**
     * @param {any} origin
     */
    addTrackedOrigin(origin) {
      this.trackedOrigins.add(origin);
    }
    /**
     * @param {any} origin
     */
    removeTrackedOrigin(origin) {
      this.trackedOrigins.delete(origin);
    }
    clear(clearUndoStack = true, clearRedoStack = true) {
      if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
        this.doc.transact((tr) => {
          if (clearUndoStack) {
            this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
            this.undoStack = [];
          }
          if (clearRedoStack) {
            this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
            this.redoStack = [];
          }
          this.emit("stack-cleared", [{ undoStackCleared: clearUndoStack, redoStackCleared: clearRedoStack }]);
        });
      }
    }
    /**
     * UndoManager merges Undo-StackItem if they are created within time-gap
     * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
     * StackItem won't be merged.
     *
     *
     * @example
     *     // without stopCapturing
     *     ytext.insert(0, 'a')
     *     ytext.insert(1, 'b')
     *     um.undo()
     *     ytext.toString() // => '' (note that 'ab' was removed)
     *     // with stopCapturing
     *     ytext.insert(0, 'a')
     *     um.stopCapturing()
     *     ytext.insert(0, 'b')
     *     um.undo()
     *     ytext.toString() // => 'a' (note that only 'b' was removed)
     *
     */
    stopCapturing() {
      this.lastChange = 0;
    }
    /**
     * Undo last changes on type.
     *
     * @return {StackItem?} Returns StackItem if a change was applied
     */
    undo() {
      this.undoing = true;
      let res;
      try {
        res = popStackItem(this, this.undoStack, "undo");
      } finally {
        this.undoing = false;
      }
      return res;
    }
    /**
     * Redo last undo operation.
     *
     * @return {StackItem?} Returns StackItem if a change was applied
     */
    redo() {
      this.redoing = true;
      let res;
      try {
        res = popStackItem(this, this.redoStack, "redo");
      } finally {
        this.redoing = false;
      }
      return res;
    }
    /**
     * Are undo steps available?
     *
     * @return {boolean} `true` if undo is possible
     */
    canUndo() {
      return this.undoStack.length > 0;
    }
    /**
     * Are redo steps available?
     *
     * @return {boolean} `true` if redo is possible
     */
    canRedo() {
      return this.redoStack.length > 0;
    }
    destroy() {
      this.trackedOrigins.delete(this);
      this.doc.off("afterTransaction", this.afterTransactionHandler);
      super.destroy();
    }
  }
  function* lazyStructReaderGenerator(decoder) {
    const numOfStateUpdates = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numOfStateUpdates; i2++) {
      const numberOfStructs = readVarUint(decoder.restDecoder);
      const client = decoder.readClient();
      let clock = readVarUint(decoder.restDecoder);
      for (let i3 = 0; i3 < numberOfStructs; i3++) {
        const info = decoder.readInfo();
        if (info === 10) {
          const len = readVarUint(decoder.restDecoder);
          yield new Skip(createID(client, clock), len);
          clock += len;
        } else if ((BITS5 & info) !== 0) {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // left
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            // @ts-ignore Force writing a string here.
            cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          yield struct;
          clock += struct.length;
        } else {
          const len = decoder.readLen();
          yield new GC(createID(client, clock), len);
          clock += len;
        }
      }
    }
  }
  class LazyStructReader {
    /**
     * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
     * @param {boolean} filterSkips
     */
    constructor(decoder, filterSkips) {
      this.gen = lazyStructReaderGenerator(decoder);
      this.curr = null;
      this.done = false;
      this.filterSkips = filterSkips;
      this.next();
    }
    /**
     * @return {Item | GC | Skip |null}
     */
    next() {
      do {
        this.curr = this.gen.next().value || null;
      } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
      return this.curr;
    }
  }
  const logUpdate = (update) => logUpdateV2(update, UpdateDecoderV1);
  const logUpdateV2 = (update, YDecoder = UpdateDecoderV2) => {
    const structs = [];
    const updateDecoder = new YDecoder(createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
      structs.push(curr);
    }
    print("Structs: ", structs);
    const ds = readDeleteSet(updateDecoder);
    print("DeleteSet: ", ds);
  };
  const decodeUpdate = (update) => decodeUpdateV2(update, UpdateDecoderV1);
  const decodeUpdateV2 = (update, YDecoder = UpdateDecoderV2) => {
    const structs = [];
    const updateDecoder = new YDecoder(createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
      structs.push(curr);
    }
    return {
      structs,
      ds: readDeleteSet(updateDecoder)
    };
  };
  class LazyStructWriter {
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     */
    constructor(encoder) {
      this.currClient = 0;
      this.startClock = 0;
      this.written = 0;
      this.encoder = encoder;
      this.clientStructs = [];
    }
  }
  const mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
  const encodeStateVectorFromUpdateV2 = (update, YEncoder = DSEncoderV2, YDecoder = UpdateDecoderV2) => {
    const encoder = new YEncoder();
    const updateDecoder = new LazyStructReader(new YDecoder(createDecoder(update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
      let size2 = 0;
      let currClient = curr.id.client;
      let stopCounting = curr.id.clock !== 0;
      let currClock = stopCounting ? 0 : curr.id.clock + curr.length;
      for (; curr !== null; curr = updateDecoder.next()) {
        if (currClient !== curr.id.client) {
          if (currClock !== 0) {
            size2++;
            writeVarUint(encoder.restEncoder, currClient);
            writeVarUint(encoder.restEncoder, currClock);
          }
          currClient = curr.id.client;
          currClock = 0;
          stopCounting = curr.id.clock !== 0;
        }
        if (curr.constructor === Skip) {
          stopCounting = true;
        }
        if (!stopCounting) {
          currClock = curr.id.clock + curr.length;
        }
      }
      if (currClock !== 0) {
        size2++;
        writeVarUint(encoder.restEncoder, currClient);
        writeVarUint(encoder.restEncoder, currClock);
      }
      const enc = createEncoder();
      writeVarUint(enc, size2);
      writeBinaryEncoder(enc, encoder.restEncoder);
      encoder.restEncoder = enc;
      return encoder.toUint8Array();
    } else {
      writeVarUint(encoder.restEncoder, 0);
      return encoder.toUint8Array();
    }
  };
  const encodeStateVectorFromUpdate = (update) => encodeStateVectorFromUpdateV2(update, DSEncoderV1, UpdateDecoderV1);
  const parseUpdateMetaV2 = (update, YDecoder = UpdateDecoderV2) => {
    const from2 = /* @__PURE__ */ new Map();
    const to = /* @__PURE__ */ new Map();
    const updateDecoder = new LazyStructReader(new YDecoder(createDecoder(update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
      let currClient = curr.id.client;
      let currClock = curr.id.clock;
      from2.set(currClient, currClock);
      for (; curr !== null; curr = updateDecoder.next()) {
        if (currClient !== curr.id.client) {
          to.set(currClient, currClock);
          from2.set(curr.id.client, curr.id.clock);
          currClient = curr.id.client;
        }
        currClock = curr.id.clock + curr.length;
      }
      to.set(currClient, currClock);
    }
    return { from: from2, to };
  };
  const parseUpdateMeta = (update) => parseUpdateMetaV2(update, UpdateDecoderV1);
  const sliceStruct = (left, diff) => {
    if (left.constructor === GC) {
      const { client, clock } = left.id;
      return new GC(createID(client, clock + diff), left.length - diff);
    } else if (left.constructor === Skip) {
      const { client, clock } = left.id;
      return new Skip(createID(client, clock + diff), left.length - diff);
    } else {
      const leftItem = (
        /** @type {Item} */
        left
      );
      const { client, clock } = leftItem.id;
      return new Item(
        createID(client, clock + diff),
        null,
        createID(client, clock + diff - 1),
        null,
        leftItem.rightOrigin,
        leftItem.parent,
        leftItem.parentSub,
        leftItem.content.splice(diff)
      );
    }
  };
  const mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
    if (updates.length === 1) {
      return updates[0];
    }
    const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
    let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
    let currWrite = null;
    const updateEncoder = new YEncoder();
    const lazyStructEncoder = new LazyStructWriter(updateEncoder);
    while (true) {
      lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
      lazyStructDecoders.sort(
        /** @type {function(any,any):number} */
        (dec1, dec2) => {
          if (dec1.curr.id.client === dec2.curr.id.client) {
            const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
            if (clockDiff === 0) {
              return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
            } else {
              return clockDiff;
            }
          } else {
            return dec2.curr.id.client - dec1.curr.id.client;
          }
        }
      );
      if (lazyStructDecoders.length === 0) {
        break;
      }
      const currDecoder = lazyStructDecoders[0];
      const firstClient = (
        /** @type {Item | GC} */
        currDecoder.curr.id.client
      );
      if (currWrite !== null) {
        let curr = (
          /** @type {Item | GC | null} */
          currDecoder.curr
        );
        let iterated = false;
        while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
          curr = currDecoder.next();
          iterated = true;
        }
        if (curr === null || // current decoder is empty
        curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
        iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
          continue;
        }
        if (firstClient !== currWrite.struct.id.client) {
          writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
          currWrite = { struct: curr, offset: 0 };
          currDecoder.next();
        } else {
          if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
            } else {
              writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
              const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
              const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
              currWrite = { struct, offset: 0 };
            }
          } else {
            const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
            if (diff > 0) {
              if (currWrite.struct.constructor === Skip) {
                currWrite.struct.length -= diff;
              } else {
                curr = sliceStruct(curr, diff);
              }
            }
            if (!currWrite.struct.mergeWith(
              /** @type {any} */
              curr
            )) {
              writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
              currWrite = { struct: curr, offset: 0 };
              currDecoder.next();
            }
          }
        }
      } else {
        currWrite = { struct: (
          /** @type {Item | GC} */
          currDecoder.curr
        ), offset: 0 };
        currDecoder.next();
      }
      for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: next, offset: 0 };
      }
    }
    if (currWrite !== null) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = null;
    }
    finishLazyStructWriting(lazyStructEncoder);
    const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
    const ds = mergeDeleteSets(dss);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
  };
  const diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
    const state = decodeStateVector(sv);
    const encoder = new YEncoder();
    const lazyStructWriter = new LazyStructWriter(encoder);
    const decoder = new YDecoder(createDecoder(update));
    const reader = new LazyStructReader(decoder, false);
    while (reader.curr) {
      const curr = reader.curr;
      const currClient = curr.id.client;
      const svClock = state.get(currClient) || 0;
      if (reader.curr.constructor === Skip) {
        reader.next();
        continue;
      }
      if (curr.id.clock + curr.length > svClock) {
        writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
        reader.next();
        while (reader.curr && reader.curr.id.client === currClient) {
          writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
          reader.next();
        }
      } else {
        while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
          reader.next();
        }
      }
    }
    finishLazyStructWriting(lazyStructWriter);
    const ds = readDeleteSet(decoder);
    writeDeleteSet(encoder, ds);
    return encoder.toUint8Array();
  };
  const diffUpdate = (update, sv) => diffUpdateV2(update, sv, UpdateDecoderV1, UpdateEncoderV1);
  const flushLazyStructWriter = (lazyWriter) => {
    if (lazyWriter.written > 0) {
      lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
      lazyWriter.encoder.restEncoder = createEncoder();
      lazyWriter.written = 0;
    }
  };
  const writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
    if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
      flushLazyStructWriter(lazyWriter);
    }
    if (lazyWriter.written === 0) {
      lazyWriter.currClient = struct.id.client;
      lazyWriter.encoder.writeClient(struct.id.client);
      writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
    }
    struct.write(lazyWriter.encoder, offset);
    lazyWriter.written++;
  };
  const finishLazyStructWriting = (lazyWriter) => {
    flushLazyStructWriter(lazyWriter);
    const restEncoder = lazyWriter.encoder.restEncoder;
    writeVarUint(restEncoder, lazyWriter.clientStructs.length);
    for (let i2 = 0; i2 < lazyWriter.clientStructs.length; i2++) {
      const partStructs = lazyWriter.clientStructs[i2];
      writeVarUint(restEncoder, partStructs.written);
      writeUint8Array(restEncoder, partStructs.restEncoder);
    }
  };
  const convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
    const updateDecoder = new YDecoder(createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    const updateEncoder = new YEncoder();
    const lazyWriter = new LazyStructWriter(updateEncoder);
    for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
      writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
    }
    finishLazyStructWriting(lazyWriter);
    const ds = readDeleteSet(updateDecoder);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
  };
  const createObfuscator = ({ formatting = true, subdocs = true, yxml = true } = {}) => {
    let i2 = 0;
    const mapKeyCache = create$4();
    const nodeNameCache = create$4();
    const formattingKeyCache = create$4();
    const formattingValueCache = create$4();
    formattingValueCache.set(null, null);
    return (block) => {
      switch (block.constructor) {
        case GC:
        case Skip:
          return block;
        case Item: {
          const item = (
            /** @type {Item} */
            block
          );
          const content = item.content;
          switch (content.constructor) {
            case ContentDeleted:
              break;
            case ContentType: {
              if (yxml) {
                const type = (
                  /** @type {ContentType} */
                  content.type
                );
                if (type instanceof YXmlElement) {
                  type.nodeName = setIfUndefined(nodeNameCache, type.nodeName, () => "node-" + i2);
                }
                if (type instanceof YXmlHook) {
                  type.hookName = setIfUndefined(nodeNameCache, type.hookName, () => "hook-" + i2);
                }
              }
              break;
            }
            case ContentAny: {
              const c2 = (
                /** @type {ContentAny} */
                content
              );
              c2.arr = c2.arr.map(() => i2);
              break;
            }
            case ContentBinary: {
              const c2 = (
                /** @type {ContentBinary} */
                content
              );
              c2.content = new Uint8Array([i2]);
              break;
            }
            case ContentDoc: {
              const c2 = (
                /** @type {ContentDoc} */
                content
              );
              if (subdocs) {
                c2.opts = {};
                c2.doc.guid = i2 + "";
              }
              break;
            }
            case ContentEmbed: {
              const c2 = (
                /** @type {ContentEmbed} */
                content
              );
              c2.embed = {};
              break;
            }
            case ContentFormat: {
              const c2 = (
                /** @type {ContentFormat} */
                content
              );
              if (formatting) {
                c2.key = setIfUndefined(formattingKeyCache, c2.key, () => i2 + "");
                c2.value = setIfUndefined(formattingValueCache, c2.value, () => ({ i: i2 }));
              }
              break;
            }
            case ContentJSON: {
              const c2 = (
                /** @type {ContentJSON} */
                content
              );
              c2.arr = c2.arr.map(() => i2);
              break;
            }
            case ContentString: {
              const c2 = (
                /** @type {ContentString} */
                content
              );
              c2.str = repeat(i2 % 10 + "", c2.str.length);
              break;
            }
            default:
              unexpectedCase();
          }
          if (item.parentSub) {
            item.parentSub = setIfUndefined(mapKeyCache, item.parentSub, () => i2 + "");
          }
          i2++;
          return block;
        }
        default:
          unexpectedCase();
      }
    };
  };
  const obfuscateUpdate = (update, opts) => convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV1, UpdateEncoderV1);
  const obfuscateUpdateV2 = (update, opts) => convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV2, UpdateEncoderV2);
  const convertUpdateFormatV1ToV2 = (update) => convertUpdateFormat(update, id, UpdateDecoderV1, UpdateEncoderV2);
  const convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
  const errorComputeChanges = "You must not compute changes after the event-handler fired.";
  class YEvent {
    /**
     * @param {T} target The changed type.
     * @param {Transaction} transaction
     */
    constructor(target, transaction) {
      this.target = target;
      this.currentTarget = target;
      this.transaction = transaction;
      this._changes = null;
      this._keys = null;
      this._delta = null;
      this._path = null;
    }
    /**
     * Computes the path from `y` to the changed type.
     *
     * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
     *
     * The following property holds:
     * @example
     *   let type = y
     *   event.path.forEach(dir => {
     *     type = type.get(dir)
     *   })
     *   type === event.target // => true
     */
    get path() {
      return this._path || (this._path = getPathTo(this.currentTarget, this.target));
    }
    /**
     * Check if a struct is deleted by this event.
     *
     * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
     *
     * @param {AbstractStruct} struct
     * @return {boolean}
     */
    deletes(struct) {
      return isDeleted(this.transaction.deleteSet, struct.id);
    }
    /**
     * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
     */
    get keys() {
      if (this._keys === null) {
        if (this.transaction.doc._transactionCleanups.length === 0) {
          throw create$3(errorComputeChanges);
        }
        const keys2 = /* @__PURE__ */ new Map();
        const target = this.target;
        const changed = (
          /** @type Set<string|null> */
          this.transaction.changed.get(target)
        );
        changed.forEach((key) => {
          if (key !== null) {
            const item = (
              /** @type {Item} */
              target._map.get(key)
            );
            let action;
            let oldValue;
            if (this.adds(item)) {
              let prev = item.left;
              while (prev !== null && this.adds(prev)) {
                prev = prev.left;
              }
              if (this.deletes(item)) {
                if (prev !== null && this.deletes(prev)) {
                  action = "delete";
                  oldValue = last(prev.content.getContent());
                } else {
                  return;
                }
              } else {
                if (prev !== null && this.deletes(prev)) {
                  action = "update";
                  oldValue = last(prev.content.getContent());
                } else {
                  action = "add";
                  oldValue = void 0;
                }
              }
            } else {
              if (this.deletes(item)) {
                action = "delete";
                oldValue = last(
                  /** @type {Item} */
                  item.content.getContent()
                );
              } else {
                return;
              }
            }
            keys2.set(key, { action, oldValue });
          }
        });
        this._keys = keys2;
      }
      return this._keys;
    }
    /**
     * This is a computed property. Note that this can only be safely computed during the
     * event call. Computing this property after other changes happened might result in
     * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
     * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
     *
     * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
     */
    get delta() {
      return this.changes.delta;
    }
    /**
     * Check if a struct is added by this event.
     *
     * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
     *
     * @param {AbstractStruct} struct
     * @return {boolean}
     */
    adds(struct) {
      return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
    }
    /**
     * This is a computed property. Note that this can only be safely computed during the
     * event call. Computing this property after other changes happened might result in
     * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
     * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
     *
     * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
     */
    get changes() {
      let changes = this._changes;
      if (changes === null) {
        if (this.transaction.doc._transactionCleanups.length === 0) {
          throw create$3(errorComputeChanges);
        }
        const target = this.target;
        const added = create$5();
        const deleted = create$5();
        const delta = [];
        changes = {
          added,
          deleted,
          delta,
          keys: this.keys
        };
        const changed = (
          /** @type Set<string|null> */
          this.transaction.changed.get(target)
        );
        if (changed.has(null)) {
          let lastOp = null;
          const packOp = () => {
            if (lastOp) {
              delta.push(lastOp);
            }
          };
          for (let item = target._start; item !== null; item = item.right) {
            if (item.deleted) {
              if (this.deletes(item) && !this.adds(item)) {
                if (lastOp === null || lastOp.delete === void 0) {
                  packOp();
                  lastOp = { delete: 0 };
                }
                lastOp.delete += item.length;
                deleted.add(item);
              }
            } else {
              if (this.adds(item)) {
                if (lastOp === null || lastOp.insert === void 0) {
                  packOp();
                  lastOp = { insert: [] };
                }
                lastOp.insert = lastOp.insert.concat(item.content.getContent());
                added.add(item);
              } else {
                if (lastOp === null || lastOp.retain === void 0) {
                  packOp();
                  lastOp = { retain: 0 };
                }
                lastOp.retain += item.length;
              }
            }
          }
          if (lastOp !== null && lastOp.retain === void 0) {
            packOp();
          }
        }
        this._changes = changes;
      }
      return (
        /** @type {any} */
        changes
      );
    }
  }
  const getPathTo = (parent, child) => {
    const path2 = [];
    while (child._item !== null && child !== parent) {
      if (child._item.parentSub !== null) {
        path2.unshift(child._item.parentSub);
      } else {
        let i2 = 0;
        let c2 = (
          /** @type {AbstractType<any>} */
          child._item.parent._start
        );
        while (c2 !== child._item && c2 !== null) {
          if (!c2.deleted && c2.countable) {
            i2 += c2.length;
          }
          c2 = c2.right;
        }
        path2.unshift(i2);
      }
      child = /** @type {AbstractType<any>} */
      child._item.parent;
    }
    return path2;
  };
  const warnPrematureAccess = () => {
    warn("Invalid access: Add Yjs type to a document before reading data.");
  };
  const maxSearchMarker = 80;
  let globalSearchMarkerTimestamp = 0;
  class ArraySearchMarker {
    /**
     * @param {Item} p
     * @param {number} index
     */
    constructor(p2, index) {
      p2.marker = true;
      this.p = p2;
      this.index = index;
      this.timestamp = globalSearchMarkerTimestamp++;
    }
  }
  const refreshMarkerTimestamp = (marker) => {
    marker.timestamp = globalSearchMarkerTimestamp++;
  };
  const overwriteMarker = (marker, p2, index) => {
    marker.p.marker = false;
    marker.p = p2;
    p2.marker = true;
    marker.index = index;
    marker.timestamp = globalSearchMarkerTimestamp++;
  };
  const markPosition = (searchMarker, p2, index) => {
    if (searchMarker.length >= maxSearchMarker) {
      const marker = searchMarker.reduce((a2, b2) => a2.timestamp < b2.timestamp ? a2 : b2);
      overwriteMarker(marker, p2, index);
      return marker;
    } else {
      const pm = new ArraySearchMarker(p2, index);
      searchMarker.push(pm);
      return pm;
    }
  };
  const findMarker = (yarray, index) => {
    if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
      return null;
    }
    const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a2, b2) => abs(index - a2.index) < abs(index - b2.index) ? a2 : b2);
    let p2 = yarray._start;
    let pindex = 0;
    if (marker !== null) {
      p2 = marker.p;
      pindex = marker.index;
      refreshMarkerTimestamp(marker);
    }
    while (p2.right !== null && pindex < index) {
      if (!p2.deleted && p2.countable) {
        if (index < pindex + p2.length) {
          break;
        }
        pindex += p2.length;
      }
      p2 = p2.right;
    }
    while (p2.left !== null && pindex > index) {
      p2 = p2.left;
      if (!p2.deleted && p2.countable) {
        pindex -= p2.length;
      }
    }
    while (p2.left !== null && p2.left.id.client === p2.id.client && p2.left.id.clock + p2.left.length === p2.id.clock) {
      p2 = p2.left;
      if (!p2.deleted && p2.countable) {
        pindex -= p2.length;
      }
    }
    if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
    p2.parent.length / maxSearchMarker) {
      overwriteMarker(marker, p2, pindex);
      return marker;
    } else {
      return markPosition(yarray._searchMarker, p2, pindex);
    }
  };
  const updateMarkerChanges = (searchMarker, index, len) => {
    for (let i2 = searchMarker.length - 1; i2 >= 0; i2--) {
      const m2 = searchMarker[i2];
      if (len > 0) {
        let p2 = m2.p;
        p2.marker = false;
        while (p2 && (p2.deleted || !p2.countable)) {
          p2 = p2.left;
          if (p2 && !p2.deleted && p2.countable) {
            m2.index -= p2.length;
          }
        }
        if (p2 === null || p2.marker === true) {
          searchMarker.splice(i2, 1);
          continue;
        }
        m2.p = p2;
        p2.marker = true;
      }
      if (index < m2.index || len > 0 && index === m2.index) {
        m2.index = max(index, m2.index + len);
      }
    }
  };
  const getTypeChildren = (t2) => {
    t2.doc ?? warnPrematureAccess();
    let s2 = t2._start;
    const arr = [];
    while (s2) {
      arr.push(s2);
      s2 = s2.right;
    }
    return arr;
  };
  const callTypeObservers = (type, transaction, event) => {
    const changedType = type;
    const changedParentTypes = transaction.changedParentTypes;
    while (true) {
      setIfUndefined(changedParentTypes, type, () => []).push(event);
      if (type._item === null) {
        break;
      }
      type = /** @type {AbstractType<any>} */
      type._item.parent;
    }
    callEventHandlerListeners(changedType._eH, event, transaction);
  };
  class AbstractType {
    constructor() {
      this._item = null;
      this._map = /* @__PURE__ */ new Map();
      this._start = null;
      this.doc = null;
      this._length = 0;
      this._eH = createEventHandler();
      this._dEH = createEventHandler();
      this._searchMarker = null;
    }
    /**
     * @return {AbstractType<any>|null}
     */
    get parent() {
      return this._item ? (
        /** @type {AbstractType<any>} */
        this._item.parent
      ) : null;
    }
    /**
     * Integrate this type into the Yjs instance.
     *
     * * Save this struct in the os
     * * This type is sent to other client
     * * Observer functions are fired
     *
     * @param {Doc} y The Yjs instance
     * @param {Item|null} item
     */
    _integrate(y2, item) {
      this.doc = y2;
      this._item = item;
    }
    /**
     * @return {AbstractType<EventType>}
     */
    _copy() {
      throw methodUnimplemented();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {AbstractType<EventType>}
     */
    clone() {
      throw methodUnimplemented();
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
     */
    _write(_encoder) {
    }
    /**
     * The first non-deleted item
     */
    get _first() {
      let n2 = this._start;
      while (n2 !== null && n2.deleted) {
        n2 = n2.right;
      }
      return n2;
    }
    /**
     * Creates YEvent and calls all type observers.
     * Must be implemented by each type.
     *
     * @param {Transaction} transaction
     * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
     */
    _callObserver(transaction, _parentSubs) {
      if (!transaction.local && this._searchMarker) {
        this._searchMarker.length = 0;
      }
    }
    /**
     * Observe all events that are created on this type.
     *
     * @param {function(EventType, Transaction):void} f Observer function
     */
    observe(f2) {
      addEventHandlerListener(this._eH, f2);
    }
    /**
     * Observe all events that are created by this type and its children.
     *
     * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
     */
    observeDeep(f2) {
      addEventHandlerListener(this._dEH, f2);
    }
    /**
     * Unregister an observer function.
     *
     * @param {function(EventType,Transaction):void} f Observer function
     */
    unobserve(f2) {
      removeEventHandlerListener(this._eH, f2);
    }
    /**
     * Unregister an observer function.
     *
     * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
     */
    unobserveDeep(f2) {
      removeEventHandlerListener(this._dEH, f2);
    }
    /**
     * @abstract
     * @return {any}
     */
    toJSON() {
    }
  }
  const typeListSlice = (type, start, end) => {
    type.doc ?? warnPrematureAccess();
    if (start < 0) {
      start = type._length + start;
    }
    if (end < 0) {
      end = type._length + end;
    }
    let len = end - start;
    const cs = [];
    let n2 = type._start;
    while (n2 !== null && len > 0) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        if (c2.length <= start) {
          start -= c2.length;
        } else {
          for (let i2 = start; i2 < c2.length && len > 0; i2++) {
            cs.push(c2[i2]);
            len--;
          }
          start = 0;
        }
      }
      n2 = n2.right;
    }
    return cs;
  };
  const typeListToArray = (type) => {
    type.doc ?? warnPrematureAccess();
    const cs = [];
    let n2 = type._start;
    while (n2 !== null) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        for (let i2 = 0; i2 < c2.length; i2++) {
          cs.push(c2[i2]);
        }
      }
      n2 = n2.right;
    }
    return cs;
  };
  const typeListToArraySnapshot = (type, snapshot2) => {
    const cs = [];
    let n2 = type._start;
    while (n2 !== null) {
      if (n2.countable && isVisible(n2, snapshot2)) {
        const c2 = n2.content.getContent();
        for (let i2 = 0; i2 < c2.length; i2++) {
          cs.push(c2[i2]);
        }
      }
      n2 = n2.right;
    }
    return cs;
  };
  const typeListForEach = (type, f2) => {
    let index = 0;
    let n2 = type._start;
    type.doc ?? warnPrematureAccess();
    while (n2 !== null) {
      if (n2.countable && !n2.deleted) {
        const c2 = n2.content.getContent();
        for (let i2 = 0; i2 < c2.length; i2++) {
          f2(c2[i2], index++, type);
        }
      }
      n2 = n2.right;
    }
  };
  const typeListMap = (type, f2) => {
    const result = [];
    typeListForEach(type, (c2, i2) => {
      result.push(f2(c2, i2, type));
    });
    return result;
  };
  const typeListCreateIterator = (type) => {
    let n2 = type._start;
    let currentContent = null;
    let currentContentIndex = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next: () => {
        if (currentContent === null) {
          while (n2 !== null && n2.deleted) {
            n2 = n2.right;
          }
          if (n2 === null) {
            return {
              done: true,
              value: void 0
            };
          }
          currentContent = n2.content.getContent();
          currentContentIndex = 0;
          n2 = n2.right;
        }
        const value = currentContent[currentContentIndex++];
        if (currentContent.length <= currentContentIndex) {
          currentContent = null;
        }
        return {
          done: false,
          value
        };
      }
    };
  };
  const typeListGet = (type, index) => {
    type.doc ?? warnPrematureAccess();
    const marker = findMarker(type, index);
    let n2 = type._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
    }
    for (; n2 !== null; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index < n2.length) {
          return n2.content.getContent()[index];
        }
        index -= n2.length;
      }
    }
  };
  const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
    let left = referenceItem;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const store2 = doc.store;
    const right = referenceItem === null ? parent._start : referenceItem.right;
    let jsonContent = [];
    const packJsonContent = () => {
      if (jsonContent.length > 0) {
        left = new Item(createID(ownClientId, getState(store2, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
        left.integrate(transaction, 0);
        jsonContent = [];
      }
    };
    content.forEach((c2) => {
      if (c2 === null) {
        jsonContent.push(c2);
      } else {
        switch (c2.constructor) {
          case Number:
          case Object:
          case Boolean:
          case Array:
          case String:
            jsonContent.push(c2);
            break;
          default:
            packJsonContent();
            switch (c2.constructor) {
              case Uint8Array:
              case ArrayBuffer:
                left = new Item(createID(ownClientId, getState(store2, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                  /** @type {Uint8Array} */
                  c2
                )));
                left.integrate(transaction, 0);
                break;
              case Doc$1:
                left = new Item(createID(ownClientId, getState(store2, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                  /** @type {Doc} */
                  c2
                ));
                left.integrate(transaction, 0);
                break;
              default:
                if (c2 instanceof AbstractType) {
                  left = new Item(createID(ownClientId, getState(store2, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c2));
                  left.integrate(transaction, 0);
                } else {
                  throw new Error("Unexpected content type in insert operation");
                }
            }
        }
      }
    });
    packJsonContent();
  };
  const lengthExceeded = () => create$3("Length exceeded!");
  const typeListInsertGenerics = (transaction, parent, index, content) => {
    if (index > parent._length) {
      throw lengthExceeded();
    }
    if (index === 0) {
      if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, index, content.length);
      }
      return typeListInsertGenericsAfter(transaction, parent, null, content);
    }
    const startIndex = index;
    const marker = findMarker(parent, index);
    let n2 = parent._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
      if (index === 0) {
        n2 = n2.prev;
        index += n2 && n2.countable && !n2.deleted ? n2.length : 0;
      }
    }
    for (; n2 !== null; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index <= n2.length) {
          if (index < n2.length) {
            getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + index));
          }
          break;
        }
        index -= n2.length;
      }
    }
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, startIndex, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, n2, content);
  };
  const typeListPushGenerics = (transaction, parent, content) => {
    const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
    let n2 = marker.p;
    if (n2) {
      while (n2.right) {
        n2 = n2.right;
      }
    }
    return typeListInsertGenericsAfter(transaction, parent, n2, content);
  };
  const typeListDelete = (transaction, parent, index, length2) => {
    if (length2 === 0) {
      return;
    }
    const startIndex = index;
    const startLength = length2;
    const marker = findMarker(parent, index);
    let n2 = parent._start;
    if (marker !== null) {
      n2 = marker.p;
      index -= marker.index;
    }
    for (; n2 !== null && index > 0; n2 = n2.right) {
      if (!n2.deleted && n2.countable) {
        if (index < n2.length) {
          getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + index));
        }
        index -= n2.length;
      }
    }
    while (length2 > 0 && n2 !== null) {
      if (!n2.deleted) {
        if (length2 < n2.length) {
          getItemCleanStart(transaction, createID(n2.id.client, n2.id.clock + length2));
        }
        n2.delete(transaction);
        length2 -= n2.length;
      }
      n2 = n2.right;
    }
    if (length2 > 0) {
      throw lengthExceeded();
    }
    if (parent._searchMarker) {
      updateMarkerChanges(
        parent._searchMarker,
        startIndex,
        -startLength + length2
        /* in case we remove the above exception */
      );
    }
  };
  const typeMapDelete = (transaction, parent, key) => {
    const c2 = parent._map.get(key);
    if (c2 !== void 0) {
      c2.delete(transaction);
    }
  };
  const typeMapSet = (transaction, parent, key, value) => {
    const left = parent._map.get(key) || null;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    let content;
    if (value == null) {
      content = new ContentAny([value]);
    } else {
      switch (value.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
        case Date:
        case BigInt:
          content = new ContentAny([value]);
          break;
        case Uint8Array:
          content = new ContentBinary(
            /** @type {Uint8Array} */
            value
          );
          break;
        case Doc$1:
          content = new ContentDoc(
            /** @type {Doc} */
            value
          );
          break;
        default:
          if (value instanceof AbstractType) {
            content = new ContentType(value);
          } else {
            throw new Error("Unexpected content type");
          }
      }
    }
    new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
  };
  const typeMapGet = (parent, key) => {
    parent.doc ?? warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
  };
  const typeMapGetAll = (parent) => {
    const res = {};
    parent.doc ?? warnPrematureAccess();
    parent._map.forEach((value, key) => {
      if (!value.deleted) {
        res[key] = value.content.getContent()[value.length - 1];
      }
    });
    return res;
  };
  const typeMapHas = (parent, key) => {
    parent.doc ?? warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== void 0 && !val.deleted;
  };
  const typeMapGetSnapshot = (parent, key, snapshot2) => {
    let v2 = parent._map.get(key) || null;
    while (v2 !== null && (!snapshot2.sv.has(v2.id.client) || v2.id.clock >= (snapshot2.sv.get(v2.id.client) || 0))) {
      v2 = v2.left;
    }
    return v2 !== null && isVisible(v2, snapshot2) ? v2.content.getContent()[v2.length - 1] : void 0;
  };
  const typeMapGetAllSnapshot = (parent, snapshot2) => {
    const res = {};
    parent._map.forEach((value, key) => {
      let v2 = value;
      while (v2 !== null && (!snapshot2.sv.has(v2.id.client) || v2.id.clock >= (snapshot2.sv.get(v2.id.client) || 0))) {
        v2 = v2.left;
      }
      if (v2 !== null && isVisible(v2, snapshot2)) {
        res[key] = v2.content.getContent()[v2.length - 1];
      }
    });
    return res;
  };
  const createMapIterator = (type) => {
    type.doc ?? warnPrematureAccess();
    return iteratorFilter(
      type._map.entries(),
      /** @param {any} entry */
      (entry) => !entry[1].deleted
    );
  };
  class YArrayEvent extends YEvent {
  }
  class YArray extends AbstractType {
    constructor() {
      super();
      this._prelimContent = [];
      this._searchMarker = [];
    }
    /**
     * Construct a new YArray containing the specified items.
     * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
     * @param {Array<T>} items
     * @return {YArray<T>}
     */
    static from(items) {
      const a2 = new YArray();
      a2.push(items);
      return a2;
    }
    /**
     * Integrate this type into the Yjs instance.
     *
     * * Save this struct in the os
     * * This type is sent to other client
     * * Observer functions are fired
     *
     * @param {Doc} y The Yjs instance
     * @param {Item} item
     */
    _integrate(y2, item) {
      super._integrate(y2, item);
      this.insert(
        0,
        /** @type {Array<any>} */
        this._prelimContent
      );
      this._prelimContent = null;
    }
    /**
     * @return {YArray<T>}
     */
    _copy() {
      return new YArray();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YArray<T>}
     */
    clone() {
      const arr = new YArray();
      arr.insert(0, this.toArray().map(
        (el) => el instanceof AbstractType ? (
          /** @type {typeof el} */
          el.clone()
        ) : el
      ));
      return arr;
    }
    get length() {
      this.doc ?? warnPrematureAccess();
      return this._length;
    }
    /**
     * Creates YArrayEvent and calls observers.
     *
     * @param {Transaction} transaction
     * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
     */
    _callObserver(transaction, parentSubs) {
      super._callObserver(transaction, parentSubs);
      callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
    }
    /**
     * Inserts new content at an index.
     *
     * Important: This function expects an array of content. Not just a content
     * object. The reason for this "weirdness" is that inserting several elements
     * is very efficient when it is done as a single operation.
     *
     * @example
     *  // Insert character 'a' at position 0
     *  yarray.insert(0, ['a'])
     *  // Insert numbers 1, 2 at position 1
     *  yarray.insert(1, [1, 2])
     *
     * @param {number} index The index to insert content at.
     * @param {Array<T>} content The array of content
     */
    insert(index, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListInsertGenerics(
            transaction,
            this,
            index,
            /** @type {any} */
            content
          );
        });
      } else {
        this._prelimContent.splice(index, 0, ...content);
      }
    }
    /**
     * Appends content to this YArray.
     *
     * @param {Array<T>} content Array of content to append.
     *
     * @todo Use the following implementation in all types.
     */
    push(content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListPushGenerics(
            transaction,
            this,
            /** @type {any} */
            content
          );
        });
      } else {
        this._prelimContent.push(...content);
      }
    }
    /**
     * Prepends content to this YArray.
     *
     * @param {Array<T>} content Array of content to prepend.
     */
    unshift(content) {
      this.insert(0, content);
    }
    /**
     * Deletes elements starting from an index.
     *
     * @param {number} index Index at which to start deleting elements
     * @param {number} length The number of elements to remove. Defaults to 1.
     */
    delete(index, length2 = 1) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListDelete(transaction, this, index, length2);
        });
      } else {
        this._prelimContent.splice(index, length2);
      }
    }
    /**
     * Returns the i-th element from a YArray.
     *
     * @param {number} index The index of the element to return from the YArray
     * @return {T}
     */
    get(index) {
      return typeListGet(this, index);
    }
    /**
     * Transforms this YArray to a JavaScript Array.
     *
     * @return {Array<T>}
     */
    toArray() {
      return typeListToArray(this);
    }
    /**
     * Returns a portion of this YArray into a JavaScript Array selected
     * from start to end (end not included).
     *
     * @param {number} [start]
     * @param {number} [end]
     * @return {Array<T>}
     */
    slice(start = 0, end = this.length) {
      return typeListSlice(this, start, end);
    }
    /**
     * Transforms this Shared Type to a JSON object.
     *
     * @return {Array<any>}
     */
    toJSON() {
      return this.map((c2) => c2 instanceof AbstractType ? c2.toJSON() : c2);
    }
    /**
     * Returns an Array with the result of calling a provided function on every
     * element of this YArray.
     *
     * @template M
     * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
     * @return {Array<M>} A new array with each element being the result of the
     *                 callback function
     */
    map(f2) {
      return typeListMap(
        this,
        /** @type {any} */
        f2
      );
    }
    /**
     * Executes a provided function once on every element of this YArray.
     *
     * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
     */
    forEach(f2) {
      typeListForEach(this, f2);
    }
    /**
     * @return {IterableIterator<T>}
     */
    [Symbol.iterator]() {
      return typeListCreateIterator(this);
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     */
    _write(encoder) {
      encoder.writeTypeRef(YArrayRefID);
    }
  }
  const readYArray = (_decoder) => new YArray();
  class YMapEvent extends YEvent {
    /**
     * @param {YMap<T>} ymap The YArray that changed.
     * @param {Transaction} transaction
     * @param {Set<any>} subs The keys that changed.
     */
    constructor(ymap, transaction, subs) {
      super(ymap, transaction);
      this.keysChanged = subs;
    }
  }
  class YMap extends AbstractType {
    /**
     *
     * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
     */
    constructor(entries) {
      super();
      this._prelimContent = null;
      if (entries === void 0) {
        this._prelimContent = /* @__PURE__ */ new Map();
      } else {
        this._prelimContent = new Map(entries);
      }
    }
    /**
     * Integrate this type into the Yjs instance.
     *
     * * Save this struct in the os
     * * This type is sent to other client
     * * Observer functions are fired
     *
     * @param {Doc} y The Yjs instance
     * @param {Item} item
     */
    _integrate(y2, item) {
      super._integrate(y2, item);
      this._prelimContent.forEach((value, key) => {
        this.set(key, value);
      });
      this._prelimContent = null;
    }
    /**
     * @return {YMap<MapType>}
     */
    _copy() {
      return new YMap();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YMap<MapType>}
     */
    clone() {
      const map2 = new YMap();
      this.forEach((value, key) => {
        map2.set(key, value instanceof AbstractType ? (
          /** @type {typeof value} */
          value.clone()
        ) : value);
      });
      return map2;
    }
    /**
     * Creates YMapEvent and calls observers.
     *
     * @param {Transaction} transaction
     * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
     */
    _callObserver(transaction, parentSubs) {
      callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
    }
    /**
     * Transforms this Shared Type to a JSON object.
     *
     * @return {Object<string,any>}
     */
    toJSON() {
      this.doc ?? warnPrematureAccess();
      const map2 = {};
      this._map.forEach((item, key) => {
        if (!item.deleted) {
          const v2 = item.content.getContent()[item.length - 1];
          map2[key] = v2 instanceof AbstractType ? v2.toJSON() : v2;
        }
      });
      return map2;
    }
    /**
     * Returns the size of the YMap (count of key/value pairs)
     *
     * @return {number}
     */
    get size() {
      return [...createMapIterator(this)].length;
    }
    /**
     * Returns the keys for each element in the YMap Type.
     *
     * @return {IterableIterator<string>}
     */
    keys() {
      return iteratorMap(
        createMapIterator(this),
        /** @param {any} v */
        (v2) => v2[0]
      );
    }
    /**
     * Returns the values for each element in the YMap Type.
     *
     * @return {IterableIterator<MapType>}
     */
    values() {
      return iteratorMap(
        createMapIterator(this),
        /** @param {any} v */
        (v2) => v2[1].content.getContent()[v2[1].length - 1]
      );
    }
    /**
     * Returns an Iterator of [key, value] pairs
     *
     * @return {IterableIterator<[string, MapType]>}
     */
    entries() {
      return iteratorMap(
        createMapIterator(this),
        /** @param {any} v */
        (v2) => (
          /** @type {any} */
          [v2[0], v2[1].content.getContent()[v2[1].length - 1]]
        )
      );
    }
    /**
     * Executes a provided function on once on every key-value pair.
     *
     * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
     */
    forEach(f2) {
      this.doc ?? warnPrematureAccess();
      this._map.forEach((item, key) => {
        if (!item.deleted) {
          f2(item.content.getContent()[item.length - 1], key, this);
        }
      });
    }
    /**
     * Returns an Iterator of [key, value] pairs
     *
     * @return {IterableIterator<[string, MapType]>}
     */
    [Symbol.iterator]() {
      return this.entries();
    }
    /**
     * Remove a specified element from this YMap.
     *
     * @param {string} key The key of the element to remove.
     */
    delete(key) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, key);
        });
      } else {
        this._prelimContent.delete(key);
      }
    }
    /**
     * Adds or updates an element with a specified key and value.
     * @template {MapType} VAL
     *
     * @param {string} key The key of the element to add to this YMap
     * @param {VAL} value The value of the element to add
     * @return {VAL}
     */
    set(key, value) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(
            transaction,
            this,
            key,
            /** @type {any} */
            value
          );
        });
      } else {
        this._prelimContent.set(key, value);
      }
      return value;
    }
    /**
     * Returns a specified element from this YMap.
     *
     * @param {string} key
     * @return {MapType|undefined}
     */
    get(key) {
      return (
        /** @type {any} */
        typeMapGet(this, key)
      );
    }
    /**
     * Returns a boolean indicating whether the specified key exists or not.
     *
     * @param {string} key The key to test.
     * @return {boolean}
     */
    has(key) {
      return typeMapHas(this, key);
    }
    /**
     * Removes all elements from this YMap.
     */
    clear() {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          this.forEach(function(_value, key, map2) {
            typeMapDelete(transaction, map2, key);
          });
        });
      } else {
        this._prelimContent.clear();
      }
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     */
    _write(encoder) {
      encoder.writeTypeRef(YMapRefID);
    }
  }
  const readYMap = (_decoder) => new YMap();
  const equalAttrs = (a2, b2) => a2 === b2 || typeof a2 === "object" && typeof b2 === "object" && a2 && b2 && equalFlat(a2, b2);
  class ItemTextListPosition {
    /**
     * @param {Item|null} left
     * @param {Item|null} right
     * @param {number} index
     * @param {Map<string,any>} currentAttributes
     */
    constructor(left, right, index, currentAttributes) {
      this.left = left;
      this.right = right;
      this.index = index;
      this.currentAttributes = currentAttributes;
    }
    /**
     * Only call this if you know that this.right is defined
     */
    forward() {
      if (this.right === null) {
        unexpectedCase();
      }
      switch (this.right.content.constructor) {
        case ContentFormat:
          if (!this.right.deleted) {
            updateCurrentAttributes(
              this.currentAttributes,
              /** @type {ContentFormat} */
              this.right.content
            );
          }
          break;
        default:
          if (!this.right.deleted) {
            this.index += this.right.length;
          }
          break;
      }
      this.left = this.right;
      this.right = this.right.right;
    }
  }
  const findNextPosition = (transaction, pos, count) => {
    while (pos.right !== null && count > 0) {
      switch (pos.right.content.constructor) {
        case ContentFormat:
          if (!pos.right.deleted) {
            updateCurrentAttributes(
              pos.currentAttributes,
              /** @type {ContentFormat} */
              pos.right.content
            );
          }
          break;
        default:
          if (!pos.right.deleted) {
            if (count < pos.right.length) {
              getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
            }
            pos.index += pos.right.length;
            count -= pos.right.length;
          }
          break;
      }
      pos.left = pos.right;
      pos.right = pos.right.right;
    }
    return pos;
  };
  const findPosition = (transaction, parent, index, useSearchMarker) => {
    const currentAttributes = /* @__PURE__ */ new Map();
    const marker = useSearchMarker ? findMarker(parent, index) : null;
    if (marker) {
      const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
      return findNextPosition(transaction, pos, index - marker.index);
    } else {
      const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
      return findNextPosition(transaction, pos, index);
    }
  };
  const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
    while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
      negatedAttributes.get(
        /** @type {ContentFormat} */
        currPos.right.content.key
      ),
      /** @type {ContentFormat} */
      currPos.right.content.value
    ))) {
      if (!currPos.right.deleted) {
        negatedAttributes.delete(
          /** @type {ContentFormat} */
          currPos.right.content.key
        );
      }
      currPos.forward();
    }
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    negatedAttributes.forEach((val, key) => {
      const left = currPos.left;
      const right = currPos.right;
      const nextFormat = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      nextFormat.integrate(transaction, 0);
      currPos.right = nextFormat;
      currPos.forward();
    });
  };
  const updateCurrentAttributes = (currentAttributes, format) => {
    const { key, value } = format;
    if (value === null) {
      currentAttributes.delete(key);
    } else {
      currentAttributes.set(key, value);
    }
  };
  const minimizeAttributeChanges = (currPos, attributes) => {
    while (true) {
      if (currPos.right === null) {
        break;
      } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
        attributes[
          /** @type {ContentFormat} */
          currPos.right.content.key
        ] ?? null,
        /** @type {ContentFormat} */
        currPos.right.content.value
      )) ;
      else {
        break;
      }
      currPos.forward();
    }
  };
  const insertAttributes = (transaction, parent, currPos, attributes) => {
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const negatedAttributes = /* @__PURE__ */ new Map();
    for (const key in attributes) {
      const val = attributes[key];
      const currentVal = currPos.currentAttributes.get(key) ?? null;
      if (!equalAttrs(currentVal, val)) {
        negatedAttributes.set(key, currentVal);
        const { left, right } = currPos;
        currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
        currPos.right.integrate(transaction, 0);
        currPos.forward();
      }
    }
    return negatedAttributes;
  };
  const insertText = (transaction, parent, currPos, text, attributes) => {
    currPos.currentAttributes.forEach((_val, key) => {
      if (attributes[key] === void 0) {
        attributes[key] = null;
      }
    });
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    const content = text.constructor === String ? new ContentString(
      /** @type {string} */
      text
    ) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
    let { left, right, index } = currPos;
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
    }
    right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
    right.integrate(transaction, 0);
    currPos.right = right;
    currPos.index = index;
    currPos.forward();
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
  };
  const formatText = (transaction, parent, currPos, length2, attributes) => {
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    iterationLoop: while (currPos.right !== null && (length2 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = (
              /** @type {ContentFormat} */
              currPos.right.content
            );
            const attr = attributes[key];
            if (attr !== void 0) {
              if (equalAttrs(attr, value)) {
                negatedAttributes.delete(key);
              } else {
                if (length2 === 0) {
                  break iterationLoop;
                }
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            } else {
              currPos.currentAttributes.set(key, value);
            }
            break;
          }
          default:
            if (length2 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
            }
            length2 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
    if (length2 > 0) {
      let newlines = "";
      for (; length2 > 0; length2--) {
        newlines += "\n";
      }
      currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
  };
  const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
    let end = start;
    const endFormats = create$4();
    while (end && (!end.countable || end.deleted)) {
      if (!end.deleted && end.content.constructor === ContentFormat) {
        const cf = (
          /** @type {ContentFormat} */
          end.content
        );
        endFormats.set(cf.key, cf);
      }
      end = end.right;
    }
    let cleanups = 0;
    let reachedCurr = false;
    while (start !== end) {
      if (curr === start) {
        reachedCurr = true;
      }
      if (!start.deleted) {
        const content = start.content;
        switch (content.constructor) {
          case ContentFormat: {
            const { key, value } = (
              /** @type {ContentFormat} */
              content
            );
            const startAttrValue = startAttributes.get(key) ?? null;
            if (endFormats.get(key) !== content || startAttrValue === value) {
              start.delete(transaction);
              cleanups++;
              if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
                if (startAttrValue === null) {
                  currAttributes.delete(key);
                } else {
                  currAttributes.set(key, startAttrValue);
                }
              }
            }
            if (!reachedCurr && !start.deleted) {
              updateCurrentAttributes(
                currAttributes,
                /** @type {ContentFormat} */
                content
              );
            }
            break;
          }
        }
      }
      start = /** @type {Item} */
      start.right;
    }
    return cleanups;
  };
  const cleanupContextlessFormattingGap = (transaction, item) => {
    while (item && item.right && (item.right.deleted || !item.right.countable)) {
      item = item.right;
    }
    const attrs = /* @__PURE__ */ new Set();
    while (item && (item.deleted || !item.countable)) {
      if (!item.deleted && item.content.constructor === ContentFormat) {
        const key = (
          /** @type {ContentFormat} */
          item.content.key
        );
        if (attrs.has(key)) {
          item.delete(transaction);
        } else {
          attrs.add(key);
        }
      }
      item = item.left;
    }
  };
  const cleanupYTextFormatting = (type) => {
    let res = 0;
    transact(
      /** @type {Doc} */
      type.doc,
      (transaction) => {
        let start = (
          /** @type {Item} */
          type._start
        );
        let end = type._start;
        let startAttributes = create$4();
        const currentAttributes = copy(startAttributes);
        while (end) {
          if (end.deleted === false) {
            switch (end.content.constructor) {
              case ContentFormat:
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  end.content
                );
                break;
              default:
                res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
                startAttributes = copy(currentAttributes);
                start = end;
                break;
            }
          }
          end = end.right;
        }
      }
    );
    return res;
  };
  const cleanupYTextAfterTransaction = (transaction) => {
    const needFullCleanup = /* @__PURE__ */ new Set();
    const doc = transaction.doc;
    for (const [client, afterClock] of transaction.afterState.entries()) {
      const clock = transaction.beforeState.get(client) || 0;
      if (afterClock === clock) {
        continue;
      }
      iterateStructs(
        transaction,
        /** @type {Array<Item|GC>} */
        doc.store.clients.get(client),
        clock,
        afterClock,
        (item) => {
          if (!item.deleted && /** @type {Item} */
          item.content.constructor === ContentFormat && item.constructor !== GC) {
            needFullCleanup.add(
              /** @type {any} */
              item.parent
            );
          }
        }
      );
    }
    transact(doc, (t2) => {
      iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
        if (item instanceof GC || !/** @type {YText} */
        item.parent._hasFormatting || needFullCleanup.has(
          /** @type {YText} */
          item.parent
        )) {
          return;
        }
        const parent = (
          /** @type {YText} */
          item.parent
        );
        if (item.content.constructor === ContentFormat) {
          needFullCleanup.add(parent);
        } else {
          cleanupContextlessFormattingGap(t2, item);
        }
      });
      for (const yText of needFullCleanup) {
        cleanupYTextFormatting(yText);
      }
    });
  };
  const deleteText = (transaction, currPos, length2) => {
    const startLength = length2;
    const startAttrs = copy(currPos.currentAttributes);
    const start = currPos.right;
    while (length2 > 0 && currPos.right !== null) {
      if (currPos.right.deleted === false) {
        switch (currPos.right.content.constructor) {
          case ContentType:
          case ContentEmbed:
          case ContentString:
            if (length2 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
            }
            length2 -= currPos.right.length;
            currPos.right.delete(transaction);
            break;
        }
      }
      currPos.forward();
    }
    if (start) {
      cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
    }
    const parent = (
      /** @type {AbstractType<any>} */
      /** @type {Item} */
      (currPos.left || currPos.right).parent
    );
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length2);
    }
    return currPos;
  };
  class YTextEvent extends YEvent {
    /**
     * @param {YText} ytext
     * @param {Transaction} transaction
     * @param {Set<any>} subs The keys that changed
     */
    constructor(ytext, transaction, subs) {
      super(ytext, transaction);
      this.childListChanged = false;
      this.keysChanged = /* @__PURE__ */ new Set();
      subs.forEach((sub) => {
        if (sub === null) {
          this.childListChanged = true;
        } else {
          this.keysChanged.add(sub);
        }
      });
    }
    /**
     * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
     */
    get changes() {
      if (this._changes === null) {
        const changes = {
          keys: this.keys,
          delta: this.delta,
          added: /* @__PURE__ */ new Set(),
          deleted: /* @__PURE__ */ new Set()
        };
        this._changes = changes;
      }
      return (
        /** @type {any} */
        this._changes
      );
    }
    /**
     * Compute the changes in the delta format.
     * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
     *
     * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
     *
     * @public
     */
    get delta() {
      if (this._delta === null) {
        const y2 = (
          /** @type {Doc} */
          this.target.doc
        );
        const delta = [];
        transact(y2, (transaction) => {
          const currentAttributes = /* @__PURE__ */ new Map();
          const oldAttributes = /* @__PURE__ */ new Map();
          let item = this.target._start;
          let action = null;
          const attributes = {};
          let insert = "";
          let retain = 0;
          let deleteLen = 0;
          const addOp = () => {
            if (action !== null) {
              let op = null;
              switch (action) {
                case "delete":
                  if (deleteLen > 0) {
                    op = { delete: deleteLen };
                  }
                  deleteLen = 0;
                  break;
                case "insert":
                  if (typeof insert === "object" || insert.length > 0) {
                    op = { insert };
                    if (currentAttributes.size > 0) {
                      op.attributes = {};
                      currentAttributes.forEach((value, key) => {
                        if (value !== null) {
                          op.attributes[key] = value;
                        }
                      });
                    }
                  }
                  insert = "";
                  break;
                case "retain":
                  if (retain > 0) {
                    op = { retain };
                    if (!isEmpty(attributes)) {
                      op.attributes = assign({}, attributes);
                    }
                  }
                  retain = 0;
                  break;
              }
              if (op) delta.push(op);
              action = null;
            }
          };
          while (item !== null) {
            switch (item.content.constructor) {
              case ContentType:
              case ContentEmbed:
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    addOp();
                    action = "insert";
                    insert = item.content.getContent()[0];
                    addOp();
                  }
                } else if (this.deletes(item)) {
                  if (action !== "delete") {
                    addOp();
                    action = "delete";
                  }
                  deleteLen += 1;
                } else if (!item.deleted) {
                  if (action !== "retain") {
                    addOp();
                    action = "retain";
                  }
                  retain += 1;
                }
                break;
              case ContentString:
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    if (action !== "insert") {
                      addOp();
                      action = "insert";
                    }
                    insert += /** @type {ContentString} */
                    item.content.str;
                  }
                } else if (this.deletes(item)) {
                  if (action !== "delete") {
                    addOp();
                    action = "delete";
                  }
                  deleteLen += item.length;
                } else if (!item.deleted) {
                  if (action !== "retain") {
                    addOp();
                    action = "retain";
                  }
                  retain += item.length;
                }
                break;
              case ContentFormat: {
                const { key, value } = (
                  /** @type {ContentFormat} */
                  item.content
                );
                if (this.adds(item)) {
                  if (!this.deletes(item)) {
                    const curVal = currentAttributes.get(key) ?? null;
                    if (!equalAttrs(curVal, value)) {
                      if (action === "retain") {
                        addOp();
                      }
                      if (equalAttrs(value, oldAttributes.get(key) ?? null)) {
                        delete attributes[key];
                      } else {
                        attributes[key] = value;
                      }
                    } else if (value !== null) {
                      item.delete(transaction);
                    }
                  }
                } else if (this.deletes(item)) {
                  oldAttributes.set(key, value);
                  const curVal = currentAttributes.get(key) ?? null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    attributes[key] = curVal;
                  }
                } else if (!item.deleted) {
                  oldAttributes.set(key, value);
                  const attr = attributes[key];
                  if (attr !== void 0) {
                    if (!equalAttrs(attr, value)) {
                      if (action === "retain") {
                        addOp();
                      }
                      if (value === null) {
                        delete attributes[key];
                      } else {
                        attributes[key] = value;
                      }
                    } else if (attr !== null) {
                      item.delete(transaction);
                    }
                  }
                }
                if (!item.deleted) {
                  if (action === "insert") {
                    addOp();
                  }
                  updateCurrentAttributes(
                    currentAttributes,
                    /** @type {ContentFormat} */
                    item.content
                  );
                }
                break;
              }
            }
            item = item.right;
          }
          addOp();
          while (delta.length > 0) {
            const lastOp = delta[delta.length - 1];
            if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
              delta.pop();
            } else {
              break;
            }
          }
        });
        this._delta = delta;
      }
      return (
        /** @type {any} */
        this._delta
      );
    }
  }
  class YText extends AbstractType {
    /**
     * @param {String} [string] The initial value of the YText.
     */
    constructor(string) {
      super();
      this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
      this._searchMarker = [];
      this._hasFormatting = false;
    }
    /**
     * Number of characters of this text type.
     *
     * @type {number}
     */
    get length() {
      this.doc ?? warnPrematureAccess();
      return this._length;
    }
    /**
     * @param {Doc} y
     * @param {Item} item
     */
    _integrate(y2, item) {
      super._integrate(y2, item);
      try {
        this._pending.forEach((f2) => f2());
      } catch (e2) {
        console.error(e2);
      }
      this._pending = null;
    }
    _copy() {
      return new YText();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YText}
     */
    clone() {
      const text = new YText();
      text.applyDelta(this.toDelta());
      return text;
    }
    /**
     * Creates YTextEvent and calls observers.
     *
     * @param {Transaction} transaction
     * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
     */
    _callObserver(transaction, parentSubs) {
      super._callObserver(transaction, parentSubs);
      const event = new YTextEvent(this, transaction, parentSubs);
      callTypeObservers(this, transaction, event);
      if (!transaction.local && this._hasFormatting) {
        transaction._needFormattingCleanup = true;
      }
    }
    /**
     * Returns the unformatted string representation of this YText type.
     *
     * @public
     */
    toString() {
      this.doc ?? warnPrematureAccess();
      let str = "";
      let n2 = this._start;
      while (n2 !== null) {
        if (!n2.deleted && n2.countable && n2.content.constructor === ContentString) {
          str += /** @type {ContentString} */
          n2.content.str;
        }
        n2 = n2.right;
      }
      return str;
    }
    /**
     * Returns the unformatted string representation of this YText type.
     *
     * @return {string}
     * @public
     */
    toJSON() {
      return this.toString();
    }
    /**
     * Apply a {@link Delta} on this shared YText type.
     *
     * @param {Array<any>} delta The changes to apply on this element.
     * @param {object}  opts
     * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
     *
     *
     * @public
     */
    applyDelta(delta, { sanitize = true } = {}) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
          for (let i2 = 0; i2 < delta.length; i2++) {
            const op = delta[i2];
            if (op.insert !== void 0) {
              const ins = !sanitize && typeof op.insert === "string" && i2 === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
              if (typeof ins !== "string" || ins.length > 0) {
                insertText(transaction, this, currPos, ins, op.attributes || {});
              }
            } else if (op.retain !== void 0) {
              formatText(transaction, this, currPos, op.retain, op.attributes || {});
            } else if (op.delete !== void 0) {
              deleteText(transaction, currPos, op.delete);
            }
          }
        });
      } else {
        this._pending.push(() => this.applyDelta(delta));
      }
    }
    /**
     * Returns the Delta representation of this YText type.
     *
     * @param {Snapshot} [snapshot]
     * @param {Snapshot} [prevSnapshot]
     * @param {function('removed' | 'added', ID):any} [computeYChange]
     * @return {any} The Delta representation of this type.
     *
     * @public
     */
    toDelta(snapshot2, prevSnapshot, computeYChange) {
      this.doc ?? warnPrematureAccess();
      const ops = [];
      const currentAttributes = /* @__PURE__ */ new Map();
      const doc = (
        /** @type {Doc} */
        this.doc
      );
      let str = "";
      let n2 = this._start;
      function packStr() {
        if (str.length > 0) {
          const attributes = {};
          let addAttributes = false;
          currentAttributes.forEach((value, key) => {
            addAttributes = true;
            attributes[key] = value;
          });
          const op = { insert: str };
          if (addAttributes) {
            op.attributes = attributes;
          }
          ops.push(op);
          str = "";
        }
      }
      const computeDelta = () => {
        while (n2 !== null) {
          if (isVisible(n2, snapshot2) || prevSnapshot !== void 0 && isVisible(n2, prevSnapshot)) {
            switch (n2.content.constructor) {
              case ContentString: {
                const cur = currentAttributes.get("ychange");
                if (snapshot2 !== void 0 && !isVisible(n2, snapshot2)) {
                  if (cur === void 0 || cur.user !== n2.id.client || cur.type !== "removed") {
                    packStr();
                    currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n2.id) : { type: "removed" });
                  }
                } else if (prevSnapshot !== void 0 && !isVisible(n2, prevSnapshot)) {
                  if (cur === void 0 || cur.user !== n2.id.client || cur.type !== "added") {
                    packStr();
                    currentAttributes.set("ychange", computeYChange ? computeYChange("added", n2.id) : { type: "added" });
                  }
                } else if (cur !== void 0) {
                  packStr();
                  currentAttributes.delete("ychange");
                }
                str += /** @type {ContentString} */
                n2.content.str;
                break;
              }
              case ContentType:
              case ContentEmbed: {
                packStr();
                const op = {
                  insert: n2.content.getContent()[0]
                };
                if (currentAttributes.size > 0) {
                  const attrs = (
                    /** @type {Object<string,any>} */
                    {}
                  );
                  op.attributes = attrs;
                  currentAttributes.forEach((value, key) => {
                    attrs[key] = value;
                  });
                }
                ops.push(op);
                break;
              }
              case ContentFormat:
                if (isVisible(n2, snapshot2)) {
                  packStr();
                  updateCurrentAttributes(
                    currentAttributes,
                    /** @type {ContentFormat} */
                    n2.content
                  );
                }
                break;
            }
          }
          n2 = n2.right;
        }
        packStr();
      };
      if (snapshot2 || prevSnapshot) {
        transact(doc, (transaction) => {
          if (snapshot2) {
            splitSnapshotAffectedStructs(transaction, snapshot2);
          }
          if (prevSnapshot) {
            splitSnapshotAffectedStructs(transaction, prevSnapshot);
          }
          computeDelta();
        }, "cleanup");
      } else {
        computeDelta();
      }
      return ops;
    }
    /**
     * Insert text at a given index.
     *
     * @param {number} index The index at which to start inserting.
     * @param {String} text The text to insert at the specified position.
     * @param {TextAttributes} [attributes] Optionally define some formatting
     *                                    information to apply on the inserted
     *                                    Text.
     * @public
     */
    insert(index, text, attributes) {
      if (text.length <= 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index, !attributes);
          if (!attributes) {
            attributes = {};
            pos.currentAttributes.forEach((v2, k2) => {
              attributes[k2] = v2;
            });
          }
          insertText(transaction, this, pos, text, attributes);
        });
      } else {
        this._pending.push(() => this.insert(index, text, attributes));
      }
    }
    /**
     * Inserts an embed at a index.
     *
     * @param {number} index The index to insert the embed at.
     * @param {Object | AbstractType<any>} embed The Object that represents the embed.
     * @param {TextAttributes} [attributes] Attribute information to apply on the
     *                                    embed
     *
     * @public
     */
    insertEmbed(index, embed, attributes) {
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index, !attributes);
          insertText(transaction, this, pos, embed, attributes || {});
        });
      } else {
        this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
      }
    }
    /**
     * Deletes text starting from an index.
     *
     * @param {number} index Index at which to start deleting.
     * @param {number} length The number of characters to remove. Defaults to 1.
     *
     * @public
     */
    delete(index, length2) {
      if (length2 === 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          deleteText(transaction, findPosition(transaction, this, index, true), length2);
        });
      } else {
        this._pending.push(() => this.delete(index, length2));
      }
    }
    /**
     * Assigns properties to a range of text.
     *
     * @param {number} index The position where to start formatting.
     * @param {number} length The amount of characters to assign properties to.
     * @param {TextAttributes} attributes Attribute information to apply on the
     *                                    text.
     *
     * @public
     */
    format(index, length2, attributes) {
      if (length2 === 0) {
        return;
      }
      const y2 = this.doc;
      if (y2 !== null) {
        transact(y2, (transaction) => {
          const pos = findPosition(transaction, this, index, false);
          if (pos.right === null) {
            return;
          }
          formatText(transaction, this, pos, length2, attributes);
        });
      } else {
        this._pending.push(() => this.format(index, length2, attributes));
      }
    }
    /**
     * Removes an attribute.
     *
     * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
     *
     * @param {String} attributeName The attribute name that is to be removed.
     *
     * @public
     */
    removeAttribute(attributeName) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, attributeName);
        });
      } else {
        this._pending.push(() => this.removeAttribute(attributeName));
      }
    }
    /**
     * Sets or updates an attribute.
     *
     * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
     *
     * @param {String} attributeName The attribute name that is to be set.
     * @param {any} attributeValue The attribute value that is to be set.
     *
     * @public
     */
    setAttribute(attributeName, attributeValue) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(transaction, this, attributeName, attributeValue);
        });
      } else {
        this._pending.push(() => this.setAttribute(attributeName, attributeValue));
      }
    }
    /**
     * Returns an attribute value that belongs to the attribute name.
     *
     * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
     *
     * @param {String} attributeName The attribute name that identifies the
     *                               queried value.
     * @return {any} The queried attribute value.
     *
     * @public
     */
    getAttribute(attributeName) {
      return (
        /** @type {any} */
        typeMapGet(this, attributeName)
      );
    }
    /**
     * Returns all attribute name/value pairs in a JSON Object.
     *
     * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
     *
     * @return {Object<string, any>} A JSON Object that describes the attributes.
     *
     * @public
     */
    getAttributes() {
      return typeMapGetAll(this);
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     */
    _write(encoder) {
      encoder.writeTypeRef(YTextRefID);
    }
  }
  const readYText = (_decoder) => new YText();
  class YXmlTreeWalker {
    /**
     * @param {YXmlFragment | YXmlElement} root
     * @param {function(AbstractType<any>):boolean} [f]
     */
    constructor(root, f2 = () => true) {
      this._filter = f2;
      this._root = root;
      this._currentNode = /** @type {Item} */
      root._start;
      this._firstCall = true;
      root.doc ?? warnPrematureAccess();
    }
    [Symbol.iterator]() {
      return this;
    }
    /**
     * Get the next node.
     *
     * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
     *
     * @public
     */
    next() {
      let n2 = this._currentNode;
      let type = n2 && n2.content && /** @type {any} */
      n2.content.type;
      if (n2 !== null && (!this._firstCall || n2.deleted || !this._filter(type))) {
        do {
          type = /** @type {any} */
          n2.content.type;
          if (!n2.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
            n2 = type._start;
          } else {
            while (n2 !== null) {
              const nxt = n2.next;
              if (nxt !== null) {
                n2 = nxt;
                break;
              } else if (n2.parent === this._root) {
                n2 = null;
              } else {
                n2 = /** @type {AbstractType<any>} */
                n2.parent._item;
              }
            }
          }
        } while (n2 !== null && (n2.deleted || !this._filter(
          /** @type {ContentType} */
          n2.content.type
        )));
      }
      this._firstCall = false;
      if (n2 === null) {
        return { value: void 0, done: true };
      }
      this._currentNode = n2;
      return { value: (
        /** @type {any} */
        n2.content.type
      ), done: false };
    }
  }
  class YXmlFragment extends AbstractType {
    constructor() {
      super();
      this._prelimContent = [];
    }
    /**
     * @type {YXmlElement|YXmlText|null}
     */
    get firstChild() {
      const first = this._first;
      return first ? first.content.getContent()[0] : null;
    }
    /**
     * Integrate this type into the Yjs instance.
     *
     * * Save this struct in the os
     * * This type is sent to other client
     * * Observer functions are fired
     *
     * @param {Doc} y The Yjs instance
     * @param {Item} item
     */
    _integrate(y2, item) {
      super._integrate(y2, item);
      this.insert(
        0,
        /** @type {Array<any>} */
        this._prelimContent
      );
      this._prelimContent = null;
    }
    _copy() {
      return new YXmlFragment();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YXmlFragment}
     */
    clone() {
      const el = new YXmlFragment();
      el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
      return el;
    }
    get length() {
      this.doc ?? warnPrematureAccess();
      return this._prelimContent === null ? this._length : this._prelimContent.length;
    }
    /**
     * Create a subtree of childNodes.
     *
     * @example
     * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
     * for (let node in walker) {
     *   // `node` is a div node
     *   nop(node)
     * }
     *
     * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
     *                          returns a Boolean indicating whether the child
     *                          is to be included in the subtree.
     * @return {YXmlTreeWalker} A subtree and a position within it.
     *
     * @public
     */
    createTreeWalker(filter2) {
      return new YXmlTreeWalker(this, filter2);
    }
    /**
     * Returns the first YXmlElement that matches the query.
     * Similar to DOM's {@link querySelector}.
     *
     * Query support:
     *   - tagname
     * TODO:
     *   - id
     *   - attribute
     *
     * @param {CSS_Selector} query The query on the children.
     * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
     *
     * @public
     */
    querySelector(query) {
      query = query.toUpperCase();
      const iterator = new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query);
      const next = iterator.next();
      if (next.done) {
        return null;
      } else {
        return next.value;
      }
    }
    /**
     * Returns all YXmlElements that match the query.
     * Similar to Dom's {@link querySelectorAll}.
     *
     * @todo Does not yet support all queries. Currently only query by tagName.
     *
     * @param {CSS_Selector} query The query on the children
     * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
     *
     * @public
     */
    querySelectorAll(query) {
      query = query.toUpperCase();
      return from(new YXmlTreeWalker(this, (element) => element.nodeName && element.nodeName.toUpperCase() === query));
    }
    /**
     * Creates YXmlEvent and calls observers.
     *
     * @param {Transaction} transaction
     * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
     */
    _callObserver(transaction, parentSubs) {
      callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
    }
    /**
     * Get the string representation of all the children of this YXmlFragment.
     *
     * @return {string} The string representation of all children.
     */
    toString() {
      return typeListMap(this, (xml) => xml.toString()).join("");
    }
    /**
     * @return {string}
     */
    toJSON() {
      return this.toString();
    }
    /**
     * Creates a Dom Element that mirrors this YXmlElement.
     *
     * @param {Document} [_document=document] The document object (you must define
     *                                        this when calling this method in
     *                                        nodejs)
     * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
     *                                             are presented in the DOM
     * @param {any} [binding] You should not set this property. This is
     *                               used if DomBinding wants to create a
     *                               association to the created DOM type.
     * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
     *
     * @public
     */
    toDOM(_document = document, hooks = {}, binding) {
      const fragment = _document.createDocumentFragment();
      if (binding !== void 0) {
        binding._createAssociation(fragment, this);
      }
      typeListForEach(this, (xmlType) => {
        fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
      });
      return fragment;
    }
    /**
     * Inserts new content at an index.
     *
     * @example
     *  // Insert character 'a' at position 0
     *  xml.insert(0, [new Y.XmlText('text')])
     *
     * @param {number} index The index to insert content at
     * @param {Array<YXmlElement|YXmlText>} content The array of content
     */
    insert(index, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListInsertGenerics(transaction, this, index, content);
        });
      } else {
        this._prelimContent.splice(index, 0, ...content);
      }
    }
    /**
     * Inserts new content at an index.
     *
     * @example
     *  // Insert character 'a' at position 0
     *  xml.insert(0, [new Y.XmlText('text')])
     *
     * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
     * @param {Array<YXmlElement|YXmlText>} content The array of content
     */
    insertAfter(ref, content) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
          typeListInsertGenericsAfter(transaction, this, refItem, content);
        });
      } else {
        const pc = (
          /** @type {Array<any>} */
          this._prelimContent
        );
        const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
        if (index === 0 && ref !== null) {
          throw create$3("Reference item not found");
        }
        pc.splice(index, 0, ...content);
      }
    }
    /**
     * Deletes elements starting from an index.
     *
     * @param {number} index Index at which to start deleting elements
     * @param {number} [length=1] The number of elements to remove. Defaults to 1.
     */
    delete(index, length2 = 1) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeListDelete(transaction, this, index, length2);
        });
      } else {
        this._prelimContent.splice(index, length2);
      }
    }
    /**
     * Transforms this YArray to a JavaScript Array.
     *
     * @return {Array<YXmlElement|YXmlText|YXmlHook>}
     */
    toArray() {
      return typeListToArray(this);
    }
    /**
     * Appends content to this YArray.
     *
     * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
     */
    push(content) {
      this.insert(this.length, content);
    }
    /**
     * Prepends content to this YArray.
     *
     * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
     */
    unshift(content) {
      this.insert(0, content);
    }
    /**
     * Returns the i-th element from a YArray.
     *
     * @param {number} index The index of the element to return from the YArray
     * @return {YXmlElement|YXmlText}
     */
    get(index) {
      return typeListGet(this, index);
    }
    /**
     * Returns a portion of this YXmlFragment into a JavaScript Array selected
     * from start to end (end not included).
     *
     * @param {number} [start]
     * @param {number} [end]
     * @return {Array<YXmlElement|YXmlText>}
     */
    slice(start = 0, end = this.length) {
      return typeListSlice(this, start, end);
    }
    /**
     * Executes a provided function on once on every child element.
     *
     * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
     */
    forEach(f2) {
      typeListForEach(this, f2);
    }
    /**
     * Transform the properties of this type to binary and write it to an
     * BinaryEncoder.
     *
     * This is called when this Item is sent to a remote peer.
     *
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
     */
    _write(encoder) {
      encoder.writeTypeRef(YXmlFragmentRefID);
    }
  }
  const readYXmlFragment = (_decoder) => new YXmlFragment();
  class YXmlElement extends YXmlFragment {
    constructor(nodeName = "UNDEFINED") {
      super();
      this.nodeName = nodeName;
      this._prelimAttrs = /* @__PURE__ */ new Map();
    }
    /**
     * @type {YXmlElement|YXmlText|null}
     */
    get nextSibling() {
      const n2 = this._item ? this._item.next : null;
      return n2 ? (
        /** @type {YXmlElement|YXmlText} */
        /** @type {ContentType} */
        n2.content.type
      ) : null;
    }
    /**
     * @type {YXmlElement|YXmlText|null}
     */
    get prevSibling() {
      const n2 = this._item ? this._item.prev : null;
      return n2 ? (
        /** @type {YXmlElement|YXmlText} */
        /** @type {ContentType} */
        n2.content.type
      ) : null;
    }
    /**
     * Integrate this type into the Yjs instance.
     *
     * * Save this struct in the os
     * * This type is sent to other client
     * * Observer functions are fired
     *
     * @param {Doc} y The Yjs instance
     * @param {Item} item
     */
    _integrate(y2, item) {
      super._integrate(y2, item);
      /** @type {Map<string, any>} */
      this._prelimAttrs.forEach((value, key) => {
        this.setAttribute(key, value);
      });
      this._prelimAttrs = null;
    }
    /**
     * Creates an Item with the same effect as this Item (without position effect)
     *
     * @return {YXmlElement}
     */
    _copy() {
      return new YXmlElement(this.nodeName);
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YXmlElement<KV>}
     */
    clone() {
      const el = new YXmlElement(this.nodeName);
      const attrs = this.getAttributes();
      forEach(attrs, (value, key) => {
        if (typeof value === "string") {
          el.setAttribute(key, value);
        }
      });
      el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
      return el;
    }
    /**
     * Returns the XML serialization of this YXmlElement.
     * The attributes are ordered by attribute-name, so you can easily use this
     * method to compare YXmlElements
     *
     * @return {string} The string representation of this type.
     *
     * @public
     */
    toString() {
      const attrs = this.getAttributes();
      const stringBuilder = [];
      const keys2 = [];
      for (const key in attrs) {
        keys2.push(key);
      }
      keys2.sort();
      const keysLen = keys2.length;
      for (let i2 = 0; i2 < keysLen; i2++) {
        const key = keys2[i2];
        stringBuilder.push(key + '="' + attrs[key] + '"');
      }
      const nodeName = this.nodeName.toLocaleLowerCase();
      const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
      return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
    }
    /**
     * Removes an attribute from this YXmlElement.
     *
     * @param {string} attributeName The attribute name that is to be removed.
     *
     * @public
     */
    removeAttribute(attributeName) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapDelete(transaction, this, attributeName);
        });
      } else {
        this._prelimAttrs.delete(attributeName);
      }
    }
    /**
     * Sets or updates an attribute.
     *
     * @template {keyof KV & string} KEY
     *
     * @param {KEY} attributeName The attribute name that is to be set.
     * @param {KV[KEY]} attributeValue The attribute value that is to be set.
     *
     * @public
     */
    setAttribute(attributeName, attributeValue) {
      if (this.doc !== null) {
        transact(this.doc, (transaction) => {
          typeMapSet(transaction, this, attributeName, attributeValue);
        });
      } else {
        this._prelimAttrs.set(attributeName, attributeValue);
      }
    }
    /**
     * Returns an attribute value that belongs to the attribute name.
     *
     * @template {keyof KV & string} KEY
     *
     * @param {KEY} attributeName The attribute name that identifies the
     *                               queried value.
     * @return {KV[KEY]|undefined} The queried attribute value.
     *
     * @public
     */
    getAttribute(attributeName) {
      return (
        /** @type {any} */
        typeMapGet(this, attributeName)
      );
    }
    /**
     * Returns whether an attribute exists
     *
     * @param {string} attributeName The attribute name to check for existence.
     * @return {boolean} whether the attribute exists.
     *
     * @public
     */
    hasAttribute(attributeName) {
      return (
        /** @type {any} */
        typeMapHas(this, attributeName)
      );
    }
    /**
     * Returns all attribute name/value pairs in a JSON Object.
     *
     * @param {Snapshot} [snapshot]
     * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
     *
     * @public
     */
    getAttributes(snapshot2) {
      return (
        /** @type {any} */
        snapshot2 ? typeMapGetAllSnapshot(this, snapshot2) : typeMapGetAll(this)
      );
    }
    /**
     * Creates a Dom Element that mirrors this YXmlElement.
     *
     * @param {Document} [_document=document] The document object (you must define
     *                                        this when calling this method in
     *                                        nodejs)
     * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
     *                                             are presented in the DOM
     * @param {any} [binding] You should not set this property. This is
     *                               used if DomBinding wants to create a
     *                               association to the created DOM type.
     * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
     *
     * @public
     */
    toDOM(_document = document, hooks = {}, binding) {
      const dom = _document.createElement(this.nodeName);
      const attrs = this.getAttributes();
      for (const key in attrs) {
        const value = attrs[key];
        if (typeof value === "string") {
          dom.setAttribute(key, value);
        }
      }
      typeListForEach(this, (yxml) => {
        dom.appendChild(yxml.toDOM(_document, hooks, binding));
      });
      if (binding !== void 0) {
        binding._createAssociation(dom, this);
      }
      return dom;
    }
    /**
     * Transform the properties of this type to binary and write it to an
     * BinaryEncoder.
     *
     * This is called when this Item is sent to a remote peer.
     *
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
     */
    _write(encoder) {
      encoder.writeTypeRef(YXmlElementRefID);
      encoder.writeKey(this.nodeName);
    }
  }
  const readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
  class YXmlEvent extends YEvent {
    /**
     * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
     * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
     *                   child list changed.
     * @param {Transaction} transaction The transaction instance with which the
     *                                  change was created.
     */
    constructor(target, subs, transaction) {
      super(target, transaction);
      this.childListChanged = false;
      this.attributesChanged = /* @__PURE__ */ new Set();
      subs.forEach((sub) => {
        if (sub === null) {
          this.childListChanged = true;
        } else {
          this.attributesChanged.add(sub);
        }
      });
    }
  }
  class YXmlHook extends YMap {
    /**
     * @param {string} hookName nodeName of the Dom Node.
     */
    constructor(hookName) {
      super();
      this.hookName = hookName;
    }
    /**
     * Creates an Item with the same effect as this Item (without position effect)
     */
    _copy() {
      return new YXmlHook(this.hookName);
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YXmlHook}
     */
    clone() {
      const el = new YXmlHook(this.hookName);
      this.forEach((value, key) => {
        el.set(key, value);
      });
      return el;
    }
    /**
     * Creates a Dom Element that mirrors this YXmlElement.
     *
     * @param {Document} [_document=document] The document object (you must define
     *                                        this when calling this method in
     *                                        nodejs)
     * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
     *                                             are presented in the DOM
     * @param {any} [binding] You should not set this property. This is
     *                               used if DomBinding wants to create a
     *                               association to the created DOM type
     * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
     *
     * @public
     */
    toDOM(_document = document, hooks = {}, binding) {
      const hook = hooks[this.hookName];
      let dom;
      if (hook !== void 0) {
        dom = hook.createDom(this);
      } else {
        dom = document.createElement(this.hookName);
      }
      dom.setAttribute("data-yjs-hook", this.hookName);
      if (binding !== void 0) {
        binding._createAssociation(dom, this);
      }
      return dom;
    }
    /**
     * Transform the properties of this type to binary and write it to an
     * BinaryEncoder.
     *
     * This is called when this Item is sent to a remote peer.
     *
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
     */
    _write(encoder) {
      encoder.writeTypeRef(YXmlHookRefID);
      encoder.writeKey(this.hookName);
    }
  }
  const readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
  class YXmlText extends YText {
    /**
     * @type {YXmlElement|YXmlText|null}
     */
    get nextSibling() {
      const n2 = this._item ? this._item.next : null;
      return n2 ? (
        /** @type {YXmlElement|YXmlText} */
        /** @type {ContentType} */
        n2.content.type
      ) : null;
    }
    /**
     * @type {YXmlElement|YXmlText|null}
     */
    get prevSibling() {
      const n2 = this._item ? this._item.prev : null;
      return n2 ? (
        /** @type {YXmlElement|YXmlText} */
        /** @type {ContentType} */
        n2.content.type
      ) : null;
    }
    _copy() {
      return new YXmlText();
    }
    /**
     * Makes a copy of this data type that can be included somewhere else.
     *
     * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
     *
     * @return {YXmlText}
     */
    clone() {
      const text = new YXmlText();
      text.applyDelta(this.toDelta());
      return text;
    }
    /**
     * Creates a Dom Element that mirrors this YXmlText.
     *
     * @param {Document} [_document=document] The document object (you must define
     *                                        this when calling this method in
     *                                        nodejs)
     * @param {Object<string, any>} [hooks] Optional property to customize how hooks
     *                                             are presented in the DOM
     * @param {any} [binding] You should not set this property. This is
     *                               used if DomBinding wants to create a
     *                               association to the created DOM type.
     * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
     *
     * @public
     */
    toDOM(_document = document, hooks, binding) {
      const dom = _document.createTextNode(this.toString());
      if (binding !== void 0) {
        binding._createAssociation(dom, this);
      }
      return dom;
    }
    toString() {
      return this.toDelta().map((delta) => {
        const nestedNodes = [];
        for (const nodeName in delta.attributes) {
          const attrs = [];
          for (const key in delta.attributes[nodeName]) {
            attrs.push({ key, value: delta.attributes[nodeName][key] });
          }
          attrs.sort((a2, b2) => a2.key < b2.key ? -1 : 1);
          nestedNodes.push({ nodeName, attrs });
        }
        nestedNodes.sort((a2, b2) => a2.nodeName < b2.nodeName ? -1 : 1);
        let str = "";
        for (let i2 = 0; i2 < nestedNodes.length; i2++) {
          const node = nestedNodes[i2];
          str += `<${node.nodeName}`;
          for (let j2 = 0; j2 < node.attrs.length; j2++) {
            const attr = node.attrs[j2];
            str += ` ${attr.key}="${attr.value}"`;
          }
          str += ">";
        }
        str += delta.insert;
        for (let i2 = nestedNodes.length - 1; i2 >= 0; i2--) {
          str += `</${nestedNodes[i2].nodeName}>`;
        }
        return str;
      }).join("");
    }
    /**
     * @return {string}
     */
    toJSON() {
      return this.toString();
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     */
    _write(encoder) {
      encoder.writeTypeRef(YXmlTextRefID);
    }
  }
  const readYXmlText = (decoder) => new YXmlText();
  class AbstractStruct {
    /**
     * @param {ID} id
     * @param {number} length
     */
    constructor(id2, length2) {
      this.id = id2;
      this.length = length2;
    }
    /**
     * @type {boolean}
     */
    get deleted() {
      throw methodUnimplemented();
    }
    /**
     * Merge this struct with the item to the right.
     * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
     * Also this method does *not* remove right from StructStore!
     * @param {AbstractStruct} right
     * @return {boolean} whether this merged with right
     */
    mergeWith(right) {
      return false;
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
     * @param {number} offset
     * @param {number} encodingRef
     */
    write(encoder, offset, encodingRef) {
      throw methodUnimplemented();
    }
    /**
     * @param {Transaction} transaction
     * @param {number} offset
     */
    integrate(transaction, offset) {
      throw methodUnimplemented();
    }
  }
  const structGCRefNumber = 0;
  class GC extends AbstractStruct {
    get deleted() {
      return true;
    }
    delete() {
    }
    /**
     * @param {GC} right
     * @return {boolean}
     */
    mergeWith(right) {
      if (this.constructor !== right.constructor) {
        return false;
      }
      this.length += right.length;
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {number} offset
     */
    integrate(transaction, offset) {
      if (offset > 0) {
        this.id.clock += offset;
        this.length -= offset;
      }
      addStruct(transaction.doc.store, this);
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeInfo(structGCRefNumber);
      encoder.writeLen(this.length - offset);
    }
    /**
     * @param {Transaction} transaction
     * @param {StructStore} store
     * @return {null | number}
     */
    getMissing(transaction, store2) {
      return null;
    }
  }
  class ContentBinary {
    /**
     * @param {Uint8Array} content
     */
    constructor(content) {
      this.content = content;
    }
    /**
     * @return {number}
     */
    getLength() {
      return 1;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [this.content];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentBinary}
     */
    copy() {
      return new ContentBinary(this.content);
    }
    /**
     * @param {number} offset
     * @return {ContentBinary}
     */
    splice(offset) {
      throw methodUnimplemented();
    }
    /**
     * @param {ContentBinary} right
     * @return {boolean}
     */
    mergeWith(right) {
      return false;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeBuf(this.content);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 3;
    }
  }
  const readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
  class ContentDeleted {
    /**
     * @param {number} len
     */
    constructor(len) {
      this.len = len;
    }
    /**
     * @return {number}
     */
    getLength() {
      return this.len;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return false;
    }
    /**
     * @return {ContentDeleted}
     */
    copy() {
      return new ContentDeleted(this.len);
    }
    /**
     * @param {number} offset
     * @return {ContentDeleted}
     */
    splice(offset) {
      const right = new ContentDeleted(this.len - offset);
      this.len = offset;
      return right;
    }
    /**
     * @param {ContentDeleted} right
     * @return {boolean}
     */
    mergeWith(right) {
      this.len += right.len;
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
      addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
      item.markDeleted();
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeLen(this.len - offset);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 1;
    }
  }
  const readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
  const createDocFromOpts = (guid, opts) => new Doc$1({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
  class ContentDoc {
    /**
     * @param {Doc} doc
     */
    constructor(doc) {
      if (doc._item) {
        console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
      }
      this.doc = doc;
      const opts = {};
      this.opts = opts;
      if (!doc.gc) {
        opts.gc = false;
      }
      if (doc.autoLoad) {
        opts.autoLoad = true;
      }
      if (doc.meta !== null) {
        opts.meta = doc.meta;
      }
    }
    /**
     * @return {number}
     */
    getLength() {
      return 1;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [this.doc];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentDoc}
     */
    copy() {
      return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
    }
    /**
     * @param {number} offset
     * @return {ContentDoc}
     */
    splice(offset) {
      throw methodUnimplemented();
    }
    /**
     * @param {ContentDoc} right
     * @return {boolean}
     */
    mergeWith(right) {
      return false;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
      this.doc._item = item;
      transaction.subdocsAdded.add(this.doc);
      if (this.doc.shouldLoad) {
        transaction.subdocsLoaded.add(this.doc);
      }
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
      if (transaction.subdocsAdded.has(this.doc)) {
        transaction.subdocsAdded.delete(this.doc);
      } else {
        transaction.subdocsRemoved.add(this.doc);
      }
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeString(this.doc.guid);
      encoder.writeAny(this.opts);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 9;
    }
  }
  const readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
  class ContentEmbed {
    /**
     * @param {Object} embed
     */
    constructor(embed) {
      this.embed = embed;
    }
    /**
     * @return {number}
     */
    getLength() {
      return 1;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [this.embed];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentEmbed}
     */
    copy() {
      return new ContentEmbed(this.embed);
    }
    /**
     * @param {number} offset
     * @return {ContentEmbed}
     */
    splice(offset) {
      throw methodUnimplemented();
    }
    /**
     * @param {ContentEmbed} right
     * @return {boolean}
     */
    mergeWith(right) {
      return false;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeJSON(this.embed);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 5;
    }
  }
  const readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
  class ContentFormat {
    /**
     * @param {string} key
     * @param {Object} value
     */
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    /**
     * @return {number}
     */
    getLength() {
      return 1;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return false;
    }
    /**
     * @return {ContentFormat}
     */
    copy() {
      return new ContentFormat(this.key, this.value);
    }
    /**
     * @param {number} _offset
     * @return {ContentFormat}
     */
    splice(_offset) {
      throw methodUnimplemented();
    }
    /**
     * @param {ContentFormat} _right
     * @return {boolean}
     */
    mergeWith(_right) {
      return false;
    }
    /**
     * @param {Transaction} _transaction
     * @param {Item} item
     */
    integrate(_transaction, item) {
      const p2 = (
        /** @type {YText} */
        item.parent
      );
      p2._searchMarker = null;
      p2._hasFormatting = true;
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeKey(this.key);
      encoder.writeJSON(this.value);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 6;
    }
  }
  const readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
  class ContentJSON {
    /**
     * @param {Array<any>} arr
     */
    constructor(arr) {
      this.arr = arr;
    }
    /**
     * @return {number}
     */
    getLength() {
      return this.arr.length;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return this.arr;
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentJSON}
     */
    copy() {
      return new ContentJSON(this.arr);
    }
    /**
     * @param {number} offset
     * @return {ContentJSON}
     */
    splice(offset) {
      const right = new ContentJSON(this.arr.slice(offset));
      this.arr = this.arr.slice(0, offset);
      return right;
    }
    /**
     * @param {ContentJSON} right
     * @return {boolean}
     */
    mergeWith(right) {
      this.arr = this.arr.concat(right.arr);
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      const len = this.arr.length;
      encoder.writeLen(len - offset);
      for (let i2 = offset; i2 < len; i2++) {
        const c2 = this.arr[i2];
        encoder.writeString(c2 === void 0 ? "undefined" : JSON.stringify(c2));
      }
    }
    /**
     * @return {number}
     */
    getRef() {
      return 2;
    }
  }
  const readContentJSON = (decoder) => {
    const len = decoder.readLen();
    const cs = [];
    for (let i2 = 0; i2 < len; i2++) {
      const c2 = decoder.readString();
      if (c2 === "undefined") {
        cs.push(void 0);
      } else {
        cs.push(JSON.parse(c2));
      }
    }
    return new ContentJSON(cs);
  };
  const isDevMode = getVariable("node_env") === "development";
  class ContentAny {
    /**
     * @param {Array<any>} arr
     */
    constructor(arr) {
      this.arr = arr;
      isDevMode && deepFreeze(arr);
    }
    /**
     * @return {number}
     */
    getLength() {
      return this.arr.length;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return this.arr;
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentAny}
     */
    copy() {
      return new ContentAny(this.arr);
    }
    /**
     * @param {number} offset
     * @return {ContentAny}
     */
    splice(offset) {
      const right = new ContentAny(this.arr.slice(offset));
      this.arr = this.arr.slice(0, offset);
      return right;
    }
    /**
     * @param {ContentAny} right
     * @return {boolean}
     */
    mergeWith(right) {
      this.arr = this.arr.concat(right.arr);
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      const len = this.arr.length;
      encoder.writeLen(len - offset);
      for (let i2 = offset; i2 < len; i2++) {
        const c2 = this.arr[i2];
        encoder.writeAny(c2);
      }
    }
    /**
     * @return {number}
     */
    getRef() {
      return 8;
    }
  }
  const readContentAny = (decoder) => {
    const len = decoder.readLen();
    const cs = [];
    for (let i2 = 0; i2 < len; i2++) {
      cs.push(decoder.readAny());
    }
    return new ContentAny(cs);
  };
  class ContentString {
    /**
     * @param {string} str
     */
    constructor(str) {
      this.str = str;
    }
    /**
     * @return {number}
     */
    getLength() {
      return this.str.length;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return this.str.split("");
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentString}
     */
    copy() {
      return new ContentString(this.str);
    }
    /**
     * @param {number} offset
     * @return {ContentString}
     */
    splice(offset) {
      const right = new ContentString(this.str.slice(offset));
      this.str = this.str.slice(0, offset);
      const firstCharCode = this.str.charCodeAt(offset - 1);
      if (firstCharCode >= 55296 && firstCharCode <= 56319) {
        this.str = this.str.slice(0, offset - 1) + "�";
        right.str = "�" + right.str.slice(1);
      }
      return right;
    }
    /**
     * @param {ContentString} right
     * @return {boolean}
     */
    mergeWith(right) {
      this.str += right.str;
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
    }
    /**
     * @return {number}
     */
    getRef() {
      return 4;
    }
  }
  const readContentString = (decoder) => new ContentString(decoder.readString());
  const typeRefs = [
    readYArray,
    readYMap,
    readYText,
    readYXmlElement,
    readYXmlFragment,
    readYXmlHook,
    readYXmlText
  ];
  const YArrayRefID = 0;
  const YMapRefID = 1;
  const YTextRefID = 2;
  const YXmlElementRefID = 3;
  const YXmlFragmentRefID = 4;
  const YXmlHookRefID = 5;
  const YXmlTextRefID = 6;
  class ContentType {
    /**
     * @param {AbstractType<any>} type
     */
    constructor(type) {
      this.type = type;
    }
    /**
     * @return {number}
     */
    getLength() {
      return 1;
    }
    /**
     * @return {Array<any>}
     */
    getContent() {
      return [this.type];
    }
    /**
     * @return {boolean}
     */
    isCountable() {
      return true;
    }
    /**
     * @return {ContentType}
     */
    copy() {
      return new ContentType(this.type._copy());
    }
    /**
     * @param {number} offset
     * @return {ContentType}
     */
    splice(offset) {
      throw methodUnimplemented();
    }
    /**
     * @param {ContentType} right
     * @return {boolean}
     */
    mergeWith(right) {
      return false;
    }
    /**
     * @param {Transaction} transaction
     * @param {Item} item
     */
    integrate(transaction, item) {
      this.type._integrate(transaction.doc, item);
    }
    /**
     * @param {Transaction} transaction
     */
    delete(transaction) {
      let item = this.type._start;
      while (item !== null) {
        if (!item.deleted) {
          item.delete(transaction);
        } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
          transaction._mergeStructs.push(item);
        }
        item = item.right;
      }
      this.type._map.forEach((item2) => {
        if (!item2.deleted) {
          item2.delete(transaction);
        } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
          transaction._mergeStructs.push(item2);
        }
      });
      transaction.changed.delete(this.type);
    }
    /**
     * @param {StructStore} store
     */
    gc(store2) {
      let item = this.type._start;
      while (item !== null) {
        item.gc(store2, true);
        item = item.right;
      }
      this.type._start = null;
      this.type._map.forEach(
        /** @param {Item | null} item */
        (item2) => {
          while (item2 !== null) {
            item2.gc(store2, true);
            item2 = item2.left;
          }
        }
      );
      this.type._map = /* @__PURE__ */ new Map();
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      this.type._write(encoder);
    }
    /**
     * @return {number}
     */
    getRef() {
      return 7;
    }
  }
  const readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
  const followRedone = (store2, id2) => {
    let nextID = id2;
    let diff = 0;
    let item;
    do {
      if (diff > 0) {
        nextID = createID(nextID.client, nextID.clock + diff);
      }
      item = getItem(store2, nextID);
      diff = nextID.clock - item.id.clock;
      nextID = item.redone;
    } while (nextID !== null && item instanceof Item);
    return {
      item,
      diff
    };
  };
  const keepItem = (item, keep) => {
    while (item !== null && item.keep !== keep) {
      item.keep = keep;
      item = /** @type {AbstractType<any>} */
      item.parent._item;
    }
  };
  const splitItem = (transaction, leftItem, diff) => {
    const { client, clock } = leftItem.id;
    const rightItem = new Item(
      createID(client, clock + diff),
      leftItem,
      createID(client, clock + diff - 1),
      leftItem.right,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
    if (leftItem.deleted) {
      rightItem.markDeleted();
    }
    if (leftItem.keep) {
      rightItem.keep = true;
    }
    if (leftItem.redone !== null) {
      rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
    }
    leftItem.right = rightItem;
    if (rightItem.right !== null) {
      rightItem.right.left = rightItem;
    }
    transaction._mergeStructs.push(rightItem);
    if (rightItem.parentSub !== null && rightItem.right === null) {
      rightItem.parent._map.set(rightItem.parentSub, rightItem);
    }
    leftItem.length = diff;
    return rightItem;
  };
  const isDeletedByUndoStack = (stack, id2) => some(
    stack,
    /** @param {StackItem} s */
    (s2) => isDeleted(s2.deletions, id2)
  );
  const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) => {
    const doc = transaction.doc;
    const store2 = doc.store;
    const ownClientID = doc.clientID;
    const redone = item.redone;
    if (redone !== null) {
      return getItemCleanStart(transaction, redone);
    }
    let parentItem = (
      /** @type {AbstractType<any>} */
      item.parent._item
    );
    let left = null;
    let right;
    if (parentItem !== null && parentItem.deleted === true) {
      if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) {
        return null;
      }
      while (parentItem.redone !== null) {
        parentItem = getItemCleanStart(transaction, parentItem.redone);
      }
    }
    const parentType = parentItem === null ? (
      /** @type {AbstractType<any>} */
      item.parent
    ) : (
      /** @type {ContentType} */
      parentItem.content.type
    );
    if (item.parentSub === null) {
      left = item.left;
      right = item;
      while (left !== null) {
        let leftTrace = left;
        while (leftTrace !== null && /** @type {AbstractType<any>} */
        leftTrace.parent._item !== parentItem) {
          leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
        }
        if (leftTrace !== null && /** @type {AbstractType<any>} */
        leftTrace.parent._item === parentItem) {
          left = leftTrace;
          break;
        }
        left = left.left;
      }
      while (right !== null) {
        let rightTrace = right;
        while (rightTrace !== null && /** @type {AbstractType<any>} */
        rightTrace.parent._item !== parentItem) {
          rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
        }
        if (rightTrace !== null && /** @type {AbstractType<any>} */
        rightTrace.parent._item === parentItem) {
          right = rightTrace;
          break;
        }
        right = right.right;
      }
    } else {
      right = null;
      if (item.right && !ignoreRemoteMapChanges) {
        left = item;
        while (left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))) {
          left = left.right;
          while (left.redone) left = getItemCleanStart(transaction, left.redone);
        }
        if (left && left.right !== null) {
          return null;
        }
      } else {
        left = parentType._map.get(item.parentSub) || null;
      }
    }
    const nextClock = getState(store2, ownClientID);
    const nextId = createID(ownClientID, nextClock);
    const redoneItem = new Item(
      nextId,
      left,
      left && left.lastId,
      right,
      right && right.id,
      parentType,
      item.parentSub,
      item.content.copy()
    );
    item.redone = nextId;
    keepItem(redoneItem, true);
    redoneItem.integrate(transaction, 0);
    return redoneItem;
  };
  class Item extends AbstractStruct {
    /**
     * @param {ID} id
     * @param {Item | null} left
     * @param {ID | null} origin
     * @param {Item | null} right
     * @param {ID | null} rightOrigin
     * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
     * @param {string | null} parentSub
     * @param {AbstractContent} content
     */
    constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
      super(id2, content.getLength());
      this.origin = origin;
      this.left = left;
      this.right = right;
      this.rightOrigin = rightOrigin;
      this.parent = parent;
      this.parentSub = parentSub;
      this.redone = null;
      this.content = content;
      this.info = this.content.isCountable() ? BIT2 : 0;
    }
    /**
     * This is used to mark the item as an indexed fast-search marker
     *
     * @type {boolean}
     */
    set marker(isMarked) {
      if ((this.info & BIT4) > 0 !== isMarked) {
        this.info ^= BIT4;
      }
    }
    get marker() {
      return (this.info & BIT4) > 0;
    }
    /**
     * If true, do not garbage collect this Item.
     */
    get keep() {
      return (this.info & BIT1) > 0;
    }
    set keep(doKeep) {
      if (this.keep !== doKeep) {
        this.info ^= BIT1;
      }
    }
    get countable() {
      return (this.info & BIT2) > 0;
    }
    /**
     * Whether this item was deleted or not.
     * @type {Boolean}
     */
    get deleted() {
      return (this.info & BIT3) > 0;
    }
    set deleted(doDelete) {
      if (this.deleted !== doDelete) {
        this.info ^= BIT3;
      }
    }
    markDeleted() {
      this.info |= BIT3;
    }
    /**
     * Return the creator clientID of the missing op or define missing items and return null.
     *
     * @param {Transaction} transaction
     * @param {StructStore} store
     * @return {null | number}
     */
    getMissing(transaction, store2) {
      if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store2, this.origin.client)) {
        return this.origin.client;
      }
      if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store2, this.rightOrigin.client)) {
        return this.rightOrigin.client;
      }
      if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store2, this.parent.client)) {
        return this.parent.client;
      }
      if (this.origin) {
        this.left = getItemCleanEnd(transaction, store2, this.origin);
        this.origin = this.left.lastId;
      }
      if (this.rightOrigin) {
        this.right = getItemCleanStart(transaction, this.rightOrigin);
        this.rightOrigin = this.right.id;
      }
      if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
        this.parent = null;
      } else if (!this.parent) {
        if (this.left && this.left.constructor === Item) {
          this.parent = this.left.parent;
          this.parentSub = this.left.parentSub;
        } else if (this.right && this.right.constructor === Item) {
          this.parent = this.right.parent;
          this.parentSub = this.right.parentSub;
        }
      } else if (this.parent.constructor === ID) {
        const parentItem = getItem(store2, this.parent);
        if (parentItem.constructor === GC) {
          this.parent = null;
        } else {
          this.parent = /** @type {ContentType} */
          parentItem.content.type;
        }
      }
      return null;
    }
    /**
     * @param {Transaction} transaction
     * @param {number} offset
     */
    integrate(transaction, offset) {
      if (offset > 0) {
        this.id.clock += offset;
        this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
        this.origin = this.left.lastId;
        this.content = this.content.splice(offset);
        this.length -= offset;
      }
      if (this.parent) {
        if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
          let left = this.left;
          let o2;
          if (left !== null) {
            o2 = left.right;
          } else if (this.parentSub !== null) {
            o2 = /** @type {AbstractType<any>} */
            this.parent._map.get(this.parentSub) || null;
            while (o2 !== null && o2.left !== null) {
              o2 = o2.left;
            }
          } else {
            o2 = /** @type {AbstractType<any>} */
            this.parent._start;
          }
          const conflictingItems = /* @__PURE__ */ new Set();
          const itemsBeforeOrigin = /* @__PURE__ */ new Set();
          while (o2 !== null && o2 !== this.right) {
            itemsBeforeOrigin.add(o2);
            conflictingItems.add(o2);
            if (compareIDs(this.origin, o2.origin)) {
              if (o2.id.client < this.id.client) {
                left = o2;
                conflictingItems.clear();
              } else if (compareIDs(this.rightOrigin, o2.rightOrigin)) {
                break;
              }
            } else if (o2.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o2.origin))) {
              if (!conflictingItems.has(getItem(transaction.doc.store, o2.origin))) {
                left = o2;
                conflictingItems.clear();
              }
            } else {
              break;
            }
            o2 = o2.right;
          }
          this.left = left;
        }
        if (this.left !== null) {
          const right = this.left.right;
          this.right = right;
          this.left.right = this;
        } else {
          let r2;
          if (this.parentSub !== null) {
            r2 = /** @type {AbstractType<any>} */
            this.parent._map.get(this.parentSub) || null;
            while (r2 !== null && r2.left !== null) {
              r2 = r2.left;
            }
          } else {
            r2 = /** @type {AbstractType<any>} */
            this.parent._start;
            this.parent._start = this;
          }
          this.right = r2;
        }
        if (this.right !== null) {
          this.right.left = this;
        } else if (this.parentSub !== null) {
          this.parent._map.set(this.parentSub, this);
          if (this.left !== null) {
            this.left.delete(transaction);
          }
        }
        if (this.parentSub === null && this.countable && !this.deleted) {
          this.parent._length += this.length;
        }
        addStruct(transaction.doc.store, this);
        this.content.integrate(transaction, this);
        addChangedTypeToTransaction(
          transaction,
          /** @type {AbstractType<any>} */
          this.parent,
          this.parentSub
        );
        if (
          /** @type {AbstractType<any>} */
          this.parent._item !== null && /** @type {AbstractType<any>} */
          this.parent._item.deleted || this.parentSub !== null && this.right !== null
        ) {
          this.delete(transaction);
        }
      } else {
        new GC(this.id, this.length).integrate(transaction, 0);
      }
    }
    /**
     * Returns the next non-deleted item
     */
    get next() {
      let n2 = this.right;
      while (n2 !== null && n2.deleted) {
        n2 = n2.right;
      }
      return n2;
    }
    /**
     * Returns the previous non-deleted item
     */
    get prev() {
      let n2 = this.left;
      while (n2 !== null && n2.deleted) {
        n2 = n2.left;
      }
      return n2;
    }
    /**
     * Computes the last content address of this Item.
     */
    get lastId() {
      return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
    }
    /**
     * Try to merge two items
     *
     * @param {Item} right
     * @return {boolean}
     */
    mergeWith(right) {
      if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
        const searchMarker = (
          /** @type {AbstractType<any>} */
          this.parent._searchMarker
        );
        if (searchMarker) {
          searchMarker.forEach((marker) => {
            if (marker.p === right) {
              marker.p = this;
              if (!this.deleted && this.countable) {
                marker.index -= this.length;
              }
            }
          });
        }
        if (right.keep) {
          this.keep = true;
        }
        this.right = right.right;
        if (this.right !== null) {
          this.right.left = this;
        }
        this.length += right.length;
        return true;
      }
      return false;
    }
    /**
     * Mark this Item as deleted.
     *
     * @param {Transaction} transaction
     */
    delete(transaction) {
      if (!this.deleted) {
        const parent = (
          /** @type {AbstractType<any>} */
          this.parent
        );
        if (this.countable && this.parentSub === null) {
          parent._length -= this.length;
        }
        this.markDeleted();
        addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
        addChangedTypeToTransaction(transaction, parent, this.parentSub);
        this.content.delete(transaction);
      }
    }
    /**
     * @param {StructStore} store
     * @param {boolean} parentGCd
     */
    gc(store2, parentGCd) {
      if (!this.deleted) {
        throw unexpectedCase();
      }
      this.content.gc(store2);
      if (parentGCd) {
        replaceStruct(store2, this, new GC(this.id, this.length));
      } else {
        this.content = new ContentDeleted(this.length);
      }
    }
    /**
     * Transform the properties of this type to binary and write it to an
     * BinaryEncoder.
     *
     * This is called when this Item is sent to a remote peer.
     *
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
     * @param {number} offset
     */
    write(encoder, offset) {
      const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
      const rightOrigin = this.rightOrigin;
      const parentSub = this.parentSub;
      const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
      (rightOrigin === null ? 0 : BIT7) | // right origin is defined
      (parentSub === null ? 0 : BIT6);
      encoder.writeInfo(info);
      if (origin !== null) {
        encoder.writeLeftID(origin);
      }
      if (rightOrigin !== null) {
        encoder.writeRightID(rightOrigin);
      }
      if (origin === null && rightOrigin === null) {
        const parent = (
          /** @type {AbstractType<any>} */
          this.parent
        );
        if (parent._item !== void 0) {
          const parentItem = parent._item;
          if (parentItem === null) {
            const ykey = findRootTypeKey(parent);
            encoder.writeParentInfo(true);
            encoder.writeString(ykey);
          } else {
            encoder.writeParentInfo(false);
            encoder.writeLeftID(parentItem.id);
          }
        } else if (parent.constructor === String) {
          encoder.writeParentInfo(true);
          encoder.writeString(parent);
        } else if (parent.constructor === ID) {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parent);
        } else {
          unexpectedCase();
        }
        if (parentSub !== null) {
          encoder.writeString(parentSub);
        }
      }
      this.content.write(encoder, offset);
    }
  }
  const readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
  const contentRefs = [
    () => {
      unexpectedCase();
    },
    // GC is not ItemContent
    readContentDeleted,
    // 1
    readContentJSON,
    // 2
    readContentBinary,
    // 3
    readContentString,
    // 4
    readContentEmbed,
    // 5
    readContentFormat,
    // 6
    readContentType,
    // 7
    readContentAny,
    // 8
    readContentDoc,
    // 9
    () => {
      unexpectedCase();
    }
    // 10 - Skip is not ItemContent
  ];
  const structSkipRefNumber = 10;
  class Skip extends AbstractStruct {
    get deleted() {
      return true;
    }
    delete() {
    }
    /**
     * @param {Skip} right
     * @return {boolean}
     */
    mergeWith(right) {
      if (this.constructor !== right.constructor) {
        return false;
      }
      this.length += right.length;
      return true;
    }
    /**
     * @param {Transaction} transaction
     * @param {number} offset
     */
    integrate(transaction, offset) {
      unexpectedCase();
    }
    /**
     * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
     * @param {number} offset
     */
    write(encoder, offset) {
      encoder.writeInfo(structSkipRefNumber);
      writeVarUint(encoder.restEncoder, this.length - offset);
    }
    /**
     * @param {Transaction} transaction
     * @param {StructStore} store
     * @return {null | number}
     */
    getMissing(transaction, store2) {
      return null;
    }
  }
  const glo = (
    /** @type {any} */
    typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
  );
  const importIdentifier$1 = "__ $YJS$ __";
  if (glo[importIdentifier$1] === true) {
    console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
  }
  glo[importIdentifier$1] = true;
  const yjs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    AbsolutePosition,
    AbstractConnector,
    AbstractStruct,
    AbstractType,
    Array: YArray,
    ContentAny,
    ContentBinary,
    ContentDeleted,
    ContentDoc,
    ContentEmbed,
    ContentFormat,
    ContentJSON,
    ContentString,
    ContentType,
    Doc: Doc$1,
    GC,
    ID,
    Item,
    Map: YMap,
    PermanentUserData,
    RelativePosition,
    Skip,
    Snapshot,
    Text: YText,
    Transaction,
    UndoManager,
    UpdateDecoderV1,
    UpdateDecoderV2,
    UpdateEncoderV1,
    UpdateEncoderV2,
    XmlElement: YXmlElement,
    XmlFragment: YXmlFragment,
    XmlHook: YXmlHook,
    XmlText: YXmlText,
    YArrayEvent,
    YEvent,
    YMapEvent,
    YTextEvent,
    YXmlEvent,
    applyUpdate,
    applyUpdateV2,
    cleanupYTextFormatting,
    compareIDs,
    compareRelativePositions,
    convertUpdateFormatV1ToV2,
    convertUpdateFormatV2ToV1,
    createAbsolutePositionFromRelativePosition,
    createDeleteSet,
    createDeleteSetFromStructStore,
    createDocFromSnapshot,
    createID,
    createRelativePositionFromJSON,
    createRelativePositionFromTypeIndex,
    createSnapshot,
    decodeRelativePosition,
    decodeSnapshot,
    decodeSnapshotV2,
    decodeStateVector,
    decodeUpdate,
    decodeUpdateV2,
    diffUpdate,
    diffUpdateV2,
    emptySnapshot,
    encodeRelativePosition,
    encodeSnapshot,
    encodeSnapshotV2,
    encodeStateAsUpdate,
    encodeStateAsUpdateV2,
    encodeStateVector,
    encodeStateVectorFromUpdate,
    encodeStateVectorFromUpdateV2,
    equalDeleteSets,
    equalSnapshots,
    findIndexSS,
    findRootTypeKey,
    getItem,
    getItemCleanEnd,
    getItemCleanStart,
    getState,
    getTypeChildren,
    isDeleted,
    isParentOf,
    iterateDeletedStructs,
    logType,
    logUpdate,
    logUpdateV2,
    mergeDeleteSets,
    mergeUpdates,
    mergeUpdatesV2,
    obfuscateUpdate,
    obfuscateUpdateV2,
    parseUpdateMeta,
    parseUpdateMetaV2,
    readUpdate,
    readUpdateV2,
    relativePositionToJSON,
    snapshot,
    snapshotContainsUpdate,
    transact,
    tryGc,
    typeListToArraySnapshot,
    typeMapGetAllSnapshot,
    typeMapGetSnapshot
  }, Symbol.toStringTag, { value: "Module" }));
  const docMigrations = [
    {
      desc: "frame element --> frame block (doc v1 --> v2)",
      condition: (oldPageVersion) => {
        return oldPageVersion < 2;
      },
      migrate: (_2, docData) => {
        const blocks = docData.getMap("blocks");
        let rootModel, surface;
        blocks.forEach((block) => {
          const flavour = block.get("sys:flavour");
          if (flavour === "affine:page") {
            rootModel = block;
          }
          if (flavour === "affine:surface") {
            surface = block;
          }
        });
        assertExists(rootModel);
        assertExists(surface);
        const elements = surface.get("prop:elements").get("value");
        elements.forEach((element) => {
          if (element.get("type") === "frame") {
            const frameModel = new YMap();
            const id2 = element.get("id");
            frameModel.set("sys:flavour", "affine:frame");
            frameModel.set("sys:id", id2);
            frameModel.set("sys:children", new YArray());
            frameModel.set("prop:title", element.get("title").clone());
            frameModel.set("prop:xywh", element.get("xywh"));
            frameModel.set("prop:index", element.get("index"));
            blocks.set(id2, frameModel);
            rootModel.get("sys:children").push([id2]);
            elements.delete(id2);
          }
        });
      }
    }
  ];
  const COLLECTION_VERSION = 2;
  const PAGE_VERSION = 2;
  const SCHEMA_NOT_FOUND_MESSAGE = "Schema not found. The block flavour may not be registered.";
  const TEXT_UNIQ_IDENTIFIER = "$blocksuite:internal:text$";
  const NATIVE_UNIQ_IDENTIFIER = "$blocksuite:internal:native$";
  const SYS_KEYS = /* @__PURE__ */ new Set(["id", "flavour", "children"]);
  class Boxed {
    get yMap() {
      return this._map;
    }
    constructor(value) {
      if (value instanceof YMap && value.get("type") === NATIVE_UNIQ_IDENTIFIER) {
        this._map = value;
      } else {
        this._map = new YMap();
        this._map.set("type", NATIVE_UNIQ_IDENTIFIER);
        this._map.set("value", value);
      }
    }
    setValue(value) {
      return this._map.set("value", value);
    }
    getValue() {
      return this._map.get("value");
    }
    static {
      this.is = (value) => {
        return value instanceof YMap && value.get("type") === NATIVE_UNIQ_IDENTIFIER;
      };
    }
    static {
      this.from = (map2) => {
        return new Boxed(map2.get("value"));
      };
    }
  }
  class Text {
    get length() {
      return this._yText.length;
    }
    get yText() {
      return this._yText;
    }
    constructor(input) {
      if (typeof input === "string") {
        const text = input.replaceAll("\r\n", "\n");
        this._yText = new YText(text);
      } else if (input instanceof YText) {
        this._yText = input;
      } else if (input instanceof Array) {
        for (const delta of input) {
          if (delta.insert) {
            delta.insert = delta.insert.replaceAll("\r\n", "\n");
          }
        }
        const yText = new YText();
        yText.applyDelta(input);
        this._yText = yText;
      } else {
        this._yText = new YText();
      }
    }
    _transact(callback) {
      const doc = this._yText.doc;
      if (!doc) {
        throw new Error("Failed to transact text! yText is not attached to a doc");
      }
      doc.transact(() => {
        callback();
      }, doc.clientID);
    }
    clone() {
      return new Text(this._yText.clone());
    }
    /**
     * NOTE: The string included in [index, index + length) will be deleted.
     *
     * Here are three cases for point position(index + length):
     * [{insert: 'abc', ...}, {insert: 'def', ...}, {insert: 'ghi', ...}]
     * 1. abc|de|fghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'f', ...}, {insert: 'ghi', ...}]
     * 2. abc|def|ghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'ghi', ...}]
     * 3. abc|defg|hi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'hi', ...}]
     */
    split(index, length2 = 0) {
      if (index < 0 || length2 < 0 || index + length2 > this._yText.length) {
        throw new Error("Failed to split text! Index or length out of range, index: " + index + ", length: " + length2 + ", text length: " + this._yText.length);
      }
      const deltas = this._yText.toDelta();
      if (!(deltas instanceof Array)) {
        throw new Error("This text cannot be split because we failed to get the deltas of it.");
      }
      let tmpIndex = 0;
      const rightDeltas = [];
      for (let i2 = 0; i2 < deltas.length; i2++) {
        const insert = deltas[i2].insert;
        if (typeof insert === "string") {
          if (tmpIndex + insert.length >= index + length2) {
            const insertRight = insert.slice(index + length2 - tmpIndex);
            rightDeltas.push({
              insert: insertRight,
              attributes: deltas[i2].attributes
            });
            rightDeltas.push(...deltas.slice(i2 + 1));
            break;
          }
          tmpIndex += insert.length;
        } else {
          throw new Error("This text cannot be split because it contains non-string insert.");
        }
      }
      this.delete(index, this.length - index);
      const rightYText = new YText();
      rightYText.applyDelta(rightDeltas);
      const rightText = new Text(rightYText);
      return rightText;
    }
    insert(content, index, attributes) {
      if (!content.length) {
        return;
      }
      if (index < 0 || index > this._yText.length) {
        throw new Error("Failed to insert text! Index or length out of range, index: " + index + ", length: " + length + ", text length: " + this._yText.length);
      }
      this._transact(() => {
        this._yText.insert(index, content, attributes);
      });
    }
    join(other) {
      if (!other.toDelta().length) {
        return;
      }
      this._transact(() => {
        const yOther = other._yText;
        const delta = yOther.toDelta();
        delta.unshift({ retain: this._yText.length });
        this._yText.applyDelta(delta);
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    format(index, length2, format) {
      if (length2 === 0) {
        return;
      }
      if (index < 0 || length2 < 0 || index + length2 > this._yText.length) {
        throw new Error("Failed to format text! Index or length out of range, index: " + index + ", length: " + length2 + ", text length: " + this._yText.length);
      }
      this._transact(() => {
        this._yText.format(index, length2, format);
      });
    }
    delete(index, length2) {
      if (length2 === 0) {
        return;
      }
      if (index < 0 || length2 < 0 || index + length2 > this._yText.length) {
        throw new Error("Failed to delete text! Index or length out of range, index: " + index + ", length: " + length2 + ", text length: " + this._yText.length);
      }
      this._transact(() => {
        this._yText.delete(index, length2);
      });
    }
    replace(index, length2, content, attributes) {
      if (index < 0 || length2 < 0 || index + length2 > this._yText.length) {
        throw new Error("Failed to replace text! The length of the text is" + this._yText.length + ", but you are trying to replace from" + index + "to" + index + length2);
      }
      this._transact(() => {
        this._yText.delete(index, length2);
        this._yText.insert(index, content, attributes);
      });
    }
    clear() {
      if (!this._yText.length) {
        return;
      }
      this._transact(() => {
        this._yText.delete(0, this._yText.length);
      });
    }
    applyDelta(delta) {
      this._transact(() => {
        this._yText?.applyDelta(delta);
      });
    }
    toDelta() {
      return this._yText?.toDelta() || [];
    }
    sliceToDelta(begin, end) {
      const result = [];
      if (end && begin >= end) {
        return result;
      }
      if (begin === 0 && end === 0) {
        return [];
      }
      const delta = this.toDelta();
      if (begin < 1 && !end) {
        return delta;
      }
      if (delta && delta instanceof Array) {
        let charNum = 0;
        for (let i2 = 0; i2 < delta.length; i2++) {
          const content = delta[i2];
          let contentText = content.insert || "";
          const contentLen = contentText.length;
          const isLastOp = end && charNum + contentLen > end;
          const isFirstOp = charNum + contentLen > begin && result.length === 0;
          if (isFirstOp && isLastOp) {
            contentText = contentText.slice(begin - charNum, end - charNum);
            result.push({
              ...content,
              insert: contentText
            });
            break;
          } else if (isFirstOp || isLastOp) {
            contentText = isLastOp ? contentText.slice(0, end - charNum) : contentText.slice(begin - charNum);
            result.push({
              ...content,
              insert: contentText
            });
          } else {
            result.length > 0 && result.push(content);
          }
          if (end && charNum + contentLen > end) {
            break;
          }
          charNum = charNum + contentLen;
        }
      }
      return result;
    }
    toString() {
      return this._yText?.toString() || "";
    }
    static fromDelta(delta) {
      const result = new YText();
      result.applyDelta(delta);
      return new Text(result);
    }
  }
  function isPureObject(value) {
    return value !== null && typeof value === "object" && Object.prototype.toString.call(value) === "[object Object]" && [Object, void 0, null].some((x2) => x2 === value.constructor);
  }
  function native2Y(value, { deep = true, transform = (x2) => x2 } = {}) {
    if (value instanceof Boxed) {
      return value.yMap;
    }
    if (value instanceof Text) {
      if (value.yText.doc) {
        return value.yText.clone();
      }
      return value.yText;
    }
    if (Array.isArray(value)) {
      const yArray = new YArray();
      const result = value.map((item) => {
        return deep ? native2Y(item, { deep, transform }) : item;
      });
      yArray.insert(0, result);
      return yArray;
    }
    if (isPureObject(value)) {
      const yMap = new YMap();
      Object.entries(value).forEach(([key, value2]) => {
        yMap.set(key, deep ? native2Y(value2, { deep, transform }) : value2);
      });
      return yMap;
    }
    return value;
  }
  function y2Native(yAbstract, { deep = true, transform = (x2) => x2 } = {}) {
    if (Boxed.is(yAbstract)) {
      const data = new Boxed(yAbstract);
      return transform(data, yAbstract);
    }
    if (yAbstract instanceof YText) {
      const data = new Text(yAbstract);
      return transform(data, yAbstract);
    }
    if (yAbstract instanceof YArray) {
      const data = yAbstract.toArray().map((item) => deep ? y2Native(item, { deep, transform }) : item);
      return transform(data, yAbstract);
    }
    if (yAbstract instanceof YMap) {
      const data = Object.fromEntries(Array.from(yAbstract.entries()).map(([key, value]) => {
        return [key, deep ? y2Native(value, { deep, transform }) : value];
      }));
      return transform(data, yAbstract);
    }
    return transform(yAbstract, yAbstract);
  }
  class BaseReactiveYData {
    constructor() {
      this._skipNext = false;
      this._stashed = /* @__PURE__ */ new Set();
      this._getOrigin = (doc) => {
        return {
          doc,
          proxy: true,
          target: this
        };
      };
      this._updateWithSkip = (fn) => {
        this._skipNext = true;
        fn();
        this._skipNext = false;
      };
      this._transact = (doc, fn) => {
        doc.transact(fn, this._getOrigin(doc));
      };
      this._onObserve = (event, handler) => {
        if (event.transaction.origin?.proxy !== true && (!event.transaction.local || event.transaction.origin instanceof UndoManager)) {
          handler();
        }
        this._options.onChange?.(this._proxy);
      };
    }
    get proxy() {
      return this._proxy;
    }
  }
  const proxies = /* @__PURE__ */ new WeakMap();
  class ReactiveYArray extends BaseReactiveYData {
    constructor(_source, _ySource, _options) {
      super();
      this._source = _source;
      this._ySource = _ySource;
      this._options = _options;
      this._observer = (event) => {
        this._onObserve(event, () => {
          let retain = 0;
          event.changes.delta.forEach((change) => {
            if (change.retain) {
              retain += change.retain;
              return;
            }
            if (change.delete) {
              this._updateWithSkip(() => {
                this._source.splice(retain, change.delete);
              });
              return;
            }
            if (change.insert) {
              const _arr = [change.insert].flat();
              const proxyList = _arr.map((value) => createYProxy(value));
              this._updateWithSkip(() => {
                this._source.splice(retain, 0, ...proxyList);
              });
              retain += change.insert.length;
            }
          });
        });
      };
      this._getProxy = () => {
        return new Proxy(this._source, {
          has: (target, p2) => {
            return Reflect.has(target, p2);
          },
          set: (target, p2, value, receiver) => {
            if (typeof p2 !== "string") {
              throw new Error("key cannot be a symbol");
            }
            const index = Number(p2);
            if (this._skipNext || Number.isNaN(index)) {
              return Reflect.set(target, p2, value, receiver);
            }
            if (this._stashed.has(index)) {
              const result = Reflect.set(target, p2, value, receiver);
              this._options.onChange?.(this._proxy);
              return result;
            }
            const reactive = proxies.get(this._ySource);
            assertExists(reactive, "YData is not subscribed before changes");
            const doc = this._ySource.doc;
            assertExists(doc, "YData is not bound to a Y.Doc");
            const yData = native2Y(value);
            this._transact(doc, () => {
              if (index < this._ySource.length) {
                this._ySource.delete(index, 1);
              }
              this._ySource.insert(index, [yData]);
            });
            const data = createYProxy(yData, this._options);
            return Reflect.set(target, p2, data, receiver);
          },
          get: (target, p2, receiver) => {
            return Reflect.get(target, p2, receiver);
          },
          deleteProperty: (target, p2) => {
            if (typeof p2 !== "string") {
              throw new Error("key cannot be a symbol");
            }
            const proxied = proxies.get(this._ySource);
            assertExists(proxied, "YData is not subscribed before changes");
            const doc = this._ySource.doc;
            assertExists(doc, "YData is not bound to a Y.Doc");
            const index = Number(p2);
            if (this._skipNext || Number.isNaN(index)) {
              return Reflect.deleteProperty(target, p2);
            }
            this._transact(doc, () => {
              this._ySource.delete(index, 1);
            });
            return Reflect.deleteProperty(target, p2);
          }
        });
      };
      this._proxy = this._getProxy();
      proxies.set(_ySource, this);
      _ySource.observe(this._observer);
    }
    stash(prop) {
      this._stashed.add(prop);
    }
    pop(prop) {
      const value = this._source[prop];
      this._stashed.delete(prop);
      this._proxy[prop] = value;
    }
  }
  class ReactiveYMap extends BaseReactiveYData {
    constructor(_source, _ySource, _options) {
      super();
      this._source = _source;
      this._ySource = _ySource;
      this._options = _options;
      this._observer = (event) => {
        this._onObserve(event, () => {
          event.keysChanged.forEach((key) => {
            const type = event.changes.keys.get(key);
            if (!type) {
              return;
            }
            if (type.action === "delete") {
              this._updateWithSkip(() => {
                delete this._source[key];
              });
            } else if (type.action === "add" || type.action === "update") {
              const current = this._ySource.get(key);
              this._updateWithSkip(() => {
                this._source[key] = proxies.has(current) ? proxies.get(current) : createYProxy(current, this._options);
              });
            }
          });
        });
      };
      this._getProxy = () => {
        return new Proxy(this._source, {
          has: (target, p2) => {
            return Reflect.has(target, p2);
          },
          set: (target, p2, value, receiver) => {
            if (typeof p2 !== "string") {
              throw new Error("key cannot be a symbol");
            }
            if (this._skipNext) {
              return Reflect.set(target, p2, value, receiver);
            }
            if (this._stashed.has(p2)) {
              const result = Reflect.set(target, p2, value, receiver);
              this._options.onChange?.(this._proxy);
              return result;
            }
            const reactive = proxies.get(this._ySource);
            assertExists(reactive, "YData is not subscribed before changes");
            const doc = this._ySource.doc;
            assertExists(doc, "YData is not bound to a Y.Doc");
            const yData = native2Y(value);
            this._transact(doc, () => {
              this._ySource.set(p2, yData);
            });
            const data = createYProxy(yData, this._options);
            return Reflect.set(target, p2, data, receiver);
          },
          get: (target, p2, receiver) => {
            return Reflect.get(target, p2, receiver);
          },
          deleteProperty: (target, p2) => {
            if (typeof p2 !== "string") {
              throw new Error("key cannot be a symbol");
            }
            if (this._skipNext) {
              return Reflect.deleteProperty(target, p2);
            }
            const proxied = proxies.get(this._ySource);
            assertExists(proxied, "YData is not subscribed before changes");
            const doc = this._ySource.doc;
            assertExists(doc, "YData is not bound to a Y.Doc");
            this._transact(doc, () => {
              this._ySource.delete(p2);
            });
            return Reflect.deleteProperty(target, p2);
          }
        });
      };
      this._proxy = this._getProxy();
      proxies.set(_ySource, this);
      _ySource.observe(this._observer);
    }
    stash(prop) {
      this._stashed.add(prop);
    }
    pop(prop) {
      const value = this._source[prop];
      this._stashed.delete(prop);
      this._proxy[prop] = value;
    }
  }
  function createYProxy(yAbstract, options = {}) {
    if (proxies.has(yAbstract)) {
      return proxies.get(yAbstract).proxy;
    }
    return y2Native(yAbstract, {
      transform: (value, origin) => {
        if (Boxed.is(origin)) {
          return value;
        }
        if (origin instanceof YArray) {
          const data = new ReactiveYArray(value, origin, options);
          return data.proxy;
        }
        if (origin instanceof YMap) {
          const data = new ReactiveYMap(value, origin, options);
          return data.proxy;
        }
        return value;
      }
    });
  }
  function stashProp(yAbstract, prop) {
    const proxy = proxies.get(yAbstract);
    assertExists(proxy, "YData is not subscribed before changes");
    proxy.stash(prop);
  }
  function popProp(yAbstract, prop) {
    const proxy = proxies.get(yAbstract);
    assertExists(proxy, "YData is not subscribed before changes");
    proxy.pop(prop);
  }
  var util;
  (function(util2) {
    util2.assertEqual = (_2) => {
    };
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
      const filtered = {};
      for (const k2 of validKeys) {
        filtered[k2] = obj[k2];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e2) {
        return obj[e2];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys2 = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys2.push(key);
        }
      }
      return keys2;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_2, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  const getParsedType = (data) => {
    const t2 = typeof data;
    switch (t2) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  class ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i2 = 0;
            while (i2 < issue.path.length) {
              const el = issue.path[i2];
              const terminal = i2 === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i2++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          const firstEl = sub.path[0];
          fieldErrors[firstEl] = fieldErrors[firstEl] || [];
          fieldErrors[firstEl].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "bigint")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  let overrideErrorMap = errorMap;
  function getErrorMap() {
    return overrideErrorMap;
  }
  const makeIssue = (params2) => {
    const { data, path: path2, errorMaps, issueData } = params2;
    const fullPath = [...path2, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
    for (const map2 of maps) {
      errorMessage = map2(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x2) => !!x2)
    });
    ctx.common.issues.push(issue);
  }
  class ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s2 of results) {
        if (s2.status === "aborted")
          return INVALID;
        if (s2.status === "dirty")
          status.dirty();
        arrayValue.push(s2.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  }
  const INVALID = Object.freeze({
    status: "aborted"
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x2) => x2.status === "aborted";
  const isDirty = (x2) => x2.status === "dirty";
  const isValid = (x2) => x2.status === "valid";
  const isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));
  class ParseInputLazyPath {
    constructor(parent, value, path2, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path2;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (Array.isArray(this._key)) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  }
  const handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params2) {
    if (!params2)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params2;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      const { message } = params2;
      if (iss.code === "invalid_enum_value") {
        return { message: message ?? ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: message ?? required_error ?? ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: message ?? invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  class ZodType {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params2) {
      const result = this.safeParse(data, params2);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params2) {
      const ctx = {
        common: {
          issues: [],
          async: params2?.async ?? false,
          contextualErrorMap: params2?.errorMap
        },
        path: params2?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if (err?.message?.toLowerCase()?.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params2) {
      const result = await this.safeParseAsync(data, params2);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params2) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params2?.errorMap,
          async: true
        },
        path: params2?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      if (!header)
        return false;
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if ("typ" in decoded && decoded?.typ !== "JWT")
        return false;
      if (!decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  class ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        local: options?.local ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        ...errorUtil.errToObj(options?.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options?.position,
        ...errorUtil.errToObj(options?.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxLength() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  }
  ZodString.create = (params2) => {
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: params2?.coerce ?? false,
      ...processCreateParams(params2)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  class ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max2 = null;
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        } else if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return Number.isFinite(min2) && Number.isFinite(max2);
    }
  }
  ZodNumber.create = (params2) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params2?.coerce || false,
      ...processCreateParams(params2)
    });
  };
  class ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  }
  ZodBigInt.create = (params2) => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params2?.coerce ?? false,
      ...processCreateParams(params2)
    });
  };
  class ZodBoolean extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodBoolean.create = (params2) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params2?.coerce || false,
      ...processCreateParams(params2)
    });
  };
  class ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (Number.isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2 != null ? new Date(min2) : null;
    }
    get maxDate() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2 != null ? new Date(max2) : null;
    }
  }
  ZodDate.create = (params2) => {
    return new ZodDate({
      checks: [],
      coerce: params2?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params2)
    });
  };
  class ZodSymbol extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodSymbol.create = (params2) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params2)
    });
  };
  class ZodUndefined extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodUndefined.create = (params2) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params2)
    });
  };
  class ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodNull.create = (params2) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params2)
    });
  };
  class ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodAny.create = (params2) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params2)
    });
  };
  class ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodUnknown.create = (params2) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params2)
    });
  };
  class ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  }
  ZodNever.create = (params2) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params2)
    });
  };
  class ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodVoid.create = (params2) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params2)
    });
  };
  class ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i2) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i2) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodArray.create = (schema, params2) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params2)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  class ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys2 = util.objectKeys(shape);
      this._cached = { shape, keys: keys2 };
      return this._cached;
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      for (const key of util.objectKeys(mask)) {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      for (const key of util.objectKeys(this.shape)) {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      }
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  }
  ZodObject.create = (shape, params2) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params2)
    });
  };
  ZodObject.strictCreate = (shape, params2) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params2)
    });
  };
  ZodObject.lazycreate = (shape, params2) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params2)
    });
  };
  class ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  ZodUnion.create = (types2, params2) => {
    return new ZodUnion({
      options: types2,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params2)
    });
  };
  function mergeValues(a2, b2) {
    const aType = getParsedType(a2);
    const bType = getParsedType(b2);
    if (a2 === b2) {
      return { valid: true, data: a2 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b2);
      const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a2, ...b2 };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a2[key], b2[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a2.length !== b2.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a2.length; index++) {
        const itemA = a2[index];
        const itemB = b2[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
      return { valid: true, data: a2 };
    } else {
      return { valid: false };
    }
  }
  class ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  }
  ZodIntersection.create = (left, right, params2) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params2)
    });
  };
  class ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x2) => !!x2);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new ZodTuple({
        ...this._def,
        rest
      });
    }
  }
  ZodTuple.create = (schemas, params2) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params2)
    });
  };
  class ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  }
  class ZodMap extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  }
  ZodMap.create = (keyType, valueType, params2) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params2)
    });
  };
  class ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size2, message) {
      return this.min(size2, message).max(size2, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodSet.create = (valueType, params2) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params2)
    });
  };
  class ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params2 = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params2).catch((e2) => {
            error.addIssue(makeArgsIssue(args, e2));
            throw error;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params2).catch((e2) => {
            error.addIssue(makeReturnsIssue(result, e2));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params2);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params2);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params2) {
      return new ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params2)
      });
    }
  }
  class ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
  ZodLazy.create = (getter, params2) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params2)
    });
  };
  class ZodLiteral extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  }
  ZodLiteral.create = (value, params2) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params2)
    });
  };
  function createZodEnum(values, params2) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params2)
    });
  }
  class ZodEnum extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(this._def.values);
      }
      if (!this._cache.has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  }
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!this._cache) {
        this._cache = new Set(util.getValidEnumValues(this._def.values));
      }
      if (!this._cache.has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  ZodNativeEnum.create = (values, params2) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params2)
    });
  };
  class ZodPromise extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  }
  ZodPromise.create = (schema, params2) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params2)
    });
  };
  class ZodEffects extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return INVALID;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return INVALID;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
              status: status.value,
              value: result
            }));
          });
        }
      }
      util.assertNever(effect);
    }
  }
  ZodEffects.create = (schema, effect, params2) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params2)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params2) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params2)
    });
  };
  class ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodOptional.create = (type, params2) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params2)
    });
  };
  class ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodNullable.create = (type, params2) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params2)
    });
  };
  class ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  ZodDefault.create = (type, params2) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params2.default === "function" ? params2.default : () => params2.default,
      ...processCreateParams(params2)
    });
  };
  class ZodCatch extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ZodCatch.create = (type, params2) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params2.catch === "function" ? params2.catch : () => params2.catch,
      ...processCreateParams(params2)
    });
  };
  class ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  }
  ZodNaN.create = (params2) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params2)
    });
  };
  class ZodBranded extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a2, b2) {
      return new ZodPipeline({
        in: a2,
        out: b2,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  }
  class ZodReadonly extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze2 = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze2(data)) : freeze2(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodReadonly.create = (type, params2) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params2)
    });
  };
  function custom(check, _params = {}, fatal) {
    return ZodAny.create();
  }
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const stringType = ZodString.create;
  const numberType = ZodNumber.create;
  const anyType = ZodAny.create;
  const unknownType = ZodUnknown.create;
  ZodNever.create;
  const voidType = ZodVoid.create;
  const arrayType = ZodArray.create;
  const objectType = ZodObject.create;
  ZodUnion.create;
  ZodIntersection.create;
  ZodTuple.create;
  const recordType = ZodRecord.create;
  const functionType = ZodFunction.create;
  const lazyType = ZodLazy.create;
  const literalType = ZodLiteral.create;
  const enumType = ZodEnum.create;
  ZodPromise.create;
  ZodOptional.create;
  ZodNullable.create;
  var _a;
  const FlavourSchema = stringType();
  const ParentSchema = arrayType(stringType()).optional();
  const ContentSchema = arrayType(stringType()).optional();
  const role = ["root", "hub", "content"];
  const RoleSchema = enumType(role);
  const internalPrimitives = Object.freeze({
    Text: (input = "") => new Text(input),
    Boxed: (input) => new Boxed(input)
  });
  const BlockSchema = objectType({
    version: numberType(),
    model: objectType({
      role: RoleSchema,
      flavour: FlavourSchema,
      parent: ParentSchema,
      children: ContentSchema,
      props: functionType().args(custom()).returns(recordType(anyType())).optional(),
      toModel: functionType().args().returns(custom()).optional()
    }),
    transformer: functionType().args().returns(custom()).optional(),
    onUpgrade: functionType().args(anyType(), numberType(), numberType()).returns(voidType()).optional()
  });
  function defineBlockSchema({ flavour, props, metadata, onUpgrade, toModel, transformer }) {
    const schema = {
      version: metadata.version,
      model: {
        role: metadata.role,
        parent: metadata.parent,
        children: metadata.children,
        flavour,
        props,
        toModel
      },
      onUpgrade,
      transformer
    };
    BlockSchema.parse(schema);
    return schema;
  }
  function MagicProps() {
    return class {
    };
  }
  const modelLabel = Symbol("model_label");
  class BlockModel extends MagicProps() {
    constructor() {
      super(...arguments);
      this[_a] = "type_info_label";
      this.created = new Slot();
      this.deleted = new Slot();
      this.propsUpdated = new Slot();
      this.childrenUpdated = new Slot();
    }
    static {
      _a = modelLabel;
    }
    get doc() {
      return this.page;
    }
    set doc(doc) {
      this.page = doc;
    }
    get childMap() {
      return this.children.reduce((map2, child, index) => {
        map2.set(child.id, index);
        return map2;
      }, /* @__PURE__ */ new Map());
    }
    get children() {
      const block = this.yBlock.get("sys:children");
      if (!block) {
        return [];
      }
      const children = [];
      block.forEach((id2) => {
        const child = this.doc.getBlockById(id2);
        if (!child) {
          return;
        }
        children.push(child);
      });
      return children;
    }
    isEmpty() {
      return this.children.length === 0;
    }
    firstChild() {
      return this.children[0] || null;
    }
    lastChild() {
      if (!this.children.length) {
        return this;
      }
      return this.children[this.children.length - 1].lastChild();
    }
    dispose() {
      this.created.dispose();
      this.deleted.dispose();
      this.propsUpdated.dispose();
      this.childrenUpdated.dispose();
    }
  }
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var balancedMatch;
  var hasRequiredBalancedMatch;
  function requireBalancedMatch() {
    if (hasRequiredBalancedMatch) return balancedMatch;
    hasRequiredBalancedMatch = 1;
    balancedMatch = balanced;
    function balanced(a2, b2, str) {
      if (a2 instanceof RegExp) a2 = maybeMatch(a2, str);
      if (b2 instanceof RegExp) b2 = maybeMatch(b2, str);
      var r2 = range(a2, b2, str);
      return r2 && {
        start: r2[0],
        end: r2[1],
        pre: str.slice(0, r2[0]),
        body: str.slice(r2[0] + a2.length, r2[1]),
        post: str.slice(r2[1] + b2.length)
      };
    }
    function maybeMatch(reg, str) {
      var m2 = str.match(reg);
      return m2 ? m2[0] : null;
    }
    balanced.range = range;
    function range(a2, b2, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a2);
      var bi = str.indexOf(b2, ai + 1);
      var i2 = ai;
      if (ai >= 0 && bi > 0) {
        if (a2 === b2) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i2 >= 0 && !result) {
          if (i2 == ai) {
            begs.push(i2);
            ai = str.indexOf(a2, i2 + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b2, i2 + 1);
          }
          i2 = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
    return balancedMatch;
  }
  var braceExpansion;
  var hasRequiredBraceExpansion;
  function requireBraceExpansion() {
    if (hasRequiredBraceExpansion) return braceExpansion;
    hasRequiredBraceExpansion = 1;
    var balanced = requireBalancedMatch();
    braceExpansion = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m2 = balanced("{", "}", str);
      if (!m2)
        return str.split(",");
      var pre = m2.pre;
      var body = m2.body;
      var post = m2.post;
      var p2 = pre.split(",");
      p2[p2.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p2[p2.length - 1] += postParts.shift();
        p2.push.apply(p2, postParts);
      }
      parts.push.apply(parts, p2);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand2(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i2, y2) {
      return i2 <= y2;
    }
    function gte(i2, y2) {
      return i2 >= y2;
    }
    function expand2(str, isTop) {
      var expansions = [];
      var m2 = balanced("{", "}", str);
      if (!m2) return [str];
      var pre = m2.pre;
      var post = m2.post.length ? expand2(m2.post, false) : [""];
      if (/\$$/.test(m2.pre)) {
        for (var k2 = 0; k2 < post.length; k2++) {
          var expansion = pre + "{" + m2.body + "}" + post[k2];
          expansions.push(expansion);
        }
      } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m2.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m2.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m2.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
          if (m2.post.match(/,(?!,).*\}/)) {
            str = m2.pre + "{" + m2.body + escClose + m2.post;
            return expand2(str);
          }
          return [str];
        }
        var n2;
        if (isSequence) {
          n2 = m2.body.split(/\.\./);
        } else {
          n2 = parseCommaParts(m2.body);
          if (n2.length === 1) {
            n2 = expand2(n2[0], false).map(embrace);
            if (n2.length === 1) {
              return post.map(function(p2) {
                return m2.pre + n2[0] + p2;
              });
            }
          }
        }
        var N2;
        if (isSequence) {
          var x2 = numeric(n2[0]);
          var y2 = numeric(n2[1]);
          var width = Math.max(n2[0].length, n2[1].length);
          var incr = n2.length == 3 ? Math.abs(numeric(n2[2])) : 1;
          var test2 = lte;
          var reverse = y2 < x2;
          if (reverse) {
            incr *= -1;
            test2 = gte;
          }
          var pad = n2.some(isPadded);
          N2 = [];
          for (var i2 = x2; test2(i2, y2); i2 += incr) {
            var c2;
            if (isAlphaSequence) {
              c2 = String.fromCharCode(i2);
              if (c2 === "\\")
                c2 = "";
            } else {
              c2 = String(i2);
              if (pad) {
                var need = width - c2.length;
                if (need > 0) {
                  var z2 = new Array(need + 1).join("0");
                  if (i2 < 0)
                    c2 = "-" + z2 + c2.slice(1);
                  else
                    c2 = z2 + c2;
                }
              }
            }
            N2.push(c2);
          }
        } else {
          N2 = [];
          for (var j2 = 0; j2 < n2.length; j2++) {
            N2.push.apply(N2, expand2(n2[j2], false));
          }
        }
        for (var j2 = 0; j2 < N2.length; j2++) {
          for (var k2 = 0; k2 < post.length; k2++) {
            var expansion = pre + N2[j2] + post[k2];
            if (!isTop || isSequence || expansion)
              expansions.push(expansion);
          }
        }
      }
      return expansions;
    }
    return braceExpansion;
  }
  var braceExpansionExports = requireBraceExpansion();
  const expand = /* @__PURE__ */ getDefaultExportFromCjs(braceExpansionExports);
  const MAX_PATTERN_LENGTH = 1024 * 64;
  const assertValidPattern = (pattern) => {
    if (typeof pattern !== "string") {
      throw new TypeError("invalid pattern");
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
      throw new TypeError("pattern is too long");
    }
  };
  const posixClasses = {
    "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
    "[:alpha:]": ["\\p{L}\\p{Nl}", true],
    "[:ascii:]": ["\\x00-\\x7f", false],
    "[:blank:]": ["\\p{Zs}\\t", true],
    "[:cntrl:]": ["\\p{Cc}", true],
    "[:digit:]": ["\\p{Nd}", true],
    "[:graph:]": ["\\p{Z}\\p{C}", true, true],
    "[:lower:]": ["\\p{Ll}", true],
    "[:print:]": ["\\p{C}", true],
    "[:punct:]": ["\\p{P}", true],
    "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
    "[:upper:]": ["\\p{Lu}", true],
    "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
    "[:xdigit:]": ["A-Fa-f0-9", false]
  };
  const braceEscape = (s2) => s2.replace(/[[\]\\-]/g, "\\$&");
  const regexpEscape = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const rangesToString = (ranges) => ranges.join("");
  const parseClass = (glob, position) => {
    const pos = position;
    if (glob.charAt(pos) !== "[") {
      throw new Error("not in a brace expression");
    }
    const ranges = [];
    const negs = [];
    let i2 = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = "";
    WHILE: while (i2 < glob.length) {
      const c2 = glob.charAt(i2);
      if ((c2 === "!" || c2 === "^") && i2 === pos + 1) {
        negate = true;
        i2++;
        continue;
      }
      if (c2 === "]" && sawStart && !escaping) {
        endPos = i2 + 1;
        break;
      }
      sawStart = true;
      if (c2 === "\\") {
        if (!escaping) {
          escaping = true;
          i2++;
          continue;
        }
      }
      if (c2 === "[" && !escaping) {
        for (const [cls, [unip, u2, neg]] of Object.entries(posixClasses)) {
          if (glob.startsWith(cls, i2)) {
            if (rangeStart) {
              return ["$.", false, glob.length - pos, true];
            }
            i2 += cls.length;
            if (neg)
              negs.push(unip);
            else
              ranges.push(unip);
            uflag = uflag || u2;
            continue WHILE;
          }
        }
      }
      escaping = false;
      if (rangeStart) {
        if (c2 > rangeStart) {
          ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c2));
        } else if (c2 === rangeStart) {
          ranges.push(braceEscape(c2));
        }
        rangeStart = "";
        i2++;
        continue;
      }
      if (glob.startsWith("-]", i2 + 1)) {
        ranges.push(braceEscape(c2 + "-"));
        i2 += 2;
        continue;
      }
      if (glob.startsWith("-", i2 + 1)) {
        rangeStart = c2;
        i2 += 2;
        continue;
      }
      ranges.push(braceEscape(c2));
      i2++;
    }
    if (endPos < i2) {
      return ["", false, 0, false];
    }
    if (!ranges.length && !negs.length) {
      return ["$.", false, glob.length - pos, true];
    }
    if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
      const r2 = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
      return [regexpEscape(r2), false, endPos - pos, false];
    }
    const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
    const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
    const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
    return [comb, uflag, endPos - pos, true];
  };
  const unescape$1 = (s2, { windowsPathsNoEscape = false } = {}) => {
    return windowsPathsNoEscape ? s2.replace(/\[([^\/\\])\]/g, "$1") : s2.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
  };
  const types = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
  const isExtglobType = (c2) => types.has(c2);
  const startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
  const startNoDot = "(?!\\.)";
  const addPatternStart = /* @__PURE__ */ new Set(["[", "."]);
  const justDots = /* @__PURE__ */ new Set(["..", "."]);
  const reSpecials = new Set("().*{}+?[]^$\\!");
  const regExpEscape$1 = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const qmark$1 = "[^/]";
  const star$1 = qmark$1 + "*?";
  const starNoEmpty = qmark$1 + "+?";
  class AST {
    type;
    #root;
    #hasMagic;
    #uflag = false;
    #parts = [];
    #parent;
    #parentIndex;
    #negs;
    #filledNegs = false;
    #options;
    #toString;
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    #emptyExt = false;
    constructor(type, parent, options = {}) {
      this.type = type;
      if (type)
        this.#hasMagic = true;
      this.#parent = parent;
      this.#root = this.#parent ? this.#parent.#root : this;
      this.#options = this.#root === this ? options : this.#root.#options;
      this.#negs = this.#root === this ? [] : this.#root.#negs;
      if (type === "!" && !this.#root.#filledNegs)
        this.#negs.push(this);
      this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
    }
    get hasMagic() {
      if (this.#hasMagic !== void 0)
        return this.#hasMagic;
      for (const p2 of this.#parts) {
        if (typeof p2 === "string")
          continue;
        if (p2.type || p2.hasMagic)
          return this.#hasMagic = true;
      }
      return this.#hasMagic;
    }
    // reconstructs the pattern
    toString() {
      if (this.#toString !== void 0)
        return this.#toString;
      if (!this.type) {
        return this.#toString = this.#parts.map((p2) => String(p2)).join("");
      } else {
        return this.#toString = this.type + "(" + this.#parts.map((p2) => String(p2)).join("|") + ")";
      }
    }
    #fillNegs() {
      if (this !== this.#root)
        throw new Error("should only call on root");
      if (this.#filledNegs)
        return this;
      this.toString();
      this.#filledNegs = true;
      let n2;
      while (n2 = this.#negs.pop()) {
        if (n2.type !== "!")
          continue;
        let p2 = n2;
        let pp = p2.#parent;
        while (pp) {
          for (let i2 = p2.#parentIndex + 1; !pp.type && i2 < pp.#parts.length; i2++) {
            for (const part of n2.#parts) {
              if (typeof part === "string") {
                throw new Error("string part in extglob AST??");
              }
              part.copyIn(pp.#parts[i2]);
            }
          }
          p2 = pp;
          pp = p2.#parent;
        }
      }
      return this;
    }
    push(...parts) {
      for (const p2 of parts) {
        if (p2 === "")
          continue;
        if (typeof p2 !== "string" && !(p2 instanceof AST && p2.#parent === this)) {
          throw new Error("invalid part: " + p2);
        }
        this.#parts.push(p2);
      }
    }
    toJSON() {
      const ret = this.type === null ? this.#parts.slice().map((p2) => typeof p2 === "string" ? p2 : p2.toJSON()) : [this.type, ...this.#parts.map((p2) => p2.toJSON())];
      if (this.isStart() && !this.type)
        ret.unshift([]);
      if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
        ret.push({});
      }
      return ret;
    }
    isStart() {
      if (this.#root === this)
        return true;
      if (!this.#parent?.isStart())
        return false;
      if (this.#parentIndex === 0)
        return true;
      const p2 = this.#parent;
      for (let i2 = 0; i2 < this.#parentIndex; i2++) {
        const pp = p2.#parts[i2];
        if (!(pp instanceof AST && pp.type === "!")) {
          return false;
        }
      }
      return true;
    }
    isEnd() {
      if (this.#root === this)
        return true;
      if (this.#parent?.type === "!")
        return true;
      if (!this.#parent?.isEnd())
        return false;
      if (!this.type)
        return this.#parent?.isEnd();
      const pl = this.#parent ? this.#parent.#parts.length : 0;
      return this.#parentIndex === pl - 1;
    }
    copyIn(part) {
      if (typeof part === "string")
        this.push(part);
      else
        this.push(part.clone(this));
    }
    clone(parent) {
      const c2 = new AST(this.type, parent);
      for (const p2 of this.#parts) {
        c2.copyIn(p2);
      }
      return c2;
    }
    static #parseAST(str, ast, pos, opt) {
      let escaping = false;
      let inBrace = false;
      let braceStart = -1;
      let braceNeg = false;
      if (ast.type === null) {
        let i3 = pos;
        let acc2 = "";
        while (i3 < str.length) {
          const c2 = str.charAt(i3++);
          if (escaping || c2 === "\\") {
            escaping = !escaping;
            acc2 += c2;
            continue;
          }
          if (inBrace) {
            if (i3 === braceStart + 1) {
              if (c2 === "^" || c2 === "!") {
                braceNeg = true;
              }
            } else if (c2 === "]" && !(i3 === braceStart + 2 && braceNeg)) {
              inBrace = false;
            }
            acc2 += c2;
            continue;
          } else if (c2 === "[") {
            inBrace = true;
            braceStart = i3;
            braceNeg = false;
            acc2 += c2;
            continue;
          }
          if (!opt.noext && isExtglobType(c2) && str.charAt(i3) === "(") {
            ast.push(acc2);
            acc2 = "";
            const ext2 = new AST(c2, ast);
            i3 = AST.#parseAST(str, ext2, i3, opt);
            ast.push(ext2);
            continue;
          }
          acc2 += c2;
        }
        ast.push(acc2);
        return i3;
      }
      let i2 = pos + 1;
      let part = new AST(null, ast);
      const parts = [];
      let acc = "";
      while (i2 < str.length) {
        const c2 = str.charAt(i2++);
        if (escaping || c2 === "\\") {
          escaping = !escaping;
          acc += c2;
          continue;
        }
        if (inBrace) {
          if (i2 === braceStart + 1) {
            if (c2 === "^" || c2 === "!") {
              braceNeg = true;
            }
          } else if (c2 === "]" && !(i2 === braceStart + 2 && braceNeg)) {
            inBrace = false;
          }
          acc += c2;
          continue;
        } else if (c2 === "[") {
          inBrace = true;
          braceStart = i2;
          braceNeg = false;
          acc += c2;
          continue;
        }
        if (isExtglobType(c2) && str.charAt(i2) === "(") {
          part.push(acc);
          acc = "";
          const ext2 = new AST(c2, part);
          part.push(ext2);
          i2 = AST.#parseAST(str, ext2, i2, opt);
          continue;
        }
        if (c2 === "|") {
          part.push(acc);
          acc = "";
          parts.push(part);
          part = new AST(null, ast);
          continue;
        }
        if (c2 === ")") {
          if (acc === "" && ast.#parts.length === 0) {
            ast.#emptyExt = true;
          }
          part.push(acc);
          acc = "";
          ast.push(...parts, part);
          return i2;
        }
        acc += c2;
      }
      ast.type = null;
      ast.#hasMagic = void 0;
      ast.#parts = [str.substring(pos - 1)];
      return i2;
    }
    static fromGlob(pattern, options = {}) {
      const ast = new AST(null, void 0, options);
      AST.#parseAST(pattern, ast, 0, options);
      return ast;
    }
    // returns the regular expression if there's magic, or the unescaped
    // string if not.
    toMMPattern() {
      if (this !== this.#root)
        return this.#root.toMMPattern();
      const glob = this.toString();
      const [re, body, hasMagic, uflag] = this.toRegExpSource();
      const anyMagic = hasMagic || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
      if (!anyMagic) {
        return body;
      }
      const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
      return Object.assign(new RegExp(`^${re}$`, flags), {
        _src: re,
        _glob: glob
      });
    }
    get options() {
      return this.#options;
    }
    // returns the string match, the regexp source, whether there's magic
    // in the regexp (so a regular expression is required) and whether or
    // not the uflag is needed for the regular expression (for posix classes)
    // TODO: instead of injecting the start/end at this point, just return
    // the BODY of the regexp, along with the start/end portions suitable
    // for binding the start/end in either a joined full-path makeRe context
    // (where we bind to (^|/), or a standalone matchPart context (where
    // we bind to ^, and not /).  Otherwise slashes get duped!
    //
    // In part-matching mode, the start is:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: ^(?!\.\.?$)
    // - if dots allowed or not possible: ^
    // - if dots possible and not allowed: ^(?!\.)
    // end is:
    // - if not isEnd(): nothing
    // - else: $
    //
    // In full-path matching mode, we put the slash at the START of the
    // pattern, so start is:
    // - if first pattern: same as part-matching mode
    // - if not isStart(): nothing
    // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
    // - if dots allowed or not possible: /
    // - if dots possible and not allowed: /(?!\.)
    // end is:
    // - if last pattern, same as part-matching mode
    // - else nothing
    //
    // Always put the (?:$|/) on negated tails, though, because that has to be
    // there to bind the end of the negated pattern portion, and it's easier to
    // just stick it in now rather than try to inject it later in the middle of
    // the pattern.
    //
    // We can just always return the same end, and leave it up to the caller
    // to know whether it's going to be used joined or in parts.
    // And, if the start is adjusted slightly, can do the same there:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
    // - if dots allowed or not possible: (?:/|^)
    // - if dots possible and not allowed: (?:/|^)(?!\.)
    //
    // But it's better to have a simpler binding without a conditional, for
    // performance, so probably better to return both start options.
    //
    // Then the caller just ignores the end if it's not the first pattern,
    // and the start always gets applied.
    //
    // But that's always going to be $ if it's the ending pattern, or nothing,
    // so the caller can just attach $ at the end of the pattern when building.
    //
    // So the todo is:
    // - better detect what kind of start is needed
    // - return both flavors of starting pattern
    // - attach $ at the end of the pattern when creating the actual RegExp
    //
    // Ah, but wait, no, that all only applies to the root when the first pattern
    // is not an extglob. If the first pattern IS an extglob, then we need all
    // that dot prevention biz to live in the extglob portions, because eg
    // +(*|.x*) can match .xy but not .yx.
    //
    // So, return the two flavors if it's #root and the first child is not an
    // AST, otherwise leave it to the child AST to handle it, and there,
    // use the (?:^|/) style of start binding.
    //
    // Even simplified further:
    // - Since the start for a join is eg /(?!\.) and the start for a part
    // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
    // or start or whatever) and prepend ^ or / at the Regexp construction.
    toRegExpSource(allowDot) {
      const dot = allowDot ?? !!this.#options.dot;
      if (this.#root === this)
        this.#fillNegs();
      if (!this.type) {
        const noEmpty = this.isStart() && this.isEnd();
        const src2 = this.#parts.map((p2) => {
          const [re, _2, hasMagic, uflag] = typeof p2 === "string" ? AST.#parseGlob(p2, this.#hasMagic, noEmpty) : p2.toRegExpSource(allowDot);
          this.#hasMagic = this.#hasMagic || hasMagic;
          this.#uflag = this.#uflag || uflag;
          return re;
        }).join("");
        let start2 = "";
        if (this.isStart()) {
          if (typeof this.#parts[0] === "string") {
            const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
            if (!dotTravAllowed) {
              const aps = addPatternStart;
              const needNoTrav = (
                // dots are allowed, and the pattern starts with [ or .
                dot && aps.has(src2.charAt(0)) || // the pattern starts with \., and then [ or .
                src2.startsWith("\\.") && aps.has(src2.charAt(2)) || // the pattern starts with \.\., and then [ or .
                src2.startsWith("\\.\\.") && aps.has(src2.charAt(4))
              );
              const needNoDot = !dot && !allowDot && aps.has(src2.charAt(0));
              start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
            }
          }
        }
        let end = "";
        if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
          end = "(?:$|\\/)";
        }
        const final2 = start2 + src2 + end;
        return [
          final2,
          unescape$1(src2),
          this.#hasMagic = !!this.#hasMagic,
          this.#uflag
        ];
      }
      const repeated = this.type === "*" || this.type === "+";
      const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
      let body = this.#partsToRegExp(dot);
      if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
        const s2 = this.toString();
        this.#parts = [s2];
        this.type = null;
        this.#hasMagic = void 0;
        return [s2, unescape$1(this.toString()), false, false];
      }
      let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : this.#partsToRegExp(true);
      if (bodyDotAllowed === body) {
        bodyDotAllowed = "";
      }
      if (bodyDotAllowed) {
        body = `(?:${body})(?:${bodyDotAllowed})*?`;
      }
      let final = "";
      if (this.type === "!" && this.#emptyExt) {
        final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
      } else {
        const close = this.type === "!" ? (
          // !() must match something,but !(x) can match ''
          "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star$1 + ")"
        ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
        final = start + body + close;
      }
      return [
        final,
        unescape$1(body),
        this.#hasMagic = !!this.#hasMagic,
        this.#uflag
      ];
    }
    #partsToRegExp(dot) {
      return this.#parts.map((p2) => {
        if (typeof p2 === "string") {
          throw new Error("string type in extglob ast??");
        }
        const [re, _2, _hasMagic, uflag] = p2.toRegExpSource(dot);
        this.#uflag = this.#uflag || uflag;
        return re;
      }).filter((p2) => !(this.isStart() && this.isEnd()) || !!p2).join("|");
    }
    static #parseGlob(glob, hasMagic, noEmpty = false) {
      let escaping = false;
      let re = "";
      let uflag = false;
      for (let i2 = 0; i2 < glob.length; i2++) {
        const c2 = glob.charAt(i2);
        if (escaping) {
          escaping = false;
          re += (reSpecials.has(c2) ? "\\" : "") + c2;
          continue;
        }
        if (c2 === "\\") {
          if (i2 === glob.length - 1) {
            re += "\\\\";
          } else {
            escaping = true;
          }
          continue;
        }
        if (c2 === "[") {
          const [src2, needUflag, consumed, magic] = parseClass(glob, i2);
          if (consumed) {
            re += src2;
            uflag = uflag || needUflag;
            i2 += consumed - 1;
            hasMagic = hasMagic || magic;
            continue;
          }
        }
        if (c2 === "*") {
          if (noEmpty && glob === "*")
            re += starNoEmpty;
          else
            re += star$1;
          hasMagic = true;
          continue;
        }
        if (c2 === "?") {
          re += qmark$1;
          hasMagic = true;
          continue;
        }
        re += regExpEscape$1(c2);
      }
      return [re, unescape$1(glob), !!hasMagic, uflag];
    }
  }
  const escape$1 = (s2, { windowsPathsNoEscape = false } = {}) => {
    return windowsPathsNoEscape ? s2.replace(/[?*()[\]]/g, "[$&]") : s2.replace(/[?*()[\]\\]/g, "\\$&");
  };
  const minimatch = (p2, pattern, options = {}) => {
    assertValidPattern(pattern);
    if (!options.nocomment && pattern.charAt(0) === "#") {
      return false;
    }
    return new Minimatch(pattern, options).match(p2);
  };
  const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
  const starDotExtTest = (ext2) => (f2) => !f2.startsWith(".") && f2.endsWith(ext2);
  const starDotExtTestDot = (ext2) => (f2) => f2.endsWith(ext2);
  const starDotExtTestNocase = (ext2) => {
    ext2 = ext2.toLowerCase();
    return (f2) => !f2.startsWith(".") && f2.toLowerCase().endsWith(ext2);
  };
  const starDotExtTestNocaseDot = (ext2) => {
    ext2 = ext2.toLowerCase();
    return (f2) => f2.toLowerCase().endsWith(ext2);
  };
  const starDotStarRE = /^\*+\.\*+$/;
  const starDotStarTest = (f2) => !f2.startsWith(".") && f2.includes(".");
  const starDotStarTestDot = (f2) => f2 !== "." && f2 !== ".." && f2.includes(".");
  const dotStarRE = /^\.\*+$/;
  const dotStarTest = (f2) => f2 !== "." && f2 !== ".." && f2.startsWith(".");
  const starRE = /^\*+$/;
  const starTest = (f2) => f2.length !== 0 && !f2.startsWith(".");
  const starTestDot = (f2) => f2.length !== 0 && f2 !== "." && f2 !== "..";
  const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
  const qmarksTestNocase = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExt([$0]);
    if (!ext2)
      return noext;
    ext2 = ext2.toLowerCase();
    return (f2) => noext(f2) && f2.toLowerCase().endsWith(ext2);
  };
  const qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExtDot([$0]);
    if (!ext2)
      return noext;
    ext2 = ext2.toLowerCase();
    return (f2) => noext(f2) && f2.toLowerCase().endsWith(ext2);
  };
  const qmarksTestDot = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExtDot([$0]);
    return !ext2 ? noext : (f2) => noext(f2) && f2.endsWith(ext2);
  };
  const qmarksTest = ([$0, ext2 = ""]) => {
    const noext = qmarksTestNoExt([$0]);
    return !ext2 ? noext : (f2) => noext(f2) && f2.endsWith(ext2);
  };
  const qmarksTestNoExt = ([$0]) => {
    const len = $0.length;
    return (f2) => f2.length === len && !f2.startsWith(".");
  };
  const qmarksTestNoExtDot = ([$0]) => {
    const len = $0.length;
    return (f2) => f2.length === len && f2 !== "." && f2 !== "..";
  };
  const defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
  const path = {
    win32: { sep: "\\" },
    posix: { sep: "/" }
  };
  const sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
  minimatch.sep = sep;
  const GLOBSTAR = Symbol("globstar **");
  minimatch.GLOBSTAR = GLOBSTAR;
  const qmark = "[^/]";
  const star = qmark + "*?";
  const twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
  const twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
  const filter = (pattern, options = {}) => (p2) => minimatch(p2, pattern, options);
  minimatch.filter = filter;
  const ext = (a2, b2 = {}) => Object.assign({}, a2, b2);
  const defaults = (def) => {
    if (!def || typeof def !== "object" || !Object.keys(def).length) {
      return minimatch;
    }
    const orig = minimatch;
    const m2 = (p2, pattern, options = {}) => orig(p2, pattern, ext(def, options));
    return Object.assign(m2, {
      Minimatch: class Minimatch extends orig.Minimatch {
        constructor(pattern, options = {}) {
          super(pattern, ext(def, options));
        }
        static defaults(options) {
          return orig.defaults(ext(def, options)).Minimatch;
        }
      },
      AST: class AST extends orig.AST {
        /* c8 ignore start */
        constructor(type, parent, options = {}) {
          super(type, parent, ext(def, options));
        }
        /* c8 ignore stop */
        static fromGlob(pattern, options = {}) {
          return orig.AST.fromGlob(pattern, ext(def, options));
        }
      },
      unescape: (s2, options = {}) => orig.unescape(s2, ext(def, options)),
      escape: (s2, options = {}) => orig.escape(s2, ext(def, options)),
      filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
      defaults: (options) => orig.defaults(ext(def, options)),
      makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
      braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
      match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
      sep: orig.sep,
      GLOBSTAR
    });
  };
  minimatch.defaults = defaults;
  const braceExpand = (pattern, options = {}) => {
    assertValidPattern(pattern);
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
      return [pattern];
    }
    return expand(pattern);
  };
  minimatch.braceExpand = braceExpand;
  const makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
  minimatch.makeRe = makeRe;
  const match = (list, pattern, options = {}) => {
    const mm = new Minimatch(pattern, options);
    list = list.filter((f2) => mm.match(f2));
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  minimatch.match = match;
  const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
  const regExpEscape = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  class Minimatch {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(pattern, options = {}) {
      assertValidPattern(pattern);
      options = options || {};
      this.options = options;
      this.pattern = pattern;
      this.platform = options.platform || defaultPlatform;
      this.isWindows = this.platform === "win32";
      this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
      if (this.windowsPathsNoEscape) {
        this.pattern = this.pattern.replace(/\\/g, "/");
      }
      this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
      this.regexp = null;
      this.negate = false;
      this.nonegate = !!options.nonegate;
      this.comment = false;
      this.empty = false;
      this.partial = !!options.partial;
      this.nocase = !!this.options.nocase;
      this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
      this.globSet = [];
      this.globParts = [];
      this.set = [];
      this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) {
        return true;
      }
      for (const pattern of this.set) {
        for (const part of pattern) {
          if (typeof part !== "string")
            return true;
        }
      }
      return false;
    }
    debug(..._2) {
    }
    make() {
      const pattern = this.pattern;
      const options = this.options;
      if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      this.globSet = [...new Set(this.braceExpand())];
      if (options.debug) {
        this.debug = (...args) => console.error(...args);
      }
      this.debug(this.pattern, this.globSet);
      const rawGlobParts = this.globSet.map((s2) => this.slashSplit(s2));
      this.globParts = this.preprocess(rawGlobParts);
      this.debug(this.pattern, this.globParts);
      let set = this.globParts.map((s2, _2, __) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          const isUNC = s2[0] === "" && s2[1] === "" && (s2[2] === "?" || !globMagic.test(s2[2])) && !globMagic.test(s2[3]);
          const isDrive = /^[a-z]:/i.test(s2[0]);
          if (isUNC) {
            return [...s2.slice(0, 4), ...s2.slice(4).map((ss) => this.parse(ss))];
          } else if (isDrive) {
            return [s2[0], ...s2.slice(1).map((ss) => this.parse(ss))];
          }
        }
        return s2.map((ss) => this.parse(ss));
      });
      this.debug(this.pattern, set);
      this.set = set.filter((s2) => s2.indexOf(false) === -1);
      if (this.isWindows) {
        for (let i2 = 0; i2 < this.set.length; i2++) {
          const p2 = this.set[i2];
          if (p2[0] === "" && p2[1] === "" && this.globParts[i2][2] === "?" && typeof p2[3] === "string" && /^[a-z]:$/i.test(p2[3])) {
            p2[2] = "?";
          }
        }
      }
      this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
      if (this.options.noglobstar) {
        for (let i2 = 0; i2 < globParts.length; i2++) {
          for (let j2 = 0; j2 < globParts[i2].length; j2++) {
            if (globParts[i2][j2] === "**") {
              globParts[i2][j2] = "*";
            }
          }
        }
      }
      const { optimizationLevel = 1 } = this.options;
      if (optimizationLevel >= 2) {
        globParts = this.firstPhasePreProcess(globParts);
        globParts = this.secondPhasePreProcess(globParts);
      } else if (optimizationLevel >= 1) {
        globParts = this.levelOneOptimize(globParts);
      } else {
        globParts = this.adjascentGlobstarOptimize(globParts);
      }
      return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
      return globParts.map((parts) => {
        let gs = -1;
        while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
          let i2 = gs;
          while (parts[i2 + 1] === "**") {
            i2++;
          }
          if (i2 !== gs) {
            parts.splice(gs, i2 - gs);
          }
        }
        return parts;
      });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
      return globParts.map((parts) => {
        parts = parts.reduce((set, part) => {
          const prev = set[set.length - 1];
          if (part === "**" && prev === "**") {
            return set;
          }
          if (part === "..") {
            if (prev && prev !== ".." && prev !== "." && prev !== "**") {
              set.pop();
              return set;
            }
          }
          set.push(part);
          return set;
        }, []);
        return parts.length === 0 ? [""] : parts;
      });
    }
    levelTwoFileOptimize(parts) {
      if (!Array.isArray(parts)) {
        parts = this.slashSplit(parts);
      }
      let didSomething = false;
      do {
        didSomething = false;
        if (!this.preserveMultipleSlashes) {
          for (let i2 = 1; i2 < parts.length - 1; i2++) {
            const p2 = parts[i2];
            if (i2 === 1 && p2 === "" && parts[0] === "")
              continue;
            if (p2 === "." || p2 === "") {
              didSomething = true;
              parts.splice(i2, 1);
              i2--;
            }
          }
          if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
            didSomething = true;
            parts.pop();
          }
        }
        let dd = 0;
        while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
          const p2 = parts[dd - 1];
          if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**") {
            didSomething = true;
            parts.splice(dd - 1, 2);
            dd -= 2;
          }
        }
      } while (didSomething);
      return parts.length === 0 ? [""] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
      let didSomething = false;
      do {
        didSomething = false;
        for (let parts of globParts) {
          let gs = -1;
          while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
            let gss = gs;
            while (parts[gss + 1] === "**") {
              gss++;
            }
            if (gss > gs) {
              parts.splice(gs + 1, gss - gs);
            }
            let next = parts[gs + 1];
            const p2 = parts[gs + 2];
            const p22 = parts[gs + 3];
            if (next !== "..")
              continue;
            if (!p2 || p2 === "." || p2 === ".." || !p22 || p22 === "." || p22 === "..") {
              continue;
            }
            didSomething = true;
            parts.splice(gs, 1);
            const other = parts.slice(0);
            other[gs] = "**";
            globParts.push(other);
            gs--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let i2 = 1; i2 < parts.length - 1; i2++) {
              const p2 = parts[i2];
              if (i2 === 1 && p2 === "" && parts[0] === "")
                continue;
              if (p2 === "." || p2 === "") {
                didSomething = true;
                parts.splice(i2, 1);
                i2--;
              }
            }
            if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
              didSomething = true;
              parts.pop();
            }
          }
          let dd = 0;
          while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
            const p2 = parts[dd - 1];
            if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**") {
              didSomething = true;
              const needDot = dd === 1 && parts[dd + 1] === "**";
              const splin = needDot ? ["."] : [];
              parts.splice(dd - 1, 2, ...splin);
              if (parts.length === 0)
                parts.push("");
              dd -= 2;
            }
          }
        }
      } while (didSomething);
      return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
      for (let i2 = 0; i2 < globParts.length - 1; i2++) {
        for (let j2 = i2 + 1; j2 < globParts.length; j2++) {
          const matched = this.partsMatch(globParts[i2], globParts[j2], !this.preserveMultipleSlashes);
          if (matched) {
            globParts[i2] = [];
            globParts[j2] = matched;
            break;
          }
        }
      }
      return globParts.filter((gs) => gs.length);
    }
    partsMatch(a2, b2, emptyGSMatch = false) {
      let ai = 0;
      let bi = 0;
      let result = [];
      let which = "";
      while (ai < a2.length && bi < b2.length) {
        if (a2[ai] === b2[bi]) {
          result.push(which === "b" ? b2[bi] : a2[ai]);
          ai++;
          bi++;
        } else if (emptyGSMatch && a2[ai] === "**" && b2[bi] === a2[ai + 1]) {
          result.push(a2[ai]);
          ai++;
        } else if (emptyGSMatch && b2[bi] === "**" && a2[ai] === b2[bi + 1]) {
          result.push(b2[bi]);
          bi++;
        } else if (a2[ai] === "*" && b2[bi] && (this.options.dot || !b2[bi].startsWith(".")) && b2[bi] !== "**") {
          if (which === "b")
            return false;
          which = "a";
          result.push(a2[ai]);
          ai++;
          bi++;
        } else if (b2[bi] === "*" && a2[ai] && (this.options.dot || !a2[ai].startsWith(".")) && a2[ai] !== "**") {
          if (which === "a")
            return false;
          which = "b";
          result.push(b2[bi]);
          ai++;
          bi++;
        } else {
          return false;
        }
      }
      return a2.length === b2.length && result;
    }
    parseNegate() {
      if (this.nonegate)
        return;
      const pattern = this.pattern;
      let negate = false;
      let negateOffset = 0;
      for (let i2 = 0; i2 < pattern.length && pattern.charAt(i2) === "!"; i2++) {
        negate = !negate;
        negateOffset++;
      }
      if (negateOffset)
        this.pattern = pattern.slice(negateOffset);
      this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
      const options = this.options;
      if (this.isWindows) {
        const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
        const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
        const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
        const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
        const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
        const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
        if (typeof fdi === "number" && typeof pdi === "number") {
          const [fd, pd] = [file[fdi], pattern[pdi]];
          if (fd.toLowerCase() === pd.toLowerCase()) {
            pattern[pdi] = fd;
            if (pdi > fdi) {
              pattern = pattern.slice(pdi);
            } else if (fdi > pdi) {
              file = file.slice(fdi);
            }
          }
        }
      }
      const { optimizationLevel = 1 } = this.options;
      if (optimizationLevel >= 2) {
        file = this.levelTwoFileOptimize(file);
      }
      this.debug("matchOne", this, { file, pattern });
      this.debug("matchOne", file.length, pattern.length);
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        this.debug("matchOne loop");
        var p2 = pattern[pi];
        var f2 = file[fi];
        this.debug(pattern, p2, f2);
        if (p2 === false) {
          return false;
        }
        if (p2 === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p2, f2]);
          var fr = fi;
          var pr = pi + 1;
          if (pr === pl) {
            this.debug("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                return false;
            }
            return true;
          }
          while (fr < fl) {
            var swallowee = file[fr];
            this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              this.debug("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                this.debug("dot detected!", file, fr, pattern, pr);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial) {
            this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
            if (fr === fl) {
              return true;
            }
          }
          return false;
        }
        let hit;
        if (typeof p2 === "string") {
          hit = f2 === p2;
          this.debug("string match", p2, f2, hit);
        } else {
          hit = p2.test(f2);
          this.debug("pattern match", p2, f2, hit);
        }
        if (!hit)
          return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial;
      } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === "";
      } else {
        throw new Error("wtf?");
      }
    }
    braceExpand() {
      return braceExpand(this.pattern, this.options);
    }
    parse(pattern) {
      assertValidPattern(pattern);
      const options = this.options;
      if (pattern === "**")
        return GLOBSTAR;
      if (pattern === "")
        return "";
      let m2;
      let fastTest = null;
      if (m2 = pattern.match(starRE)) {
        fastTest = options.dot ? starTestDot : starTest;
      } else if (m2 = pattern.match(starDotExtRE)) {
        fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m2[1]);
      } else if (m2 = pattern.match(qmarksRE)) {
        fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m2);
      } else if (m2 = pattern.match(starDotStarRE)) {
        fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
      } else if (m2 = pattern.match(dotStarRE)) {
        fastTest = dotStarTest;
      }
      const re = AST.fromGlob(pattern, this.options).toMMPattern();
      if (fastTest && typeof re === "object") {
        Reflect.defineProperty(re, "test", { value: fastTest });
      }
      return re;
    }
    makeRe() {
      if (this.regexp || this.regexp === false)
        return this.regexp;
      const set = this.set;
      if (!set.length) {
        this.regexp = false;
        return this.regexp;
      }
      const options = this.options;
      const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
      const flags = new Set(options.nocase ? ["i"] : []);
      let re = set.map((pattern) => {
        const pp = pattern.map((p2) => {
          if (p2 instanceof RegExp) {
            for (const f2 of p2.flags.split(""))
              flags.add(f2);
          }
          return typeof p2 === "string" ? regExpEscape(p2) : p2 === GLOBSTAR ? GLOBSTAR : p2._src;
        });
        pp.forEach((p2, i2) => {
          const next = pp[i2 + 1];
          const prev = pp[i2 - 1];
          if (p2 !== GLOBSTAR || prev === GLOBSTAR) {
            return;
          }
          if (prev === void 0) {
            if (next !== void 0 && next !== GLOBSTAR) {
              pp[i2 + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
            } else {
              pp[i2] = twoStar;
            }
          } else if (next === void 0) {
            pp[i2 - 1] = prev + "(?:\\/|" + twoStar + ")?";
          } else if (next !== GLOBSTAR) {
            pp[i2 - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
            pp[i2 + 1] = GLOBSTAR;
          }
        });
        return pp.filter((p2) => p2 !== GLOBSTAR).join("/");
      }).join("|");
      const [open, close] = set.length > 1 ? ["(?:", ")"] : ["", ""];
      re = "^" + open + re + close + "$";
      if (this.negate)
        re = "^(?!" + re + ").+$";
      try {
        this.regexp = new RegExp(re, [...flags].join(""));
      } catch (ex) {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(p2) {
      if (this.preserveMultipleSlashes) {
        return p2.split("/");
      } else if (this.isWindows && /^\/\/[^\/]+/.test(p2)) {
        return ["", ...p2.split(/\/+/)];
      } else {
        return p2.split(/\/+/);
      }
    }
    match(f2, partial = this.partial) {
      this.debug("match", f2, this.pattern);
      if (this.comment) {
        return false;
      }
      if (this.empty) {
        return f2 === "";
      }
      if (f2 === "/" && partial) {
        return true;
      }
      const options = this.options;
      if (this.isWindows) {
        f2 = f2.split("\\").join("/");
      }
      const ff = this.slashSplit(f2);
      this.debug(this.pattern, "split", ff);
      const set = this.set;
      this.debug(this.pattern, "set", set);
      let filename = ff[ff.length - 1];
      if (!filename) {
        for (let i2 = ff.length - 2; !filename && i2 >= 0; i2--) {
          filename = ff[i2];
        }
      }
      for (let i2 = 0; i2 < set.length; i2++) {
        const pattern = set[i2];
        let file = ff;
        if (options.matchBase && pattern.length === 1) {
          file = [filename];
        }
        const hit = this.matchOne(file, pattern, partial);
        if (hit) {
          if (options.flipNegate) {
            return true;
          }
          return !this.negate;
        }
      }
      if (options.flipNegate) {
        return false;
      }
      return this.negate;
    }
    static defaults(def) {
      return minimatch.defaults(def).Minimatch;
    }
  }
  minimatch.AST = AST;
  minimatch.Minimatch = Minimatch;
  minimatch.escape = escape$1;
  minimatch.unescape = unescape$1;
  function assertValidChildren(yBlocks, props) {
    if (!Array.isArray(props.children))
      return;
    props.children.forEach((child) => {
      if (!yBlocks.has(child.id)) {
        throw new Error("Invalid child id: " + child.id);
      }
    });
  }
  function syncBlockProps(schema, model, yBlock, props) {
    const defaultProps = schema.model.props?.(internalPrimitives) ?? {};
    Object.entries(props).forEach(([key, value]) => {
      if (SYS_KEYS.has(key))
        return;
      if (value === void 0)
        return;
      model[key] = value;
    });
    Object.entries(defaultProps).forEach(([key, value]) => {
      const notExists = !yBlock.has(`prop:${key}`) || yBlock.get(`prop:${key}`) === void 0;
      if (!notExists) {
        return;
      }
      model[key] = native2Y(value);
    });
  }
  function encodeCollectionAsYjsUpdateV2(collection) {
    return toBase64(encodeStateAsUpdateV2(collection.doc));
  }
  const hash = (str) => {
    return str.split("").reduce((prevHash, currVal) => (prevHash << 5) - prevHash + currVal.charCodeAt(0) | 0, 0);
  };
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    assertValidChildren,
    encodeCollectionAsYjsUpdateV2,
    hash,
    syncBlockProps
  }, Symbol.toStringTag, { value: "Module" }));
  var BlockViewType;
  (function(BlockViewType2) {
    BlockViewType2["Display"] = "display";
    BlockViewType2["Hidden"] = "hidden";
    BlockViewType2["Bypass"] = "bypass";
  })(BlockViewType || (BlockViewType = {}));
  class Doc {
    get blockCollection() {
      return this._blockCollection;
    }
    get readonly() {
      if (this._blockCollection.readonly) {
        return true;
      }
      return this._readonly === true;
    }
    get schema() {
      return this._schema;
    }
    get ready() {
      return this._blockCollection.ready;
    }
    get history() {
      return this._blockCollection.history;
    }
    get collection() {
      return this._blockCollection.collection;
    }
    get docSync() {
      return this.collection.docSync;
    }
    get awarenessSync() {
      return this.collection.awarenessSync;
    }
    get blobSync() {
      return this.collection.blobSync;
    }
    get meta() {
      return this._blockCollection.meta;
    }
    get isEmpty() {
      return this._blocks.size === 0;
    }
    get canUndo() {
      return this._blockCollection.canUndo;
    }
    get canRedo() {
      return this._blockCollection.canRedo;
    }
    get undo() {
      return this._blockCollection.undo.bind(this._blockCollection);
    }
    get redo() {
      return this._blockCollection.redo.bind(this._blockCollection);
    }
    get root() {
      const rootId = this._crud.root;
      if (!rootId)
        return null;
      return this.getBlock(rootId)?.model ?? null;
    }
    get id() {
      return this._blockCollection.id;
    }
    get Text() {
      return this._blockCollection.Text;
    }
    get spaceDoc() {
      return this._blockCollection.spaceDoc;
    }
    get rootDoc() {
      return this._blockCollection.rootDoc;
    }
    get awarenessStore() {
      return this._blockCollection.awarenessStore;
    }
    get loaded() {
      return this._blockCollection.loaded;
    }
    get transact() {
      return this._blockCollection.transact.bind(this._blockCollection);
    }
    get resetHistory() {
      return this._blockCollection.resetHistory.bind(this._blockCollection);
    }
    get captureSync() {
      return this._blockCollection.captureSync.bind(this._blockCollection);
    }
    get withoutTransact() {
      return this._blockCollection.withoutTransact.bind(this._blockCollection);
    }
    get generateBlockId() {
      return this._blockCollection.generateBlockId.bind(this._blockCollection);
    }
    get clear() {
      return this._blockCollection.clear.bind(this._blockCollection);
    }
    get blocks() {
      return this._blocks;
    }
    get _yBlocks() {
      return this._blockCollection.yBlocks;
    }
    constructor({ schema, blockCollection, crud, selector, readonly }) {
      this._blocks = /* @__PURE__ */ new Map();
      this.slots = {
        ready: new Slot(),
        rootAdded: new Slot(),
        rootDeleted: new Slot(),
        blockUpdated: new Slot()
      };
      this._blockCollection = blockCollection;
      this._crud = crud;
      this._schema = schema;
      this._selector = selector;
      this._readonly = readonly;
      this._yBlocks.forEach((_2, id2) => {
        if (!this._blocks.has(id2)) {
          this._onBlockAdded(id2, true);
        }
      });
      this._disposeBlockUpdated = this._blockCollection.slots.yBlockUpdated.on(({ type, id: id2 }) => {
        switch (type) {
          case "add": {
            this._onBlockAdded(id2);
            return;
          }
          case "delete": {
            this._onBlockRemoved(id2);
            return;
          }
        }
      });
      this.slots = {
        ...this.slots,
        historyUpdated: this._blockCollection.slots.historyUpdated,
        yBlockUpdated: this._blockCollection.slots.yBlockUpdated
      };
    }
    _getSiblings(block, fn) {
      const parent = this.getParent(block);
      if (!parent)
        return null;
      const blockModel = typeof block === "string" ? this.getBlock(block)?.model : block;
      if (!blockModel)
        return null;
      const index = parent.children.indexOf(blockModel);
      if (index === -1)
        return null;
      return fn(parent, index);
    }
    _onBlockAdded(id2, init = false) {
      try {
        if (this._blocks.has(id2)) {
          return;
        }
        const yBlock = this._yBlocks.get(id2);
        if (!yBlock) {
          console.warn(`Could not find block with id ${id2}`);
          return;
        }
        const options = {
          onChange: (block2, key) => {
            if (key) {
              block2.model.propsUpdated.emit({ key });
            }
            this.slots.blockUpdated.emit({
              type: "update",
              id: id2,
              flavour: block2.flavour,
              props: { key }
            });
          }
        };
        const block = new Block(this._schema, yBlock, this, options);
        block.blockViewType = this._selector(block, this);
        this._blocks.set(id2, block);
        block.model.created.emit();
        if (block.model.role === "root") {
          this.slots.rootAdded.emit(id2);
        }
        this.slots.blockUpdated.emit({
          type: "add",
          id: id2,
          init,
          flavour: block.model.flavour,
          model: block.model
        });
      } catch (e2) {
        console.error("An error occurred while adding block:");
        console.error(e2);
      }
    }
    _onBlockRemoved(id2) {
      try {
        const block = this.getBlock(id2);
        if (!block)
          return;
        if (block.model.role === "root") {
          this.slots.rootDeleted.emit(id2);
        }
        this.slots.blockUpdated.emit({
          type: "delete",
          id: id2,
          flavour: block.model.flavour,
          parent: this.getParent(block.model)?.id ?? "",
          model: block.model
        });
        this._blocks.delete(id2);
        block.model.deleted.emit();
        block.model.dispose();
      } catch (e2) {
        console.error("An error occurred while removing block:");
        console.error(e2);
      }
    }
    dispose() {
      this._disposeBlockUpdated.dispose();
      this.slots.ready.dispose();
      this.slots.blockUpdated.dispose();
      this.slots.rootAdded.dispose();
      this.slots.rootDeleted.dispose();
    }
    getSchemaByFlavour(flavour) {
      return this._schema.flavourSchemaMap.get(flavour);
    }
    load(initFn) {
      this._blockCollection.load(initFn);
      this.slots.ready.emit();
      return this;
    }
    hasBlock(id2) {
      return this._blocks.has(id2);
    }
    /**
     * @deprecated
     * Use `hasBlock` instead.
     */
    hasBlockById(id2) {
      return this.hasBlock(id2);
    }
    getBlock(id2) {
      return this._blocks.get(id2);
    }
    /**
     * @deprecated
     * Use `getBlock` instead.
     */
    getBlockById(id2) {
      return this.getBlock(id2)?.model ?? null;
    }
    /**
     * @deprecated
     * Use `getBlocksByFlavour` instead.
     */
    getBlockByFlavour(blockFlavour) {
      return this.getBlocksByFlavour(blockFlavour).map((x2) => x2.model);
    }
    getBlocksByFlavour(blockFlavour) {
      const flavours = typeof blockFlavour === "string" ? [blockFlavour] : blockFlavour;
      return Array.from(this._blocks.values()).filter(({ flavour }) => flavours.includes(flavour));
    }
    getParent(target) {
      const targetId = typeof target === "string" ? target : target.id;
      const parentId = this._crud.getParent(targetId);
      if (!parentId)
        return null;
      const parent = this._blocks.get(parentId);
      if (!parent)
        return null;
      return parent.model;
    }
    getPrev(block) {
      return this._getSiblings(block, (parent, index) => parent.children[index - 1] ?? null);
    }
    getPrevs(block) {
      return this._getSiblings(block, (parent, index) => parent.children.slice(0, index)) ?? [];
    }
    getNext(block) {
      return this._getSiblings(block, (parent, index) => parent.children[index + 1] ?? null);
    }
    getNexts(block) {
      return this._getSiblings(block, (parent, index) => parent.children.slice(index + 1)) ?? [];
    }
    getBlocks() {
      return Array.from(this._blocks.values()).map((block) => block.model);
    }
    addBlocks(blocks, parent, parentIndex) {
      const ids = [];
      blocks.forEach((block) => {
        const id2 = this.addBlock(block.flavour, block.blockProps ?? {}, parent, parentIndex);
        ids.push(id2);
        typeof parentIndex === "number" && parentIndex++;
      });
      return ids;
    }
    addBlock(flavour, blockProps = {}, parent, parentIndex) {
      if (this.readonly) {
        throw new Error("cannot modify data in readonly mode");
      }
      const id2 = blockProps.id ?? this._blockCollection.generateBlockId();
      this.transact(() => {
        this._crud.addBlock(id2, flavour, { ...blockProps }, typeof parent === "string" ? parent : parent?.id, parentIndex);
      });
      return id2;
    }
    moveBlocks(blocksToMove, newParent, targetSibling = null, shouldInsertBeforeSibling = true) {
      if (this.readonly) {
        console.error("Cannot modify data in read-only mode");
        return;
      }
      this.transact(() => {
        this._crud.moveBlocks(blocksToMove.map((model) => model.id), newParent.id, targetSibling?.id ?? null, shouldInsertBeforeSibling);
      });
    }
    updateBlock(model, callBackOrProps) {
      if (this.readonly) {
        console.error("cannot modify data in readonly mode");
        return;
      }
      const isCallback = typeof callBackOrProps === "function";
      if (!isCallback) {
        const parent = this.getParent(model);
        this.schema.validate(model.flavour, parent?.flavour, callBackOrProps.children?.map((child) => child.flavour));
      }
      const yBlock = this._yBlocks.get(model.id);
      assertExists(yBlock);
      this.transact(() => {
        if (isCallback) {
          callBackOrProps();
          return;
        }
        if (callBackOrProps.children) {
          this._crud.updateBlockChildren(model.id, callBackOrProps.children.map((child) => child.id));
        }
        const schema = this.schema.flavourSchemaMap.get(model.flavour);
        assertExists(schema);
        syncBlockProps(schema, model, yBlock, callBackOrProps);
        return;
      });
    }
    addSiblingBlocks(targetModel, props, place = "after") {
      if (!props.length)
        return [];
      const parent = this.getParent(targetModel);
      assertExists(parent);
      const targetIndex = parent.children.findIndex(({ id: id2 }) => id2 === targetModel.id) ?? 0;
      const insertIndex = place === "before" ? targetIndex : targetIndex + 1;
      if (props.length <= 1) {
        assertExists(props[0].flavour);
        const { flavour, ...blockProps } = props[0];
        const id2 = this.addBlock(flavour, blockProps, parent.id, insertIndex);
        return [id2];
      }
      const blocks = [];
      props.forEach((prop) => {
        const { flavour, ...blockProps } = prop;
        assertExists(flavour);
        blocks.push({ flavour, blockProps });
      });
      return this.addBlocks(blocks, parent.id, insertIndex);
    }
    deleteBlock(model, options = {
      deleteChildren: true
    }) {
      if (this.readonly) {
        console.error("cannot modify data in readonly mode");
        return;
      }
      const opts = options && options.bringChildrenTo ? {
        ...options,
        bringChildrenTo: options.bringChildrenTo.id
      } : options;
      this.transact(() => {
        this._crud.deleteBlock(model.id, opts);
      });
    }
  }
  class Block {
    constructor(schema, yBlock, doc, options = {}) {
      this.schema = schema;
      this.yBlock = yBlock;
      this.doc = doc;
      this.options = options;
      this._byPassProxy = false;
      this._stashed = /* @__PURE__ */ new Set();
      this.blockViewType = BlockViewType.Display;
      this._byPassUpdate = (fn) => {
        this._byPassProxy = true;
        fn();
        this._byPassProxy = false;
      };
      this._getPropsProxy = (name, value) => {
        return createYProxy(value, {
          onChange: () => {
            this.options.onChange?.(this, name, value);
          }
        });
      };
      this.stash = (prop) => {
        if (this._stashed.has(prop))
          return;
        this._stashed.add(prop);
        this._stashProp(prop);
      };
      this.pop = (prop) => {
        if (!this._stashed.has(prop))
          return;
        this._popProp(prop);
      };
      const { id: id2, flavour, version, yChildren, props } = this._parseYBlock();
      this.id = id2;
      this.flavour = flavour;
      this.yChildren = yChildren;
      this.version = version;
      this.model = this._createModel(props);
      this.yChildren.observe(() => {
        this.model.childrenUpdated.emit();
      });
      this.yBlock.observe((event) => {
        event.keysChanged.forEach((key) => {
          const type = event.changes.keys.get(key);
          if (!type) {
            return;
          }
          if (type.action === "update" || type.action === "add") {
            const value = this.yBlock.get(key);
            const keyName = key.replace("prop:", "");
            const proxy = this._getPropsProxy(keyName, value);
            this._byPassUpdate(() => {
              this.model[keyName] = proxy;
            });
            this.options.onChange?.(this, keyName, value);
            return;
          }
          if (type.action === "delete") {
            const keyName = key.replace("prop:", "");
            this._byPassUpdate(() => {
              delete this.model[keyName];
            });
            this.options.onChange?.(this, keyName, void 0);
            return;
          }
        });
      });
      this.yBlock.observeDeep((evtArr) => {
        const evt = evtArr[0];
        if (!evt || evt.currentTarget === evt.target)
          return;
        this.options.onChange?.(this, "", void 0);
      });
      if (doc) {
        this.model.doc = doc;
      }
    }
    _stashProp(prop) {
      this.model[prop] = y2Native(this.yBlock.get(`prop:${prop}`), {
        transform: (value, origin) => {
          if (Boxed.is(origin)) {
            return value;
          }
          if (origin instanceof YMap) {
            return new Proxy(value, {
              get: (target, p2, receiver) => {
                return Reflect.get(target, p2, receiver);
              },
              set: (target, p2, value2, receiver) => {
                const result = Reflect.set(target, p2, value2, receiver);
                this.options.onChange?.(this, prop, value2);
                return result;
              },
              deleteProperty: (target, p2) => {
                const result = Reflect.deleteProperty(target, p2);
                this.options.onChange?.(this, prop, void 0);
                return result;
              }
            });
          }
          if (origin instanceof YArray) {
            return new Proxy(value, {
              get: (target, p2, receiver) => {
                return Reflect.get(target, p2, receiver);
              },
              set: (target, p2, value2, receiver) => {
                const index = Number(p2);
                if (Number.isNaN(index)) {
                  return Reflect.set(target, p2, value2, receiver);
                }
                const result = Reflect.set(target, p2, value2, receiver);
                this.options.onChange?.(this, prop, value2);
                return result;
              },
              deleteProperty: (target, p2) => {
                const result = Reflect.deleteProperty(target, p2);
                this.options.onChange?.(this, p2, void 0);
                return result;
              }
            });
          }
          return value;
        }
      });
    }
    _popProp(prop) {
      const model = this.model;
      const value = model[prop];
      this._stashed.delete(prop);
      model[prop] = value;
    }
    _parseYBlock() {
      let id2;
      let flavour;
      let version;
      let yChildren;
      const props = {};
      this.yBlock.forEach((value, key) => {
        if (key.startsWith("prop:")) {
          const keyName = key.replace("prop:", "");
          props[keyName] = this._getPropsProxy(keyName, value);
          return;
        }
        if (key === "sys:id" && typeof value === "string") {
          id2 = value;
          return;
        }
        if (key === "sys:flavour" && typeof value === "string") {
          flavour = value;
          return;
        }
        if (key === "sys:children" && value instanceof YArray) {
          yChildren = value;
          return;
        }
        if (key === "sys:version" && typeof value === "number") {
          version = value;
          return;
        }
      });
      assertExists(id2, "Block id is not found");
      assertExists(flavour, "Block flavour is not found");
      assertExists(yChildren, "Block children is not found");
      const schema = this.schema.flavourSchemaMap.get(flavour);
      assertExists(schema, `Cannot find schema for flavour ${flavour}`);
      const defaultProps = schema.model.props?.(internalPrimitives);
      if (typeof version !== "number") {
        version = schema.version;
      }
      if (defaultProps) {
        Object.entries(defaultProps).forEach(([key, value]) => {
          if (key in props)
            return;
          const yValue = native2Y(value);
          this.yBlock.set(`prop:${key}`, yValue);
          props[key] = this._getPropsProxy(key, yValue);
        });
      }
      return {
        id: id2,
        flavour,
        version,
        props,
        yChildren
      };
    }
    _createModel(props) {
      const schema = this.schema.flavourSchemaMap.get(this.flavour);
      assertExists(schema, `Cannot find schema for flavour ${this.flavour}`);
      const model = schema.model.toModel?.() ?? new BlockModel();
      Object.assign(model, props);
      model.id = this.id;
      model.version = this.version;
      model.keys = Object.keys(props);
      model.flavour = schema.model.flavour;
      model.role = schema.model.role;
      model.yBlock = this.yBlock;
      model.stash = this.stash;
      model.pop = this.pop;
      return new Proxy(model, {
        has: (target, p2) => {
          return Reflect.has(target, p2);
        },
        set: (target, p2, value, receiver) => {
          if (!this._byPassProxy && typeof p2 === "string" && model.keys.includes(p2)) {
            if (this._stashed.has(p2)) {
              const result = Reflect.set(target, p2, value, receiver);
              this.options.onChange?.(this, p2, value);
              return result;
            }
            const yValue = native2Y(value);
            this.yBlock.set(`prop:${p2}`, yValue);
            const proxy = this._getPropsProxy(p2, yValue);
            return Reflect.set(target, p2, proxy, receiver);
          }
          return Reflect.set(target, p2, value, receiver);
        },
        get: (target, p2, receiver) => {
          return Reflect.get(target, p2, receiver);
        },
        deleteProperty: (target, p2) => {
          if (!this._byPassProxy && typeof p2 === "string" && model.keys.includes(p2)) {
            this.yBlock.delete(`prop:${p2}`);
          }
          return Reflect.deleteProperty(target, p2);
        }
      });
    }
  }
  class MigrationError extends BlockSuiteError {
    constructor(description) {
      super(ErrorCode.MigrationError, `Migration failed. Please report to https://github.com/toeverything/blocksuite/issues
          ${description}`);
    }
  }
  class SchemaValidateError extends BlockSuiteError {
    constructor(flavour, message) {
      super(ErrorCode.SchemaValidateError, `Invalid schema for ${flavour}: ${message}`);
    }
  }
  class Schema {
    constructor() {
      this.flavourSchemaMap = /* @__PURE__ */ new Map();
      this._upgradeBlockVersions = (rootData) => {
        const meta = rootData.getMap("meta");
        const blockVersions = meta.get("blockVersions");
        if (!blockVersions) {
          return;
        }
        blockVersions.forEach((version, flavour) => {
          const currentSchema = this.flavourSchemaMap.get(flavour);
          if (currentSchema && version !== currentSchema.version) {
            blockVersions.set(flavour, currentSchema.version);
          }
        });
      };
      this.validate = (flavour, parentFlavour, childFlavours) => {
        const schema = this.flavourSchemaMap.get(flavour);
        assertExists(schema, new SchemaValidateError(flavour, SCHEMA_NOT_FOUND_MESSAGE));
        const validateChildren = () => {
          childFlavours?.forEach((childFlavour) => {
            const childSchema = this.flavourSchemaMap.get(childFlavour);
            assertExists(childSchema, new SchemaValidateError(childFlavour, SCHEMA_NOT_FOUND_MESSAGE));
            this.validateSchema(childSchema, schema);
          });
        };
        if (schema.model.role === "root") {
          if (parentFlavour) {
            throw new SchemaValidateError(schema.model.flavour, "Root block cannot have parent.");
          }
          validateChildren();
          return;
        }
        if (!parentFlavour) {
          throw new SchemaValidateError(schema.model.flavour, "Hub/Content must have parent.");
        }
        const parentSchema = this.flavourSchemaMap.get(parentFlavour);
        assertExists(parentSchema, new SchemaValidateError(parentFlavour, SCHEMA_NOT_FOUND_MESSAGE));
        this.validateSchema(schema, parentSchema);
        validateChildren();
      };
      this.upgradeCollection = (rootData) => {
        this._upgradeBlockVersions(rootData);
        collectionMigrations.forEach((migration) => {
          try {
            if (migration.condition(rootData)) {
              migration.migrate(rootData);
            }
          } catch (err) {
            console.error(err);
            throw new MigrationError(migration.desc);
          }
        });
      };
      this.upgradeDoc = (oldPageVersion, oldBlockVersions, docData) => {
        const blocks = docData.getMap("blocks");
        Array.from(blocks.values()).forEach((block) => {
          const flavour = block.get("sys:flavour");
          const currentVersion = block.get("sys:version") ?? oldBlockVersions[flavour] ?? 0;
          assertExists(currentVersion, `previous version for flavour ${flavour} not found`);
          this.upgradeBlock(flavour, currentVersion, block);
        });
        docMigrations.forEach((migration) => {
          try {
            if (migration.condition(oldPageVersion, docData)) {
              migration.migrate(oldPageVersion, docData);
            }
          } catch (err) {
            throw new MigrationError(`${migration.desc}
            ${err}`);
          }
        });
      };
      this.upgradeBlock = (flavour, oldVersion, blockData) => {
        try {
          const currentSchema = this.flavourSchemaMap.get(flavour);
          assertExists(currentSchema);
          const { onUpgrade, version } = currentSchema;
          if (!onUpgrade) {
            return;
          }
          const block = new Block(this, blockData);
          return onUpgrade(block.model, oldVersion, version);
        } catch (err) {
          throw new MigrationError(`upgrade block ${flavour} failed.
          ${err}`);
        }
      };
    }
    get versions() {
      return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((schema) => [schema.model.flavour, schema.version]));
    }
    _validateRole(child, parent) {
      const childRole = child.model.role;
      const parentRole = parent.model.role;
      const childFlavour = child.model.flavour;
      const parentFlavour = parent.model.flavour;
      if (childRole === "root") {
        throw new SchemaValidateError(childFlavour, `Root block cannot have parent: ${parentFlavour}.`);
      }
      if (childRole === "hub" && parentRole === "content") {
        throw new SchemaValidateError(childFlavour, `Hub block cannot be child of content block: ${parentFlavour}.`);
      }
      if (childRole === "content" && parentRole === "root") {
        throw new SchemaValidateError(childFlavour, `Content block can only be child of hub block or itself. But get: ${parentFlavour}.`);
      }
    }
    _matchFlavour(childFlavour, parentFlavour) {
      return minimatch(childFlavour, parentFlavour) || minimatch(parentFlavour, childFlavour);
    }
    _validateParent(child, parent) {
      const _childFlavour = child.model.flavour;
      const _parentFlavour = parent.model.flavour;
      const childValidFlavours = child.model.parent || ["*"];
      const parentValidFlavours = parent.model.children || ["*"];
      return parentValidFlavours.some((parentValidFlavour) => {
        return childValidFlavours.some((childValidFlavour) => {
          if (parentValidFlavour === "*" && childValidFlavour === "*") {
            return true;
          }
          if (parentValidFlavour === "*") {
            return this._matchFlavour(childValidFlavour, _parentFlavour);
          }
          if (childValidFlavour === "*") {
            return this._matchFlavour(_childFlavour, parentValidFlavour);
          }
          return this._matchFlavour(_childFlavour, parentValidFlavour) && this._matchFlavour(childValidFlavour, _parentFlavour);
        });
      });
    }
    toJSON() {
      return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((schema) => [
        schema.model.flavour,
        {
          role: schema.model.role,
          parent: schema.model.parent,
          children: schema.model.children
        }
      ]));
    }
    register(blockSchema) {
      blockSchema.forEach((schema) => {
        BlockSchema.parse(schema);
        this.flavourSchemaMap.set(schema.model.flavour, schema);
      });
      return this;
    }
    validateSchema(child, parent) {
      this._validateRole(child, parent);
      const relationCheckSuccess = this._validateParent(child, parent);
      if (!relationCheckSuccess) {
        throw new SchemaValidateError(child.model.flavour, `Block cannot have parent: ${parent.model.flavour}.`);
      }
    }
  }
  function diffArray(before, after, compare = (a2, b2) => a2 === b2) {
    const add = [];
    const remove = [];
    const unchanged = [];
    for (const elem of before) {
      if (!after.some((afterElem) => compare(afterElem, elem))) {
        remove.push(elem);
      } else {
        unchanged.push(elem);
      }
    }
    for (const elem of after) {
      if (!before.some((beforeElem) => compare(beforeElem, elem))) {
        add.push(elem);
      }
    }
    return { changed: add.length || remove.length, add, remove, unchanged };
  }
  class BacklinkIndexer {
    get linkIndexMap() {
      return this._linkIndexMap;
    }
    constructor(blockIndexer) {
      this._disposables = new DisposableGroup();
      this._linkIndexMap = {};
      this._backlinkIndexMapCache = null;
      this.slots = {
        /**
         * Note: sys:children update will not trigger event
         */
        indexUpdated: new Slot()
      };
      this._disposables.add(blockIndexer.slots.refreshIndex.on(() => this._onRefreshIndex()));
      this._disposables.add(blockIndexer.slots.docRemoved.on((docId) => this._onDocRemoved(docId)));
      this._disposables.add(blockIndexer.slots.blockUpdated.on((e2) => this._onBlockUpdated(e2)));
      this.slots.indexUpdated.on(() => {
        this._backlinkIndexMapCache = null;
      });
    }
    _onRefreshIndex() {
      this._linkIndexMap = {};
    }
    _onDocRemoved(docId) {
      if (!this._linkIndexMap[docId]) {
        return;
      }
      this._linkIndexMap[docId] = {};
      this.slots.indexUpdated.emit({ action: "delete", docId });
    }
    _onBlockUpdated({ action, docId, block, blockId }) {
      switch (action) {
        case "add":
        case "update": {
          let links = [];
          const text = block.get("prop:text");
          if (text) {
            if (text instanceof YText) {
              const deltas = text.toDelta();
              links = [
                ...links,
                ...deltas.filter((delta) => delta.attributes && delta.attributes.reference).map((delta) => ({ ...delta.attributes.reference, blockId }))
              ];
            } else {
              console.warn("Unexpected prop:text type", text);
            }
          }
          const flavour = block.get("sys:flavour");
          if (flavour === "affine:embed-linked-doc" || flavour === "affine:embed-synced-doc") {
            const pageId = block.get("prop:pageId");
            if (typeof pageId === "string") {
              links = [...links, { pageId, blockId, type: "LinkedPage" }];
            } else {
              console.warn("Unexpected prop:pageId type", pageId);
            }
          }
          this._indexDelta({ action, docId, blockId, links });
          return;
        }
        case "delete": {
          this._removeIndex(docId, blockId);
          break;
        }
      }
    }
    _indexDelta({ action, docId, blockId, links }) {
      const before = this._linkIndexMap[docId]?.[blockId] ?? [];
      const diff = diffArray(before, links);
      if (!diff.changed)
        return;
      this._linkIndexMap[docId] = {
        ...this._linkIndexMap[docId],
        [blockId]: links
      };
      this.slots.indexUpdated.emit({ action, docId, blockId });
    }
    _removeIndex(docId, blockId) {
      if (!this._linkIndexMap[docId] || !this._linkIndexMap[docId][blockId]) {
        return;
      }
      const previousLink = this._linkIndexMap[docId][blockId];
      delete this._linkIndexMap[docId][blockId];
      if (previousLink.length) {
        this.slots.indexUpdated.emit({
          action: "delete",
          docId,
          blockId
        });
      }
    }
    /**
     * Get the list of backlinks for a given doc
     */
    getBacklink(targetDocId) {
      if (this._backlinkIndexMapCache) {
        return this._backlinkIndexMapCache[targetDocId] ?? [];
      }
      const backlinkIndexMapCache = {};
      for (const [fromDocId, blockMap] of Object.entries(this._linkIndexMap)) {
        for (const [fromBlockId, links] of Object.entries(blockMap)) {
          links.forEach(({ pageId, type }) => {
            if (!(pageId in backlinkIndexMapCache)) {
              backlinkIndexMapCache[pageId] = [];
            }
            backlinkIndexMapCache[pageId].push({
              pageId: fromDocId,
              blockId: fromBlockId,
              type
            });
          });
        }
      }
      this._backlinkIndexMapCache = backlinkIndexMapCache;
      return this._backlinkIndexMapCache[targetDocId] ?? [];
    }
    dispose() {
      this._disposables.dispose();
    }
  }
  class BlockIndexer {
    constructor(doc, { immediately = false, slots }) {
      this._disposables = new DisposableGroup();
      this.slots = {
        docRemoved: new Slot(),
        /**
         * Note: sys:children update will not trigger event
         */
        blockUpdated: new Slot(),
        refreshIndex: new Slot()
      };
      this._yDocObserver = (events, _transaction, { docId, yDoc }) => {
        events.forEach((e2) => {
          if (e2 instanceof YArrayEvent) {
            return;
          }
          if (e2 instanceof YMapEvent) {
            if (e2.target !== e2.currentTarget) {
              if (e2.keysChanged.has("prop:text")) {
                const blockId = e2.path[0];
                const block = yDoc.get(blockId);
                assertExists(block);
                this._indexBlock({
                  action: "update",
                  docId,
                  blockId,
                  block
                });
              }
              return;
            }
            Array.from(e2.changes.keys.entries()).forEach(([blockId, { action }]) => {
              if (action === "delete") {
                this._indexBlock({
                  action,
                  docId,
                  blockId
                });
                return;
              }
              const block = yDoc.get(blockId);
              assertExists(block);
              this._indexBlock({
                action,
                docId,
                blockId,
                block
              });
            });
            return;
          }
          if (e2 instanceof YTextEvent) {
            const blockId = e2.path[0];
            if (!blockId || typeof blockId !== "string") {
              throw new Error("Failed to update index! Unexpected YText Event!");
            }
            const block = yDoc.get(blockId);
            assertExists(block);
            this._indexBlock({
              action: "update",
              docId,
              blockId,
              block
            });
            return;
          }
        });
      };
      this._doc = doc;
      this._collectionSlots = slots;
      if (immediately) {
        this._initIndex();
        return;
      }
      setTimeout(() => {
        this._initIndex();
      }, 0);
    }
    _initIndex() {
      const doc = this._doc;
      const share = doc.share;
      if (!share.has("meta")) {
        throw new Error("Failed to initialize indexer: collection meta not found");
      }
      let disposeMap = {};
      this._disposables.add(() => {
        Object.values(disposeMap).forEach((fn) => fn?.());
        disposeMap = {};
      });
      Array.from(doc.spaces.keys()).map((docId) => ({ docId, doc: this._getDoc(docId) })).forEach(({ docId, doc: doc2 }) => {
        assertExists(doc2, `Failed to find doc '${docId}'`);
        if (disposeMap[docId]) {
          console.warn(`Duplicated docAdded event! ${docId} already observed`, disposeMap);
          return;
        }
        const dispose = this._indexDoc(docId, doc2);
        disposeMap[docId] = dispose;
      });
      this._collectionSlots.docAdded.on((docId) => {
        const doc2 = this._getDoc(docId);
        assertExists(doc2, `Failed to find doc '${docId}'`);
        if (disposeMap[docId]) {
          return;
        }
        const dispose = this._indexDoc(docId, doc2);
        disposeMap[docId] = dispose;
      });
      this._collectionSlots.docRemoved.on((docId) => {
        disposeMap[docId]?.();
        disposeMap[docId] = null;
        this.slots.docRemoved.emit(docId);
      });
    }
    _indexDoc(docId, yDoc) {
      const yBlocks = yDoc.getMap("blocks");
      yBlocks.forEach((block, blockId) => {
        this._indexBlock({ action: "add", docId, blockId, block });
      });
      const observer = (events, transaction) => this._yDocObserver(events, transaction, { docId, yDoc: yBlocks });
      yBlocks.observeDeep(observer);
      return () => {
        yBlocks.unobserveDeep(observer);
      };
    }
    _indexBlock(indexEvent) {
      this.slots.blockUpdated.emit(indexEvent);
    }
    _getDoc(docId) {
      return this._doc.spaces.get(docId);
    }
    refreshIndex() {
      this.slots.refreshIndex.emit();
      this._initIndex();
    }
    dispose() {
      this._disposables.dispose();
    }
  }
  const IS_WEB = typeof window !== "undefined" && typeof document !== "undefined";
  const IS_NODE = typeof process !== "undefined" && !IS_WEB;
  IS_WEB && navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const REQUEST_IDLE_CALLBACK_ENABLED = "requestIdleCallback" in globalThis;
  var t$2;
  function u$2(a2) {
    return "undefined" !== typeof a2 ? a2 : true;
  }
  function v$1(a2) {
    const b2 = Array(a2);
    for (let c2 = 0; c2 < a2; c2++) b2[c2] = x$1();
    return b2;
  }
  function x$1() {
    return /* @__PURE__ */ Object.create(null);
  }
  function aa(a2, b2) {
    return b2.length - a2.length;
  }
  function C$1(a2) {
    return "string" === typeof a2;
  }
  function D(a2) {
    return "object" === typeof a2;
  }
  function E$1(a2) {
    return "function" === typeof a2;
  }
  function F(a2, b2) {
    var c2 = ba;
    if (a2 && (b2 && (a2 = G(a2, b2)), this.H && (a2 = G(a2, this.H)), this.J && 1 < a2.length && (a2 = G(a2, this.J)), c2 || "" === c2)) {
      b2 = a2.split(c2);
      if (this.filter) {
        a2 = this.filter;
        c2 = b2.length;
        const d2 = [];
        for (let e2 = 0, f2 = 0; e2 < c2; e2++) {
          const h2 = b2[e2];
          h2 && !a2[h2] && (d2[f2++] = h2);
        }
        a2 = d2;
      } else a2 = b2;
      return a2;
    }
    return a2;
  }
  const ba = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ca = /[\u0300-\u036f]/g;
  function I$1(a2, b2) {
    const c2 = Object.keys(a2), d2 = c2.length, e2 = [];
    let f2 = "", h2 = 0;
    for (let g2 = 0, k2, m2; g2 < d2; g2++) k2 = c2[g2], (m2 = a2[k2]) ? (e2[h2++] = J(b2 ? "(?!\\b)" + k2 + "(\\b|_)" : k2), e2[h2++] = m2) : f2 += (f2 ? "|" : "") + k2;
    f2 && (e2[h2++] = J(b2 ? "(?!\\b)(" + f2 + ")(\\b|_)" : "(" + f2 + ")"), e2[h2] = "");
    return e2;
  }
  function G(a2, b2) {
    for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2) ;
    return a2;
  }
  function J(a2) {
    return new RegExp(a2, "g");
  }
  function da(a2) {
    let b2 = "", c2 = "";
    for (let d2 = 0, e2 = a2.length, f2; d2 < e2; d2++) (f2 = a2[d2]) !== c2 && (b2 += c2 = f2);
    return b2;
  }
  var fa = { encode: ea, F: false, G: "" };
  function ea(a2) {
    return F.call(this, ("" + a2).toLowerCase(), false);
  }
  const ha = {}, K = {};
  function ia(a2) {
    L$1(a2, "add");
    L$1(a2, "append");
    L$1(a2, "search");
    L$1(a2, "update");
    L$1(a2, "remove");
  }
  function L$1(a2, b2) {
    a2[b2 + "Async"] = function() {
      const c2 = this, d2 = arguments;
      var e2 = d2[d2.length - 1];
      let f2;
      E$1(e2) && (f2 = e2, delete d2[d2.length - 1]);
      e2 = new Promise(function(h2) {
        setTimeout(function() {
          c2.async = true;
          const g2 = c2[b2].apply(c2, d2);
          c2.async = false;
          h2(g2);
        });
      });
      return f2 ? (e2.then(f2), this) : e2;
    };
  }
  function ja(a2, b2, c2, d2) {
    const e2 = a2.length;
    let f2 = [], h2, g2, k2 = 0;
    d2 && (d2 = []);
    for (let m2 = e2 - 1; 0 <= m2; m2--) {
      const n2 = a2[m2], w2 = n2.length, q = x$1();
      let r2 = !h2;
      for (let l2 = 0; l2 < w2; l2++) {
        const p2 = n2[l2], A2 = p2.length;
        if (A2) for (let B2 = 0, z2, y2; B2 < A2; B2++) if (y2 = p2[B2], h2) {
          if (h2[y2]) {
            if (!m2) {
              if (c2) c2--;
              else if (f2[k2++] = y2, k2 === b2) return f2;
            }
            if (m2 || d2) q[y2] = 1;
            r2 = true;
          }
          if (d2 && (z2 = (g2[y2] || 0) + 1, g2[y2] = z2, z2 < e2)) {
            const H2 = d2[z2 - 2] || (d2[z2 - 2] = []);
            H2[H2.length] = y2;
          }
        } else q[y2] = 1;
      }
      if (d2) h2 || (g2 = q);
      else if (!r2) return [];
      h2 = q;
    }
    if (d2) for (let m2 = d2.length - 1, n2, w2; 0 <= m2; m2--) {
      n2 = d2[m2];
      w2 = n2.length;
      for (let q = 0, r2; q < w2; q++) if (r2 = n2[q], !h2[r2]) {
        if (c2) c2--;
        else if (f2[k2++] = r2, k2 === b2) return f2;
        h2[r2] = 1;
      }
    }
    return f2;
  }
  function ka(a2, b2) {
    const c2 = x$1(), d2 = x$1(), e2 = [];
    for (let f2 = 0; f2 < a2.length; f2++) c2[a2[f2]] = 1;
    for (let f2 = 0, h2; f2 < b2.length; f2++) {
      h2 = b2[f2];
      for (let g2 = 0, k2; g2 < h2.length; g2++) k2 = h2[g2], c2[k2] && !d2[k2] && (d2[k2] = 1, e2[e2.length] = k2);
    }
    return e2;
  }
  function M$1(a2) {
    this.l = true !== a2 && a2;
    this.cache = x$1();
    this.h = [];
  }
  function la(a2, b2, c2) {
    D(a2) && (a2 = a2.query);
    let d2 = this.cache.get(a2);
    d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
    return d2;
  }
  M$1.prototype.set = function(a2, b2) {
    if (!this.cache[a2]) {
      var c2 = this.h.length;
      c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
      for (--c2; 0 < c2; c2--) this.h[c2] = this.h[c2 - 1];
      this.h[0] = a2;
    }
    this.cache[a2] = b2;
  };
  M$1.prototype.get = function(a2) {
    const b2 = this.cache[a2];
    if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
      const c2 = this.h[a2 - 1];
      this.h[a2 - 1] = this.h[a2];
      this.h[a2] = c2;
    }
    return b2;
  };
  const na = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
  function oa(a2, b2, c2, d2, e2, f2, h2, g2) {
    setTimeout(function() {
      const k2 = a2(c2 ? c2 + "." + d2 : d2, JSON.stringify(h2));
      k2 && k2.then ? k2.then(function() {
        b2.export(a2, b2, c2, e2, f2 + 1, g2);
      }) : b2.export(a2, b2, c2, e2, f2 + 1, g2);
    });
  }
  function N$1(a2, b2) {
    if (!(this instanceof N$1)) return new N$1(a2);
    var c2;
    if (a2) {
      C$1(a2) ? a2 = na[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
      c2 = a2.charset;
      var d2 = a2.lang;
      C$1(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = K[c2]);
      C$1(d2) && (d2 = ha[d2]);
    } else a2 = {};
    let e2, f2, h2 = a2.context || {};
    this.encode = a2.encode || c2 && c2.encode || ea;
    this.register = b2 || x$1();
    this.D = e2 = a2.resolution || 9;
    this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
    this.depth = "strict" === b2 && h2.depth;
    this.l = u$2(h2.bidirectional);
    this.s = f2 = u$2(a2.optimize);
    this.m = u$2(a2.fastupdate);
    this.B = a2.minlength || 1;
    this.C = a2.boost;
    this.map = f2 ? v$1(e2) : x$1();
    this.A = e2 = h2.resolution || 1;
    this.h = f2 ? v$1(e2) : x$1();
    this.F = c2 && c2.F || a2.rtl;
    this.H = (b2 = a2.matcher || d2 && d2.H) && I$1(b2, false);
    this.J = (b2 = a2.stemmer || d2 && d2.J) && I$1(b2, true);
    if (c2 = b2 = a2.filter || d2 && d2.filter) {
      c2 = b2;
      d2 = x$1();
      for (let g2 = 0, k2 = c2.length; g2 < k2; g2++) d2[c2[g2]] = 1;
      c2 = d2;
    }
    this.filter = c2;
    this.cache = (b2 = a2.cache) && new M$1(b2);
  }
  t$2 = N$1.prototype;
  t$2.append = function(a2, b2) {
    return this.add(a2, b2, true);
  };
  t$2.add = function(a2, b2, c2, d2) {
    if (b2 && (a2 || 0 === a2)) {
      if (!d2 && !c2 && this.register[a2]) return this.update(a2, b2);
      b2 = this.encode(b2);
      if (d2 = b2.length) {
        const m2 = x$1(), n2 = x$1(), w2 = this.depth, q = this.D;
        for (let r2 = 0; r2 < d2; r2++) {
          let l2 = b2[this.F ? d2 - 1 - r2 : r2];
          var e2 = l2.length;
          if (l2 && e2 >= this.B && (w2 || !n2[l2])) {
            var f2 = O(q, d2, r2), h2 = "";
            switch (this.G) {
              case "full":
                if (2 < e2) {
                  for (f2 = 0; f2 < e2; f2++) for (var g2 = e2; g2 > f2; g2--) if (g2 - f2 >= this.B) {
                    var k2 = O(q, d2, r2, e2, f2);
                    h2 = l2.substring(f2, g2);
                    P$1(this, n2, h2, k2, a2, c2);
                  }
                  break;
                }
              case "reverse":
                if (1 < e2) {
                  for (g2 = e2 - 1; 0 < g2; g2--) h2 = l2[g2] + h2, h2.length >= this.B && P$1(
                    this,
                    n2,
                    h2,
                    O(q, d2, r2, e2, g2),
                    a2,
                    c2
                  );
                  h2 = "";
                }
              case "forward":
                if (1 < e2) {
                  for (g2 = 0; g2 < e2; g2++) h2 += l2[g2], h2.length >= this.B && P$1(this, n2, h2, f2, a2, c2);
                  break;
                }
              default:
                if (this.C && (f2 = Math.min(f2 / this.C(b2, l2, r2) | 0, q - 1)), P$1(this, n2, l2, f2, a2, c2), w2 && 1 < d2 && r2 < d2 - 1) {
                  for (e2 = x$1(), h2 = this.A, f2 = l2, g2 = Math.min(w2 + 1, d2 - r2), e2[f2] = 1, k2 = 1; k2 < g2; k2++) if ((l2 = b2[this.F ? d2 - 1 - r2 - k2 : r2 + k2]) && l2.length >= this.B && !e2[l2]) {
                    e2[l2] = 1;
                    const p2 = this.l && l2 > f2;
                    P$1(this, m2, p2 ? f2 : l2, O(h2 + (d2 / 2 > h2 ? 0 : 1), d2, r2, g2 - 1, k2 - 1), a2, c2, p2 ? l2 : f2);
                  }
                }
            }
          }
        }
        this.m || (this.register[a2] = 1);
      }
    }
    return this;
  };
  function O(a2, b2, c2, d2, e2) {
    return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e2 || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e2 || 0)) + 1 | 0 : 0;
  }
  function P$1(a2, b2, c2, d2, e2, f2, h2) {
    let g2 = h2 ? a2.h : a2.map;
    if (!b2[c2] || h2 && !b2[c2][h2]) a2.s && (g2 = g2[d2]), h2 ? (b2 = b2[c2] || (b2[c2] = x$1()), b2[h2] = 1, g2 = g2[h2] || (g2[h2] = x$1())) : b2[c2] = 1, g2 = g2[c2] || (g2[c2] = []), a2.s || (g2 = g2[d2] || (g2[d2] = [])), f2 && g2.includes(e2) || (g2[g2.length] = e2, a2.m && (a2 = a2.register[e2] || (a2.register[e2] = []), a2[a2.length] = g2));
  }
  t$2.search = function(a2, b2, c2) {
    c2 || (!b2 && D(a2) ? (c2 = a2, a2 = c2.query) : D(b2) && (c2 = b2));
    let d2 = [], e2;
    let f2, h2 = 0;
    if (c2) {
      a2 = c2.query || a2;
      b2 = c2.limit;
      h2 = c2.offset || 0;
      var g2 = c2.context;
      f2 = c2.suggest;
    }
    if (a2 && (a2 = this.encode("" + a2), e2 = a2.length, 1 < e2)) {
      c2 = x$1();
      var k2 = [];
      for (let n2 = 0, w2 = 0, q; n2 < e2; n2++) if ((q = a2[n2]) && q.length >= this.B && !c2[q]) if (this.s || f2 || this.map[q]) k2[w2++] = q, c2[q] = 1;
      else return d2;
      a2 = k2;
      e2 = a2.length;
    }
    if (!e2) return d2;
    b2 || (b2 = 100);
    g2 = this.depth && 1 < e2 && false !== g2;
    c2 = 0;
    let m2;
    g2 ? (m2 = a2[0], c2 = 1) : 1 < e2 && a2.sort(aa);
    for (let n2, w2; c2 < e2; c2++) {
      w2 = a2[c2];
      g2 ? (n2 = pa(
        this,
        d2,
        f2,
        b2,
        h2,
        2 === e2,
        w2,
        m2
      ), f2 && false === n2 && d2.length || (m2 = w2)) : n2 = pa(this, d2, f2, b2, h2, 1 === e2, w2);
      if (n2) return n2;
      if (f2 && c2 === e2 - 1) {
        k2 = d2.length;
        if (!k2) {
          if (g2) {
            g2 = 0;
            c2 = -1;
            continue;
          }
          return d2;
        }
        if (1 === k2) return qa(d2[0], b2, h2);
      }
    }
    return ja(d2, b2, h2, f2);
  };
  function pa(a2, b2, c2, d2, e2, f2, h2, g2) {
    let k2 = [], m2 = g2 ? a2.h : a2.map;
    a2.s || (m2 = ra(m2, h2, g2, a2.l));
    if (m2) {
      let n2 = 0;
      const w2 = Math.min(m2.length, g2 ? a2.A : a2.D);
      for (let q = 0, r2 = 0, l2, p2; q < w2; q++) if (l2 = m2[q]) {
        if (a2.s && (l2 = ra(l2, h2, g2, a2.l)), e2 && l2 && f2 && (p2 = l2.length, p2 <= e2 ? (e2 -= p2, l2 = null) : (l2 = l2.slice(e2), e2 = 0)), l2 && (k2[n2++] = l2, f2 && (r2 += l2.length, r2 >= d2))) break;
      }
      if (n2) {
        if (f2) return qa(k2, d2, 0);
        b2[b2.length] = k2;
        return;
      }
    }
    return !c2 && k2;
  }
  function qa(a2, b2, c2) {
    a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
    return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
  }
  function ra(a2, b2, c2, d2) {
    c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
    return a2;
  }
  t$2.contain = function(a2) {
    return !!this.register[a2];
  };
  t$2.update = function(a2, b2) {
    return this.remove(a2).add(a2, b2);
  };
  t$2.remove = function(a2, b2) {
    const c2 = this.register[a2];
    if (c2) {
      if (this.m) for (let d2 = 0, e2; d2 < c2.length; d2++) e2 = c2[d2], e2.splice(e2.indexOf(a2), 1);
      else Q(this.map, a2, this.D, this.s), this.depth && Q(this.h, a2, this.A, this.s);
      b2 || delete this.register[a2];
      if (this.cache) {
        b2 = this.cache;
        for (let d2 = 0, e2, f2; d2 < b2.h.length; d2++) f2 = b2.h[d2], e2 = b2.cache[f2], e2.includes(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f2]);
      }
    }
    return this;
  };
  function Q(a2, b2, c2, d2, e2) {
    let f2 = 0;
    if (a2.constructor === Array) if (e2) b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f2++) : f2++;
    else {
      e2 = Math.min(a2.length, c2);
      for (let h2 = 0, g2; h2 < e2; h2++) if (g2 = a2[h2]) f2 = Q(g2, b2, c2, d2, e2), d2 || f2 || delete a2[h2];
    }
    else for (let h2 in a2) (f2 = Q(a2[h2], b2, c2, d2, e2)) || delete a2[h2];
    return f2;
  }
  t$2.searchCache = la;
  t$2.export = function(a2, b2, c2, d2, e2, f2) {
    let h2 = true;
    "undefined" === typeof f2 && (h2 = new Promise((m2) => {
      f2 = m2;
    }));
    let g2, k2;
    switch (e2 || (e2 = 0)) {
      case 0:
        g2 = "reg";
        if (this.m) {
          k2 = x$1();
          for (let m2 in this.register) k2[m2] = 1;
        } else k2 = this.register;
        break;
      case 1:
        g2 = "cfg";
        k2 = { doc: 0, opt: this.s ? 1 : 0 };
        break;
      case 2:
        g2 = "map";
        k2 = this.map;
        break;
      case 3:
        g2 = "ctx";
        k2 = this.h;
        break;
      default:
        "undefined" === typeof c2 && f2 && f2();
        return;
    }
    oa(a2, b2 || this, c2, g2, d2, e2, k2, f2);
    return h2;
  };
  t$2.import = function(a2, b2) {
    if (b2) switch (C$1(b2) && (b2 = JSON.parse(b2)), a2) {
      case "cfg":
        this.s = !!b2.opt;
        break;
      case "reg":
        this.m = false;
        this.register = b2;
        break;
      case "map":
        this.map = b2;
        break;
      case "ctx":
        this.h = b2;
    }
  };
  ia(N$1.prototype);
  function sa(a2) {
    a2 = a2.data;
    var b2 = self._index;
    const c2 = a2.args;
    var d2 = a2.task;
    switch (d2) {
      case "init":
        d2 = a2.options || {};
        a2 = a2.factory;
        b2 = d2.encode;
        d2.cache = false;
        b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
        a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new N$1(d2);
        break;
      default:
        a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
    }
  }
  let ta = 0;
  function S$2(a2) {
    if (!(this instanceof S$2)) return new S$2(a2);
    var b2;
    a2 ? E$1(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
    (b2 = (self || window)._factory) && (b2 = b2.toString());
    const c2 = "undefined" === typeof window && self.exports, d2 = this;
    this.o = ua(b2, c2, a2.worker);
    this.h = x$1();
    if (this.o) {
      if (c2) this.o.on("message", function(e2) {
        d2.h[e2.id](e2.msg);
        delete d2.h[e2.id];
      });
      else this.o.onmessage = function(e2) {
        e2 = e2.data;
        d2.h[e2.id](e2.msg);
        delete d2.h[e2.id];
      };
      this.o.postMessage({ task: "init", factory: b2, options: a2 });
    }
  }
  T$1("add");
  T$1("append");
  T$1("search");
  T$1("update");
  T$1("remove");
  function T$1(a2) {
    S$2.prototype[a2] = S$2.prototype[a2 + "Async"] = function() {
      const b2 = this, c2 = [].slice.call(arguments);
      var d2 = c2[c2.length - 1];
      let e2;
      E$1(d2) && (e2 = d2, c2.splice(c2.length - 1, 1));
      d2 = new Promise(function(f2) {
        setTimeout(function() {
          b2.h[++ta] = f2;
          b2.o.postMessage({ task: a2, id: ta, args: c2 });
        });
      });
      return e2 ? (d2.then(e2), this) : d2;
    };
  }
  function ua(a2, b2, c2) {
    let d2;
    try {
      d2 = b2 ? new (require("worker_threads"))["Worker"](__dirname + "/node/node.js") : a2 ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + sa.toString()], { type: "text/javascript" }))) : new Worker(C$1(c2) ? c2 : "worker/worker.js", { type: "module" });
    } catch (e2) {
    }
    return d2;
  }
  function U(a2) {
    if (!(this instanceof U)) return new U(a2);
    var b2 = a2.document || a2.doc || a2, c2;
    this.K = [];
    this.h = [];
    this.A = [];
    this.register = x$1();
    this.key = (c2 = b2.key || b2.id) && V$1(c2, this.A) || "id";
    this.m = u$2(a2.fastupdate);
    this.C = (c2 = b2.store) && true !== c2 && [];
    this.store = c2 && x$1();
    this.I = (c2 = b2.tag) && V$1(c2, this.A);
    this.l = c2 && x$1();
    this.cache = (c2 = a2.cache) && new M$1(c2);
    a2.cache = false;
    this.o = a2.worker;
    this.async = false;
    c2 = x$1();
    let d2 = b2.index || b2.field || b2;
    C$1(d2) && (d2 = [d2]);
    for (let e2 = 0, f2, h2; e2 < d2.length; e2++) f2 = d2[e2], C$1(f2) || (h2 = f2, f2 = f2.field), h2 = D(h2) ? Object.assign({}, a2, h2) : a2, this.o && (c2[f2] = new S$2(h2), c2[f2].o || (this.o = false)), this.o || (c2[f2] = new N$1(h2, this.register)), this.K[e2] = V$1(f2, this.A), this.h[e2] = f2;
    if (this.C) for (a2 = b2.store, C$1(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++) this.C[b2] = V$1(a2[b2], this.A);
    this.index = c2;
  }
  function V$1(a2, b2) {
    const c2 = a2.split(":");
    let d2 = 0;
    for (let e2 = 0; e2 < c2.length; e2++) a2 = c2[e2], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
    d2 < c2.length && (c2.length = d2);
    return 1 < d2 ? c2 : c2[0];
  }
  function X(a2, b2) {
    if (C$1(b2)) a2 = a2[b2];
    else for (let c2 = 0; a2 && c2 < b2.length; c2++) a2 = a2[b2[c2]];
    return a2;
  }
  function Y(a2, b2, c2, d2, e2) {
    a2 = a2[e2];
    if (d2 === c2.length - 1) b2[e2] = a2;
    else if (a2) if (a2.constructor === Array) for (b2 = b2[e2] = Array(a2.length), e2 = 0; e2 < a2.length; e2++) Y(a2, b2, c2, d2, e2);
    else b2 = b2[e2] || (b2[e2] = x$1()), e2 = c2[++d2], Y(a2, b2, c2, d2, e2);
  }
  function Z$1(a2, b2, c2, d2, e2, f2, h2, g2) {
    if (a2 = a2[h2]) if (d2 === b2.length - 1) {
      if (a2.constructor === Array) {
        if (c2[d2]) {
          for (b2 = 0; b2 < a2.length; b2++) e2.add(f2, a2[b2], true, true);
          return;
        }
        a2 = a2.join(" ");
      }
      e2.add(f2, a2, g2, true);
    } else if (a2.constructor === Array) for (h2 = 0; h2 < a2.length; h2++) Z$1(a2, b2, c2, d2, e2, f2, h2, g2);
    else h2 = b2[++d2], Z$1(a2, b2, c2, d2, e2, f2, h2, g2);
  }
  t$2 = U.prototype;
  t$2.add = function(a2, b2, c2) {
    D(a2) && (b2 = a2, a2 = X(b2, this.key));
    if (b2 && (a2 || 0 === a2)) {
      if (!c2 && this.register[a2]) return this.update(a2, b2);
      for (let d2 = 0, e2, f2; d2 < this.h.length; d2++) f2 = this.h[d2], e2 = this.K[d2], C$1(e2) && (e2 = [e2]), Z$1(b2, e2, this.A, 0, this.index[f2], a2, e2[0], c2);
      if (this.I) {
        let d2 = X(b2, this.I), e2 = x$1();
        C$1(d2) && (d2 = [d2]);
        for (let f2 = 0, h2, g2; f2 < d2.length; f2++) if (h2 = d2[f2], !e2[h2] && (e2[h2] = 1, g2 = this.l[h2] || (this.l[h2] = []), !c2 || !g2.includes(a2))) {
          if (g2[g2.length] = a2, this.m) {
            const k2 = this.register[a2] || (this.register[a2] = []);
            k2[k2.length] = g2;
          }
        }
      }
      if (this.store && (!c2 || !this.store[a2])) {
        let d2;
        if (this.C) {
          d2 = x$1();
          for (let e2 = 0, f2; e2 < this.C.length; e2++) f2 = this.C[e2], C$1(f2) ? d2[f2] = b2[f2] : Y(b2, d2, f2, 0, f2[0]);
        }
        this.store[a2] = d2 || b2;
      }
    }
    return this;
  };
  t$2.append = function(a2, b2) {
    return this.add(a2, b2, true);
  };
  t$2.update = function(a2, b2) {
    return this.remove(a2).add(a2, b2);
  };
  t$2.remove = function(a2) {
    D(a2) && (a2 = X(a2, this.key));
    if (this.register[a2]) {
      for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++) ;
      if (this.I && !this.m) for (let c2 in this.l) {
        b2 = this.l[c2];
        const d2 = b2.indexOf(a2);
        -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
      }
      this.store && delete this.store[a2];
      delete this.register[a2];
    }
    return this;
  };
  t$2.search = function(a2, b2, c2, d2) {
    c2 || (!b2 && D(a2) ? (c2 = a2, a2 = "") : D(b2) && (c2 = b2, b2 = 0));
    let e2 = [], f2 = [], h2, g2, k2, m2, n2, w2, q = 0;
    if (c2) if (c2.constructor === Array) k2 = c2, c2 = null;
    else {
      a2 = c2.query || a2;
      k2 = (h2 = c2.pluck) || c2.index || c2.field;
      m2 = c2.tag;
      g2 = this.store && c2.enrich;
      n2 = "and" === c2.bool;
      b2 = c2.limit || b2 || 100;
      w2 = c2.offset || 0;
      if (m2 && (C$1(m2) && (m2 = [m2]), !a2)) {
        for (let l2 = 0, p2; l2 < m2.length; l2++) if (p2 = va.call(this, m2[l2], b2, w2, g2)) e2[e2.length] = p2, q++;
        return q ? e2 : [];
      }
      C$1(k2) && (k2 = [k2]);
    }
    k2 || (k2 = this.h);
    n2 = n2 && (1 < k2.length || m2 && 1 < m2.length);
    const r2 = !d2 && (this.o || this.async) && [];
    for (let l2 = 0, p2, A2, B2; l2 < k2.length; l2++) {
      let z2;
      A2 = k2[l2];
      C$1(A2) || (z2 = A2, A2 = z2.field, a2 = z2.query || a2, b2 = z2.limit || b2, g2 = z2.enrich || g2);
      if (r2) r2[l2] = this.index[A2].searchAsync(a2, b2, z2 || c2);
      else {
        d2 ? p2 = d2[l2] : p2 = this.index[A2].search(a2, b2, z2 || c2);
        B2 = p2 && p2.length;
        if (m2 && B2) {
          const y2 = [];
          let H2 = 0;
          n2 && (y2[0] = [p2]);
          for (let W = 0, ma, R2; W < m2.length; W++) if (ma = m2[W], B2 = (R2 = this.l[ma]) && R2.length) H2++, y2[y2.length] = n2 ? [R2] : R2;
          H2 && (p2 = n2 ? ja(y2, b2 || 100, w2 || 0) : ka(p2, y2), B2 = p2.length);
        }
        if (B2) f2[q] = A2, e2[q++] = p2;
        else if (n2) return [];
      }
    }
    if (r2) {
      const l2 = this;
      return new Promise(function(p2) {
        Promise.all(r2).then(function(A2) {
          p2(l2.search(
            a2,
            b2,
            c2,
            A2
          ));
        });
      });
    }
    if (!q) return [];
    if (h2 && (!g2 || !this.store)) return e2[0];
    for (let l2 = 0, p2; l2 < f2.length; l2++) {
      p2 = e2[l2];
      p2.length && g2 && (p2 = wa.call(this, p2));
      if (h2) return p2;
      e2[l2] = { field: f2[l2], result: p2 };
    }
    return e2;
  };
  function va(a2, b2, c2, d2) {
    let e2 = this.l[a2], f2 = e2 && e2.length - c2;
    if (f2 && 0 < f2) {
      if (f2 > b2 || c2) e2 = e2.slice(c2, c2 + b2);
      d2 && (e2 = wa.call(this, e2));
      return { tag: a2, result: e2 };
    }
  }
  function wa(a2) {
    const b2 = Array(a2.length);
    for (let c2 = 0, d2; c2 < a2.length; c2++) d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
    return b2;
  }
  t$2.contain = function(a2) {
    return !!this.register[a2];
  };
  t$2.get = function(a2) {
    return this.store[a2];
  };
  t$2.set = function(a2, b2) {
    this.store[a2] = b2;
    return this;
  };
  t$2.searchCache = la;
  t$2.export = function(a2, b2, c2, d2, e2, f2) {
    let h2;
    "undefined" === typeof f2 && (h2 = new Promise((g2) => {
      f2 = g2;
    }));
    e2 || (e2 = 0);
    d2 || (d2 = 0);
    if (d2 < this.h.length) {
      const g2 = this.h[d2], k2 = this.index[g2];
      b2 = this;
      setTimeout(function() {
        k2.export(a2, b2, e2 ? g2 : "", d2, e2++, f2) || (d2++, e2 = 1, b2.export(a2, b2, g2, d2, e2, f2));
      });
    } else {
      let g2, k2;
      switch (e2) {
        case 1:
          g2 = "tag";
          k2 = this.l;
          c2 = null;
          break;
        case 2:
          g2 = "store";
          k2 = this.store;
          c2 = null;
          break;
        default:
          f2();
          return;
      }
      oa(a2, this, c2, g2, d2, e2, k2, f2);
    }
    return h2;
  };
  t$2.import = function(a2, b2) {
    if (b2) switch (C$1(b2) && (b2 = JSON.parse(b2)), a2) {
      case "tag":
        this.l = b2;
        break;
      case "reg":
        this.m = false;
        this.register = b2;
        for (let d2 = 0, e2; d2 < this.h.length; d2++) e2 = this.index[this.h[d2]], e2.register = b2, e2.m = false;
        break;
      case "store":
        this.store = b2;
        break;
      default:
        a2 = a2.split(".");
        const c2 = a2[0];
        a2 = a2[1];
        c2 && a2 && this.index[c2].import(a2, b2);
    }
  };
  ia(U.prototype);
  var ya = { encode: xa, F: false, G: "" };
  const za = [J("[àáâãäå]"), "a", J("[èéêë]"), "e", J("[ìíîï]"), "i", J("[òóôõöő]"), "o", J("[ùúûüű]"), "u", J("[ýŷÿ]"), "y", J("ñ"), "n", J("[çc]"), "k", J("ß"), "s", J(" & "), " and "];
  function xa(a2) {
    var b2 = a2 = "" + a2;
    b2.normalize && (b2 = b2.normalize("NFD").replace(ca, ""));
    return F.call(this, b2.toLowerCase(), !a2.normalize && za);
  }
  var Ba = { encode: Aa, F: false, G: "strict" };
  const Ca = /[^a-z0-9]+/, Da = { b: "p", v: "f", w: "f", z: "s", x: "s", "ß": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
  function Aa(a2) {
    a2 = xa.call(this, a2).join(" ");
    const b2 = [];
    if (a2) {
      const c2 = a2.split(Ca), d2 = c2.length;
      for (let e2 = 0, f2, h2 = 0; e2 < d2; e2++) if ((a2 = c2[e2]) && (!this.filter || !this.filter[a2])) {
        f2 = a2[0];
        let g2 = Da[f2] || f2, k2 = g2;
        for (let m2 = 1; m2 < a2.length; m2++) {
          f2 = a2[m2];
          const n2 = Da[f2] || f2;
          n2 && n2 !== k2 && (g2 += n2, k2 = n2);
        }
        b2[h2++] = g2;
      }
    }
    return b2;
  }
  var Fa = { encode: Ea, F: false, G: "" };
  const Ga = [J("ae"), "a", J("oe"), "o", J("sh"), "s", J("th"), "t", J("ph"), "f", J("pf"), "f", J("(?![aeo])h(?![aeo])"), "", J("(?!^[aeo])h(?!^[aeo])"), ""];
  function Ea(a2, b2) {
    a2 && (a2 = Aa.call(this, a2).join(" "), 2 < a2.length && (a2 = G(a2, Ga)), b2 || (1 < a2.length && (a2 = da(a2)), a2 && (a2 = a2.split(" "))));
    return a2 || [];
  }
  var Ia = { encode: Ha, F: false, G: "" };
  const Ja = J("(?!\\b)[aeo]");
  function Ha(a2) {
    a2 && (a2 = Ea.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ja, "")), 1 < a2.length && (a2 = da(a2)), a2 && (a2 = a2.split(" ")));
    return a2 || [];
  }
  K["latin:default"] = fa;
  K["latin:simple"] = ya;
  K["latin:balance"] = Ba;
  K["latin:advanced"] = Fa;
  K["latin:extra"] = Ia;
  const FlexSearch = { Index: N$1, Document: U };
  const DocumentIndexer = FlexSearch.Document;
  const Index = FlexSearch.Index;
  function tokenize(locale) {
    const tokenizer = Intl.Segmenter;
    if (tokenizer) {
      const latinIndexer = new Index({ charset: "latin:advanced" });
      const latinEncoder = latinIndexer.encode.bind(latinIndexer);
      const latinChecker = /^[\p{Script=Latin}\p{Mark}\d]+$/u;
      const segmenter = new tokenizer([locale], { granularity: "word" });
      return (text) => {
        const latinChars = [];
        const cjkChars = Array.from(segmenter.segment(text)).filter((s2) => {
          if (s2.isWordLike) {
            if (!latinChecker.test(s2.segment)) {
              return true;
            }
            latinChars.push(s2.segment);
          }
          return false;
        }).map((s2) => s2.segment);
        return [...cjkChars, ...latinEncoder(latinChars.join(" "))];
      };
    }
    return (text) => {
      return text.replace(/[\x00-\x7F]/g, "").split("");
    };
  }
  const REINDEX_TIMEOUT = 200;
  class SearchIndexer {
    constructor(doc, locale = "en-US") {
      this._reindexMap = null;
      this._reindex = () => {
        if (!this._reindexMap)
          return;
        for (const id2 of this._reindexMap.keys()) {
          const meta = this._reindexMap.get(id2);
          if (meta) {
            this._reindexMap.delete(id2);
            this._indexer.add(id2, meta);
          }
        }
        setTimeout(() => {
          if (!this._reindexMap)
            return;
          if (REQUEST_IDLE_CALLBACK_ENABLED) {
            requestIdleCallback(this._reindex, { timeout: 1e3 });
          } else {
            setTimeout(this._reindex, 1e3);
          }
        }, REINDEX_TIMEOUT);
      };
      this._doc = doc;
      this._indexer = new DocumentIndexer({
        document: {
          id: "id",
          index: ["content", "reference", "space"],
          tag: "tags",
          store: ["space", "content"]
        },
        encode: tokenize(locale),
        tokenize: "forward",
        context: true
      });
      this._reindexMap = /* @__PURE__ */ new Map();
      this._reindex();
      doc.spaces.observe((event) => {
        event.keysChanged.forEach((docId) => {
          const doc2 = this._getDoc(docId);
          if (doc2 != null) {
            this._handleDocIndexing(docId, doc2);
          }
        });
      });
      if (IS_WEB) {
        window.addEventListener("beforeunload", () => {
          this._reindexMap = null;
        });
      }
      if (IS_NODE) {
        process.on("exit", () => {
          this._reindexMap = null;
        });
      }
    }
    _search(query) {
      if (typeof query === "object") {
        return this._indexer.search({
          ...query,
          enrich: true
        });
      } else {
        return this._indexer.search(query, {
          enrich: true
        });
      }
    }
    _handleDocIndexing(docId, doc) {
      if (!doc) {
        return;
      }
      const yBlocks = doc.getMap("blocks");
      this.refreshDocIndex(docId, doc);
      yBlocks.observeDeep((events) => {
        const keys2 = events.flatMap((e2) => {
          if ((e2.path?.length | 0) > 0) {
            return [[e2.path[0], "update"]];
          }
          return Array.from(e2.changes.keys.entries()).map(([k2, { action }]) => [k2, action]);
        });
        if (keys2.length) {
          keys2.forEach(([key, action]) => {
            this._refreshIndex(docId, key, action, yBlocks.get(key));
          });
        }
      });
    }
    _refreshIndex(doc, id2, action, block) {
      switch (action) {
        case "add":
        case "update": {
          if (block) {
            const content = this._toContent(block.get("prop:title") || block.get("prop:text"));
            if (content) {
              this._reindexMap?.set(id2, {
                content,
                space: doc,
                tags: [doc]
              });
            }
          }
          break;
        }
        case "delete": {
          this._reindexMap?.delete(id2);
          this._indexer.remove(id2);
          break;
        }
      }
    }
    _toContent(obj) {
      if (obj) {
        if (typeof obj === "string") {
          return obj;
        } else if (obj instanceof YText) {
          return obj.toJSON();
        }
      }
      return void 0;
    }
    _getDoc(key) {
      try {
        return this._doc.spaces.get(key);
      } catch (_2) {
        return void 0;
      }
    }
    search(query) {
      return new Map(this._search(query).flatMap(({ result }) => result.map((r2) => [r2.id, { space: r2.doc.space, content: r2.doc.content }])));
    }
    refreshDocIndex(docId, doc) {
      const yBlocks = doc.getMap("blocks");
      yBlocks.forEach((_2, key) => {
        this._refreshIndex(docId, key, "add", yBlocks.get(key));
      });
    }
  }
  function addOnFactory(fn) {
    return fn;
  }
  const indexer = addOnFactory((originalClass) => class extends originalClass {
    constructor(storeOptions) {
      super(storeOptions);
      const blockIndexer = new BlockIndexer(this.doc, { slots: this.slots });
      this.indexer = {
        search: !storeOptions.disableSearchIndex ? new SearchIndexer(this.doc) : null,
        backlink: new BacklinkIndexer(blockIndexer)
      };
    }
    search(query) {
      return this.indexer.search?.search(query) ?? /* @__PURE__ */ new Map();
    }
  });
  const testSymbol = Symbol.for("react.test.json");
  function isValidRecord(data) {
    if (typeof data !== "object" || data === null) {
      return false;
    }
    return true;
  }
  const IGNORED_PROPS = [
    "sys:id",
    "sys:version",
    "sys:flavour",
    "sys:children",
    "prop:xywh",
    "prop:cells",
    "prop:elements"
  ];
  function yDocToJSXNode(serializedDoc, nodeId) {
    if (!isValidRecord(serializedDoc)) {
      throw new Error("Failed to parse doc record! Invalid data.");
    }
    const node = serializedDoc[nodeId];
    if (!node) {
      throw new Error(`Failed to parse doc record! Node not found! id: ${nodeId}.`);
    }
    const flavour = node["sys:flavour"];
    const children = node["sys:children"];
    const props = Object.fromEntries(Object.entries(node).filter(([key]) => !IGNORED_PROPS.includes(key)));
    if ("prop:text" in props && props["prop:text"] instanceof Array) {
      props["prop:text"] = parseDelta(props["prop:text"]);
    }
    if ("prop:title" in props && props["prop:title"] instanceof Array) {
      props["prop:title"] = parseDelta(props["prop:title"]);
    }
    if ("prop:columns" in props && props["prop:columns"] instanceof Array) {
      props["prop:columns"] = `Array [${props["prop:columns"].length}]`;
    }
    if ("prop:views" in props && props["prop:views"] instanceof Array) {
      props["prop:views"] = `Array [${props["prop:views"].length}]`;
    }
    return {
      $$typeof: testSymbol,
      type: flavour,
      props,
      children: children?.map((id2) => yDocToJSXNode(serializedDoc, id2)) ?? []
    };
  }
  function serializeYDoc(doc) {
    const json = {};
    doc.share.forEach((value, key) => {
      if (value instanceof YMap) {
        json[key] = serializeYMap(value);
      } else {
        json[key] = value.toJSON();
      }
    });
    return json;
  }
  function serializeY(value) {
    if (value instanceof Doc$1) {
      return serializeYDoc(value);
    }
    if (value instanceof YMap) {
      return serializeYMap(value);
    }
    if (value instanceof YText) {
      return serializeYText(value);
    }
    if (value instanceof YArray) {
      return value.toArray().map((x2) => serializeY(x2));
    }
    if (value instanceof AbstractType) {
      return value.toJSON();
    }
    return value;
  }
  function serializeYMap(map2) {
    const json = {};
    map2.forEach((value, key) => {
      json[key] = serializeY(value);
    });
    return json;
  }
  function serializeYText(text) {
    const delta = text.toDelta();
    return delta;
  }
  function parseDelta(text) {
    if (!text.length) {
      return void 0;
    }
    if (text.length === 1 && !text[0].attributes) {
      return text[0].insert;
    }
    return {
      // The `Symbol.for('react.fragment')` will render as `<React.Fragment>`
      // so we use a empty string to render it as `<>`.
      // But it will empty children ad `< />`
      // so we return `undefined` directly if not delta text.
      $$typeof: testSymbol,
      // Symbol.for('react.element'),
      type: "",
      // Symbol.for('react.fragment'),
      props: {},
      children: text?.map(({ insert, attributes }) => ({
        $$typeof: testSymbol,
        type: "text",
        props: {
          // Not place at `children` to avoid the trailing whitespace be trim by formatter.
          insert,
          ...attributes
        }
      }))
    };
  }
  const test = addOnFactory((originalClass) => class extends originalClass {
    /** @internal Only for testing */
    exportJSX(blockId, docId = this.meta.docMetas.at(0)?.id) {
      assertExists(docId);
      const doc = this.doc.spaces.get(docId);
      assertExists(doc);
      const docJson = serializeYDoc(doc);
      if (!docJson) {
        throw new Error(`Doc ${docId} doesn't exist`);
      }
      const blockJson = docJson.blocks;
      if (!blockId) {
        const rootId = Object.keys(blockJson).at(0);
        if (!rootId) {
          return null;
        }
        blockId = rootId;
      }
      if (!blockJson[blockId]) {
        return null;
      }
      return yDocToJSXNode(blockJson, blockId);
    }
  });
  class DocCollectionAddonType {
  }
  class Space {
    get yBlocks() {
      return this._yBlocks;
    }
    get loaded() {
      return this._loaded;
    }
    get spaceDoc() {
      return this._ySpaceDoc;
    }
    constructor(id2, rootDoc, awarenessStore) {
      this._onLoadSlot = new Slot();
      this._initSubDoc = () => {
        let subDoc = this.rootDoc.spaces.get(this.id);
        if (!subDoc) {
          subDoc = new Doc$1({
            guid: this.id
          });
          this.rootDoc.spaces.set(this.id, subDoc);
          this._loaded = true;
          this._onLoadSlot.emit();
        } else {
          this._loaded = false;
          this.rootDoc.on("subdocs", this._onSubdocEvent);
        }
        return subDoc;
      };
      this._onSubdocEvent = ({ loaded }) => {
        const result = Array.from(loaded).find((doc) => doc.guid === this._ySpaceDoc.guid);
        if (!result) {
          return;
        }
        this.rootDoc.off("subdocs", this._onSubdocEvent);
        this._loaded = true;
        this._onLoadSlot.emit();
      };
      this.id = id2;
      this.rootDoc = rootDoc;
      this.awarenessStore = awarenessStore;
      this._ySpaceDoc = this._initSubDoc();
      this._yBlocks = this._ySpaceDoc.getMap("blocks");
    }
    load() {
      this._ySpaceDoc.load();
      return this;
    }
    remove() {
      this.destroy();
      this.rootDoc.spaces.delete(this.id);
    }
    destroy() {
      this._ySpaceDoc.destroy();
      this._onLoadSlot.dispose();
      this._loaded = false;
    }
    clear() {
      this._yBlocks.clear();
    }
    /**
     * If `shouldTransact` is `false`, the transaction will not be push to the history stack.
     */
    transact(fn, shouldTransact = true) {
      this._ySpaceDoc.transact(() => {
        try {
          fn();
        } catch (e2) {
          console.error(`An error occurred while Y.doc ${this._ySpaceDoc.guid} transacting:`);
          console.error(e2);
        }
      }, shouldTransact ? this.rootDoc.clientID : null);
    }
  }
  class DocCRUD {
    get root() {
      let rootId = null;
      this._yBlocks.forEach((yBlock) => {
        const flavour = yBlock.get("sys:flavour");
        const schema = this._schema.flavourSchemaMap.get(flavour);
        if (!schema)
          return;
        if (schema.model.role === "root") {
          rootId = yBlock.get("sys:id");
        }
      });
      return rootId;
    }
    constructor(_yBlocks, _schema) {
      this._yBlocks = _yBlocks;
      this._schema = _schema;
    }
    _getSiblings(id2, fn) {
      const parentId = this.getParent(id2);
      if (!parentId)
        return null;
      const parent = this._yBlocks.get(parentId);
      if (!parent)
        return null;
      const children = parent.get("sys:children");
      const index = children.toArray().indexOf(id2);
      if (index === -1)
        return null;
      return fn(index, parent);
    }
    getParent(targetId) {
      const root = this.root;
      if (!root || root === targetId)
        return null;
      const findParent = (parentId) => {
        const parentYBlock = this._yBlocks.get(parentId);
        if (!parentYBlock)
          return null;
        const children = parentYBlock.get("sys:children");
        for (const childId of children.toArray()) {
          if (childId === targetId)
            return parentId;
          const parent = findParent(childId);
          if (parent != null)
            return parent;
        }
        return null;
      };
      return findParent(root);
    }
    addBlock(id2, flavour, initialProps = {}, parent, parentIndex) {
      const schema = this._schema.flavourSchemaMap.get(flavour);
      assertExists(schema, `Could not find schema for flavour ${flavour}`);
      const parentFlavour = parent ? this._yBlocks.get(parent)?.get("sys:flavour") : void 0;
      this._schema.validate(flavour, parentFlavour);
      const yBlock = new YMap();
      this._yBlocks.set(id2, yBlock);
      const version = schema.version;
      const children = initialProps.children?.map((child) => typeof child === "string" ? child : child.id);
      yBlock.set("sys:id", id2);
      yBlock.set("sys:flavour", flavour);
      yBlock.set("sys:version", version);
      yBlock.set("sys:children", YArray.from(children ?? []));
      const defaultProps = schema.model.props?.(internalPrimitives) ?? {};
      const props = {
        ...defaultProps,
        ...initialProps
      };
      delete props.id;
      delete props.flavour;
      delete props.children;
      Object.entries(props).forEach(([key, value]) => {
        if (value === void 0)
          return;
        yBlock.set(`prop:${key}`, native2Y(value));
      });
      const parentId = parent ?? (schema.model.role === "root" ? null : this.root);
      if (!parentId)
        return;
      const yParent = this._yBlocks.get(parentId);
      if (!yParent)
        return;
      const yParentChildren = yParent.get("sys:children");
      const index = parentIndex ?? yParentChildren.length;
      yParentChildren.insert(index, [id2]);
    }
    deleteBlock(id2, options = {
      deleteChildren: true
    }) {
      const { bringChildrenTo, deleteChildren } = options;
      if (bringChildrenTo && deleteChildren) {
        console.error("Cannot bring children to another block and delete them at the same time");
        return;
      }
      const yModel = this._yBlocks.get(id2);
      if (!yModel)
        return;
      const yModelChildren = yModel.get("sys:children");
      const parent = this.getParent(id2);
      if (!parent)
        return;
      const yParent = this._yBlocks.get(parent);
      const yParentChildren = yParent.get("sys:children");
      const modelIndex = yParentChildren.toArray().indexOf(id2);
      if (modelIndex > -1) {
        yParentChildren.delete(modelIndex, 1);
      }
      const apply = () => {
        if (bringChildrenTo) {
          const bringChildrenToModel = () => {
            assertExists(bringChildrenTo);
            const model = this._yBlocks.get(bringChildrenTo);
            if (!model)
              return;
            const bringFlavour = model.get("sys:flavour");
            yModelChildren.forEach((child) => {
              const childModel = this._yBlocks.get(child);
              if (!childModel)
                return;
              this._schema.validate(childModel.get("sys:flavour"), bringFlavour);
            });
            if (bringChildrenTo === parent) {
              yParentChildren.insert(modelIndex, yModelChildren.toArray());
              return;
            }
            const yBringChildrenTo = this._yBlocks.get(bringChildrenTo);
            if (!yBringChildrenTo)
              return;
            const yBringChildrenToChildren = yBringChildrenTo.get("sys:children");
            yBringChildrenToChildren.push(yModelChildren.toArray());
          };
          bringChildrenToModel();
          return;
        }
        if (deleteChildren) {
          const deleteById = (id3) => {
            const yBlock = this._yBlocks.get(id3);
            const yChildren = yBlock.get("sys:children");
            yChildren.forEach((id4) => deleteById(id4));
            this._yBlocks.delete(id3);
          };
          yModelChildren.forEach((id3) => deleteById(id3));
        }
      };
      apply();
      this._yBlocks.delete(id2);
    }
    updateBlockChildren(id2, children) {
      const yBlock = this._yBlocks.get(id2);
      if (!yBlock)
        return;
      const yChildren = YArray.from(children);
      yBlock.set("sys:children", yChildren);
    }
    moveBlocks(blocksToMove, newParent, targetSibling = null, shouldInsertBeforeSibling = true) {
      const childBlocksPerParent = /* @__PURE__ */ new Map();
      const parentBlock = this._yBlocks.get(newParent);
      if (!parentBlock)
        return;
      const parentFlavour = parentBlock.get("sys:flavour");
      blocksToMove.forEach((blockId) => {
        const parent = this.getParent(blockId);
        if (!parent)
          return;
        const block = this._yBlocks.get(blockId);
        if (!block)
          return;
        this._schema.validate(block.get("sys:flavour"), parentFlavour);
        const children = childBlocksPerParent.get(parent);
        if (!children) {
          childBlocksPerParent.set(parent, [blockId]);
          return;
        }
        const last2 = children[children.length - 1];
        if (this.getNext(last2) !== blockId) {
          throw new Error("The blocks to move are not contiguous under their parent");
        }
        children.push(blockId);
      });
      let insertIndex = 0;
      Array.from(childBlocksPerParent.entries()).forEach(([parentBlock2, blocksToMove2], index) => {
        const targetParentBlock = this._yBlocks.get(newParent);
        if (!targetParentBlock)
          return;
        const targetParentChildren = targetParentBlock.get("sys:children");
        const sourceParentBlock = this._yBlocks.get(parentBlock2);
        if (!sourceParentBlock)
          return;
        const sourceParentChildren = sourceParentBlock.get("sys:children");
        const startIndex = sourceParentChildren.toArray().findIndex((id2) => id2 === blocksToMove2[0]);
        sourceParentChildren.delete(startIndex, blocksToMove2.length);
        const updateInsertIndex = () => {
          const first = index === 0;
          if (!first) {
            insertIndex++;
            return;
          }
          if (!targetSibling) {
            insertIndex = targetParentChildren.length;
            return;
          }
          const targetIndex = targetParentChildren.toArray().findIndex((id2) => id2 === targetSibling);
          if (targetIndex === -1) {
            throw new Error("Target sibling not found");
          }
          insertIndex = shouldInsertBeforeSibling ? targetIndex : targetIndex + 1;
        };
        updateInsertIndex();
        targetParentChildren.insert(insertIndex, blocksToMove2);
      });
    }
    getNext(id2) {
      return this._getSiblings(id2, (index, parent) => parent.get("sys:children").toArray().at(index + 1) ?? null);
    }
    getPrev(id2) {
      return this._getSiblings(id2, (index, parent) => parent.get("sys:children").toArray().at(index - 1) ?? null);
    }
  }
  const defaultBlockSelector = () => BlockViewType.Display;
  class BlockCollection extends Space {
    get readonly() {
      return this.awarenessStore.isReadonly(this);
    }
    get ready() {
      return this._ready;
    }
    get history() {
      return this._history;
    }
    get crud() {
      return this._docCRUD;
    }
    get collection() {
      return this._collection;
    }
    get docSync() {
      return this.collection.docSync;
    }
    get awarenessSync() {
      return this.collection.awarenessSync;
    }
    get blobSync() {
      return this.collection.blobSync;
    }
    get schema() {
      return this.collection.schema;
    }
    get meta() {
      return this.collection.meta.getDocMeta(this.id);
    }
    get isEmpty() {
      return this._yBlocks.size === 0;
    }
    get canUndo() {
      if (this.readonly) {
        return false;
      }
      return this._history.canUndo();
    }
    get canRedo() {
      if (this.readonly) {
        return false;
      }
      return this._history.canRedo();
    }
    get Text() {
      return Text;
    }
    constructor({ id: id2, collection, doc, awarenessStore, idGenerator = uuidv4$1 }) {
      super(id2, doc, awarenessStore);
      this._ready = false;
      this._shouldTransact = true;
      this._docMap = {
        undefined: /* @__PURE__ */ new WeakMap(),
        true: /* @__PURE__ */ new WeakMap(),
        false: /* @__PURE__ */ new WeakMap()
      };
      this.slots = {
        historyUpdated: new Slot(),
        yBlockUpdated: new Slot()
      };
      this._historyObserver = () => {
        this.slots.historyUpdated.emit();
      };
      this._handleYEvents = (events) => {
        events.forEach((event) => this._handleYEvent(event));
      };
      this._collection = collection;
      this._idGenerator = idGenerator;
      this._docCRUD = new DocCRUD(this._yBlocks, collection.schema);
    }
    _getReadonlyKey(readonly) {
      return readonly?.toString() ?? "undefined";
    }
    _initYBlocks() {
      const { _yBlocks } = this;
      _yBlocks.observeDeep(this._handleYEvents);
      this._history = new UndoManager([_yBlocks], {
        trackedOrigins: /* @__PURE__ */ new Set([this._ySpaceDoc.clientID])
      });
      this._history.on("stack-cleared", this._historyObserver);
      this._history.on("stack-item-added", this._historyObserver);
      this._history.on("stack-item-popped", this._historyObserver);
      this._history.on("stack-item-updated", this._historyObserver);
    }
    _handleYBlockAdd(id2) {
      this.slots.yBlockUpdated.emit({ type: "add", id: id2 });
    }
    _handleYBlockDelete(id2) {
      this.slots.yBlockUpdated.emit({ type: "delete", id: id2 });
    }
    _handleYEvent(event) {
      if (event.target !== this._yBlocks) {
        return;
      }
      event.keys.forEach((value, id2) => {
        try {
          if (value.action === "add") {
            this._handleYBlockAdd(id2);
            return;
          }
          if (value.action === "delete") {
            this._handleYBlockDelete(id2);
            return;
          }
        } catch (e2) {
          console.error("An error occurred while handling Yjs event:");
          console.error(e2);
        }
      });
    }
    _handleVersion() {
      if (!this.collection.meta.hasVersion) {
        this.collection.meta.writeVersion(this.collection);
      } else {
        if (this.awarenessStore.getFlag("enable_legacy_validation")) {
          this.collection.meta.validateVersion(this.collection);
        }
      }
    }
    getDoc({ selector = defaultBlockSelector, readonly } = {}) {
      const readonlyKey = this._getReadonlyKey(readonly);
      if (this._docMap[readonlyKey].has(selector)) {
        return this._docMap[readonlyKey].get(selector);
      }
      const doc = new Doc({
        blockCollection: this,
        crud: this._docCRUD,
        schema: this.collection.schema,
        selector,
        readonly
      });
      this._docMap[readonlyKey].set(selector, doc);
      return doc;
    }
    clearSelector(selector, readonly) {
      const readonlyKey = this._getReadonlyKey(readonly);
      this._docMap[readonlyKey].delete(selector);
    }
    withoutTransact(callback) {
      this._shouldTransact = false;
      callback();
      this._shouldTransact = true;
    }
    transact(fn, shouldTransact = this._shouldTransact) {
      super.transact(fn, shouldTransact);
    }
    undo() {
      if (this.readonly) {
        console.error("cannot modify data in readonly mode");
        return;
      }
      this._history.undo();
    }
    redo() {
      if (this.readonly) {
        console.error("cannot modify data in readonly mode");
        return;
      }
      this._history.redo();
    }
    /** Capture current operations to undo stack synchronously. */
    captureSync() {
      this._history.stopCapturing();
    }
    resetHistory() {
      this._history.clear();
    }
    generateBlockId() {
      return this._idGenerator();
    }
    load(initFn) {
      if (this.ready) {
        return this;
      }
      super.load();
      if ((this.collection.meta.docs?.length ?? 0) <= 1) {
        this._handleVersion();
      }
      this._initYBlocks();
      this._yBlocks.forEach((_2, id2) => {
        this._handleYBlockAdd(id2);
      });
      initFn?.();
      this._ready = true;
      return this;
    }
    dispose() {
      this.slots.historyUpdated.dispose();
      if (this.ready) {
        this._yBlocks.unobserveDeep(this._handleYEvents);
        this._yBlocks.clear();
      }
    }
  }
  class DocCollectionMeta {
    get yDocs() {
      return this._yMap.get("pages");
    }
    get docs() {
      return this._proxy.pages;
    }
    get name() {
      return this._proxy.name;
    }
    get avatar() {
      return this._proxy.avatar;
    }
    get blockVersions() {
      return this._proxy.blockVersions;
    }
    get workspaceVersion() {
      return this._proxy.workspaceVersion;
    }
    get pageVersion() {
      return this._proxy.pageVersion;
    }
    get docMetas() {
      if (!this._proxy.pages) {
        return [];
      }
      return this._proxy.pages;
    }
    get hasVersion() {
      if (!this.blockVersions || !this.pageVersion || !this.workspaceVersion) {
        return false;
      }
      return Object.keys(this.blockVersions).length > 0;
    }
    get properties() {
      const meta = this._proxy.properties;
      if (!meta) {
        return {
          tags: {
            options: []
          }
        };
      }
      return meta;
    }
    constructor(doc) {
      this._prevDocs = /* @__PURE__ */ new Set();
      this.id = "meta";
      this.docMetaAdded = new Slot();
      this.docMetaRemoved = new Slot();
      this.docMetaUpdated = new Slot();
      this.commonFieldsUpdated = new Slot();
      this._handleDocCollectionMetaEvents = (events) => {
        events.forEach((e2) => {
          const hasKey = (k2) => e2.target === this._yMap && e2.changes.keys.has(k2);
          if (e2.target === this.yDocs || e2.target.parent === this.yDocs || hasKey("pages")) {
            this._handleDocMetaEvent();
          }
          if (hasKey("name") || hasKey("avatar")) {
            this._handleCommonFieldsEvent();
          }
        });
      };
      this.doc = doc;
      this._yMap = doc.getMap(this.id);
      this._proxy = doc.getMapProxy(this.id);
      this._yMap.observeDeep(this._handleDocCollectionMetaEvents);
    }
    _handleDocMetaEvent() {
      const { docMetas, _prevDocs } = this;
      const newDocs = /* @__PURE__ */ new Set();
      docMetas.forEach((docMeta) => {
        if (!_prevDocs.has(docMeta.id)) {
          this.docMetaAdded.emit(docMeta.id);
        }
        newDocs.add(docMeta.id);
      });
      _prevDocs.forEach((prevDocId) => {
        const isRemoved = newDocs.has(prevDocId) === false;
        if (isRemoved) {
          this.docMetaRemoved.emit(prevDocId);
        }
      });
      this._prevDocs = newDocs;
      this.docMetaUpdated.emit();
    }
    _handleCommonFieldsEvent() {
      this.commonFieldsUpdated.emit();
    }
    initialize() {
      if (!this._proxy.pages) {
        this._proxy.pages = [];
      }
    }
    setName(name) {
      this.doc.transact(() => {
        this._proxy.name = name;
      }, this.doc.clientID);
    }
    setAvatar(avatar) {
      this.doc.transact(() => {
        this._proxy.avatar = avatar;
      }, this.doc.clientID);
    }
    getDocMeta(id2) {
      return this.docMetas.find((doc) => doc.id === id2);
    }
    addDocMeta(doc, index) {
      this.doc.transact(() => {
        if (!this.docs) {
          return;
        }
        const docs = this.docs;
        if (index === void 0) {
          docs.push(doc);
        } else {
          docs.splice(index, 0, doc);
        }
      }, this.doc.clientID);
    }
    /**
     * @internal Use {@link DocCollection.setDocMeta} instead
     */
    setDocMeta(id2, props) {
      const docs = this.docs ?? [];
      const index = docs.findIndex((doc) => id2 === doc.id);
      this.doc.transact(() => {
        if (!this.docs) {
          return;
        }
        if (index === -1)
          return;
        assertExists(this.docs);
        const doc = this.docs[index];
        Object.entries(props).forEach(([key, value]) => {
          doc[key] = value;
        });
      }, this.doc.clientID);
    }
    removeDocMeta(id2) {
      assertExists(this.docs);
      const docMeta = this.docMetas;
      const index = docMeta.findIndex((doc) => id2 === doc.id);
      if (index === -1) {
        return;
      }
      this.doc.transact(() => {
        assertExists(this.docs);
        this.docs.splice(index, 1);
      }, this.doc.clientID);
    }
    /**
     * @internal Only for doc initialization
     */
    writeVersion(collection) {
      const { blockVersions, pageVersion, workspaceVersion } = this._proxy;
      if (!workspaceVersion) {
        this._proxy.workspaceVersion = COLLECTION_VERSION;
      } else {
        console.error("Workspace version is already set");
      }
      if (!pageVersion) {
        this._proxy.pageVersion = PAGE_VERSION;
      } else {
        console.error("Doc version is already set");
      }
      if (!blockVersions) {
        const _versions = {};
        collection.schema.flavourSchemaMap.forEach((schema, flavour) => {
          _versions[flavour] = schema.version;
        });
        this._proxy.blockVersions = _versions;
      } else {
        console.error("Block versions is already set");
      }
    }
    updateVersion(collection) {
      this._proxy.workspaceVersion = COLLECTION_VERSION;
      this._proxy.pageVersion = PAGE_VERSION;
      const _versions = {};
      collection.schema.flavourSchemaMap.forEach((schema, flavour) => {
        _versions[flavour] = schema.version;
      });
      this._proxy.blockVersions = _versions;
    }
    /**
     * @deprecated Only used for legacy doc version validation
     */
    validateVersion(collection) {
      const workspaceVersion = this._proxy.workspaceVersion;
      if (!workspaceVersion) {
        throw new Error("Invalid workspace data, workspace version is missing. Please make sure the data is valid.");
      }
      if (workspaceVersion < COLLECTION_VERSION) {
        throw new Error(`Workspace version ${workspaceVersion} is outdated. Please upgrade the editor.`);
      }
      const pageVersion = this._proxy.pageVersion;
      if (!pageVersion) {
        throw new Error("Invalid workspace data, page version is missing. Please make sure the data is valid.");
      }
      if (pageVersion < PAGE_VERSION) {
        throw new Error(`Doc version ${pageVersion} is outdated. Please upgrade the editor.`);
      }
      const blockVersions = { ...this._proxy.blockVersions };
      if (!blockVersions) {
        throw new Error("Invalid workspace data, versions data is missing. Please make sure the data is valid");
      }
      const dataFlavours = Object.keys(blockVersions);
      if (dataFlavours.length === 0) {
        throw new Error("Invalid workspace data, missing versions field. Please make sure the data is valid.");
      }
      dataFlavours.forEach((dataFlavour) => {
        const dataVersion = blockVersions[dataFlavour];
        const editorVersion = collection.schema.flavourSchemaMap.get(dataFlavour)?.version;
        if (!editorVersion) {
          throw new Error(`Editor missing ${dataFlavour} flavour. Please make sure this block flavour is registered.`);
        } else if (dataVersion > editorVersion) {
          throw new Error(`Editor doesn't support ${dataFlavour}@${dataVersion}. Please upgrade the editor.`);
        } else if (dataVersion < editorVersion) {
          throw new Error(`In workspace data, the block flavour ${dataFlavour}@${dataVersion} is outdated. Please downgrade the editor or try data migration.`);
        }
      });
    }
    setProperties(meta) {
      this._proxy.properties = meta;
      this.docMetaUpdated.emit();
    }
  }
  class AwarenessEngine {
    constructor(awareness, sources) {
      this.awareness = awareness;
      this.sources = sources;
    }
    connect() {
      this.sources.forEach((source) => source.connect(this.awareness));
    }
    disconnect() {
      this.sources.forEach((source) => source.disconnect());
    }
  }
  const outdatedTimeout = 3e4;
  class Awareness extends Observable {
    /**
     * @param {Y.Doc} doc
     */
    constructor(doc) {
      super();
      this.doc = doc;
      this.clientID = doc.clientID;
      this.states = /* @__PURE__ */ new Map();
      this.meta = /* @__PURE__ */ new Map();
      this._checkInterval = /** @type {any} */
      setInterval(() => {
        const now = getUnixTime();
        if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
        this.meta.get(this.clientID).lastUpdated) {
          this.setLocalState(this.getLocalState());
        }
        const remove = [];
        this.meta.forEach((meta, clientid) => {
          if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
            remove.push(clientid);
          }
        });
        if (remove.length > 0) {
          removeAwarenessStates(this, remove, "timeout");
        }
      }, floor(outdatedTimeout / 10));
      doc.on("destroy", () => {
        this.destroy();
      });
      this.setLocalState({});
    }
    destroy() {
      this.emit("destroy", [this]);
      this.setLocalState(null);
      super.destroy();
      clearInterval(this._checkInterval);
    }
    /**
     * @return {Object<string,any>|null}
     */
    getLocalState() {
      return this.states.get(this.clientID) || null;
    }
    /**
     * @param {Object<string,any>|null} state
     */
    setLocalState(state) {
      const clientID = this.clientID;
      const currLocalMeta = this.meta.get(clientID);
      const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
      const prevState = this.states.get(clientID);
      if (state === null) {
        this.states.delete(clientID);
      } else {
        this.states.set(clientID, state);
      }
      this.meta.set(clientID, {
        clock,
        lastUpdated: getUnixTime()
      });
      const added = [];
      const updated = [];
      const filteredUpdated = [];
      const removed = [];
      if (state === null) {
        removed.push(clientID);
      } else if (prevState == null) {
        if (state != null) {
          added.push(clientID);
        }
      } else {
        updated.push(clientID);
        if (!equalityDeep(prevState, state)) {
          filteredUpdated.push(clientID);
        }
      }
      if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
        this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
      }
      this.emit("update", [{ added, updated, removed }, "local"]);
    }
    /**
     * @param {string} field
     * @param {any} value
     */
    setLocalStateField(field, value) {
      const state = this.getLocalState();
      if (state !== null) {
        this.setLocalState({
          ...state,
          [field]: value
        });
      }
    }
    /**
     * @return {Map<number,Object<string,any>>}
     */
    getStates() {
      return this.states;
    }
  }
  const removeAwarenessStates = (awareness, clients, origin) => {
    const removed = [];
    for (let i2 = 0; i2 < clients.length; i2++) {
      const clientID = clients[i2];
      if (awareness.states.has(clientID)) {
        awareness.states.delete(clientID);
        if (clientID === awareness.clientID) {
          const curMeta = (
            /** @type {MetaClientState} */
            awareness.meta.get(clientID)
          );
          awareness.meta.set(clientID, {
            clock: curMeta.clock + 1,
            lastUpdated: getUnixTime()
          });
        }
        removed.push(clientID);
      }
    }
    if (removed.length > 0) {
      awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
      awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
    }
  };
  class BlobEngine {
    constructor(main, shadows, logger) {
      this.main = main;
      this.shadows = shadows;
      this.logger = logger;
      this._abort = null;
    }
    start() {
      if (this._abort) {
        return;
      }
      this._abort = new AbortController();
      const abortSignal = this._abort.signal;
      const sync = () => {
        if (abortSignal.aborted) {
          return;
        }
        this.sync().catch((error) => {
          this.logger.error("sync blob error", error);
        }).finally(() => {
          setTimeout(sync, 6e4);
        });
      };
      sync();
    }
    stop() {
      this._abort?.abort();
      this._abort = null;
    }
    get sources() {
      return [this.main, ...this.shadows];
    }
    async sync() {
      if (this.main.readonly) {
        return;
      }
      this.logger.debug("start syncing blob...");
      for (const shadow of this.shadows) {
        let mainList = [];
        let shadowList = [];
        if (!shadow.readonly) {
          try {
            mainList = await this.main.list();
            shadowList = await shadow.list();
          } catch (err) {
            this.logger.error(`error when sync`, err);
            continue;
          }
          const needUpload = mainList.filter((key) => !shadowList.includes(key));
          for (const key of needUpload) {
            try {
              const data = await this.main.get(key);
              if (data) {
                await shadow.set(key, data);
              } else {
                this.logger.error("data not found when trying upload from main to shadow");
              }
            } catch (err) {
              this.logger.error(`error when sync ${key} from [${this.main.name}] to [${shadow.name}]`, err);
            }
          }
        }
        const needDownload = shadowList.filter((key) => !mainList.includes(key));
        for (const key of needDownload) {
          try {
            const data = await shadow.get(key);
            if (data) {
              await this.main.set(key, data);
            } else {
              this.logger.error("data not found when trying download from shadow to main");
            }
          } catch (err) {
            this.logger.error(`error when sync ${key} from [${shadow.name}] to [${this.main.name}]`, err);
          }
        }
      }
      this.logger.debug("finish syncing blob");
    }
    async get(key) {
      this.logger.debug("get blob", key);
      for (const source of this.sources) {
        const data = await source.get(key);
        if (data) {
          return data;
        }
      }
      return null;
    }
    async set(valueOrKey, _value) {
      if (this.main.readonly) {
        throw new Error("main peer is readonly");
      }
      const key = typeof valueOrKey === "string" ? valueOrKey : await sha(await valueOrKey.arrayBuffer());
      const value = typeof valueOrKey === "string" ? _value : valueOrKey;
      if (!value) {
        throw new Error("value is empty");
      }
      await this.main.set(key, value);
      Promise.allSettled(this.shadows.filter((r2) => !r2.readonly).map((peer) => peer.set(key, value).catch((err) => {
        this.logger.error("Error when uploading to peer", err);
      }))).then((result) => {
        if (result.some(({ status }) => status === "rejected")) {
          this.logger.error(`blob ${key} update finish, but some peers failed to update`);
        } else {
          this.logger.debug(`blob ${key} update finish`);
        }
      }).catch(() => {
      });
      return key;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async delete(_key) {
      this.logger.error("You are trying to delete a blob. We do not support this feature yet. We need to wait until we implement the indexer, which will inform us which doc is using a particular blob so that we can safely delete it.");
    }
    async list() {
      const blobIdSet = /* @__PURE__ */ new Set();
      for (const source of this.sources) {
        const blobs = await source.list();
        for (const blob of blobs) {
          blobIdSet.add(blob);
        }
      }
      return Array.from(blobIdSet);
    }
  }
  class MemoryBlobSource {
    constructor() {
      this.name = "memory";
      this.readonly = false;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      return Promise.resolve(this.map.get(key) ?? null);
    }
    set(key, value) {
      this.map.set(key, value);
      return Promise.resolve(key);
    }
    delete(key) {
      this.map.delete(key);
      return Promise.resolve();
    }
    list() {
      return Promise.resolve(Array.from(this.map.keys()));
    }
  }
  var DocEngineStep;
  (function(DocEngineStep2) {
    DocEngineStep2[DocEngineStep2["Stopped"] = 0] = "Stopped";
    DocEngineStep2[DocEngineStep2["Syncing"] = 1] = "Syncing";
    DocEngineStep2[DocEngineStep2["Synced"] = 2] = "Synced";
  })(DocEngineStep || (DocEngineStep = {}));
  var DocPeerStep;
  (function(DocPeerStep2) {
    DocPeerStep2[DocPeerStep2["Stopped"] = 0] = "Stopped";
    DocPeerStep2[DocPeerStep2["Retrying"] = 1] = "Retrying";
    DocPeerStep2[DocPeerStep2["LoadingRootDoc"] = 2] = "LoadingRootDoc";
    DocPeerStep2[DocPeerStep2["LoadingSubDoc"] = 3] = "LoadingSubDoc";
    DocPeerStep2[DocPeerStep2["Loaded"] = 4.5] = "Loaded";
    DocPeerStep2[DocPeerStep2["Syncing"] = 5] = "Syncing";
    DocPeerStep2[DocPeerStep2["Synced"] = 6] = "Synced";
  })(DocPeerStep || (DocPeerStep = {}));
  class AsyncQueue {
    constructor(init = []) {
      this._resolveUpdate = null;
      this._waitForUpdate = null;
      this._queue = init;
    }
    get length() {
      return this._queue.length;
    }
    async next(abort, dequeue = (a2) => a2.shift()) {
      const update = dequeue(this._queue);
      if (update) {
        return update;
      } else {
        if (!this._waitForUpdate) {
          this._waitForUpdate = new Promise((resolve) => {
            this._resolveUpdate = resolve;
          });
        }
        await Promise.race([
          this._waitForUpdate,
          new Promise((_2, reject) => {
            if (abort?.aborted) {
              reject(abort?.reason);
            }
            abort?.addEventListener("abort", () => {
              reject(abort.reason);
            });
          })
        ]);
        return this.next(abort, dequeue);
      }
    }
    push(...updates) {
      this._queue.push(...updates);
      if (this._resolveUpdate) {
        const resolve = this._resolveUpdate;
        this._resolveUpdate = null;
        this._waitForUpdate = null;
        resolve();
      }
    }
    remove(predicate) {
      const index = this._queue.findIndex(predicate);
      if (index !== -1) {
        this._queue.splice(index, 1);
      }
    }
    find(predicate) {
      return this._queue.find(predicate);
    }
    clear() {
      this._queue = [];
    }
  }
  class PriorityAsyncQueue extends AsyncQueue {
    constructor(init = [], priorityTarget = new SharedPriorityTarget()) {
      super(init);
      this.priorityTarget = priorityTarget;
    }
    next(abort) {
      return super.next(abort, (arr) => {
        if (this.priorityTarget.priorityRule !== null) {
          const index = arr.findIndex((update) => this.priorityTarget.priorityRule?.(update.id));
          if (index !== -1) {
            return arr.splice(index, 1)[0];
          }
        }
        return arr.shift();
      });
    }
  }
  class SharedPriorityTarget {
    constructor() {
      this.priorityRule = null;
    }
  }
  function throwIfAborted(abort) {
    if (abort?.aborted) {
      throw new Error(abort.reason);
    }
    return true;
  }
  const MANUALLY_STOP = "manually-stop";
  class SyncPeer {
    get name() {
      return this.source.name;
    }
    set status(s2) {
      if (!isEqual(s2, this._status)) {
        this.logger.debug(`doc-peer:${this.name} status change`, s2);
        this._status = s2;
        this.onStatusChange.emit(s2);
      }
    }
    get status() {
      return this._status;
    }
    constructor(rootDoc, source, priorityTarget = new SharedPriorityTarget(), logger) {
      this.rootDoc = rootDoc;
      this.source = source;
      this.priorityTarget = priorityTarget;
      this.logger = logger;
      this._status = {
        step: DocPeerStep.LoadingRootDoc,
        totalDocs: 1,
        loadedDocs: 0,
        pendingPullUpdates: 0,
        pendingPushUpdates: 0
      };
      this.onStatusChange = new Slot();
      this.abort = new AbortController();
      this.state = {
        connectedDocs: /* @__PURE__ */ new Map(),
        pushUpdatesQueue: new PriorityAsyncQueue([], this.priorityTarget),
        pushingUpdate: false,
        pullUpdatesQueue: new PriorityAsyncQueue([], this.priorityTarget),
        subdocLoading: false,
        subdocsLoadQueue: new PriorityAsyncQueue([], this.priorityTarget)
      };
      this.handleYDocUpdates = (update, origin, doc) => {
        if (origin === this.name) {
          return;
        }
        const exist = this.state.pushUpdatesQueue.find(({ id: id2 }) => id2 === doc.guid);
        if (exist) {
          exist.data.push(update);
        } else {
          this.state.pushUpdatesQueue.push({
            id: doc.guid,
            data: [update]
          });
        }
        this.updateSyncStatus();
      };
      this.handleSubdocsUpdate = ({ added, removed }) => {
        for (const subdoc of added) {
          this.state.subdocsLoadQueue.push({ id: subdoc.guid, doc: subdoc });
        }
        for (const subdoc of removed) {
          this.disconnectDoc(subdoc);
          this.state.subdocsLoadQueue.remove((doc) => doc.doc === subdoc);
        }
        this.updateSyncStatus();
      };
      this.handleStorageUpdates = (id2, data) => {
        this.state.pullUpdatesQueue.push({
          id: id2,
          data
        });
        this.updateSyncStatus();
      };
      this.logger.debug(`doc-peer:${this.name} start`);
      this.syncRetryLoop(this.abort.signal).catch((err) => {
        console.error(err);
      });
    }
    /**
     * stop sync
     *
     * DocPeer is one-time use, this peer should be discarded after call stop().
     */
    stop() {
      this.logger.debug(`doc-peer:${this.name} stop`);
      this.abort.abort(MANUALLY_STOP);
    }
    /**
     * auto retry after 5 seconds if sync failed
     */
    async syncRetryLoop(abort) {
      while (abort.aborted === false) {
        try {
          await this.sync(abort);
        } catch (err) {
          if (err === MANUALLY_STOP || abort.aborted) {
            return;
          }
          this.logger.error(`doc-peer:${this.name} sync error`, err);
        }
        try {
          this.logger.error(`doc-peer:${this.name} retry after 5 seconds`);
          this.status = {
            step: DocPeerStep.Retrying,
            totalDocs: 1,
            loadedDocs: 0,
            pendingPullUpdates: 0,
            pendingPushUpdates: 0
          };
          await Promise.race([
            new Promise((resolve) => {
              setTimeout(resolve, 5 * 1e3);
            }),
            new Promise((_2, reject) => {
              if (abort.aborted) {
                reject(abort.reason);
              }
              abort.addEventListener("abort", () => {
                reject(abort.reason);
              });
            })
          ]);
        } catch (err) {
          if (err === MANUALLY_STOP || abort.aborted) {
            return;
          }
          throw err;
        }
      }
    }
    initState() {
      this.state.connectedDocs.clear();
      this.state.pushUpdatesQueue.clear();
      this.state.pullUpdatesQueue.clear();
      this.state.subdocsLoadQueue.clear();
      this.state.pushingUpdate = false;
      this.state.subdocLoading = false;
    }
    /**
     * main synchronization logic
     */
    async sync(abortOuter) {
      this.initState();
      const abortInner = new AbortController();
      abortOuter.addEventListener("abort", (reason) => {
        abortInner.abort(reason);
      });
      let dispose = null;
      try {
        this.updateSyncStatus();
        dispose = await this.source.subscribe(this.handleStorageUpdates, (reason) => {
          abortInner.abort("subscribe disconnect:" + reason);
        });
        throwIfAborted(abortInner.signal);
        await this.connectDoc(this.rootDoc, abortInner.signal);
        this.state.subdocsLoadQueue.push(...Array.from(this.rootDoc.getSubdocs()).map((doc) => ({
          id: doc.guid,
          doc
        })));
        this.updateSyncStatus();
        this.rootDoc.on("subdocs", this.handleSubdocsUpdate);
        await Promise.all([
          // load subdocs
          (async () => {
            while (throwIfAborted(abortInner.signal)) {
              const subdoc = await this.state.subdocsLoadQueue.next(abortInner.signal);
              this.state.subdocLoading = true;
              this.updateSyncStatus();
              await this.connectDoc(subdoc.doc, abortInner.signal);
              this.state.subdocLoading = false;
              this.updateSyncStatus();
            }
          })(),
          // pull updates
          (async () => {
            while (throwIfAborted(abortInner.signal)) {
              const { id: id2, data } = await this.state.pullUpdatesQueue.next(abortInner.signal);
              if (!(data.byteLength === 0 || data.byteLength === 2 && data[0] === 0 && data[1] === 0)) {
                const subdoc = this.state.connectedDocs.get(id2);
                if (subdoc) {
                  applyUpdate(subdoc, data, this.name);
                }
              }
              this.updateSyncStatus();
            }
          })(),
          // push updates
          (async () => {
            while (throwIfAborted(abortInner.signal)) {
              const { id: id2, data } = await this.state.pushUpdatesQueue.next(abortInner.signal);
              this.state.pushingUpdate = true;
              this.updateSyncStatus();
              const merged = mergeUpdates(data);
              if (!(merged.byteLength === 0 || merged.byteLength === 2 && merged[0] === 0 && merged[1] === 0)) {
                await this.source.push(id2, merged);
              }
              this.state.pushingUpdate = false;
              this.updateSyncStatus();
            }
          })()
        ]);
      } finally {
        dispose?.();
        for (const docs of this.state.connectedDocs.values()) {
          this.disconnectDoc(docs);
        }
        this.rootDoc.off("subdocs", this.handleSubdocsUpdate);
      }
    }
    async connectDoc(doc, abort) {
      const { data: docData, state: inStorageState } = await this.source.pull(doc.guid, encodeStateVector(doc)) ?? {};
      throwIfAborted(abort);
      if (docData && docData.length > 0) {
        applyUpdate(doc, docData, "load");
      }
      this.state.pushUpdatesQueue.push({
        id: doc.guid,
        data: [encodeStateAsUpdate(doc, inStorageState)]
      });
      this.state.connectedDocs.set(doc.guid, doc);
      doc.on("update", this.handleYDocUpdates);
      doc.emit("sync", [true, doc]);
      this.updateSyncStatus();
    }
    disconnectDoc(doc) {
      doc.off("update", this.handleYDocUpdates);
      this.state.connectedDocs.delete(doc.guid);
      this.updateSyncStatus();
    }
    updateSyncStatus() {
      let step;
      if (this.state.connectedDocs.size === 0) {
        step = DocPeerStep.LoadingRootDoc;
      } else if (this.state.subdocsLoadQueue.length || this.state.subdocLoading) {
        step = DocPeerStep.LoadingSubDoc;
      } else if (this.state.pullUpdatesQueue.length || this.state.pushUpdatesQueue.length || this.state.pushingUpdate) {
        step = DocPeerStep.Syncing;
      } else {
        step = DocPeerStep.Synced;
      }
      this.status = {
        step,
        totalDocs: this.state.connectedDocs.size + this.state.subdocsLoadQueue.length,
        loadedDocs: this.state.connectedDocs.size,
        pendingPullUpdates: this.state.pullUpdatesQueue.length + (this.state.subdocLoading ? 1 : 0),
        pendingPushUpdates: this.state.pushUpdatesQueue.length + (this.state.pushingUpdate ? 1 : 0)
      };
    }
    async waitForSynced(abort) {
      if (this.status.step >= DocPeerStep.Synced) {
        return;
      } else {
        return Promise.race([
          new Promise((resolve) => {
            this.onStatusChange.on((status) => {
              if (status.step >= DocPeerStep.Synced) {
                resolve();
              }
            });
          }),
          new Promise((_2, reject) => {
            if (abort?.aborted) {
              reject(abort?.reason);
            }
            abort?.addEventListener("abort", () => {
              reject(abort.reason);
            });
          })
        ]);
      }
    }
    async waitForLoaded(abort) {
      if (this.status.step > DocPeerStep.Loaded) {
        return;
      } else {
        return Promise.race([
          new Promise((resolve) => {
            this.onStatusChange.on((status) => {
              if (status.step > DocPeerStep.Loaded) {
                resolve();
              }
            });
          }),
          new Promise((_2, reject) => {
            if (abort?.aborted) {
              reject(abort?.reason);
            }
            abort?.addEventListener("abort", () => {
              reject(abort.reason);
            });
          })
        ]);
      }
    }
  }
  class DocEngine {
    get rootDocId() {
      return this.rootDoc.guid;
    }
    get status() {
      return this._status;
    }
    constructor(rootDoc, main, shadows, logger) {
      this.rootDoc = rootDoc;
      this.main = main;
      this.shadows = shadows;
      this.logger = logger;
      this._abort = new AbortController();
      this.onStatusChange = new Slot();
      this.priorityTarget = new SharedPriorityTarget();
      this._status = {
        step: DocEngineStep.Stopped,
        main: null,
        shadows: shadows.map(() => null),
        retrying: false
      };
      this.logger.debug(`syne-engine:${this.rootDocId} status init`, this.status);
    }
    setStatus(s2) {
      this.logger.debug(`syne-engine:${this.rootDocId} status change`, s2);
      this._status = s2;
      this.onStatusChange.emit(s2);
    }
    start() {
      if (this.status.step !== DocEngineStep.Stopped) {
        this.forceStop();
      }
      this._abort = new AbortController();
      this.sync(this._abort.signal).catch((err) => {
        this.logger.error(`syne-engine:${this.rootDocId}`, err);
      });
    }
    canGracefulStop() {
      return !!this.status.main && this.status.main.pendingPushUpdates === 0;
    }
    async waitForGracefulStop(abort) {
      await Promise.race([
        new Promise((_2, reject) => {
          if (abort?.aborted) {
            reject(abort?.reason);
          }
          abort?.addEventListener("abort", () => {
            reject(abort.reason);
          });
        }),
        new Promise((resolve) => {
          this.onStatusChange.on(() => {
            if (this.canGracefulStop()) {
              resolve();
            }
          });
        })
      ]);
      throwIfAborted(abort);
      this.forceStop();
    }
    forceStop() {
      this._abort.abort(MANUALLY_STOP);
      this.setStatus({
        step: DocEngineStep.Stopped,
        main: null,
        shadows: this.shadows.map(() => null),
        retrying: false
      });
    }
    // main sync process, should never return until abort
    async sync(signal) {
      const state = {
        mainPeer: null,
        shadowPeers: this.shadows.map(() => null)
      };
      const cleanUp = [];
      try {
        state.mainPeer = new SyncPeer(this.rootDoc, this.main, this.priorityTarget, this.logger);
        cleanUp.push(state.mainPeer.onStatusChange.on(() => {
          if (!signal.aborted)
            this.updateSyncingState(state.mainPeer, state.shadowPeers);
        }).dispose);
        this.updateSyncingState(state.mainPeer, state.shadowPeers);
        await state.mainPeer.waitForLoaded(signal);
        state.shadowPeers = this.shadows.map((shadow) => {
          const peer = new SyncPeer(this.rootDoc, shadow, this.priorityTarget, this.logger);
          cleanUp.push(peer.onStatusChange.on(() => {
            if (!signal.aborted)
              this.updateSyncingState(state.mainPeer, state.shadowPeers);
          }).dispose);
          return peer;
        });
        this.updateSyncingState(state.mainPeer, state.shadowPeers);
        await new Promise((_2, reject) => {
          if (signal.aborted) {
            reject(signal.reason);
          }
          signal.addEventListener("abort", () => {
            reject(signal.reason);
          });
        });
      } catch (error) {
        if (error === MANUALLY_STOP || signal.aborted) {
          return;
        }
        throw error;
      } finally {
        state.mainPeer?.stop();
        for (const shadowPeer of state.shadowPeers) {
          shadowPeer?.stop();
        }
        for (const clean of cleanUp) {
          clean();
        }
      }
    }
    updateSyncingState(local, shadows) {
      let step = DocEngineStep.Synced;
      const allPeer = [local, ...shadows];
      for (const peer of allPeer) {
        if (!peer || peer.status.step !== DocPeerStep.Synced) {
          step = DocEngineStep.Syncing;
          break;
        }
      }
      this.setStatus({
        step,
        main: local?.status ?? null,
        shadows: shadows.map((peer) => peer?.status ?? null),
        retrying: allPeer.some((peer) => peer?.status.step === DocPeerStep.Retrying)
      });
    }
    async waitForSynced(abort) {
      if (this.status.step === DocEngineStep.Synced) {
        return;
      } else {
        return Promise.race([
          new Promise((resolve) => {
            this.onStatusChange.on((status) => {
              if (status.step === DocEngineStep.Synced) {
                resolve();
              }
            });
          }),
          new Promise((_2, reject) => {
            if (abort?.aborted) {
              reject(abort?.reason);
            }
            abort?.addEventListener("abort", () => {
              reject(abort.reason);
            });
          })
        ]);
      }
    }
    async waitForLoadedRootDoc(abort) {
      function isLoadedRootDoc(status) {
        return ![status.main, ...status.shadows].some((peer) => !peer || peer.step <= DocPeerStep.LoadingRootDoc);
      }
      if (isLoadedRootDoc(this.status)) {
        return;
      } else {
        return Promise.race([
          new Promise((resolve) => {
            this.onStatusChange.on((status) => {
              if (isLoadedRootDoc(status)) {
                resolve();
              }
            });
          }),
          new Promise((_2, reject) => {
            if (abort?.aborted) {
              reject(abort?.reason);
            }
            abort?.addEventListener("abort", () => {
              reject(abort.reason);
            });
          })
        ]);
      }
    }
    setPriorityRule(target) {
      this.priorityTarget.priorityRule = target;
    }
  }
  const instanceOfAny = (object, constructors) => constructors.some((c2) => object instanceof c2);
  let idbProxyableTypes;
  let cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  const transactionDoneMap = /* @__PURE__ */ new WeakMap();
  const transformCache = /* @__PURE__ */ new WeakMap();
  const reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  let idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(this.request);
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  const unwrap = (value) => reverseTransformCache.get(value);
  const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  const writeMethods = ["put", "add", "delete", "clear"];
  const cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));
  const advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
  const methodMap = {};
  const advanceResults = /* @__PURE__ */ new WeakMap();
  const ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
  const cursorIteratorTraps = {
    get(target, prop) {
      if (!advanceMethodProps.includes(prop))
        return target[prop];
      let cachedFunc = methodMap[prop];
      if (!cachedFunc) {
        cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
      }
      return cachedFunc;
    }
  };
  async function* iterate(...args) {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  }
  function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
      if (isIteratorProp(target, prop))
        return iterate;
      return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
      return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    }
  }));
  class NoopDocSource {
    constructor() {
      this.name = "noop";
    }
    pull(_docId, _data) {
      return null;
    }
    push(_docId, _data) {
    }
    subscribe(_cb, _disconnect) {
      return () => {
      };
    }
  }
  var src = { exports: {} };
  var hasRequiredSrc;
  function requireSrc() {
    if (hasRequiredSrc) return src.exports;
    hasRequiredSrc = 1;
    (function(module, exports$1) {
      Object.defineProperty(exports$1, "__esModule", { value: true });
      exports$1.isPlainObject = exports$1.clone = exports$1.recursive = exports$1.merge = exports$1.main = void 0;
      module.exports = exports$1 = main;
      exports$1.default = main;
      function main() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i];
        }
        return merge.apply(void 0, items);
      }
      exports$1.main = main;
      main.clone = clone;
      main.isPlainObject = isPlainObject;
      main.recursive = recursive;
      function merge() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i];
        }
        return _merge(items[0] === true, false, items);
      }
      exports$1.merge = merge;
      function recursive() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          items[_i] = arguments[_i];
        }
        return _merge(items[0] === true, true, items);
      }
      exports$1.recursive = recursive;
      function clone(input) {
        if (Array.isArray(input)) {
          var output = [];
          for (var index = 0; index < input.length; ++index)
            output.push(clone(input[index]));
          return output;
        } else if (isPlainObject(input)) {
          var output = {};
          for (var index in input)
            output[index] = clone(input[index]);
          return output;
        } else {
          return input;
        }
      }
      exports$1.clone = clone;
      function isPlainObject(input) {
        return input && typeof input === "object" && !Array.isArray(input);
      }
      exports$1.isPlainObject = isPlainObject;
      function _recursiveMerge(base, extend) {
        if (!isPlainObject(base))
          return extend;
        for (var key in extend) {
          if (key === "__proto__" || key === "constructor" || key === "prototype")
            continue;
          base[key] = isPlainObject(base[key]) && isPlainObject(extend[key]) ? _recursiveMerge(base[key], extend[key]) : extend[key];
        }
        return base;
      }
      function _merge(isClone, isRecursive, items) {
        var result;
        if (isClone || !isPlainObject(result = items.shift()))
          result = {};
        for (var index = 0; index < items.length; ++index) {
          var item = items[index];
          if (!isPlainObject(item))
            continue;
          for (var key in item) {
            if (key === "__proto__" || key === "constructor" || key === "prototype")
              continue;
            var value = isClone ? clone(item[key]) : item[key];
            result[key] = isRecursive ? _recursiveMerge(result[key], value) : value;
          }
        }
        return result;
      }
    })(src, src.exports);
    return src.exports;
  }
  var srcExports = requireSrc();
  const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let nanoid$1 = (size2 = 21) => {
    let id2 = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size2 |= 0));
    while (size2--) {
      id2 += urlAlphabet[bytes[size2] & 63];
    }
    return id2;
  };
  function createAutoIncrementIdGenerator() {
    let i2 = 0;
    return () => (i2++).toString();
  }
  function createAutoIncrementIdGeneratorByClientId(clientId) {
    let i2 = 0;
    return () => `${clientId}:${i2++}`;
  }
  const uuidv4 = () => {
    return uuidv4$1();
  };
  const nanoid = () => {
    return nanoid$1(10);
  };
  class AwarenessStore {
    constructor(store2, awareness, defaultFlags) {
      this.slots = {
        update: new Slot()
      };
      this._onAwarenessChange = (diff) => {
        const { added, removed, updated } = diff;
        const states = this.awareness.getStates();
        added.forEach((id2) => {
          this.slots.update.emit({
            id: id2,
            type: "add",
            state: states.get(id2)
          });
        });
        updated.forEach((id2) => {
          this.slots.update.emit({
            id: id2,
            type: "update",
            state: states.get(id2)
          });
        });
        removed.forEach((id2) => {
          this.slots.update.emit({
            id: id2,
            type: "remove"
          });
        });
      };
      this.store = store2;
      this.awareness = awareness;
      this.awareness.on("change", this._onAwarenessChange);
      this.awareness.setLocalStateField("selectionV2", {});
      this._initFlags(defaultFlags);
    }
    _initFlags(defaultFlags) {
      const upstreamFlags = this.awareness.getLocalState()?.flags;
      const flags = upstreamFlags ? srcExports.merge(true, defaultFlags, upstreamFlags) : { ...defaultFlags };
      this.awareness.setLocalStateField("flags", flags);
    }
    setFlag(field, value) {
      const oldFlags = this.awareness.getLocalState()?.flags ?? {};
      this.awareness.setLocalStateField("flags", { ...oldFlags, [field]: value });
    }
    getFlag(field) {
      const flags = this.awareness.getLocalState()?.flags ?? {};
      return flags[field];
    }
    setReadonly(space, value) {
      const flags = this.getFlag("readonly") ?? {};
      this.setFlag("readonly", {
        ...flags,
        [space.id]: value
      });
    }
    isReadonly(space) {
      const rd = this.getFlag("readonly");
      if (rd && typeof rd === "object") {
        return Boolean(rd[space.id]);
      } else {
        return false;
      }
    }
    setLocalSelection(space, selection) {
      const oldSelection = this.awareness.getLocalState()?.selectionV2 ?? {};
      this.awareness.setLocalStateField("selectionV2", {
        ...oldSelection,
        [space.id]: selection
      });
    }
    getLocalSelection(space) {
      return (this.awareness.getLocalState()?.selectionV2 ?? {})[space.id] ?? [];
    }
    getStates() {
      return this.awareness.getStates();
    }
    destroy() {
      if (this.awareness) {
        this.awareness.off("change", this._onAwarenessChange);
        this.slots.update.dispose();
      }
    }
  }
  class BlockSuiteDoc extends Doc$1 {
    constructor() {
      super(...arguments);
      this._spaces = this.getMap("spaces");
    }
    get spaces() {
      return this._spaces;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toJSON() {
      const json = super.toJSON();
      delete json.spaces;
      const spaces = {};
      this.spaces.forEach((doc, key) => {
        spaces[key] = doc.toJSON();
      });
      return {
        ...json,
        spaces
      };
    }
    getMapProxy(key) {
      const map2 = super.getMap(key);
      return createYProxy(map2);
    }
    getArrayProxy(key) {
      const array = super.getArray(key);
      return createYProxy(array);
    }
    transact(f2, origin) {
      return super.transact(f2, origin);
    }
  }
  var Generator;
  (function(Generator2) {
    Generator2["NanoID"] = "nanoID";
    Generator2["UUIDv4"] = "uuidV4";
    Generator2["AutoIncrementByClientId"] = "autoIncrementByClientId";
    Generator2["AutoIncrement"] = "autoIncrement";
  })(Generator || (Generator = {}));
  const FLAGS_PRESET = {
    enable_synced_doc_block: false,
    enable_pie_menu: false,
    enable_database_statistics: false,
    enable_database_attachment_note: false,
    enable_legacy_validation: true,
    enable_expand_database_block: false,
    enable_block_query: false,
    enable_lasso_tool: false,
    enable_edgeless_text: true,
    enable_ai_onboarding: false,
    readonly: {}
  };
  class Store {
    constructor({ id: id2, idGenerator, defaultFlags, awarenessSources = [], docSources = {
      main: new NoopDocSource()
    }, blobSources = {
      main: new MemoryBlobSource()
    }, logger = new NoopLogger() } = {
      id: nanoid()
    }) {
      this.spaces = /* @__PURE__ */ new Map();
      this.id = id2 || "";
      this.doc = new BlockSuiteDoc({ guid: id2 });
      this.awarenessStore = new AwarenessStore(this, new Awareness(this.doc), srcExports.merge(true, FLAGS_PRESET, defaultFlags));
      this.awarenessSync = new AwarenessEngine(this.awarenessStore.awareness, awarenessSources);
      this.docSync = new DocEngine(this.doc, docSources.main, docSources.shadows ?? [], logger);
      this.blobSync = new BlobEngine(blobSources.main, blobSources.shadows ?? [], logger);
      if (typeof idGenerator === "function") {
        this.idGenerator = idGenerator;
      } else {
        switch (idGenerator) {
          case Generator.AutoIncrement: {
            this.idGenerator = createAutoIncrementIdGenerator();
            break;
          }
          case Generator.AutoIncrementByClientId: {
            this.idGenerator = createAutoIncrementIdGeneratorByClientId(this.doc.clientID);
            break;
          }
          case Generator.UUIDv4: {
            this.idGenerator = uuidv4;
            break;
          }
          case Generator.NanoID:
          default: {
            this.idGenerator = nanoid;
            break;
          }
        }
      }
    }
    addSpace(space) {
      this.spaces.set(space.id, space);
    }
    removeSpace(space) {
      this.spaces.delete(space.id);
    }
  }
  var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f2) {
      if (f2 !== void 0 && typeof f2 !== "function") throw new TypeError("Function expected");
      return f2;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _2, done = false;
    for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p2 in contextIn) context[p2] = p2 === "access" ? {} : contextIn[p2];
      for (var p2 in contextIn.access) context.access[p2] = contextIn.access[p2];
      context.addInitializer = function(f2) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f2 || null));
      };
      var result = (0, decorators[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_2 = accept(result.get)) descriptor.get = _2;
        if (_2 = accept(result.set)) descriptor.set = _2;
        if (_2 = accept(result.init)) initializers.unshift(_2);
      } else if (_2 = accept(result)) {
        if (kind === "field") initializers.unshift(_2);
        else descriptor[key] = _2;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __runInitializers = function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  let DocCollection = (() => {
    let _classDecorators = [indexer, test];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = DocCollectionAddonType;
    (class extends _classSuper {
      static {
        _classThis = this;
      }
      static {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      }
      get id() {
        return this._store.id;
      }
      get isEmpty() {
        if (this.doc.store.clients.size === 0)
          return true;
        let flag = false;
        if (this.doc.store.clients.size === 1) {
          const items = Array.from(this.doc.store.clients.values())[0];
          if (items.length <= 2) {
            flag = true;
          }
        }
        return flag;
      }
      get store() {
        return this._store;
      }
      get awarenessStore() {
        return this._store.awarenessStore;
      }
      get docs() {
        return this._store.spaces;
      }
      get doc() {
        return this._store.doc;
      }
      get idGenerator() {
        return this._store.idGenerator;
      }
      get schema() {
        return this._schema;
      }
      get docSync() {
        return this.store.docSync;
      }
      get awarenessSync() {
        return this.store.awarenessSync;
      }
      get blobSync() {
        return this.store.blobSync;
      }
      static {
        this.Y = yjs;
      }
      constructor(options) {
        super();
        this.slots = {
          docAdded: new Slot(),
          docUpdated: new Slot(),
          docRemoved: new Slot()
        };
        this._schema = options.schema;
        this._store = new Store(options);
        this.meta = new DocCollectionMeta(this.doc);
        this._bindDocMetaEvents();
      }
      _hasDoc(docId) {
        return this.docs.has(docId);
      }
      _bindDocMetaEvents() {
        this.meta.docMetaAdded.on((docId) => {
          const doc = new BlockCollection({
            id: docId,
            collection: this,
            doc: this.doc,
            awarenessStore: this.awarenessStore,
            idGenerator: this._store.idGenerator
          });
          this._store.addSpace(doc);
          this.slots.docAdded.emit(doc.id);
        });
        this.meta.docMetaUpdated.on(() => this.slots.docUpdated.emit());
        this.meta.docMetaRemoved.on((id2) => {
          const space = this.getBlockCollection(id2);
          if (!space)
            return;
          this._store.removeSpace(space);
          space.remove();
          this.slots.docRemoved.emit(id2);
        });
      }
      getDoc(docId, options) {
        const collection = this.getBlockCollection(docId);
        return collection?.getDoc(options) ?? null;
      }
      getBlockCollection(docId) {
        const space = this.docs.get(docId);
        return space ?? null;
      }
      /**
       * By default, only an empty doc will be created.
       * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
       * will be created in the doc simultaneously.
       */
      createDoc(options = {}) {
        const { id: docId = this.idGenerator(), selector } = options;
        if (this._hasDoc(docId)) {
          throw new Error("doc already exists");
        }
        this.meta.addDocMeta({
          id: docId,
          title: "",
          createDate: Date.now(),
          tags: []
        });
        return this.getDoc(docId, { selector });
      }
      /** Update doc meta state. Note that this intentionally does not mutate doc state. */
      setDocMeta(docId, props) {
        this.meta.setDocMeta(docId, props);
      }
      removeDoc(docId) {
        const docMeta = this.meta.getDocMeta(docId);
        assertExists(docMeta);
        const blockCollection = this.getBlockCollection(docId);
        if (!blockCollection)
          return;
        blockCollection.dispose();
        this.meta.removeDocMeta(docId);
        this._store.removeSpace(blockCollection);
      }
      /**
       * Start the data sync process
       */
      start() {
        this.docSync.start();
        this.blobSync.start();
        this.awarenessSync.connect();
      }
      /**
       * Verify that all data has been successfully saved to the primary storage.
       * Return true if the data transfer is complete and it is secure to terminate the synchronization operation.
       */
      canGracefulStop() {
        this.docSync.canGracefulStop();
      }
      /**
       * Wait for all data has been successfully saved to the primary storage.
       */
      waitForGracefulStop(abort) {
        return this.docSync.waitForGracefulStop(abort);
      }
      /**
       * Terminate the data sync process forcefully, which may cause data loss.
       * It is advised to invoke `canGracefulStop` before calling this method.
       */
      forceStop() {
        this.docSync.forceStop();
        this.blobSync.stop();
        this.awarenessSync.disconnect();
      }
      waitForSynced() {
        return this.docSync.waitForSynced();
      }
      static {
        __runInitializers(_classThis, _classExtraInitializers);
      }
    });
    return _classThis;
  })();
  class AssetsManager {
    constructor(options) {
      this._assetsMap = /* @__PURE__ */ new Map();
      this._blob = options.blob;
    }
    getAssets() {
      return this._assetsMap;
    }
    isEmpty() {
      return this._assetsMap.size === 0;
    }
    cleanup() {
      this._assetsMap.clear();
    }
    async readFromBlob(blobId) {
      const blob = await this._blob.get(blobId);
      assertExists(blob, `Blob ${blobId} not found in blob manager`);
      this._assetsMap.set(blobId, blob);
    }
    async writeToBlob(blobId) {
      const blob = this._assetsMap.get(blobId);
      assertExists(blob);
      const exists = await this._blob.get(blobId) !== null;
      if (exists) {
        return;
      }
      await this._blob.set(blobId, blob);
    }
  }
  function toJSON(value) {
    if (value instanceof Boxed) {
      return {
        [NATIVE_UNIQ_IDENTIFIER]: true,
        value: value.getValue()
      };
    }
    if (value instanceof Text) {
      return {
        [TEXT_UNIQ_IDENTIFIER]: true,
        delta: value.yText.toDelta()
      };
    }
    if (Array.isArray(value)) {
      return value.map(toJSON);
    }
    if (isPureObject(value)) {
      return Object.fromEntries(Object.entries(value).map(([key, value2]) => {
        return [key, toJSON(value2)];
      }));
    }
    return value;
  }
  function fromJSON(value) {
    if (Array.isArray(value)) {
      return value.map(fromJSON);
    }
    if (typeof value === "object" && value != null) {
      if (Reflect.has(value, NATIVE_UNIQ_IDENTIFIER)) {
        return new Boxed(Reflect.get(value, "value"));
      }
      if (Reflect.has(value, TEXT_UNIQ_IDENTIFIER)) {
        return new Text(Reflect.get(value, "delta"));
      }
      return Object.fromEntries(Object.entries(value).map(([key, value2]) => {
        return [key, fromJSON(value2)];
      }));
    }
    return value;
  }
  class BaseBlockTransformer {
    constructor() {
      this._internal = internalPrimitives;
    }
    _propsFromSnapshot(propsJson) {
      return Object.fromEntries(Object.entries(propsJson).map(([key, value]) => {
        return [key, fromJSON(value)];
      }));
    }
    _propsToSnapshot(model) {
      return Object.fromEntries(model.keys.map((key) => {
        const value = model[key];
        return [key, toJSON(value)];
      }));
    }
    fromSnapshot({ json }) {
      const { flavour, id: id2, version, props: _props } = json;
      const props = this._propsFromSnapshot(_props);
      return {
        id: id2,
        flavour,
        version: version ?? -1,
        props
      };
    }
    toSnapshot({ model }) {
      const { id: id2, flavour, version } = model;
      const props = this._propsToSnapshot(model);
      return {
        id: id2,
        flavour,
        version,
        props
      };
    }
  }
  function toDraftModel(origin) {
    const { id: id2, version, flavour, role: role2, keys: keys2, text, children } = origin;
    const props = origin.keys.reduce((acc, key) => {
      return {
        ...acc,
        [key]: origin[key]
      };
    }, {});
    return {
      id: id2,
      version,
      flavour,
      role: role2,
      keys: keys2,
      text,
      children: children.map(toDraftModel),
      ...props
    };
  }
  class Slice {
    get content() {
      return this.data.content;
    }
    get pageVersion() {
      return this.data.pageVersion;
    }
    get workspaceVersion() {
      return this.data.workspaceVersion;
    }
    get workspaceId() {
      return this.data.workspaceId;
    }
    get docId() {
      return this.data.pageId;
    }
    constructor(data) {
      this.data = data;
    }
    static fromModels(doc, models) {
      const meta = doc.collection.meta;
      const { pageVersion, workspaceVersion } = meta;
      assertExists(pageVersion);
      assertExists(workspaceVersion);
      return new Slice({
        content: models,
        workspaceId: doc.collection.id,
        pageId: doc.id,
        pageVersion,
        workspaceVersion
      });
    }
  }
  const BlockSnapshotSchema = objectType({
    type: literalType("block"),
    id: stringType(),
    flavour: stringType(),
    version: numberType().optional(),
    props: recordType(unknownType()),
    children: lazyType(() => BlockSnapshotSchema.array())
  });
  const SliceSnapshotSchema = objectType({
    type: literalType("slice"),
    content: BlockSnapshotSchema.array(),
    pageVersion: numberType(),
    workspaceVersion: numberType(),
    workspaceId: stringType(),
    pageId: stringType()
  });
  const CollectionInfoSnapshotSchema = objectType({
    id: stringType(),
    type: literalType("info"),
    pageVersion: numberType(),
    workspaceVersion: numberType(),
    properties: recordType(anyType())
  });
  const DocMetaSchema = objectType({
    id: stringType(),
    title: stringType(),
    createDate: numberType(),
    tags: arrayType(stringType())
  });
  const DocSnapshotSchema = objectType({
    type: literalType("page"),
    meta: DocMetaSchema,
    blocks: BlockSnapshotSchema
  });
  class Job {
    get collection() {
      return this._collection;
    }
    get assetsManager() {
      return this._assetsManager;
    }
    get assets() {
      return this._assetsManager.getAssets();
    }
    get adapterConfigs() {
      return this._adapterConfigs;
    }
    constructor({ collection, middlewares = [] }) {
      this._adapterConfigs = /* @__PURE__ */ new Map();
      this._slots = {
        beforeImport: new Slot(),
        afterImport: new Slot(),
        beforeExport: new Slot(),
        afterExport: new Slot()
      };
      this.blockToSnapshot = async (model) => {
        const snapshot2 = await this._blockToSnapshot(model);
        BlockSnapshotSchema.parse(snapshot2);
        return snapshot2;
      };
      this.snapshotToModelData = async (snapshot2) => {
        const { children, flavour, props, id: id2 } = snapshot2;
        const schema = this._getSchema(flavour);
        const snapshotLeaf = {
          id: id2,
          flavour,
          props
        };
        const transformer = this._getTransformer(schema);
        const modelData = await transformer.fromSnapshot({
          json: snapshotLeaf,
          assets: this._assetsManager,
          children
        });
        return modelData;
      };
      this.walk = (snapshot2, callback) => {
        const walk = (block) => {
          callback(block);
          if (block.children) {
            block.children.forEach(walk);
          }
        };
        walk(snapshot2.blocks);
      };
      this.snapshotToBlock = async (snapshot2, doc, parent, index) => {
        BlockSnapshotSchema.parse(snapshot2);
        const model = await this._snapshotToBlock(snapshot2, doc, parent, index);
        return model;
      };
      this.docToSnapshot = async (doc) => {
        this._slots.beforeExport.emit({
          type: "page",
          page: doc
        });
        const rootModel = doc.root;
        const meta = this._exportDocMeta(doc);
        assertExists(rootModel, "Root block not found in doc");
        const blocks = await this.blockToSnapshot(rootModel);
        const docSnapshot = {
          type: "page",
          meta,
          blocks
        };
        this._slots.afterExport.emit({
          type: "page",
          page: doc,
          snapshot: docSnapshot
        });
        DocSnapshotSchema.parse(docSnapshot);
        return docSnapshot;
      };
      this.snapshotToDoc = async (snapshot2) => {
        this._slots.beforeImport.emit({
          type: "page",
          snapshot: snapshot2
        });
        DocSnapshotSchema.parse(snapshot2);
        const { meta, blocks } = snapshot2;
        const doc = this._collection.createDoc({ id: meta.id });
        doc.load();
        await this.snapshotToBlock(blocks, doc);
        this._slots.afterImport.emit({
          type: "page",
          snapshot: snapshot2,
          page: doc
        });
        return doc;
      };
      this.collectionInfoToSnapshot = () => {
        this._slots.beforeExport.emit({
          type: "info"
        });
        const collectionMeta = this._getCollectionMeta();
        const snapshot2 = {
          type: "info",
          id: this._collection.id,
          ...collectionMeta
        };
        this._slots.afterExport.emit({
          type: "info",
          snapshot: snapshot2
        });
        CollectionInfoSnapshotSchema.parse(snapshot2);
        return snapshot2;
      };
      this.sliceToSnapshot = async (slice) => {
        this._slots.beforeExport.emit({
          type: "slice",
          slice
        });
        const { content, pageVersion, workspaceVersion, pageId, workspaceId } = slice.data;
        const contentSnapshot = [];
        for (const block of content) {
          contentSnapshot.push(await this.blockToSnapshot(block));
        }
        const snapshot2 = {
          type: "slice",
          workspaceId,
          pageId,
          pageVersion,
          workspaceVersion,
          content: contentSnapshot
        };
        this._slots.afterExport.emit({
          type: "slice",
          slice,
          snapshot: snapshot2
        });
        SliceSnapshotSchema.parse(snapshot2);
        return snapshot2;
      };
      this.snapshotToSlice = async (snapshot2, doc, parent, index) => {
        this._slots.beforeImport.emit({
          type: "slice",
          snapshot: snapshot2
        });
        SliceSnapshotSchema.parse(snapshot2);
        const { content, pageVersion, workspaceVersion, workspaceId, pageId } = snapshot2;
        const contentBlocks = [];
        for (const [i2, block] of content.entries()) {
          contentBlocks.push(await this._snapshotToBlock(block, doc, parent, (index ?? 0) + i2));
        }
        const slice = new Slice({
          content: contentBlocks.map((block) => toDraftModel(block)),
          pageVersion,
          workspaceVersion,
          workspaceId,
          pageId
        });
        this._slots.afterImport.emit({
          type: "slice",
          snapshot: snapshot2,
          slice
        });
        return slice;
      };
      this._collection = collection;
      this._assetsManager = new AssetsManager({ blob: collection.blobSync });
      middlewares.forEach((middleware) => {
        middleware({
          slots: this._slots,
          assetsManager: this._assetsManager,
          collection: this._collection,
          adapterConfigs: this._adapterConfigs
        });
      });
    }
    _getSchema(flavour) {
      const schema = this._collection.schema.flavourSchemaMap.get(flavour);
      assertExists(schema, `Flavour schema not found for ${flavour}`);
      return schema;
    }
    _getTransformer(schema) {
      return schema.transformer?.() ?? new BaseBlockTransformer();
    }
    _getCollectionMeta() {
      const { meta } = this._collection;
      const { pageVersion, workspaceVersion, docs } = meta;
      assertExists(pageVersion);
      assertExists(workspaceVersion);
      assertExists(docs);
      return {
        pageVersion,
        workspaceVersion,
        properties: {},
        // for backward compatibility
        pages: JSON.parse(JSON.stringify(docs))
      };
    }
    _exportDocMeta(doc) {
      const docMeta = doc.meta;
      assertExists(docMeta);
      return {
        id: docMeta.id,
        title: docMeta.title,
        createDate: docMeta.createDate,
        tags: []
        // for backward compatibility
      };
    }
    async _blockToSnapshot(model) {
      this._slots.beforeExport.emit({
        type: "block",
        model
      });
      const schema = this._getSchema(model.flavour);
      const transformer = this._getTransformer(schema);
      const snapshotLeaf = await transformer.toSnapshot({
        model,
        assets: this._assetsManager
      });
      const children = await Promise.all(model.children.map((child) => {
        return this._blockToSnapshot(child);
      }));
      const snapshot2 = {
        type: "block",
        ...snapshotLeaf,
        children
      };
      this._slots.afterExport.emit({
        type: "block",
        model,
        snapshot: snapshot2
      });
      return snapshot2;
    }
    async _snapshotToBlock(snapshot2, doc, parent, index) {
      this._slots.beforeImport.emit({
        type: "block",
        snapshot: snapshot2,
        parent,
        index
      });
      const { children, flavour, props, id: id2 } = snapshot2;
      const schema = this._getSchema(flavour);
      const snapshotLeaf = {
        id: id2,
        flavour,
        props
      };
      const transformer = this._getTransformer(schema);
      const modelData = await transformer.fromSnapshot({
        json: snapshotLeaf,
        assets: this._assetsManager,
        children
      });
      doc.addBlock(modelData.flavour, { ...modelData.props, id: modelData.id }, parent, index);
      for (const [index2, child] of children.entries()) {
        await this._snapshotToBlock(child, doc, id2, index2);
      }
      const model = doc.getBlockById(id2);
      assertExists(model);
      this._slots.afterImport.emit({
        type: "block",
        snapshot: snapshot2,
        model,
        parent,
        index
      });
      return model;
    }
    reset() {
      this._assetsManager.cleanup();
    }
  }
  const env = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : (
    // @ts-ignore
    typeof global !== "undefined" ? (
      // @ts-ignore
      global
    ) : {}
  );
  const importIdentifier = "__ $BLOCKSUITE_STORE$ __";
  if (env[importIdentifier] === true) {
    console.error("@blocksuite/store was already imported. This breaks constructor checks and will lead to issues!");
  }
  env[importIdentifier] = true;
  const store = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    ASTWalker,
    AssetsManager,
    AwarenessStore,
    BaseAdapter,
    BaseBlockTransformer,
    BaseReactiveYData,
    Block,
    BlockCollection,
    BlockModel,
    BlockSchema,
    BlockSnapshotSchema,
    BlockSuiteDoc,
    get BlockViewType() {
      return BlockViewType;
    },
    Boxed,
    CollectionInfoSnapshotSchema,
    Doc,
    DocCollection,
    DocSnapshotSchema,
    get Generator() {
      return Generator;
    },
    Job,
    MemoryBlobCRUD,
    ReactiveYArray,
    ReactiveYMap,
    Schema,
    Slice,
    SliceSnapshotSchema,
    Slot,
    Space,
    Store,
    Text,
    Utils: utils,
    collectionMigrations,
    createAutoIncrementIdGenerator,
    createAutoIncrementIdGeneratorByClientId,
    createYProxy,
    defaultBlockSelector,
    defineBlockSchema,
    docMigrations,
    extMimeMap,
    fromJSON,
    getAssetName,
    internalPrimitives,
    isPureObject,
    mimeExtMap,
    nanoid,
    native2Y,
    popProp,
    stashProp,
    toDraftModel,
    toJSON,
    uuidv4,
    y2Native
  }, Symbol.toStringTag, { value: "Module" }));
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = globalThis, e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
  let n$3 = class n {
    constructor(t2, e2, o2) {
      if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
      let t2 = this.o;
      const s2 = this.t;
      if (e$2 && void 0 === t2) {
        const e2 = void 0 !== s2 && 1 === s2.length;
        e2 && (t2 = o$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$4.set(s2, t2));
      }
      return t2;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$2 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
    const o2 = 1 === t2.length ? t2[0] : e2.reduce(((e3, s2, o3) => e3 + ((t3) => {
      if (true === t3._$cssResult$) return t3.cssText;
      if ("number" == typeof t3) return t3;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t2[o3 + 1]), t2[0]);
    return new n$3(o2, t2, s$2);
  }, S$1 = (s2, o2) => {
    if (e$2) s2.adoptedStyleSheets = o2.map(((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet));
    else for (const e2 of o2) {
      const o3 = document.createElement("style"), n2 = t$1.litNonce;
      void 0 !== n2 && o3.setAttribute("nonce", n2), o3.textContent = e2.cssText, s2.appendChild(o3);
    }
  }, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
    let e2 = "";
    for (const s2 of t3.cssRules) e2 += s2.cssText;
    return r$2(e2);
  })(t2) : t2;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$1, getOwnPropertySymbols: o$3, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l$1 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, s2) {
    let i2 = t2;
    switch (s2) {
      case Boolean:
        i2 = null !== t2;
        break;
      case Number:
        i2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i2 = JSON.parse(t2);
        } catch (t3) {
          i2 = null;
        }
    }
    return i2;
  } }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
  Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  let y$1 = class y extends HTMLElement {
    static addInitializer(t2) {
      this._$Ei(), (this.l ??= []).push(t2);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t2, s2 = b$1) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
        const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
        void 0 !== h2 && e$1(this.prototype, t2, h2);
      }
    }
    static getPropertyDescriptor(t2, s2, i2) {
      const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
        return this[s2];
      }, set(t3) {
        this[s2] = t3;
      } };
      return { get: e2, set(s3) {
        const h2 = e2?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i2);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t2) {
      return this.elementProperties.get(t2) ?? b$1;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      const t2 = n$2(this);
      t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        const t3 = this.properties, s2 = [...r$1(t3), ...o$3(t3)];
        for (const i2 of s2) this.createProperty(i2, t3[i2]);
      }
      const t2 = this[Symbol.metadata];
      if (null !== t2) {
        const s2 = litPropertyMetadata.get(t2);
        if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t3, s2] of this.elementProperties) {
        const i2 = this._$Eu(t3, s2);
        void 0 !== i2 && this._$Eh.set(i2, t3);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i2 = [];
      if (Array.isArray(s2)) {
        const e2 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e2) i2.unshift(c$2(s3));
      } else void 0 !== s2 && i2.push(c$2(s2));
      return i2;
    }
    static _$Eu(t2, s2) {
      const i2 = s2.attribute;
      return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise(((t2) => this.enableUpdating = t2)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t2) => t2(this)));
    }
    addController(t2) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
    }
    removeController(t2) {
      this._$EO?.delete(t2);
    }
    _$E_() {
      const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
      for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
      t2.size > 0 && (this._$Ep = t2);
    }
    createRenderRoot() {
      const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t2, this.constructor.elementStyles), t2;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(((t2) => t2.hostConnected?.()));
    }
    enableUpdating(t2) {
    }
    disconnectedCallback() {
      this._$EO?.forEach(((t2) => t2.hostDisconnected?.()));
    }
    attributeChangedCallback(t2, s2, i2) {
      this._$AK(t2, i2);
    }
    _$ET(t2, s2) {
      const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
      if (void 0 !== e2 && true === i2.reflect) {
        const h2 = (void 0 !== i2.converter?.toAttribute ? i2.converter : u$1).toAttribute(s2, i2.type);
        this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
      }
    }
    _$AK(t2, s2) {
      const i2 = this.constructor, e2 = i2._$Eh.get(t2);
      if (void 0 !== e2 && this._$Em !== e2) {
        const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
        this._$Em = e2;
        const r2 = h2.fromAttribute(s2, t3.type);
        this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
      }
    }
    requestUpdate(t2, s2, i2) {
      if (void 0 !== t2) {
        const e2 = this.constructor, h2 = this[t2];
        if (i2 ??= e2.getPropertyOptions(t2), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e2._$Eu(t2, i2)))) return;
        this.C(t2, s2, i2);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
      i2 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && await t2, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t4, s3] of this._$Ep) this[t4] = s3;
          this._$Ep = void 0;
        }
        const t3 = this.constructor.elementProperties;
        if (t3.size > 0) for (const [s3, i2] of t3) {
          const { wrapped: t4 } = i2, e2 = this[s3];
          true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
        }
      }
      let t2 = false;
      const s2 = this._$AL;
      try {
        t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach(((t3) => t3.hostUpdate?.())), this.update(s2)) : this._$EM();
      } catch (s3) {
        throw t2 = false, this._$EM(), s3;
      }
      t2 && this._$AE(s2);
    }
    willUpdate(t2) {
    }
    _$AE(t2) {
      this._$EO?.forEach(((t3) => t3.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      this._$Eq &&= this._$Eq.forEach(((t3) => this._$ET(t3, this[t3]))), this._$EM();
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  };
  y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.1");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t = globalThis, i$1 = t.trustedTypes, s$1 = i$1 ? i$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$2 = "?" + h, n$1 = `<${o$2}>`, r = document, l = () => r.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129);
  function P(t2, i2) {
    if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s$1 ? s$1.createHTML(i2) : i2;
  }
  const V = (t2, i2) => {
    const s2 = t2.length - 1, o2 = [];
    let r2, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = f;
    for (let i3 = 0; i3 < s2; i3++) {
      const s3 = t2[i3];
      let a2, u2, d2 = -1, y2 = 0;
      for (; y2 < s3.length && (c2.lastIndex = y2, u2 = c2.exec(s3), null !== u2); ) y2 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
      const x2 = c2 === m && t2[i3 + 1].startsWith("/>") ? " " : "";
      l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i3 : x2);
    }
    return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), o2];
  };
  class N {
    constructor({ strings: t2, _$litType$: s2 }, n2) {
      let r2;
      this.parts = [];
      let c2 = 0, a2 = 0;
      const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s2);
      if (this.el = N.createElement(f2, n2), C.currentNode = this.el.content, 2 === s2 || 3 === s2) {
        const t3 = this.el.content.firstChild;
        t3.replaceWith(...t3.childNodes);
      }
      for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
        if (1 === r2.nodeType) {
          if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e)) {
            const i2 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i2);
            d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
          } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
          if ($.test(r2.tagName)) {
            const t3 = r2.textContent.split(h), s3 = t3.length - 1;
            if (s3 > 0) {
              r2.textContent = i$1 ? i$1.emptyScript : "";
              for (let i2 = 0; i2 < s3; i2++) r2.append(t3[i2], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
              r2.append(t3[s3], l());
            }
          }
        } else if (8 === r2.nodeType) if (r2.data === o$2) d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
        c2++;
      }
    }
    static createElement(t2, i2) {
      const s2 = r.createElement("template");
      return s2.innerHTML = t2, s2;
    }
  }
  function S(t2, i2, s2 = t2, e2) {
    if (i2 === T) return i2;
    let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
    const o2 = c(i2) ? void 0 : i2._$litDirective$;
    return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = S(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
  }
  class M {
    constructor(t2, i2) {
      this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t2) {
      const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? r).importNode(i2, true);
      C.currentNode = e2;
      let h2 = C.nextNode(), o2 = 0, n2 = 0, l2 = s2[0];
      for (; void 0 !== l2; ) {
        if (o2 === l2.index) {
          let i3;
          2 === l2.type ? i3 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new z(h2, this, t2)), this._$AV.push(i3), l2 = s2[++n2];
        }
        o2 !== l2?.index && (h2 = C.nextNode(), o2++);
      }
      return C.currentNode = r, e2;
    }
    p(t2) {
      let i2 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t2, i2, s2, e2) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
    }
    get parentNode() {
      let t2 = this._$AA.parentNode;
      const i2 = this._$AM;
      return void 0 !== i2 && 11 === t2?.nodeType && (t2 = i2.parentNode), t2;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t2, i2 = this) {
      t2 = S(this, t2, i2), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
    }
    O(t2) {
      return this._$AA.parentNode.insertBefore(t2, this._$AB);
    }
    T(t2) {
      this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
    }
    _(t2) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
      const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e2) this._$AH.p(i2);
      else {
        const t3 = new M(e2, this), s3 = t3.u(this.options);
        t3.p(i2), this.T(s3), this._$AH = t3;
      }
    }
    _$AC(t2) {
      let i2 = A.get(t2.strings);
      return void 0 === i2 && A.set(t2.strings, i2 = new N(t2)), i2;
    }
    k(t2) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      const i2 = this._$AH;
      let s2, e2 = 0;
      for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
      e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
      for (this._$AP?.(false, true, i2); t2 !== this._$AB; ) {
        const i3 = t2.nextSibling;
        t2.remove(), t2 = i3;
      }
    }
    setConnected(t2) {
      void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
    }
  }
  class k {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t2, i2, s2, e2, h2) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
    }
    _$AI(t2, i2 = this, s2, e2) {
      const h2 = this.strings;
      let o2 = false;
      if (void 0 === h2) t2 = S(this, t2, i2, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
      else {
        const e3 = t2;
        let n2, r2;
        for (t2 = h2[0], n2 = 0; n2 < h2.length - 1; n2++) r2 = S(this, e3[s2 + n2], i2, n2), r2 === T && (r2 = this._$AH[n2]), o2 ||= !c(r2) || r2 !== this._$AH[n2], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n2 + 1]), this._$AH[n2] = r2;
      }
      o2 && !e2 && this.j(t2);
    }
    j(t2) {
      t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
    }
  }
  class H extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t2) {
      this.element[this.name] = t2 === E ? void 0 : t2;
    }
  }
  class I extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t2) {
      this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
    }
  }
  class L extends k {
    constructor(t2, i2, s2, e2, h2) {
      super(t2, i2, s2, e2, h2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
      if ((t2 = S(this, t2, i2, 0) ?? E) === T) return;
      const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
      e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
    }
  }
  class z {
    constructor(t2, i2, s2) {
      this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t2) {
      S(this, t2);
    }
  }
  const Z = { M: e, P: h, A: o$2, C: 1, L: V, R: M, D: u, V: S, I: R, H: k, N: I, U: L, B: H, F: z }, j = t.litHtmlPolyfillSupport;
  j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.1");
  const B = (t2, i2, s2) => {
    const e2 = s2?.renderBefore ?? i2;
    let h2 = e2._$litPart$;
    if (void 0 === h2) {
      const t3 = s2?.renderBefore ?? null;
      e2._$litPart$ = h2 = new R(i2.insertBefore(l(), t3), t3, void 0, s2 ?? {});
    }
    return h2._$AI(t2), h2;
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const s = globalThis;
  class i extends y$1 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t2 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t2.firstChild, t2;
    }
    update(t2) {
      const r2 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(r2, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  }
  i._$litElement$ = true, i["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i });
  const o$1 = s.litElementPolyfillSupport;
  o$1?.({ LitElement: i });
  const n = { _$AK: (t2, e2, r2) => {
    t2._$AK(e2, r2);
  }, _$AL: (t2) => t2._$AL };
  (s.litElementVersions ??= []).push("4.2.1");
  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const o = false;
  const lit = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    CSSResult: n$3,
    LitElement: i,
    ReactiveElement: y$1,
    _$LE: n,
    _$LH: Z,
    adoptStyles: S$1,
    css: i$3,
    defaultConverter: u$1,
    getCompatibleStyle: c$2,
    html: x,
    isServer: o,
    mathml: w,
    noChange: T,
    notEqual: f$1,
    nothing: E,
    render: B,
    supportsAdoptingStyleSheets: e$2,
    svg: b,
    unsafeCSS: r$2
  }, Symbol.toStringTag, { value: "Module" }));
  const win = window;
  win.blocksuite = win.blocksuite || {};
  win.blocksuite.store = store;
  win.blocksuite.lit = lit;
  win.blocksuite.yjs = yjs;
}));
