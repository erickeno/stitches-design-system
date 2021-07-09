import { ArrowUpIcon } from "@radix-ui/react-icons";
import { styled, global } from "./stitches.config";
import { Button } from "./Button";
import { Avatar } from "./Avatar";

const Box = styled("div", {});

const globalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    WebkitFontSmoothing: "antialiased",
    fontFamily: "$inter",
    fontStretch: "100%"
  }
});

export default function App() {
  globalStyles();
  return (
    <>
      <Box
        css={{
          m: "$2",
          display: "flex",
          flexWrap: "wrap",
          gap: "$2",
          alignItems: "center"
        }}
      >
        <Button size="small" shape="cirlce">
          <ArrowUpIcon />
        </Button>
        <Button shape="cirlce" type="error">
          <ArrowUpIcon />
        </Button>
        <Button type="secondary" shape="square">
          <ArrowUpIcon />
        </Button>
        <Button size="large" shape="square">
          <ArrowUpIcon />
        </Button>
        <Button size="small">Button</Button>
        <Button>Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button type="secondary">Upload</Button>
        <Button type="success">Upload</Button>
        <Button type="error">Upload</Button>
        <Button type="warning">Upload</Button>
        <Button variant="shadow" type="secondary">
          Upload
        </Button>
      </Box>
      <Box css={{ m: "$2" }}>
        <Avatar image="https://picsum.photos/id/1005/400/400" />
      </Box>
    </>
  );
}
