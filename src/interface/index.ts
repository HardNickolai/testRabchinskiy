interface IPropsPhoneFunc {
  stateTextPhone: boolean;
  setStateTextPhone: React.Dispatch<React.SetStateAction<boolean>>;
  textPhone: string;
  setTextPhone: React.Dispatch<React.SetStateAction<string>>;
}

interface IPropsNameFunc {
  stateTextName: boolean;
  textName: string;
  setStateTextName: React.Dispatch<React.SetStateAction<boolean>>;
  setTextName: React.Dispatch<React.SetStateAction<string>>;
}

interface IPropsMessageFunc {
  stateTextMessage: boolean;
  textMessage: string;
  setStateTextMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setTextMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPropsSetTextPhone {
  props: IPropsPhoneFunc;
}

export interface IPropsSetTextName {
  props: IPropsNameFunc;
}

export interface IPropsSetTextMessage {
  props: IPropsMessageFunc;
}

export interface IMessageRequest {
  phone: string;
  name: string;
  textMessage: string;
}
