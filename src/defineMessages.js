import { defineMessages } from "react-intl";

export default defineMessages({
  myMessage: {
    id: "myMessage",
    description: "描述信息",
    defaultMessage: "中文"
  },
  zh: {
    // name: {
    //   id: "app.name", // 唯一，支持嵌套
    //   defaultMessage: "名字"
    // },
    myMessage: "sadfasdfasdf",
    myMessageWithRichText: {
      id: "myMessageWithRichText",
      description: "描述信息-带格式",
      defaultMessage: "中文，<bold>{name}</bold>"
    }
  },
  en: {
    // name: {
    //   id: "app.name",
    //   defaultMessage: "Name"
    // },
    myMessage: {
      id: "myMessage",
      description: "description",
      defaultMessage: "English"
    },
    myMessageWithRichText: {
      id: "myMessageWithRichText",
      description: "description",
      defaultMessage: "English,<bold>{name}</bold>"
    }
  }
});
