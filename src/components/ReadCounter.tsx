interface ReadCounterProps {
    readCount: number;
    total: number;
}

function ReadCounter({ readCount, total }: ReadCounterProps) {
  return (
    <p>
      {readCount} of {total} read
    </p>
  );
}

export default ReadCounter;