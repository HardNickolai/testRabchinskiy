import MaskedInput from "react-text-mask";
import { IPropsSetTextPhone } from "../../interface";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import "./inputPhone.css";
import { recordProcessing } from "../../utils";

const InputPhone = (props: IPropsSetTextPhone) => {
  const {
    stateTextPhone,
    textPhone,
    setStateTextPhone,
    setTextPhone
  } = props.props;

  return (
    <div className="block-input-phone">
      <p className="block-label-text">Телефон:</p>
      <div className="block-main-text">
        <MaskedInput
          mask={[
            "+",
            "7",
            " ",
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
          ]}
          guide={true}
          showMask={true}
          onChange={(e) =>
            recordProcessing(
              "PHONE",
              e.target.value,
              setTextPhone,
              setStateTextPhone
            )
          }
          className="block-input-text"
          value={textPhone}
        />
        {stateTextPhone ? (
          <CheckCircleIcon color="success" />
        ) : (
          <ErrorIcon color="error" />
        )}
      </div>
    </div>
  );
};

export default InputPhone;
