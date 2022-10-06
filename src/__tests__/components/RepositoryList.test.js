import { render } from "@testing-library/react-native";
import RepositoryListContainer from "../../components/repository/RepositoryListContainer";
import { repositories } from "../../mocks/repositories";

describe("<RepositoryList/>", () => {
  describe("<RepositoryListContainer/>", () => {
    it("renders first repository information correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer data={repositories} />
      );
      const [firstRepository, secondRepository] =
        getAllByTestId("repositoryItem");

      expect(firstRepository).toHaveTextContent("jaredpalmer/formik");
      expect(firstRepository).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(firstRepository).toHaveTextContent("TypeScript");
      expect(firstRepository).toHaveTextContent("1.6k");
      expect(firstRepository).toHaveTextContent("21.9k");
      expect(firstRepository).toHaveTextContent("88");
      expect(firstRepository).toHaveTextContent("3");

      expect(secondRepository).toHaveTextContent("async-library/react-async");
      expect(secondRepository).toHaveTextContent(
        "Flexible promise-based React data loader"
      );
      expect(secondRepository).toHaveTextContent("JavaScript");
      expect(secondRepository).toHaveTextContent("69");
      expect(secondRepository).toHaveTextContent("1.8k");
      expect(secondRepository).toHaveTextContent("72");
      expect(secondRepository).toHaveTextContent("3");
    });
  });
});
