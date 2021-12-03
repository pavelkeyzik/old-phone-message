import { PhoneConfig } from "./phone-config";

describe("Phone Config", () => {
  const phoneConfig = new PhoneConfig();

  it("should return correct count of pressing by key", () => {
    const path = phoneConfig.getSymbolPath("C");

    expect(path).toEqual("222");
  });

  it("should return key hold if the symbol is equal to button", () => {
    const path = phoneConfig.getSymbolPath("*");

    expect(path).toEqual("*-");
  });
});
