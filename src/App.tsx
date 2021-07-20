import 'twin.macro';
import Text from './core/text';

const App = () => {
  return (
    <>
      <div>
        <Text size="xl">Text Size</Text>
        <Text size="xs">Extra Small</Text>
        <Text size="sm">Small</Text>
        <Text size="md">Medium</Text>
        <Text size="lg">Large</Text>
        <Text size="xl">Extra Large</Text>
      </div>

      <div tw="mt-4">
        <Text color="primary">Text Color</Text>
        <Text color="primary">Primary</Text>
        <Text color="secondary">Secondary</Text>
        <Text color="success">Success</Text>
        <Text color="danger">Danger</Text>
        <Text color="warning">Warning</Text>
        <Text color="info">Info</Text>
      </div>
    </>
  );
};

export default App;
