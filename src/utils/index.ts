export const validationCheckTextPhone = (text: string) => {
  if (text.length === 0) {
    return false;
  }
  const res = "+" + text.match(/\d/g)?.join("");

  if (res?.length === 12) {
    return res;
  } else {
    return false;
  }
};

export const validationCheckTextName = (text: string) => {
  const res = text.match(/^[a-zA-Zа-яА-Я]+$/)?.join("");
  if (res === undefined) {
    return false;
  } else {
    return res;
  }
};

export const validationCheckTextMessage = (text: string) => {
  if (!text.trim().length) {
    return false;
  } else {
    return text;
  }
};

export const recordProcessing = (
  method: string,
  text: string,
  changeText: React.Dispatch<React.SetStateAction<string>>,
  changeStateBlock: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (method === "PHONE") {
    changeText(text);
    validationCheckTextPhone(text)
      ? changeStateBlock(true)
      : changeStateBlock(false);
  } else if (method === "NAME") {
    changeText(text);
    validationCheckTextName(text)
      ? changeStateBlock(true)
      : changeStateBlock(false);
  } else if (method === "MESSAGE") {
    changeText(text);
    validationCheckTextMessage(text)
      ? changeStateBlock(true)
      : changeStateBlock(false);
  }
};
