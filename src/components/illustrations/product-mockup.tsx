/** Abstract admin window and phone, built from skeleton shapes only. */
export function ProductMockup() {
  return (
    <div aria-hidden className="relative h-[380px] w-full max-w-[440px]">
      <div className="absolute top-0 right-10 left-0 h-[292px] overflow-hidden rounded-2xl border border-white/10 bg-[#151922]">
        <div className="flex h-[33px] items-center gap-1.5 border-b border-line px-3.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-2 rounded-full bg-[#2a3040]" />
          ))}
        </div>
        <div className="flex h-full">
          <div className="flex w-[55px] shrink-0 flex-col items-center gap-3 border-r border-line pt-3.5">
            <span className="size-[22px] rounded-md bg-sand/30" />
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="size-[22px] rounded-md bg-[#232938]"
              />
            ))}
          </div>
          <div className="flex-1 p-4">
            <div className="h-2.5 w-[90px] rounded-full bg-[#3a4357]" />
            <div className="mt-3 space-y-3">
              {[0, 1, 2, 3].map((row) => (
                <div key={row} className="h-7 rounded-md bg-[#1d222f]" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-7 right-0 h-[352px] w-[202px] rounded-[32px] border border-white/20 bg-ink p-2.5 shadow-[0_24px_60px_rgb(0_0_0/0.6)]">
        <div className="flex h-full flex-col rounded-3xl bg-[#161a23] px-[13px] pt-[18px] pb-[18px]">
          <div className="h-1.5 rounded-full bg-[#232938]">
            <div className="h-full w-[38%] rounded-full bg-sand" />
          </div>
          <div className="mt-4 h-2 w-[94%] rounded-full bg-[#2e3646]" />
          <div className="mt-[7px] h-2 w-[70%] rounded-full bg-[#2e3646]" />
          <div className="mt-[18px] space-y-2">
            {[0, 1, 2, 3].map((option) => (
              <div
                key={option}
                className={`h-[34px] rounded-[9px] border ${
                  option === 1
                    ? "border-sand bg-sand/10"
                    : "border-white/10 bg-[#1b202d]"
                }`}
              />
            ))}
          </div>
          <div className="mt-auto h-[34px] rounded-[9px] bg-sand" />
        </div>
      </div>
    </div>
  );
}
