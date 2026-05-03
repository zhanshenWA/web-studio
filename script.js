const scenarios = {
  landing: {
    chip: "Codex 主 Agent",
    title: "Landing Page Sprint",
    summary:
      "围绕产品首屏和转化链路，主 Agent 先拆模块，再由子 Agent 同时生成布局、文案和视觉细节。",
    outcome: "首屏上线更快，沟通轮次更少，展示页可直接发 GitHub Pages。",
    note: "这个场景特别适合做作品集主页、申请材料展示页和 GitHub 仓库首页。",
    efficiency: 72,
    saved: 58,
    token: 168,
    tokenLabel: "1.68 亿",
    tags: ["Codex", "OpenClaw", "GPT-5.4", "GPT-5.5", "GPT-5.3-codex"],
    tasks: [
      {
        role: "主 Agent",
        title: "拆分页面目标",
        body: "把需求整理成导航、首屏、证据、工作流和 CTA 五个模块，避免一开始就进入无序编码。",
      },
      {
        role: "GPT-5.4",
        title: "生成骨架结构",
        body: "输出语义化 HTML 和首版响应式布局，先把内容顺序和视觉层级立起来。",
      },
      {
        role: "OpenClaw",
        title: "分派子任务",
        body: "将按钮、卡片、布局、动画和文案分别派发给不同 Agent 并行处理。",
      },
      {
        role: "GPT-5.5",
        title: "复核发布条件",
        body: "检查可访问性、层级一致性、断点表现和最终文案，保证仓库可直接展示。",
      },
    ],
  },
  dashboard: {
    chip: "GPT-5.5 复核",
    title: "Operations Dashboard",
    summary:
      "将网页产品拆成数据概览、任务状态、指标卡片和日志视图，重点验证多组件一致性与状态联动。",
    outcome: "更适合展示复杂页面、数据面板和多状态组件的生产效率。",
    note: "如果你想突出工程能力，这个场景适合展示组件复用和多页面协同。",
    efficiency: 78,
    saved: 63,
    token: 192,
    tokenLabel: "1.92 亿",
    tags: ["Codex", "OpenClaw", "GPT-5.5", "状态联动", "组件复用"],
    tasks: [
      {
        role: "主 Agent",
        title: "信息架构整理",
        body: "把复杂数据面板切成总览、趋势、任务流和异常告警，保持信息层次清晰。",
      },
      {
        role: "Codex",
        title: "批量生成组件",
        body: "优先输出面板卡片、标签、进度条和列表容器，减少重复手写样式。",
      },
      {
        role: "GPT-5.4",
        title: "统一样式语言",
        body: "让颜色、间距、阴影和字号保持稳定，避免不同模块看起来像拼接页面。",
      },
      {
        role: "GPT-5.5",
        title: "检查状态切换",
        body: "验证按钮、筛选、数据刷新和空状态是否都能按预期工作。",
      },
    ],
  },
  bugfix: {
    chip: "GPT-5.3-codex",
    title: "Bug Fix Sprint",
    summary:
      "围绕页面样式错位、按钮状态异常和移动端适配问题，快速定位问题并集中修复。",
    outcome: "减少无效试错时间，把修复链路压缩到更短的回路里。",
    note: "当页面已经有基础结构，只需要持续优化和修复时，这个场景最有说服力。",
    efficiency: 69,
    saved: 54,
    token: 156,
    tokenLabel: "1.56 亿",
    tags: ["Codex", "GPT-5.3-codex", "修复链路", "响应式", "兼容性"],
    tasks: [
      {
        role: "主 Agent",
        title: "定位异常根因",
        body: "先判断问题属于布局、样式、脚本还是数据源，避免盲目改动。",
      },
      {
        role: "GPT-5.3-codex",
        title: "输出修复方案",
        body: "直接针对报错和错位点给出补丁式修改建议，缩短来回确认次数。",
      },
      {
        role: "OpenClaw",
        title: "并行修复多个模块",
        body: "把卡片、导航、表单和移动端断点拆开处理，减少单点阻塞。",
      },
      {
        role: "GPT-5.5",
        title: "做最终验收",
        body: "统一核对视觉回归、交互一致性和发布条件，确保修复后不引入新问题。",
      },
    ],
  },
};

const taskList = document.getElementById("task-list");
const stackTags = document.getElementById("stack-tags");
const scenarioChip = document.getElementById("scenario-chip");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioSummary = document.getElementById("scenario-summary");
const outcomeValue = document.getElementById("outcome-value");
const scenarioNote = document.getElementById("scenario-note");
const efficiencyValue = document.getElementById("efficiency-value");
const savedValue = document.getElementById("saved-value");
const tokenValue = document.getElementById("token-value");
const efficiencyBar = document.getElementById("efficiency-bar");
const savedBar = document.getElementById("saved-bar");
const tokenBar = document.getElementById("token-bar");
const tabs = Array.from(document.querySelectorAll(".scenario-tab"));

function animateNumber(element, target, suffix = "", duration = 680) {
  const start = Number.parseFloat(element.dataset.current || "0");
  const begin = performance.now();

  const step = (now) => {
    const progress = Math.min((now - begin) / duration, 1);
    const value = start + (target - start) * easeOutCubic(progress);
    const formatted = target % 1 === 0 ? Math.round(value) : value.toFixed(2);
    element.textContent = `${formatted}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.dataset.current = String(target);
    }
  };

  requestAnimationFrame(step);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function renderScenario(key) {
  const scenario = scenarios[key] || scenarios.landing;
  document.title = `${scenario.title} · Agent Web Studio`;

  scenarioChip.textContent = scenario.chip;
  scenarioTitle.textContent = scenario.title;
  scenarioSummary.textContent = scenario.summary;
  outcomeValue.textContent = scenario.outcome;
  scenarioNote.textContent = scenario.note;

  stackTags.innerHTML = scenario.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  taskList.innerHTML = scenario.tasks
    .map(
      (task, index) => `
        <article class="task-card">
          <span class="task-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <p>${task.role}</p>
            <h4>${task.title}</h4>
            <span>${task.body}</span>
          </div>
        </article>
      `,
    )
    .join("");

  animateNumber(efficiencyValue, scenario.efficiency, "%");
  animateNumber(savedValue, scenario.saved, "%");
  animateNumber(tokenValue, scenario.token / 100, " 亿");

  efficiencyBar.style.width = `${scenario.efficiency}%`;
  savedBar.style.width = `${scenario.saved}%`;
  tokenBar.style.width = `${Math.min(100, scenario.token / 2)}%`;

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.scenario === key);
    tab.setAttribute("aria-selected", String(tab.dataset.scenario === key));
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderScenario(tab.dataset.scenario));
});

renderScenario("landing");
