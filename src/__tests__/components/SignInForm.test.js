import { fireEvent, render, waitFor } from "@testing-library/react-native";
import SignInContainer from "../../components/signIn/signInFormContainer";

describe("<SignInForm/>", () => {
  describe("<SignInFormContainer/>", () => {
    it("onSubmit event is called with correct arguments when a validad form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <SignInContainer onSubmit={onSubmit} />
      );
      fireEvent.changeText(getByPlaceholderText("Username"), "diego");
      fireEvent.changeText(getByPlaceholderText("Password"), "dieguito");
      fireEvent.press(getByText("Sign in"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "diego",
          password: "dieguito",
        });
      });
    });
  });
});
