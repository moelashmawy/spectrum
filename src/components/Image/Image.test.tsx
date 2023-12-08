import Image from "./Image";
import { createSnapshot } from "../../utils/test";

describe("Image", () => {
  test("Image snapshot when isAscending", () => {
    createSnapshot(
      <Image isAscending image="mock_img.jpg" width={60} height={60} />,
    );
  });

  test("Image snapshot when not isAscending", () => {
    createSnapshot(
      <Image isAscending={false} image="mock_img.jpg" width={60} height={60} />,
    );
  });
});
