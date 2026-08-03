import { Card } from '@/components/ui/card';
import { LiveHourCounter } from '@/components/ui/live-hour-counter';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

export function SplineHero() {
  return (
    <section className="relative z-10 min-h-screen pt-[72px]">
      <Card className="relative h-[calc(100vh-72px)] min-h-[620px] w-full overflow-hidden rounded-none border-0 bg-black text-white shadow-none">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" size={360} />

        <div className="flex h-full flex-col lg:flex-row">
          <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-12 sm:px-14 lg:px-16 xl:px-24">
            <div className="mb-7 flex w-fit items-center gap-2 text-xs font-semibold uppercase text-neutral-400">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.75)]" />
              Intelligent data engine
            </div>
            <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold leading-[1.05] text-transparent sm:text-6xl xl:text-7xl">
              I, Robot
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              智鸭科技团队已经采集了 <LiveHourCounter /> 小时的具身智能数据，覆盖机器人第一视角、遥操作、多传感器同步与复杂场景交互，为感知、决策和控制模型持续提供高质量、可训练的数据基础。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="login.html"
                target="_blank"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black no-underline transition-colors hover:bg-neutral-200"
              >
                进入标注平台
              </a>
              <a
                href="#cta"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                获取采集方案
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] flex-1 lg:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
