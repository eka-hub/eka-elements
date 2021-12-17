import { renderHook, act } from "@testing-library/react-hooks";
import useDarkMode from "./useDarkMode";

describe("useDarkMode test", () => {
  test("Should toggle the mode", () => {
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggleMode();
    });
    expect(result.current.dark).toBe(true);

    act(() => {
      result.current.toggleMode();
    });
    expect(result.current.dark).toBe(false);
  });

  test("Should set dark mode", () => {
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      result.current.setMode("dark");
    });
    expect(result.current.dark).toBe(true);

    act(() => {
      result.current.setMode("something else");
    });
    expect(result.current.dark).toBe(false);
  });
});
