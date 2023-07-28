export default function Footer({locations}) {
  return (
    <footer>
      <div className="flex items-center justify-center  h-12 text-1xl pt-8 pb-8 pl-4 font- bg-green-500">
        <p>{locations.length} Locations World Wide</p>
      </div>
    </footer>
  );
}
