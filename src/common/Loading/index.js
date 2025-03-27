import { Subtitle } from "../../features/personalHomepage/PersonalHomepage/Portfolio/Header/styled";
import { LoadingWrapper, LoadingIcon } from "./styled";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Subtitle>Please wait, projects are being loaded...</Subtitle>
      <LoadingIcon />
    </LoadingWrapper>
  );
};
