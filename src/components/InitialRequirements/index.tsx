import { useState } from "react";

import { ProjectStepper } from "../../components/ProjectStepper";
import { SummaryWrapper } from "./styles";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import { Features } from "./Features";

const InitialRequirements = () => {
  const [initialRequirementsStep, setInitialRequirementsStep] = useState(1);

  const steps = [
    { key: 0, label: "Organization Structure", done: false },
    { key: 1, label: "Features", done: false },
    { key: 2, label: "Colours", done: true },
    { key: 3, label: "Graphics", done: true },
    { key: 4, label: "Membership Structure", done: false },
  ];

  const renderSwitch = (param: number) => {
    switch (param) {
      case 0:
        return <h1>Organization Structure</h1>;
      case 1:
        return <Features />;
      case 2:
        return <h1>Colours</h1>;
      case 3:
        return <h1>Graphics</h1>;
      case 4:
        return <h1>Membership Structure</h1>;
      default:
        return <h1>NOT FOUND</h1>;
    }
  };

  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" />}>
          <SummaryWrapper>
            <h3>Initial Requirements</h3>
            <ProjectStepper
              steps={steps}
              activeStep={initialRequirementsStep}
              setActiveStep={setInitialRequirementsStep}
            />
            <div />
          </SummaryWrapper>
          <Divider />
        </AccordionSummary>
        <AccordionDetails>{renderSwitch(initialRequirementsStep)}</AccordionDetails>
      </Accordion>
    </>
  );
};

export { InitialRequirements };
