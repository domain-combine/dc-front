import React from "react";

import { ReactComponent as BlueHost } from "./BlueHost.svg";
import { ReactComponent as DirectHosting } from "./DirectHosting.svg";
import { ReactComponent as NameDotCom } from "./NameDotCom.svg";

interface SellerLogoProps {
  className: string;
  id?: string;
}

const Gabia = ({ className, id }: SellerLogoProps) => (
  <img
    className={className}
    id={id}
    src={require("./Gabia.png")}
    alt="가비아 로고"
  />
);

const GoDaddy = ({ className, id }: SellerLogoProps) => (
  <img
    className={className}
    id={id}
    src={require("./GoDaddy.png")}
    alt="고대디 로고"
  />
);

const HostingKr = ({ className, id }: SellerLogoProps) => (
  <img
    className={className}
    id={id}
    src={require("./HostingKr.png")}
    alt="HostingKr 로고"
  />
);

const MailPlug = ({ className, id }: SellerLogoProps) => (
  <img
    className={className}
    id={id}
    src={require("./MailPlug.png")}
    alt="MailPlug 로고"
  />
);

const OnlyDomains = ({ className, id }: SellerLogoProps) => (
  <img
    className={className}
    id={id}
    src={require("./OnlyDomains.png")}
    alt="OnlyDomains 로고"
  />
);

export {
  BlueHost,
  DirectHosting,
  NameDotCom,
  Gabia,
  GoDaddy,
  HostingKr,
  MailPlug,
  OnlyDomains
};
