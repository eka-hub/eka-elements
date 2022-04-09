import { renderHook, act } from "@testing-library/react-hooks";
import useConnection from "./useConnection";

describe("useConnection test", () => {
  test("Should set connection", () => {
    const { result } = renderHook(() => useConnection());

    act(() => {
      result.current.setConnected(false);
    });
    expect(result.current.isConnected).toBe(false);

    act(() => {
      result.current.setConnected(undefined); // falsy
    });
    expect(result.current.isConnected).toBeFalsy();

    act(() => {
      result.current.setConnected({}); // truthy
    });
    expect(result.current.isConnected).toBeTruthy();
  });
});
