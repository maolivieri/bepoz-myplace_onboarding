import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";

import { InitialRequirements } from "../../components/InitialRequirements";

interface IUrlParams {
  id: string;
}

const ProjectRequirements = () => {
  const { id }: IUrlParams = useParams();

  const [structure, setStructure] = useState([]);
  const [venues, setVenues] = useState([]);
  const [features, setFeatures] = useState({
    main1: "whatson",
    main2: "offers",
    main3: "giftcertificate",
    main4: "vouchers",
    bottom1: "referafriend",
    bottom2: "url",
    bottom3: "yourorder",
    bottom4: "location",
    side1: "ticket",
    side2: "null",
    side3: "null",
    side4: "null",
    side5: "null",
    side6: "null",
    side7: "null",
    side8: "null",
    side9: "null",
    side10: "null",
    side11: "feedback",
    side12: "faq",
    side13: "survey",
    side14: "legals",
  });

  const [colours, setColours] = useState({
    backgroundPrimary: "#202224",
    backgroundSecondary: "#fff",
    backgroundBottom: "#25282A",
    backgroundHeader: "#E8E8E8",
    backgroundSide: "#E8E8E8",
    backgroundHomeButtons: "#25282A",
    textPrimary: "#fff",
    textSecondary: "#fff",
    textHighlight: "#65C8C6",
    textSide: "#fff",
    textHeader: "#fff",
    textBottom: "#fff",
    textPrimaryLoginButton: "#fff",
    textSecondaryLoginButton: "#222",
    textPrimaryTab: "#fff",
    textSecondaryTab: "#222",
    loginButtonPrimary: "#fff",
    loginButtonSecondary: "#012d6b",
    tabPrimary: "#fff",
    tabSecondary: "#012d6b",
    // textPrimaryHomeButton: "#fff",
    // textSecondaryHomeButton: "#222",
    // homeButtonPrimary: "#fff",
    // homeButtonSecondary: "#012d6b",
  });

  const [images, setImages] = useState({
    splash: "",
    largeLogo: "",
    smallLogo: "",
    appLogo: "",
  });

  const [flags, setFlags] = useState(null);

  return (
    <Container>
      <InitialRequirements />
    </Container>
  );
};

export { ProjectRequirements };
