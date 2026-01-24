export function ThreePoints() {
  return (
    <section className="h-screen overflow-hidden flex items-center justify-center bg-black">
      <div className="w-full h-full flex items-center justify-center px-20">
        <div className="flex items-center justify-center gap-32 w-full">
          {/* 1 */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[280px] font-black text-[#FCCE00] leading-none tracking-tighter">
              1
            </span>
          </div>

          {/* 2 */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[280px] font-black text-[#FCCE00] leading-none tracking-tighter">
              2
            </span>
          </div>

          {/* 3 */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[280px] font-black text-[#FCCE00] leading-none tracking-tighter">
              3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
