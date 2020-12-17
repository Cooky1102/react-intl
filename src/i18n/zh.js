import { defineMessages } from "react-intl";

export default defineMessages({
  simple: "你好 world",
  placeholder: "你好 {name}",
  date: "日期 {ts, date}",
  time: "时间 {ts, time}",
  number: "随机数 {num, number}",
  plural: "我有 {num, plural, one {# 条狗} other {# 条狗}}", //plural 复数
  select: "我是 {gender, select, male {男生} female {女生}}", //select 选择
  selectordinal: `我是 {order, selectordinal, 
        one {#st person} 
        two {#nd person}
        =3 {#rd person} 
        other {#th person}
    }`, //索引选择
  richtext: "我有 <bold>{num, plural, one {# 条狗} other {# 条狗}}</bold>", // 富文本 + 复数
  richertext:
    "我有 & < &nbsp; <bold>{num, plural, one {# & 条狗} other {# 条狗}}</bold>",
  unicode: "你好\u0020{placeholder}"
});
