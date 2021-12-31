export default function Error({ children: errorMessage }) {
  return (
    <div className="text-center mt-2 pt-4">
      <span className="bg-red-200 text-red-900 font-semibold rounded-lg p-2">
        {errorMessage}
      </span>
    </div>
  );
}
