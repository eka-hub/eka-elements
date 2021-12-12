import { renderHook, act } from "@testing-library/react-hooks";
import useDarkMode from "./useDarkMode";

describe("useDarkMode test", () => {
  test("Should toggle the mode", () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      // result.current.toggleMode();
      // result.current.increment();
    });

    // console.log(result);
    expect(result.current.dark).toBe(false)
  });
});
