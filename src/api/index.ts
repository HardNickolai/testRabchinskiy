import { IMessageRequest } from "../interface";

export const apiRequestMessage = async (
  text: string,
  param: IMessageRequest
) => {
  if (text === "POST") {
    JSON.stringify(param);
    return { status: 200 };
  } else {
    return { status: 500 };
  }
};

export const apiRequestFile = async (text: string, param?: IMessageRequest) => {
  if (text === "GET") {
    return { status: 200 };
  } else if (text === "POST") {
    const file = JSON.stringify(param);
    return { status: 200, file: file };
  }
};
