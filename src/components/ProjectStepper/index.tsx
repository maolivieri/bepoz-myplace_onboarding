import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";

const StyledConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#887BB0",
    },
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.success.main,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))(StepConnector);

const useStepIconStyles = makeStyles((theme) => ({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#887BB0",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#94C973",
    zIndex: 1,
    fontSize: 18,
  },
}));

interface IStepIcon {
  active: boolean;
  completed: boolean;
}
const StyledStepIcon = (props: IStepIcon) => {
  const classes = useStepIconStyles();
  const { active, completed } = props;
  const isActive = active ? classes.active : "";

  return (
    <div className={[classes.root, isActive].join(" ")}>
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
};

interface IProjectStepper {
  steps: {
    key: number;
    label: string;
    done: boolean;
  }[];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}

const ProjectStepper = ({ steps, activeStep, setActiveStep }: IProjectStepper) => {
  return (
    <Stepper style={{ flex: 1 }} alternativeLabel activeStep={activeStep} connector={<StyledConnector />}>
      {steps.map((step, index) => (
        <Step
          key={step.key}
          onClick={(event) => {
            event.stopPropagation();
            setActiveStep(step.key);
          }}
          completed={step.done}
        >
          <StepLabel StepIconComponent={StyledStepIcon}>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export { ProjectStepper };
