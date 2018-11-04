/**
 * utf16字符串转实体字符
 * @param {string} str 待转义的字符串 
 */
export function utf16toEntities(str) {
  if (!str) return "";
  var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
  // 检测utf16字符正则
  str = str.replace(patt, function(char) {
    var H, L, code;
    if (char.length === 2) {
      H = char.charCodeAt(0);
      // 取出高位
      L = char.charCodeAt(1);
      // 取出低位
      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00;
      // 转换算法
      return "&#" + code + ";";
    } else {
      return char;
    }
  });
  return str;
}