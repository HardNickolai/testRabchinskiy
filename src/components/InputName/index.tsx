import { Input } from "@mui/material";
import { IPropsSetTextName } from "../../interface";
import { recordProcessing } from "../../utils";
import "./inputName.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const InputName = (props: IPropsSetTextName) => {
  const { stateTextName, textName, setStateTextName, setTextName } =
    props.props;
  return (
    <div className="block-input-name">
      <p className="block-label-text">Имя:</p>
      <div className="block-main-text">
        <Input
          color="info"
          placeholder="Иван"
          onChange={(e) =>
            recordProcessing(
              "NAME",
              e.target.value,
              setTextName,
              setStateTextName
            )
          }
          className="block-input-text"
          value={textName}
        />
        {stateTextName ? (
          <CheckCircleIcon color="success" />
        ) : (
          <ErrorIcon color="error" />
        )}
      </div>
    </div>
  );
};

export default InputName;
