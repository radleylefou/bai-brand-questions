const STORAGE_KEY = "backtest-ai-brand-workshop-v3";

const legacySections = [
  {
    id: "foundation",
    title: "Brand Foundation",
    intro:
      "Align the executive story: what backtest.ai is, why it exists, and what it must never compromise.",
    fields: [
      {
        id: "one_sentence",
        type: "textarea",
        required: true,
        label: "In one sentence, what is backtest.ai?",
        helper: "Write the plainest possible explanation. Avoid jargon unless the target user would naturally use it.",
      },
      {
        id: "why_now",
        type: "textarea",
        required: true,
        label: "Why does this product need to exist now?",
        helper: "Name the market timing, technology shift, trader behavior, or competitive weakness creating the opening.",
      },
      {
        id: "better_problem",
        type: "textarea",
        required: true,
        label: "What problem does backtest.ai solve better than current alternatives?",
        helper: "Push for a specific operational pain, not a broad category like analytics.",
      },
      {
        id: "future_change",
        type: "textarea",
        label: "If backtest.ai succeeds, what changes for traders?",
        helper: "Describe the before and after in the user's workflow, confidence, speed, or sophistication.",
      },
      {
        id: "never_become",
        type: "textarea",
        label: "What should backtest.ai never become?",
        helper: "Useful answers often name a competitor behavior, category trap, or trust boundary.",
      },
      {
        id: "product_promise",
        type: "textarea",
        required: true,
        label: "What is the product promise users should be able to count on?",
        helper: "This should be durable enough to guide product, support, sales, and marketing decisions.",
      },
    ],
  },
  {
    id: "audience",
    title: "Target Audience",
    intro:
      "Define the first loyal users tightly enough that messaging, onboarding, and product priorities become easier.",
    fields: [
      {
        id: "closed_beta_user",
        type: "textarea",
        required: true,
        label: "Who is the primary user for closed beta?",
        helper: "Include trading style, sophistication, tools used today, and why they would care immediately.",
      },
      {
        id: "open_beta_user",
        type: "textarea",
        label: "Who is the primary user for open beta?",
        helper: "Note what changes when the audience widens beyond the first expert cohort.",
      },
      {
        id: "audience_rank",
        type: "rank",
        required: true,
        label: "Rank the audience segments by strategic importance.",
        helper: "Click in priority order. Click again to remove a segment from the ranking.",
        options: [
          "Systematic options traders",
          "Discretionary options traders",
          "Quant hobbyists",
          "Developers",
          "Financial creators",
          "Small funds",
          "Beginner retail traders",
        ],
      },
      {
        id: "user_capabilities",
        type: "textarea",
        label: "What do these users already know how to do?",
        helper: "Examples: options mechanics, Python, technical indicators, risk sizing, statistics, broker workflows.",
      },
      {
        id: "current_tools",
        type: "textarea",
        required: true,
        label: "What tools do they currently rely on?",
        helper: "Capture software, spreadsheets, brokers, charting tools, Discord groups, creator ecosystems, and custom scripts.",
      },
      {
        id: "excluded_users",
        type: "textarea",
        label: "Who are we explicitly not building for right now?",
        helper: "Naming the non-audience protects the roadmap from trying to satisfy everyone.",
      },
    ],
  },
  {
    id: "psychology",
    title: "User Psychology",
    intro:
      "Surface the emotional buying logic behind serious trading software: skepticism, ambition, risk, and proof.",
    fields: [
      {
        id: "emotional_pain",
        type: "textarea",
        required: true,
        label: "What emotional pain brings someone to backtest.ai?",
        helper: "Look for frustration with slow tests, fear of unvalidated trades, manual execution fatigue, or infrastructure burden.",
      },
      {
        id: "dominant_state",
        type: "choice",
        label: "Which states best describe the user when they arrive?",
        helper: "Select all that apply. The dominant emotional state should influence tone and onboarding.",
        options: ["Frustrated", "Skeptical", "Ambitious", "Overwhelmed", "Cautious", "Opportunistic", "Time-constrained"],
      },
      {
        id: "fear_of_wrong",
        type: "textarea",
        label: "What are they afraid of getting wrong?",
        helper: "Think data assumptions, fills, slippage, overfitting, position sizing, regime changes, or live execution.",
      },
      {
        id: "trust_builders",
        type: "textarea",
        required: true,
        label: "What gives them confidence in a trading tool?",
        helper: "Name trust signals that would matter to a sophisticated trader.",
      },
      {
        id: "professional_grade",
        type: "textarea",
        label: "What does professional-grade mean to this audience?",
        helper: "This may mean auditability, speed, statistical rigor, control, exports, realistic assumptions, or transparent data.",
      },
    ],
  },
  {
    id: "jobs",
    title: "Jobs To Be Done",
    intro:
      "Translate brand strategy into the moments where users hire the product to make a decision.",
    fields: [
      {
        id: "jtbd",
        type: "textarea",
        required: true,
        label: "Complete the job story: When I ___, I want to ___, so I can ___.",
        helper: "Write this from the user's point of view, using one concrete trading situation.",
      },
      {
        id: "first_use_case",
        type: "textarea",
        required: true,
        label: "What is the most common first use case?",
        helper: "The first use case should be simple enough to onboard, but meaningful enough to prove value.",
      },
      {
        id: "repeat_use_case",
        type: "textarea",
        label: "What is the most valuable repeat use case?",
        helper: "This is the habit loop: what brings the user back weekly or daily?",
      },
      {
        id: "successful_session",
        type: "textarea",
        label: "What does a successful first session look like?",
        helper: "Include the action completed, insight gained, and emotional result.",
      },
      {
        id: "cannot_go_back",
        type: "textarea",
        label: "What would make a user say they cannot go back to the old process?",
        helper: "Look for workflow compression, clarity, confidence, or analysis that was previously impractical.",
      },
    ],
  },
  {
    id: "positioning",
    title: "Positioning",
    intro:
      "Choose the competitive frame, the wedge, and the idea backtest.ai should be known for.",
    fields: [
      {
        id: "category",
        type: "choice",
        required: true,
        label: "What category should backtest.ai compete in first?",
        helper: "Select the plausible frames. We can decide the lead frame during the workshop.",
        options: [
          "Options backtesting platform",
          "Quant research lab",
          "AI strategy analyst",
          "Trading strategy operating system",
          "Portfolio construction tool",
          "Broker automation platform",
        ],
      },
      {
        id: "own_word",
        type: "text",
        required: true,
        label: "What single word should backtest.ai try to own?",
        helper: "Examples might include speed, proof, control, rigor, confidence, or validation. Pick the strongest candidate.",
      },
      {
        id: "option_alpha_wedge",
        type: "textarea",
        label: "What is the clearest wedge against Option Alpha?",
        helper: "Focus on depth, customization, analytics, or the gap between beginner automation and serious research.",
      },
      {
        id: "option_omega_wedge",
        type: "textarea",
        label: "What is the clearest wedge against Option Omega?",
        helper: "Consider UI quality, persistence, speed, AI analysis, modeling, and community mechanics.",
      },
      {
        id: "quantconnect_wedge",
        type: "textarea",
        label: "What is the clearest wedge against QuantConnect?",
        helper: "Consider usability, visual building, lower infrastructure overhead, and options-specific workflows.",
      },
      {
        id: "thirty_seconds",
        type: "textarea",
        required: true,
        label: "What should someone understand about backtest.ai in the first 30 seconds?",
        helper: "Write what must land on a homepage, demo intro, or creator recommendation.",
      },
    ],
  },
  {
    id: "proof",
    title: "Differentiation And Proof",
    intro:
      "Separate what is real, what is demonstrable, and what is still an aspiration.",
    fields: [
      {
        id: "switch_reasons",
        type: "rank",
        required: true,
        label: "Rank the top reasons a trader should switch.",
        helper: "Click in priority order. Keep the ranking honest to what the product can prove.",
        options: [
          "Faster backtests",
          "Deeper strategy customization",
          "AI-assisted analysis",
          "Signal and model libraries",
          "Portfolio-level testing",
          "Better persistence and workflow state",
          "Community strategy sharing",
          "Broker-connected execution path",
        ],
      },
      {
        id: "provable_claims",
        type: "textarea",
        required: true,
        label: "Which claims can we prove today?",
        helper: "List only claims backed by product demos, benchmarks, real workflows, data, or client evidence.",
      },
      {
        id: "aspirational_claims",
        type: "textarea",
        label: "Which claims are aspirational but not yet defensible?",
        helper: "Useful for roadmap language, but dangerous for primary positioning until proven.",
      },
      {
        id: "benchmarks",
        type: "textarea",
        label: "What performance benchmarks matter most?",
        helper: "Examples: time to run a backtest, data coverage, strategy complexity, export depth, AI analysis quality.",
      },
      {
        id: "demo_proof",
        type: "textarea",
        label: "What screenshots, demos, or workflows prove superiority?",
        helper: "Name the concrete moments a prospect should see in sales, website, and creator demos.",
      },
    ],
  },
  {
    id: "messaging",
    title: "Messaging",
    intro:
      "Pressure-test language so the brand sounds credible to systematic traders, not inflated or retail-hype driven.",
    fields: [
      {
        id: "headline",
        type: "textarea",
        required: true,
        label: "What headline would make the ideal user stop and pay attention?",
        helper: "Aim for concrete value. Avoid vague claims and inflated AI language.",
      },
      {
        id: "benefits_rank",
        type: "rank",
        required: true,
        label: "Rank the benefits by messaging priority.",
        helper: "The top three should drive the homepage and sales narrative.",
        options: [
          "Speed",
          "Confidence",
          "Flexibility",
          "Automation",
          "AI analysis",
          "Professional metrics",
          "Community",
          "Broker execution",
          "Portfolio construction",
        ],
      },
      {
        id: "avoid_language",
        type: "textarea",
        required: true,
        label: "What language should we avoid because it sounds scammy, hype-driven, or too retail?",
        helper: "Capture banned claims, phrases, and tone patterns.",
      },
      {
        id: "ai_language",
        type: "choice",
        label: "How should the AI capability be named in market-facing language?",
        helper: "Select the phrases that feel credible and precise.",
        options: ["AI research assistant", "AI analyst", "AI strategy assistant", "AI trading copilot", "AI documentation assistant"],
      },
      {
        id: "objections",
        type: "textarea",
        label: "What objections must the messaging overcome immediately?",
        helper: "Examples: data quality, overfitting, live trading risk, too technical, too simplified, AI trust, pricing.",
      },
    ],
  },
  {
    id: "values",
    title: "Values And Beliefs",
    intro:
      "Identify the principles the brand should defend when product, growth, and compliance pressure collide.",
    fields: [
      {
        id: "values_rank",
        type: "rank",
        required: true,
        label: "Rank the brand values that should guide decisions.",
        helper: "Click in priority order. The first three should become the working values set.",
        options: ["Rigor", "Speed", "Transparency", "Control", "Intelligence", "Trust", "Clarity", "Independence", "Experimentation", "Discipline"],
      },
      {
        id: "defended_value",
        type: "textarea",
        label: "What value would we defend even if it slowed growth?",
        helper: "This reveals the real brand boundary, especially in trading products.",
      },
      {
        id: "belief_about_traders",
        type: "textarea",
        label: "What do we believe about traders that competitors overlook?",
        helper: "Strong brands often begin with a sharper belief about the customer.",
      },
      {
        id: "belief_about_ai",
        type: "textarea",
        label: "What do we believe about AI in trading?",
        helper: "Clarify whether AI is an analyst, automation layer, research accelerant, or decision support tool.",
      },
      {
        id: "risk_belief",
        type: "textarea",
        label: "What do we believe about risk, proof, and responsible decision-making?",
        helper: "This should shape disclaimers, product UX, and marketing claims.",
      },
    ],
  },
  {
    id: "voice",
    title: "Personality And Voice",
    intro:
      "Define the human feel of backtest.ai so the brand can be consistent across product, docs, sales, and support.",
    fields: [
      {
        id: "expert_persona",
        type: "textarea",
        required: true,
        label: "If backtest.ai were a person, what kind of expert would it be?",
        helper: "Examples: quant analyst, trading desk operator, research partner, engineering-minded coach.",
      },
      {
        id: "voice_spectrum",
        type: "scale",
        label: "Where should the voice sit on the technical spectrum?",
        helper: "Choose one. This decision affects product copy, docs, onboarding, and marketing.",
        options: ["Very accessible", "Accessible but precise", "Technical and expert", "Institutional-grade"],
      },
      {
        id: "personality_traits",
        type: "choice",
        required: true,
        label: "Choose the brand personality traits that should come through.",
        helper: "Select no more than five in the live workshop.",
        options: ["Precise", "Calm", "Fast", "Rigorous", "Confident", "Independent", "Practical", "Skeptical", "Inventive", "Transparent"],
      },
      {
        id: "never_sound",
        type: "textarea",
        label: "What should backtest.ai never sound like?",
        helper: "Name the tone traps: hype, guru culture, academic opacity, beginner toy, or broker sales desk.",
      },
      {
        id: "word_bank",
        type: "textarea",
        label: "What words or phrases should we use often?",
        helper: "Capture vocabulary that feels natural, credible, and ownable.",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust And Risk",
    intro:
      "Make credibility explicit. Trading software earns trust by showing method, limits, and decision boundaries.",
    fields: [
      {
        id: "backtest_disclaimer",
        type: "textarea",
        required: true,
        label: "How should the brand communicate that backtesting is not a guarantee of future performance?",
        helper: "Write the principle in human language, not legal boilerplate.",
      },
      {
        id: "claim_conservatism",
        type: "scale",
        label: "How conservative should market-facing claims be?",
        helper: "This helps set the appetite for speed claims, AI claims, and performance language.",
        options: ["Very conservative", "Measured", "Confident with proof", "Aggressive when demonstrable"],
      },
      {
        id: "trust_signals",
        type: "choice",
        required: true,
        label: "Which trust signals matter most?",
        helper: "Select the signals that should be visible in product, website, demos, and docs.",
        options: [
          "Data quality",
          "Methodology transparency",
          "Trade-by-trade audit logs",
          "Exportability",
          "Broker integrations",
          "Assumption controls",
          "Documentation",
          "Performance benchmarks",
          "AI limitation disclosures",
        ],
      },
      {
        id: "ai_limitations",
        type: "textarea",
        label: "How should we handle AI limitations?",
        helper: "Define what the assistant can do, what it should not claim, and when it should defer to the user.",
      },
    ],
  },
  {
    id: "community",
    title: "Community And Marketplace",
    intro:
      "Clarify whether community is a growth engine, retention layer, creator channel, research network, or all of the above.",
    fields: [
      {
        id: "community_role",
        type: "textarea",
        label: "What role should community play in the brand?",
        helper: "Define whether it is core to the product or a later growth layer.",
      },
      {
        id: "community_model",
        type: "choice",
        label: "What should the community feel most like?",
        helper: "Select references that help set product and brand expectations.",
        options: ["GitHub", "TradingView", "Discord", "Substack", "App marketplace", "Research terminal"],
      },
      {
        id: "share_motivation",
        type: "textarea",
        label: "Why would users share strategies or signals?",
        helper: "Capture incentives: status, monetization, collaboration, accountability, distribution, or proof.",
      },
      {
        id: "public_private",
        type: "textarea",
        label: "What should be public vs private?",
        helper: "Important for strategy secrecy, creator monetization, and compliance posture.",
      },
      {
        id: "recommendable",
        type: "textarea",
        required: true,
        label: "What would make backtest.ai recommendable to creators and affiliates?",
        helper: "Think credible superiority, audience fit, demo moments, pricing, and support.",
      },
    ],
  },
  {
    id: "success",
    title: "Success Metrics",
    intro:
      "Define the behavioral and perceptual signals that show the brand strategy is working.",
    fields: [
      {
        id: "closed_beta_perception",
        type: "textarea",
        required: true,
        label: "What brand perception do we want after closed beta?",
        helper: "Describe what early users should believe after hands-on experience.",
      },
      {
        id: "positioning_behaviors",
        type: "textarea",
        label: "What user behaviors prove the positioning is working?",
        helper: "Examples: repeated backtests, AI analysis usage, strategy sharing, exports, portfolio creation.",
      },
      {
        id: "testimonials",
        type: "textarea",
        label: "What should users say in testimonials?",
        helper: "Write the kinds of quotes that would prove the intended brand is landing.",
      },
      {
        id: "open_beta_90",
        type: "textarea",
        label: "What does success look like 90 days after open beta?",
        helper: "Include both product behavior and market perception.",
      },
      {
        id: "wrong_users",
        type: "textarea",
        label: "What would be an early warning sign that the brand is attracting the wrong users?",
        helper: "Examples: support tickets from beginners, unrealistic profit expectations, low repeat usage, creator mismatch.",
      },
    ],
  },
];

const sections = [
  {
    id: "foundation",
    label: "Foundation",
    title: "Brand Purpose & Vision",
    intro:
      "We're establishing the why: the reason Backtest.ai exists beyond revenue. This shapes everything from messaging to product decisions.",
    fields: [
      {
        id: "q0_problem_better",
        type: "textarea",
        required: true,
        label: "What problem does backtest.ai solve better than any current alternative?",
        helper:
          "Name the sharpest problem in plain language. Push beyond broad categories like backtesting or analytics.",
        placeholder:
          "e.g. It lets systematic options traders validate complex strategies quickly without stitching together code, data, and brittle workflows...",
      },
      {
        id: "q1_purpose",
        type: "inline",
        required: true,
        label: "In one sentence, why does Backtest.ai exist?",
        helper:
          'Not what it does, why it matters. Complete the statement: "We exist because _____ has always been unfairly hard for _____ people."',
        parts: [
          { id: "problem", label: "What has been unfairly hard?", width: "300px" },
          { id: "audience", label: "For whom?", width: "180px" },
        ],
      },
      {
        id: "q2_five_year_success",
        type: "textarea",
        label: "What does success look like for Backtest.ai in 5 years?",
        helper:
          "Be specific. Market position, user types, asset classes, ecosystem: what are you building toward?",
        placeholder:
          "e.g. The default research environment for systematic traders across all asset classes, with a thriving community and marketplace...",
      },
    ],
  },
  {
    id: "positioning",
    label: "Positioning",
    title: "Differentiation & Competitive Stance",
    intro:
      "How you want to be seen relative to the market. This shapes your voice, your visual identity, and how aggressively you position against competitors.",
    fields: [
      {
        id: "q3_positioning_statement",
        type: "inline",
        required: true,
        label:
          "Complete the positioning statement: “For ___ who ___, backtest.ai is ___ that ___. Unlike ___, we ___ because ___.”",
        helper:
          "Fill this in as a working strategic draft. It can be imperfect; the goal is to expose the positioning logic.",
        parts: [
          { id: "audience", label: "Audience", width: "130px" },
          { id: "need", label: "Need or context", width: "150px" },
          { id: "category", label: "Category", width: "130px" },
          { id: "benefit", label: "Benefit", width: "170px" },
          { id: "alternative", label: "Alternative", width: "130px" },
          { id: "difference", label: "Difference", width: "160px" },
          { id: "proof", label: "Proof", width: "150px" },
        ],
      },
      {
        id: "q3_famous_for",
        type: "chips",
        label: "What's the one thing Backtest.ai should be famous for?",
        helper:
          "If users described the platform to a friend in 5 words, what would you want those words to be?",
        mode: "single",
        options: [
          "Raw speed",
          "Institutional power",
          "AI-first research",
          "Radical simplicity",
          "Community & sharing",
          "Data precision",
          "Analytical depth",
        ],
        notePlaceholder: "Or describe it in your own words...",
      },
      {
        id: "q4_competitive_stance",
        type: "choice",
        label: "How aggressively do you want to position against competitors in your brand messaging?",
        helper:
          "This affects everything from taglines to UI copy. Neither extreme is wrong; just a strategic choice.",
        options: [
          {
            label: "Implicitly superior",
            sub: "We let the product speak; never name competitors.",
          },
          {
            label: "Contextually comparative",
            sub: "Reference the category, but not specific platforms.",
          },
          {
            label: "Directly competitive",
            sub: 'Name the gap explicitly: "Not QuantConnect. Not Option Alpha."',
          },
        ],
      },
      {
        id: "q5_expert_story",
        type: "scale",
        label: "Is Backtest.ai a tool for experts, or a tool that makes experts out of traders?",
        helper:
          "This isn't about features. It's about the aspirational brand story and who the hero of that story is.",
        minLabel: "Built exclusively for experts",
        maxLabel: "Makes traders into experts",
      },
    ],
  },
  {
    id: "personality",
    label: "Personality",
    title: "Brand Character & Voice",
    intro:
      "Brands that resonate have a clear human character. This section surfaces yours so the voice feels consistent whether it's UI copy, a social post, or community support.",
    fields: [
      {
        id: "q6_person_as_brand",
        type: "chips",
        label: "If Backtest.ai were a person, how would you describe them?",
        helper:
          "Think: who would you want to get strategy advice from at a conference? Pick as many as feel right.",
        mode: "multi",
        options: [
          "The quant who explains things clearly",
          "The trader who's seen everything",
          "The engineer who built the best tools",
          "The professor who respects your intelligence",
          "The senior mentor who doesn't waste words",
          "The peer who shares their edge openly",
        ],
      },
      {
        id: "q7_voice_dimensions",
        type: "sliders",
        label: "Where does Backtest.ai land on each of these voice dimensions?",
        helper: "Drag each slider to the position that feels right. There's no correct answer.",
        sliders: [
          { id: "tone", label: "Tone", minLabel: "Formal", maxLabel: "Casual" },
          { id: "register", label: "Register", minLabel: "Serious", maxLabel: "Confident" },
          { id: "language", label: "Language", minLabel: "Technical", maxLabel: "Accessible" },
          { id: "posture", label: "Posture", minLabel: "Humble", maxLabel: "Bold" },
        ],
      },
      {
        id: "q8_admired_brands",
        type: "textarea",
        label: "What brands, inside or outside fintech, do you most admire aesthetically or tonally?",
        helper:
          "These don't need to be direct comps. Include why if you can.",
        placeholder:
          "e.g. Linear because it feels crafted. Bloomberg Terminal because the density communicates authority...",
      },
      {
        id: "q9_anti_references",
        type: "textarea",
        label: "What brands would you absolutely not want to be compared to, and why?",
        helper:
          "Anti-references are often more useful than positive ones. What's the aesthetic or tone you're actively trying to avoid?",
        placeholder:
          "e.g. Robinhood: too gamified. Beginner automation brands: too casual for serious systematic traders...",
      },
    ],
  },
  {
    id: "visual_direction",
    label: "Visual Direction",
    title: "Aesthetic & Design Language",
    intro:
      "These questions establish visual territory before design begins. The goal is alignment on gut instincts before they get codified.",
    fields: [
      {
        id: "q10_visual_lane",
        type: "choice",
        label: "Where does Backtest.ai land visually?",
        helper:
          "Select the aesthetic direction that feels closest to right. You can add nuance below.",
        columns: 2,
        options: [
          {
            label: "Dark terminal",
            sub: "Dense data, near-black backgrounds, monospace accents.",
          },
          {
            label: "Clean modern SaaS",
            sub: "Light surfaces, generous whitespace, refined typography.",
          },
          {
            label: "Editorial/data-journalism",
            sub: "Chart-forward, information dense, authoritative.",
          },
          {
            label: "Dark + clean hybrid",
            sub: "Dark app, light marketing, premium feel across both.",
          },
        ],
        notePlaceholder: "Any nuance or specifics on the visual direction?",
      },
      {
        id: "q11_brand_vs_product",
        type: "choice",
        label: "How should the brand feel different from the product UI?",
        helper:
          "The marketing brand often has different energy than the app itself. How do you want them to relate?",
        options: [
          {
            label: "Consistent across both",
            sub: "Same visual language inside and outside the app.",
          },
          {
            label: "Marketing is elevated",
            sub: "More expressive brand language, app is focused and utilitarian.",
          },
          {
            label: "Not sure yet",
            sub: "Happy to be guided on this.",
          },
        ],
      },
      {
        id: "q12_first_feeling",
        type: "chips",
        label: "Choose up to 3 words you'd want users to feel when they first land on the Backtest.ai website.",
        helper:
          "Emotional response, not features. What's the gut reaction you're after?",
        mode: "multi",
        max: 3,
        options: [
          "Impressed",
          "Confident",
          "Intrigued",
          "Trusted",
          "Excited",
          "Understood",
          "Challenged",
          "Safe",
        ],
      },
    ],
  },
  {
    id: "community_growth",
    label: "Community & Growth",
    title: "Ecosystem, Affiliate & Network Effects",
    intro:
      "Community and affiliate channels are core to the growth model. These questions surface how you want that layer of the brand to feel.",
    fields: [
      {
        id: "q13_community_centrality",
        type: "choice",
        label: 'How central is "community" to the Backtest.ai identity?',
        helper:
          "Is it a feature, a moat, or foundational to the brand story?",
        options: [
          {
            label: "A valuable feature",
            sub: "Important for retention, not core to identity.",
          },
          {
            label: "A competitive moat",
            sub: "Network effects are part of the business strategy.",
          },
          {
            label: "Core to the brand",
            sub: "The community is the product as much as the tool.",
          },
        ],
      },
      {
        id: "q14_creator_line",
        type: "textarea",
        label: "What is the single most important thing a creator needs to say about Backtest.ai to get their audience to sign up?",
        helper:
          "If you had to boil it down to one line that would convert a skeptical, experienced trader, what is it?",
        placeholder:
          "e.g. This actually backtests in under a minute. Or: finally, a platform that has signals without needing to write Python.",
      },
    ],
  },
  {
    id: "open_space",
    label: "Open Space",
    title: "What We Haven't Asked Yet",
    intro:
      "The best brand insights often come from questions we didn't think to ask. This section is yours.",
    fields: [
      {
        id: "q15_founding_story",
        type: "textarea",
        label: "Is there anything about Backtest.ai's story or founding that should shape the brand?",
        helper:
          "A founding frustration, a personal background, a belief about trading: anything that should be part of the brand narrative.",
        placeholder:
          "e.g. We built this because we were frustrated with backtesting tools losing work. That experience shaped our obsession with persistence...",
      },
      {
        id: "q16_consistent_expression",
        type: "textarea",
        label: "If you could only keep one thing consistent across every brand expression, what would it be?",
        helper:
          "Logo, website, UI copy, social: this reveals your highest-priority brand value.",
        placeholder:
          "e.g. The sense that this was built by people who actually trade. Everything should feel informed and real...",
      },
      {
        id: "q17_process_concerns",
        type: "textarea",
        label: "What concerns, if any, do you have about the branding process?",
        helper:
          "Maybe it's a risk of the brand feeling too generic, too niche, or not matching the product vision. Surface anything here.",
        placeholder:
          "e.g. I'm worried about coming across too academic and losing retail traders, or too casual and losing serious systematic traders...",
      },
      {
        id: "q18_anything_else",
        type: "textarea",
        label: "Anything else you want us to know before we begin?",
        helper: "Open space for constraints, non-negotiables, strong preferences, or inspirations we haven't covered.",
        placeholder:
          "Open space: constraints, non-negotiables, strong preferences, inspirations we haven't covered...",
      },
    ],
  },
];

const workshopExercises = [
  "Complete the positioning statement: For ___ who ___, backtest.ai is ___ that ___. Unlike ___, we ___ because ___.",
  "Pick one word to own.",
  "Rank the top five audience segments.",
  "Rank the top five product benefits.",
  "Write the anti-positioning: We are not ___ for ___.",
  "Choose three brand personality traits and three traits to avoid.",
  "Identify the strongest proof points available today.",
];

const inlinePromptConfigs = {
  q1_purpose: {
    parts: [
      { id: "problem", label: "What has been unfairly hard?", width: "300px" },
      { id: "audience", label: "For whom?", width: "180px" },
    ],
    toMarkdown(value) {
      const problem = String(value.problem || "___").trim() || "___";
      const audience = String(value.audience || "___").trim() || "___";
      return `We exist because ${problem} has always been unfairly hard for ${audience} people.`;
    },
  },
  q3_positioning_statement: {
    parts: [
      { id: "audience", label: "Audience", width: "130px" },
      { id: "need", label: "Need or context", width: "150px" },
      { id: "category", label: "Category", width: "130px" },
      { id: "benefit", label: "Benefit", width: "170px" },
      { id: "alternative", label: "Alternative", width: "130px" },
      { id: "difference", label: "Difference", width: "160px" },
      { id: "proof", label: "Proof", width: "150px" },
    ],
    toMarkdown(value) {
      const getPart = (key) => String(value[key] || "___").trim() || "___";
      return `For ${getPart("audience")} who ${getPart("need")}, backtest.ai is ${getPart("category")} that ${getPart("benefit")}. Unlike ${getPart("alternative")}, we ${getPart("difference")} because ${getPart("proof")}.`;
    },
  },
};

let answers = readDraft();
let errors = {};
let toastTimer = null;
let listenersAttached = false;
let sectionObserver = null;
let scrollQuestionObserver = null;
let activeScrollableFieldId = "";

function readDraft() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (_error) {
    return {};
  }
}

function saveDraft() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

function allFields() {
  return sections.flatMap((section, sectionIndex) =>
    section.fields.map((field) => ({
      ...field,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionLabel: section.label,
      sectionIntro: section.intro,
      sectionIndex,
    })),
  );
}

function getAnswer(id) {
  return answers[id] ?? "";
}

function isObjectAnswer(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function inlinePromptConfig(field) {
  if (field.type === "inline") {
    return inlinePromptConfigs[field.id] || {
      parts: field.parts || [],
      toMarkdown(value) {
        return (field.parts || [])
          .map((part) => String(value?.[part.id] || "___").trim() || "___")
          .join(" / ");
      },
    };
  }
  return inlinePromptConfigs[field.id] || null;
}

function isInlinePromptField(field) {
  return Boolean(inlinePromptConfig(field));
}

function inlinePromptValue(field) {
  const value = getAnswer(field.id);
  return isObjectAnswer(value) ? value : {};
}

function hasAnswer(field) {
  const value = getAnswer(field.id);
  const config = inlinePromptConfig(field);
  if (config) {
    return config.parts.every((part) => String(value?.[part.id] || "").trim().length > 0);
  }
  if (field.type === "chips") {
    return selectionArray(value).length > 0 || noteValue(value).trim().length > 0;
  }
  if (field.type === "choice") {
    return isObjectAnswer(value)
      ? Boolean(value.selected) || noteValue(value).trim().length > 0
      : String(value || "").trim().length > 0;
  }
  if (field.type === "scale") {
    return String(value || "").trim().length > 0;
  }
  if (field.type === "sliders") {
    return isObjectAnswer(value) && Object.keys(value).length > 0;
  }
  if (Array.isArray(value)) return value.length > 0;
  if (isObjectAnswer(value)) return Object.values(value).some((item) => String(item || "").trim().length > 0);
  return String(value).trim().length > 0;
}

function completedCount(fields = allFields()) {
  return fields.filter(hasAnswer).length;
}

function requiredFields() {
  return allFields().filter((field) => field.required);
}

function completedRequiredCount() {
  return requiredFields().filter(hasAnswer).length;
}

function iconMarkup(name) {
  const icons = {
    down: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14m0 0 6-6m-6 6-6-6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 8V5.8c0-1 .8-1.8 1.8-1.8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H16M5.8 8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V9.8C4 8.8 4.8 8 5.8 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.4 4.2 4.2L19 6.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4H7.8C6.8 4 6 4.8 6 5.8v12.4c0 1 .8 1.8 1.8 1.8h8.4c1 0 1.8-.8 1.8-1.8V8m-4-4v3.2c0 .4.4.8.8.8H18m-8 4h4m-4 4h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clear: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 8l8 8m0-8-8 8M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };
  return icons[name] ?? "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fieldControl(field) {
  const value = getAnswer(field.id);

  if (field.type === "text") {
    return `<input id="${field.id}" type="text" data-field="${field.id}" value="${escapeHtml(value)}" autocomplete="off" />`;
  }

  if (field.type === "choice") {
    const selected = Array.isArray(value) ? value : [];
    return `
      <div class="choice-grid">
        ${field.options
          .map(
            (option) => `
              <label class="choice">
                <input type="checkbox" data-field="${field.id}" value="${escapeHtml(option)}" ${selected.includes(option) ? "checked" : ""} />
                <span>${escapeHtml(option)}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    `;
  }

  if (field.type === "rank") {
    const selected = Array.isArray(value) ? value : [];
    return `
      <div class="rank-grid" data-rank-field="${field.id}">
        ${field.options
          .map((option) => {
            const rank = selected.indexOf(option) + 1;
            return `
              <button class="rank-option ${rank ? "is-selected" : ""}" type="button" data-rank="${field.id}" data-option="${escapeHtml(option)}">
                <span>${escapeHtml(option)}</span>
                <span class="rank-index">${rank || ""}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  if (field.type === "scale") {
    return `
      <div class="scale-grid">
        ${field.options
          .map(
            (option) => `
              <label class="scale-option">
                <input type="radio" name="${field.id}" data-field="${field.id}" value="${escapeHtml(option)}" ${value === option ? "checked" : ""} />
                <span>${escapeHtml(option)}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    `;
  }

  return `<textarea id="${field.id}" data-field="${field.id}">${escapeHtml(value)}</textarea>`;
}

function fieldMarkup(field) {
  const isRequired = field.required ? "is-required" : "";
  const hasError = errors[field.id] ? "has-error" : "";
  const labelTag = field.type === "choice" || field.type === "rank" || field.type === "scale" ? "legend" : "label";
  const labelFor = labelTag === "label" ? ` for="${field.id}"` : "";

  return `
    <fieldset class="field ${isRequired} ${hasError}" data-field-shell="${field.id}">
      <div class="field-label-row">
        <${labelTag}${labelFor}>${escapeHtml(field.label)}</${labelTag}>
        ${field.required ? '<span class="field-badge">Essential</span>' : ""}
      </div>
      <p class="helper">${escapeHtml(field.helper || "")}</p>
      ${fieldControl(field)}
      <p class="error-text" data-error="${field.id}">${errors[field.id] ? escapeHtml(errors[field.id]) : ""}</p>
    </fieldset>
  `;
}

function renderNavigation() {
  return sections
    .map((section, index) => {
      const total = section.fields.length;
      const done = completedCount(section.fields);
      return `
        <button class="nav-button" type="button" data-section-target="${section.id}">
          <span class="nav-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="nav-title">${escapeHtml(section.title)}</span>
          <span class="nav-count">${done}/${total}</span>
        </button>
      `;
    })
    .join("");
}

function renderSections() {
  if (!sections.length) {
    return `
      <div class="empty-state">
        <strong>No workshop sections configured.</strong>
        Add sections in app.js to begin collecting client answers.
      </div>
    `;
  }

  return sections
    .map(
      (section, index) => `
        <section class="section" id="${section.id}" data-section="${section.id}" style="--section-index:${index}">
          <aside class="section-intro">
            <span class="section-number">${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}</span>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.intro)}</p>
          </aside>
          <div>
            <div class="question-list">
              ${section.fields.map(fieldMarkup).join("")}
            </div>
            <div class="section-footer">
              <button class="btn" type="button" data-prev="${index > 0 ? sections[index - 1].id : ""}" ${index === 0 ? "disabled" : ""}>Previous</button>
              <button class="btn btn--primary" type="button" data-next="${index < sections.length - 1 ? sections[index + 1].id : ""}" ${index === sections.length - 1 ? "disabled" : ""}>Next section</button>
            </div>
          </div>
        </section>
      `,
    )
    .join("");
}

function renderApp() {
  const total = allFields().length;
  const done = completedCount();
  const requiredDone = completedRequiredCount();
  const requiredTotal = requiredFields().length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const unanswered = total - done;

  document.getElementById("app").innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-block">
          <p class="eyebrow">Client Workshop</p>
          <h1 class="brand-title">backtest.ai brand strategy form</h1>
          <p class="brand-copy">A guided questionnaire for positioning, audience, proof, trust, messaging, and market fit.</p>
        </div>
        <div class="progress-panel">
          <div class="progress-row">
            <span class="progress-value" data-progress-value>${percent}%</span>
            <span class="progress-label"><span data-required-value>${requiredDone}/${requiredTotal}</span> essentials</span>
          </div>
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" data-progress-fill style="width:${percent}%"></div>
          </div>
        </div>
        <nav class="nav-list" aria-label="Workshop sections" data-nav-list>
          ${renderNavigation()}
        </nav>
        <div class="sidebar-actions">
          <button class="btn btn--primary btn--full" type="button" data-action="review">${iconMarkup("check")}Review essentials</button>
          <button class="btn btn--full" type="button" data-action="copy">${iconMarkup("copy")}Copy Markdown</button>
          <button class="btn btn--full" type="button" data-action="download">${iconMarkup("file")}Download Markdown</button>
          <button class="btn btn--danger btn--full" type="button" data-action="clear">${iconMarkup("clear")}Clear draft</button>
        </div>
      </aside>

      <main class="main">
        <section class="hero" aria-labelledby="workshop-title">
          <div class="hero-copy">
            <div class="hero-kicker">
              <p class="eyebrow">Positioning / Demographics / Values / Messaging</p>
              <h1 id="workshop-title">A sharper client interview for a high-trust trading brand.</h1>
              <p>This form is designed for pre-work or a live strategy workshop. It keeps the conversation focused on audience truth, defendable proof, and the language backtest.ai can credibly own.</p>
              <div class="hero-actions">
                <button class="btn btn--primary" type="button" data-section-target="foundation">${iconMarkup("down")}Start form</button>
                <button class="btn" type="button" data-action="download">${iconMarkup("file")}Export answers</button>
              </div>
            </div>
            <div class="hero-meta">
              <div class="meta-tile">
                <span class="meta-number">${sections.length}</span>
                <span class="meta-label">strategy sections</span>
              </div>
              <div class="meta-tile">
                <span class="meta-number">${total}</span>
                <span class="meta-label">client prompts</span>
              </div>
              <div class="meta-tile">
                <span class="meta-number" data-unanswered>${unanswered}</span>
                <span class="meta-label">open answers</span>
              </div>
            </div>
          </div>

          <aside class="workshop-card">
            <div class="status-orbit">
              <div class="status-panel">
                <div class="status-line">
                  <span>Draft autosave active</span>
                  <span class="live-dot" aria-hidden="true"></span>
                </div>
                <p class="helper">Answers are stored locally in this browser until you clear the draft.</p>
              </div>
            </div>
            <div>
              <p class="eyebrow">Live exercises</p>
              ${workshopExercises.map((item) => `<p class="helper">${escapeHtml(item)}</p>`).join("")}
            </div>
          </aside>
        </section>

        ${renderSections()}
      </main>
    </div>
    <div class="toast" data-toast role="status" aria-live="polite"></div>
  `;
}

function updateProgress() {
  const total = allFields().length;
  const done = completedCount();
  const percent = total ? Math.round((done / total) * 100) : 0;
  const requiredDone = completedRequiredCount();
  const requiredTotal = requiredFields().length;

  const progressValue = document.querySelector("[data-progress-value]");
  const requiredValue = document.querySelector("[data-required-value]");
  const progressFill = document.querySelector("[data-progress-fill]");
  const unanswered = document.querySelector("[data-unanswered]");
  const navList = document.querySelector("[data-nav-list]");

  if (progressValue) progressValue.textContent = `${percent}%`;
  if (requiredValue) requiredValue.textContent = `${requiredDone}/${requiredTotal}`;
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (unanswered) unanswered.textContent = String(total - done);
  if (navList) navList.innerHTML = renderNavigation();
}

function clearFieldError(id) {
  if (!errors[id]) return;
  delete errors[id];
  const shell = document.querySelector(`[data-field-shell="${id}"]`);
  const error = document.querySelector(`[data-error="${id}"]`);
  if (shell) shell.classList.remove("has-error");
  if (error) error.textContent = "";
}

function setAnswerFromInput(input) {
  const id = input.dataset.field;
  const field = allFields().find((item) => item.id === id);
  if (!field) return;

  if (field.type === "choice") {
    const checked = Array.from(document.querySelectorAll(`[data-field="${id}"]:checked`)).map((item) => item.value);
    answers[id] = checked;
  } else if (field.type === "scale") {
    answers[id] = input.value;
  } else {
    answers[id] = input.value;
  }

  clearFieldError(id);
  saveDraft();
  updateProgress();
}

function toggleRank(button) {
  const id = button.dataset.rank;
  const option = button.dataset.option;
  const current = Array.isArray(answers[id]) ? [...answers[id]] : [];
  const existingIndex = current.indexOf(option);

  if (existingIndex >= 0) {
    current.splice(existingIndex, 1);
  } else {
    current.push(option);
  }

  answers[id] = current;
  clearFieldError(id);
  saveDraft();
  refreshRank(id);
  updateProgress();
}

function refreshRank(id) {
  const selected = Array.isArray(answers[id]) ? answers[id] : [];
  document.querySelectorAll(`[data-rank="${id}"]`).forEach((button) => {
    const rank = selected.indexOf(button.dataset.option) + 1;
    button.classList.toggle("is-selected", Boolean(rank));
    const index = button.querySelector(".rank-index");
    if (index) index.textContent = rank ? String(rank) : "";
  });
}

function validateRequired() {
  errors = {};
  requiredFields().forEach((field) => {
    if (!hasAnswer(field)) {
      errors[field.id] = "Capture this answer before finalizing the workshop packet.";
    }
  });

  document.querySelectorAll("[data-field-shell]").forEach((shell) => shell.classList.remove("has-error"));
  document.querySelectorAll("[data-error]").forEach((error) => {
    error.textContent = "";
  });

  Object.entries(errors).forEach(([id, message]) => {
    const shell = document.querySelector(`[data-field-shell="${id}"]`);
    const error = document.querySelector(`[data-error="${id}"]`);
    if (shell) shell.classList.add("has-error");
    if (error) error.textContent = message;
  });

  const firstErrorId = Object.keys(errors)[0];
  if (firstErrorId) {
    const target = document.querySelector(`[data-field-shell="${firstErrorId}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast(`${Object.keys(errors).length} essential answers still need attention.`);
    return false;
  }

  showToast("Essentials are complete. The workshop packet is ready to export.");
  return true;
}

function answerToMarkdown(value, field = {}) {
  if (isObjectAnswer(value)) {
    if (field.type === "inline") {
      const config = inlinePromptConfig(field);
      return config?.toMarkdown ? config.toMarkdown(value) : "_No answer captured._";
    }
    if (field.type === "chips") {
      const selected = selectionArray(value);
      const lines = [];
      if (selected.length) lines.push(`Selected: ${selected.join(", ")}`);
      if (value.note) lines.push(`Note: ${value.note}`);
      return lines.length ? lines.join("\n") : "_No answer captured._";
    }
    if (field.type === "choice") {
      const lines = [];
      if (value.selected) lines.push(`Selected: ${value.selected}`);
      if (value.note) lines.push(`Note: ${value.note}`);
      return lines.length ? lines.join("\n") : "_No answer captured._";
    }
    if (field.type === "sliders") {
      const sliderLabels = Object.fromEntries((field.sliders || []).map((slider) => [slider.id, slider]));
      const entries = Object.entries(value);
      return entries.length
        ? entries
            .map(([key, item]) => {
              const slider = sliderLabels[key];
              return slider ? `- ${slider.label}: ${item}/5 (${slider.minLabel} to ${slider.maxLabel})` : `- ${key}: ${item}`;
            })
            .join("\n")
        : "_No answer captured._";
    }
    const entries = Object.entries(value).filter(([, item]) => String(item || "").trim());
    return entries.length ? entries.map(([key, item]) => `- ${key}: ${item}`).join("\n") : "_No answer captured._";
  }
  if (Array.isArray(value)) {
    return value.length ? value.map((item, index) => `${index + 1}. ${item}`).join("\n") : "_No answer captured._";
  }
  const text = String(value || "").trim();
  return text || "_No answer captured._";
}

function buildMarkdown() {
  const now = new Date();
  const date = now.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const body = sections
    .map((section) => {
      const questions = section.fields
        .map((field) => `### ${field.label}\n\n${answerToMarkdown(getAnswer(field.id), field)}`)
        .join("\n\n");
      return `## ${section.title}\n\n${questions}`;
    })
    .join("\n\n");

  return `# backtest.ai Brand Strategy Workshop Answers\n\nGenerated: ${date}\n\n${body}\n`;
}

async function copyMarkdown() {
  const markdown = buildMarkdown();
  try {
    await navigator.clipboard.writeText(markdown);
    showToast("Markdown copied to clipboard.");
  } catch (_error) {
    const helper = document.createElement("textarea");
    helper.value = markdown;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showToast("Markdown copied using the fallback method.");
  }
}

function downloadMarkdown() {
  const blob = new Blob([buildMarkdown()], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "backtest-ai-brand-strategy-workshop.md";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Markdown export created.");
}

function clearDraft() {
  const confirmed = window.confirm("Clear all saved answers for this workshop form?");
  if (!confirmed) return;
  answers = {};
  errors = {};
  window.localStorage.removeItem(STORAGE_KEY);
  renderApp();
  attachInteractions();
  showToast("Draft cleared.");
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function scrollToSection(id) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function markActiveSection() {
  if (sectionObserver) sectionObserver.disconnect();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      document.querySelectorAll("[data-section-target]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.sectionTarget === visible.target.id);
      });
    },
    { rootMargin: "-20% 0px -66% 0px", threshold: [0.08, 0.18, 0.32] },
  );

  document.querySelectorAll("[data-section]").forEach((section) => sectionObserver.observe(section));
}

function attachInteractions() {
  if (!listenersAttached) {
    document.addEventListener("input", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.dataset.field) {
        setAnswerFromInput(target);
      }
    });

    document.addEventListener("change", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.dataset.field) {
        setAnswerFromInput(target);
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target.closest("button") : null;
      if (!target) return;

      if (target.dataset.sectionTarget) scrollToSection(target.dataset.sectionTarget);
      if (target.dataset.next) scrollToSection(target.dataset.next);
      if (target.dataset.prev) scrollToSection(target.dataset.prev);
      if (target.dataset.rank) toggleRank(target);

      if (target.dataset.action === "review") validateRequired();
      if (target.dataset.action === "copy") copyMarkdown();
      if (target.dataset.action === "download") downloadMarkdown();
      if (target.dataset.action === "clear") clearDraft();
    });

    listenersAttached = true;
  }

  markActiveSection();
}

let typeformIndex = Math.max(
  0,
  allFields().findIndex((field) => !hasAnswer(field)),
);
if (typeformIndex === -1) typeformIndex = 0;
let typeformListenersAttached = false;
let firstMotionRender = true;

function currentField() {
  return allFields()[typeformIndex];
}

function currentSection() {
  const field = currentField();
  return sections.find((section) => section.id === field.sectionId) || sections[0];
}

function questionNumber() {
  return String(typeformIndex + 1).padStart(2, "0");
}

function typeformPercent() {
  const total = allFields().length;
  return total ? Math.round((completedCount() / total) * 100) : 0;
}

function ferrazLogoMarkup() {
  return `
    <div class="ferraz-logo" aria-label="Ferraz Creative">
      <img src="./images/fc-logo.png" alt="Ferraz Creative" />
    </div>
  `;
}

function outlineMarkup(progress, activeSectionId = currentField()?.sectionId) {
  return `
    <div class="floating-outline">
      <div class="outline-head">
        <span>${progress}% complete</span>
        <button type="button" data-typeform-action="review">Check essentials</button>
      </div>
      <div class="outline-list" data-outline-active-section="${escapeHtml(activeSectionId || "")}">
        ${renderTypeformNav(activeSectionId)}
      </div>
    </div>
  `;
}

function renderTypeformNav(activeSectionId = currentField()?.sectionId) {
  return sections
    .map((section) => {
      const firstIndex = allFields().findIndex((field) => field.sectionId === section.id);
      const done = completedCount(section.fields);
      const isActive = activeSectionId === section.id;
      return `
        <button class="outline-item ${isActive ? "is-active" : ""}" type="button" data-jump-index="${firstIndex}" data-scroll-section="${escapeHtml(section.id)}">
          <span>${escapeHtml(section.label || section.title)}</span>
          <span>${done}/${section.fields.length}</span>
        </button>
      `;
    })
    .join("");
}

function optionLabel(option) {
  return typeof option === "string" ? option : option.label;
}

function optionSub(option) {
  return typeof option === "string" ? "" : option.sub || "";
}

function selectionArray(value) {
  if (Array.isArray(value)) return value;
  if (isObjectAnswer(value) && Array.isArray(value.selected)) return value.selected;
  if (isObjectAnswer(value) && value.selected) return [value.selected];
  return [];
}

function noteValue(value) {
  return isObjectAnswer(value) ? String(value.note || "") : "";
}

function renderTypeformControl(field) {
  const value = getAnswer(field.id);

  if (field.type === "text") {
    return `<input class="answer-input" id="${field.id}" type="text" data-field="${field.id}" value="${escapeHtml(value)}" autocomplete="off" placeholder="Type your answer here" />`;
  }

  if (field.type === "choice") {
    const selected = isObjectAnswer(value) ? value.selected : value;
    return `
      <div class="answer-options ${field.columns === 2 ? "answer-options--two" : ""}">
        ${field.options
          .map(
            (option, index) => {
              const label = optionLabel(option);
              return `
              <label class="answer-choice ${selected === label ? "is-selected" : ""}">
                <input type="radio" name="${field.id}" data-field="${field.id}" value="${escapeHtml(label)}" ${selected === label ? "checked" : ""} />
                <span class="answer-choice__mark" aria-hidden="true"></span>
                <span class="answer-choice__copy">
                  <span>${escapeHtml(label)}</span>
                  ${optionSub(option) ? `<small>${escapeHtml(optionSub(option))}</small>` : ""}
                </span>
              </label>
            `;
            },
          )
          .join("")}
      </div>
      ${field.notePlaceholder ? `<textarea class="answer-textarea answer-textarea--note" data-note-field="${field.id}" placeholder="${escapeHtml(field.notePlaceholder)}">${escapeHtml(noteValue(value))}</textarea>` : ""}
    `;
  }

  if (field.type === "chips") {
    const selected = selectionArray(value);
    return `
      <div class="chip-cloud" data-chip-cloud="${field.id}">
        ${field.options
          .map((option) => {
            const active = selected.includes(option);
            return `<button class="word-chip ${active ? "is-selected" : ""}" type="button" data-chip-field="${field.id}" data-chip-value="${escapeHtml(option)}">${escapeHtml(option)}</button>`;
          })
          .join("")}
      </div>
      ${field.notePlaceholder ? `<textarea class="answer-textarea answer-textarea--note" data-note-field="${field.id}" placeholder="${escapeHtml(field.notePlaceholder)}">${escapeHtml(noteValue(value))}</textarea>` : ""}
    `;
  }

  if (field.type === "scale") {
    const selected = String(value || "");
    return `
      <div class="scale-control" data-scale-field="${field.id}">
        <div class="scale-buttons">
          ${[1, 2, 3, 4, 5]
            .map(
              (number) =>
                `<button class="scale-button ${selected === String(number) ? "is-selected" : ""}" type="button" data-scale-field="${field.id}" data-scale-value="${number}">${number}</button>`,
            )
            .join("")}
        </div>
        <div class="scale-ends">
          <span>${escapeHtml(field.minLabel || "Low")}</span>
          <span>${escapeHtml(field.maxLabel || "High")}</span>
        </div>
      </div>
    `;
  }

  if (field.type === "sliders") {
    const sliderValue = isObjectAnswer(value) ? value : {};
    return `
      <div class="slider-stack">
        ${field.sliders
          .map((slider) => {
            const current = String(sliderValue[slider.id] || "3");
            return `
              <div class="slider-group">
                <div class="slider-title">${escapeHtml(slider.label)}</div>
                <div class="slider-row">
                  <span>${escapeHtml(slider.minLabel)}</span>
                  <input class="voice-slider" type="range" min="1" max="5" value="${escapeHtml(current)}" data-slider-field="${field.id}" data-slider-id="${slider.id}" aria-label="${escapeHtml(slider.label)}: ${escapeHtml(slider.minLabel)} to ${escapeHtml(slider.maxLabel)}" />
                  <span>${escapeHtml(slider.maxLabel)}</span>
                  <output>${escapeHtml(current)}</output>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  if (field.type === "rank") {
    const selected = Array.isArray(value) ? value : [];
    return `
      <div class="answer-options answer-options--rank" data-rank-field="${field.id}">
        ${field.options
          .map((option) => {
            const rank = selected.indexOf(option) + 1;
            return `
              <button class="answer-rank ${rank ? "is-selected" : ""}" type="button" data-typeform-rank="${field.id}" data-option="${escapeHtml(option)}">
                <span>${escapeHtml(option)}</span>
                <span class="answer-rank__number">${rank || ""}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  if (field.type === "scale") {
    return `
      <div class="answer-options answer-options--scale">
        ${field.options
          .map(
            (option) => `
              <label class="answer-choice">
                <input type="radio" name="${field.id}" data-field="${field.id}" value="${escapeHtml(option)}" ${value === option ? "checked" : ""} />
                <span>${escapeHtml(option)}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    `;
  }

  return `<textarea class="answer-textarea" id="${field.id}" data-field="${field.id}" placeholder="${escapeHtml(field.placeholder || "Type your answer here")}">${escapeHtml(value)}</textarea>`;
}

function renderInlineBlank(field, part) {
  const value = String(inlinePromptValue(field)[part.id] || "");
  const isEmpty = value.trim().length === 0;
  return `<span
    class="inline-answer inline-answer--${part.id}"
    contenteditable="true"
    role="textbox"
    aria-label="${escapeHtml(part.label)}"
    spellcheck="true"
    data-field="${field.id}"
    data-inline-field="${field.id}"
    data-inline-part="${part.id}"
    data-empty="${isEmpty ? "true" : "false"}"
    style="--empty-width:${part.width}"
  >${escapeHtml(value)}</span>`;
}

function renderTypeformHeadline(field) {
  if (!isInlinePromptField(field)) {
    return `<h1>${escapeHtml(field.label)}</h1>`;
  }

  if (field.id === "q1_purpose") {
    const [problem, audience] = inlinePromptConfig(field).parts;
    return `
      <h1 class="inline-prompt" data-inline-shell="${field.id}">
        <span>We exist because </span>${renderInlineBlank(field, problem)}<span> has always been unfairly hard for </span>${renderInlineBlank(field, audience)}<span> people.</span>
      </h1>
    `;
  }

  if (field.id === "q3_positioning_statement") {
    const [audience, need, category, benefit, alternative, difference, proof] = inlinePromptConfig(field).parts;
    return `
      <h1 class="inline-prompt inline-prompt--positioning" data-inline-shell="${field.id}">
        <span>For </span>${renderInlineBlank(field, audience)}<span> who </span>${renderInlineBlank(field, need)}<span>,</span><br />
        <span>backtest.ai is </span>${renderInlineBlank(field, category)}<span> that </span>${renderInlineBlank(field, benefit)}<span>.</span><br />
        <span>Unlike </span>${renderInlineBlank(field, alternative)}<span>, we </span>${renderInlineBlank(field, difference)}<br />
        <span>because </span>${renderInlineBlank(field, proof)}<span>.</span>
      </h1>
    `;
  }

  const [when, want, can] = inlinePromptConfig(field).parts;
  return `
    <h1 class="inline-prompt" data-inline-shell="${field.id}">
      <span>Complete the job story: When I </span>${renderInlineBlank(field, when)}<span>, I want to </span>${renderInlineBlank(field, want)}<span>, so I can </span>${renderInlineBlank(field, can)}<span>.</span>
    </h1>
  `;
}

function renderTypeformQuestion() {
  const field = currentField();
  const section = currentSection();
  const total = allFields().length;
  const progress = typeformPercent();
  const answered = hasAnswer(field);
  const isInlinePrompt = isInlinePromptField(field);

  return `
    <main class="typeform-shell">
      <header class="topbar">
        <button class="logo-button" type="button" data-jump-index="0">
          ${ferrazLogoMarkup()}
        </button>
        <div class="topbar-actions">
          <button class="text-action" type="button" data-typeform-action="copy">Copy</button>
          <button class="text-action" type="button" data-typeform-action="download">Export</button>
        </div>
      </header>

      <div class="progress-line" aria-hidden="true">
        <span style="width:${progress}%"></span>
      </div>

      <section class="question-stage" aria-live="polite">
        <aside class="question-context">
          <p class="context-section">${escapeHtml(section.title)}</p>
          <p>${escapeHtml(section.intro)}</p>
          <div class="context-count">
            <span>${questionNumber()}</span>
            <span>${total}</span>
          </div>
          ${outlineMarkup(progress)}
        </aside>

        <article class="question-panel" data-question-panel>
          <div class="question-label-row">
            <span>${field.required ? "Essential" : "Optional"}</span>
            <span>${answered ? "Answered" : "Open"}</span>
          </div>
          ${renderTypeformHeadline(field)}
          <p class="question-helper">${escapeHtml(field.helper || "")}</p>
          <div class="answer-area ${isInlinePrompt ? "answer-area--inline" : ""} ${errors[field.id] ? "has-error" : ""}" data-field-shell="${field.id}">
            ${isInlinePrompt ? "" : renderTypeformControl(field)}
            <p class="error-text" data-error="${field.id}">${errors[field.id] ? escapeHtml(errors[field.id]) : ""}</p>
          </div>
          <div class="question-actions">
            <button class="primary-action" type="button" data-typeform-next>
              ${typeformIndex === total - 1 ? "Review answers" : answered ? "Next" : "Skip for now"}
            </button>
            <button class="secondary-action" type="button" data-typeform-prev ${typeformIndex === 0 ? "disabled" : ""}>Back</button>
          </div>
        </article>
      </section>

      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </main>
  `;
}

function fieldMetaLabel(field) {
  if (field.type === "inline") return "Inline";
  if (field.type === "sliders") return "Sliders";
  if (field.type === "chips") return field.max ? `Choose ${field.max}` : "Choose";
  if (field.type === "choice") return "Select one";
  if (field.type === "scale") return "Scale";
  return field.required ? "Essential" : "Prompt";
}

function renderScrollableQuestion(field, index, total) {
  const answered = hasAnswer(field);
  const isInlinePrompt = isInlinePromptField(field);

  return `
    <section class="question-stage question-stage--scroll" id="${field.id}" data-question-stage data-section-id="${escapeHtml(field.sectionId)}">
      <article class="question-panel" data-question-panel>
        <div class="question-label-row">
          <span>${escapeHtml(fieldMetaLabel(field))}</span>
          <span data-field-state="${field.id}">${answered ? "Answered" : "Open"}</span>
        </div>
        ${renderTypeformHeadline(field)}
        <p class="question-helper">${escapeHtml(field.helper || "")}</p>
        <div class="answer-area ${isInlinePrompt ? "answer-area--inline" : ""} ${errors[field.id] ? "has-error" : ""}" data-field-shell="${field.id}">
          ${isInlinePrompt ? "" : renderTypeformControl(field)}
          <p class="error-text" data-error="${field.id}">${errors[field.id] ? escapeHtml(errors[field.id]) : ""}</p>
        </div>
      </article>
    </section>
  `;
}

function renderFixedContext(field = allFields()[0]) {
  const fields = allFields();
  const fallback = fields[0] || {};
  const activeField = field || fallback;
  const index = Math.max(0, fields.findIndex((item) => item.id === activeField.id));
  const progress = typeformPercent();
  activeScrollableFieldId = activeField.id || activeScrollableFieldId;

  return `
    <aside class="question-context question-context--fixed" data-fixed-context>
      <p class="context-section" data-fixed-section>${escapeHtml(activeField.sectionLabel || activeField.sectionTitle || "")}</p>
      <p data-fixed-intro>${escapeHtml(activeField.sectionIntro || "")}</p>
      <div class="context-count">
        <span data-fixed-index>${String(index + 1).padStart(2, "0")}</span>
        <span data-fixed-total>${fields.length}</span>
      </div>
      ${outlineMarkup(progress, activeField.sectionId)}
    </aside>
  `;
}

function renderScrollableApp() {
  const fields = allFields();
  const progress = typeformPercent();
  const activeField = fields.find((field) => field.id === activeScrollableFieldId) || fields[0];

  document.getElementById("app").innerHTML = `
    <main class="typeform-shell typeform-shell--scroll">
      <header class="topbar topbar--sticky">
        <button class="logo-button" type="button" data-scroll-top>
          ${ferrazLogoMarkup()}
        </button>
        <div class="topbar-actions">
          <button class="text-action" type="button" data-typeform-action="copy">Copy</button>
          <button class="text-action" type="button" data-typeform-action="download">Export</button>
        </div>
      </header>

      <div class="progress-line" aria-hidden="true">
        <span style="width:${progress}%"></span>
      </div>

      ${renderFixedContext(activeField)}

      <div class="scrollable-question-stack">
        ${fields.map((field, index) => renderScrollableQuestion(field, index, fields.length)).join("")}
        <section class="question-stage question-stage--scroll question-stage--closing">
          <article class="question-panel">
            <div class="question-label-row">
              <span>Export</span>
              <span>${completedCount()}/${fields.length}</span>
            </div>
            <h1>Ready for the workshop packet.</h1>
            <p class="question-helper">Copy or export the responses when the client has finished the questionnaire.</p>
            <div class="question-actions">
              <button class="primary-action" type="button" data-typeform-action="copy">Copy Markdown</button>
              <button class="secondary-action" type="button" data-typeform-action="download">Export</button>
            </div>
          </article>
        </section>
      </div>

      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </main>
  `;
}

function renderTypeformApp() {
  document.getElementById("app").innerHTML = renderTypeformQuestion();
  requestAnimationFrame(runMotionPass);
  window.setTimeout(() => {
    const firstControl = document.querySelector("[data-field], [data-typeform-rank]");
    if (firstControl && window.innerWidth > 760) firstControl.focus?.();
  }, 50);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function motionTiming(duration = 360, delay = 0) {
  return {
    duration,
    delay,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "both",
  };
}

function runMotionPass() {
  if (prefersReducedMotion()) {
    firstMotionRender = false;
    return;
  }

  const panel = document.querySelector(".question-panel");

  if (panel) {
    panel.animate(
      [
        { opacity: 0, transform: "translate3d(0,12px,0)" },
        { opacity: 1, transform: "translate3d(0,0,0)" },
      ],
      motionTiming(firstMotionRender ? 420 : 300, 0),
    );
  }

  firstMotionRender = false;
}

function syncTypeformAnswer(input) {
  const id = input.dataset.field;
  const field = allFields().find((item) => item.id === id);
  if (!field) return;

  if (field.type === "choice") {
    const selected = input.value;
    answers[id] = field.notePlaceholder
      ? { ...(isObjectAnswer(answers[id]) ? answers[id] : {}), selected }
      : selected;
    document.querySelectorAll(`input[type="radio"][data-field="${CSS.escape(id)}"]`).forEach((radio) => {
      radio.closest(".answer-choice")?.classList.toggle("is-selected", radio.value === selected);
    });
  } else if (field.type === "scale") {
    answers[id] = input.value;
  } else {
    answers[id] = input.value;
  }

  clearFieldError(id);
  saveDraft();
  refreshTypeformLiveUi(id);
}

function syncNoteAnswer(target) {
  const id = target.dataset.noteField;
  if (!id) return;
  const current = isObjectAnswer(answers[id]) ? { ...answers[id] } : {};
  current.note = target.value;
  answers[id] = current;
  clearFieldError(id);
  saveDraft();
  refreshTypeformLiveUi(id);
}

function toggleChip(button) {
  const id = button.dataset.chipField;
  const value = button.dataset.chipValue;
  const field = allFields().find((item) => item.id === id);
  if (!field || !value) return;

  const current = isObjectAnswer(answers[id]) ? { ...answers[id] } : {};
  const selected = selectionArray(current);
  const isSelected = selected.includes(value);
  let nextSelected = selected;

  if (field.mode === "single") {
    nextSelected = isSelected ? [] : [value];
  } else if (isSelected) {
    nextSelected = selected.filter((item) => item !== value);
  } else if (!field.max || selected.length < field.max) {
    nextSelected = [...selected, value];
  }

  answers[id] = { ...current, selected: nextSelected };
  clearFieldError(id);
  saveDraft();
  document.querySelectorAll(`[data-chip-field="${CSS.escape(id)}"]`).forEach((chip) => {
    chip.classList.toggle("is-selected", nextSelected.includes(chip.dataset.chipValue));
  });
  refreshTypeformLiveUi(id);
}

function setScaleAnswer(button) {
  const id = button.dataset.scaleField;
  const value = button.dataset.scaleValue;
  if (!id || !value) return;
  answers[id] = value;
  clearFieldError(id);
  saveDraft();
  document.querySelectorAll(`[data-scale-field="${CSS.escape(id)}"] .scale-button`).forEach((item) => {
    item.classList.toggle("is-selected", item.dataset.scaleValue === value);
  });
  refreshTypeformLiveUi(id);
}

function syncSliderAnswer(input) {
  const id = input.dataset.sliderField;
  const sliderId = input.dataset.sliderId;
  if (!id || !sliderId) return;
  const current = isObjectAnswer(answers[id]) ? { ...answers[id] } : {};
  current[sliderId] = input.value;
  answers[id] = current;
  clearFieldError(id);
  saveDraft();
  const output = input.closest(".slider-row")?.querySelector("output");
  if (output) output.textContent = input.value;
  refreshTypeformLiveUi(id);
}

function sanitizeInlineText(value) {
  return value.replace(/\s+/g, " ").trimStart();
}

function syncInlineAnswer(target) {
  const id = target.dataset.inlineField;
  const part = target.dataset.inlinePart;
  const field = allFields().find((item) => item.id === id);
  if (!field || !part) return;

  const current = isObjectAnswer(answers[id]) ? { ...answers[id] } : {};
  const text = sanitizeInlineText(target.textContent || "");

  if (!text.trim()) {
    target.textContent = "";
    target.dataset.empty = "true";
    delete current[part];
  } else {
    target.dataset.empty = "false";
    current[part] = text;
  }

  answers[id] = current;
  clearFieldError(id);
  saveDraft();
  syncCurrentCta(id);
  refreshTypeformLiveUi(id);
}

function focusAdjacentInlineAnswer(target, direction = 1) {
  const editors = Array.from(document.querySelectorAll(`[data-inline-field="${target.dataset.inlineField}"]`));
  const index = editors.indexOf(target);
  const next = editors[index + direction];
  if (next) {
    next.focus();
    placeCaretAtEnd(next);
  }
}

function placeCaretAtEnd(element) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function syncCurrentCta(id) {
  const field = currentField();
  if (!field || field.id !== id) return;
  const nextButton = document.querySelector("[data-typeform-next]");
  if (!nextButton) return;
  nextButton.textContent = typeformIndex === allFields().length - 1 ? "Review answers" : hasAnswer(field) ? "Next" : "Skip for now";
}

function refreshTypeformLiveUi(id) {
  const field = allFields().find((item) => item.id === activeScrollableFieldId) || currentField();
  const progress = typeformPercent();
  const progressFill = document.querySelector(".progress-line span");
  const stateLabels = document.querySelectorAll(`[data-field-state="${CSS.escape(id)}"]`);

  if (progressFill) progressFill.style.width = `${progress}%`;
  document.querySelectorAll(".outline-head span").forEach((item) => {
    item.textContent = `${progress}% complete`;
  });
  document.querySelectorAll(".outline-list").forEach((list) => {
    list.innerHTML = renderTypeformNav(list.dataset.outlineActiveSection || field?.sectionId);
  });
  stateLabels.forEach((stateLabel) => {
    const updatedField = allFields().find((item) => item.id === id);
    stateLabel.textContent = updatedField && hasAnswer(updatedField) ? "Answered" : "Open";
  });
  document.querySelectorAll(".question-stage--closing .question-label-row span:last-child").forEach((item) => {
    item.textContent = `${completedCount()}/${allFields().length}`;
  });
}

function updateFixedContext(fieldId) {
  const fields = allFields();
  const field = fields.find((item) => item.id === fieldId);
  if (!field) return;

  activeScrollableFieldId = field.id;
  const index = fields.findIndex((item) => item.id === field.id);
  const progress = typeformPercent();
  const context = document.querySelector("[data-fixed-context]");

  if (!context) return;

  const section = context.querySelector("[data-fixed-section]");
  const intro = context.querySelector("[data-fixed-intro]");
  const indexNode = context.querySelector("[data-fixed-index]");
  const totalNode = context.querySelector("[data-fixed-total]");
  const outlineHead = context.querySelector(".outline-head span");
  const outlineList = context.querySelector(".outline-list");

  if (section) section.textContent = field.sectionLabel || field.sectionTitle || "";
  if (intro) intro.textContent = field.sectionIntro || "";
  if (indexNode) indexNode.textContent = String(index + 1).padStart(2, "0");
  if (totalNode) totalNode.textContent = String(fields.length);
  if (outlineHead) outlineHead.textContent = `${progress}% complete`;
  if (outlineList) {
    outlineList.dataset.outlineActiveSection = field.sectionId;
    outlineList.innerHTML = renderTypeformNav(field.sectionId);
  }
}

function observeScrollableQuestions() {
  if (scrollQuestionObserver) scrollQuestionObserver.disconnect();

  const questions = Array.from(document.querySelectorAll("[data-question-stage]"));
  if (!questions.length) return;

  scrollQuestionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aDistance = Math.abs(a.boundingClientRect.top - window.innerHeight * 0.32);
          const bDistance = Math.abs(b.boundingClientRect.top - window.innerHeight * 0.32);
          return aDistance - bDistance;
        })[0];

      if (visible?.target?.id) updateFixedContext(visible.target.id);
    },
    { rootMargin: "-24% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] },
  );

  questions.forEach((question) => scrollQuestionObserver.observe(question));
  updateFixedContext(questions[0].id);
}

function scrollToQuestionSection(sectionId) {
  const target = document.querySelector(`[data-question-stage][data-section-id="${CSS.escape(sectionId)}"]`);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleTypeformRank(button) {
  const id = button.dataset.typeformRank;
  const option = button.dataset.option;
  const current = Array.isArray(answers[id]) ? [...answers[id]] : [];
  const existingIndex = current.indexOf(option);

  if (existingIndex >= 0) {
    current.splice(existingIndex, 1);
  } else {
    current.push(option);
  }

  answers[id] = current;
  clearFieldError(id);
  saveDraft();
  renderTypeformApp();
}

function moveTypeform(delta) {
  const total = allFields().length;
  typeformIndex = Math.min(Math.max(typeformIndex + delta, 0), total - 1);
  errors = {};
  renderTypeformApp();
}

function jumpTypeform(index) {
  const nextIndex = Number(index);
  if (!Number.isFinite(nextIndex)) return;
  typeformIndex = Math.min(Math.max(nextIndex, 0), allFields().length - 1);
  errors = {};
  renderTypeformApp();
}

function validateTypeformRequired() {
  errors = {};
  requiredFields().forEach((field) => {
    if (!hasAnswer(field)) {
      errors[field.id] = "This essential question still needs an answer.";
    }
  });

  const firstErrorId = Object.keys(errors)[0];
  if (firstErrorId) {
    const targetIndex = allFields().findIndex((field) => field.id === firstErrorId);
    if (targetIndex >= 0) {
      typeformIndex = targetIndex;
    }
    renderTypeformApp();
    showToast(`${Object.keys(errors).length} essential answers still need attention.`);
    return false;
  }

  renderTypeformApp();
  showToast("Essentials are complete. Ready to export.");
  return true;
}

function validateScrollableRequired() {
  errors = {};
  requiredFields().forEach((field) => {
    if (!hasAnswer(field)) {
      errors[field.id] = "This essential question still needs an answer.";
    }
  });

  document.querySelectorAll("[data-field-shell]").forEach((shell) => shell.classList.remove("has-error"));
  document.querySelectorAll("[data-error]").forEach((error) => {
    error.textContent = "";
  });

  Object.entries(errors).forEach(([id, message]) => {
    const shell = document.querySelector(`[data-field-shell="${CSS.escape(id)}"]`);
    const error = document.querySelector(`[data-error="${CSS.escape(id)}"]`);
    if (shell) shell.classList.add("has-error");
    if (error) error.textContent = message;
  });

  const firstErrorId = Object.keys(errors)[0];
  if (firstErrorId) {
    document.getElementById(firstErrorId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast(`${Object.keys(errors).length} essential answer still needs attention.`);
    return false;
  }

  showToast("Essentials are complete. Ready to export.");
  return true;
}

function clearTypeformDraft() {
  const confirmed = window.confirm("Clear all saved answers for this workshop form?");
  if (!confirmed) return;
  answers = {};
  errors = {};
  typeformIndex = 0;
  window.localStorage.removeItem(STORAGE_KEY);
  renderTypeformApp();
  showToast("Draft cleared.");
}

function attachTypeformInteractions() {
  if (typeformListenersAttached) return;

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.inlineField) {
      syncInlineAnswer(target);
      return;
    }
    if (target instanceof HTMLElement && target.dataset.field && target.matches("textarea, input[type='text']")) {
      const id = target.dataset.field;
      answers[id] = target.value;
      clearFieldError(id);
      saveDraft();
      syncCurrentCta(id);
      refreshTypeformLiveUi(id);
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.field) {
      if (target.dataset.inlineField) return;
      if (target.matches("textarea, input[type='text']")) return;
      syncTypeformAnswer(target);
    }
  });

  document.addEventListener("paste", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.dataset.inlineField) return;
    event.preventDefault();
    const text = sanitizeInlineText(event.clipboardData?.getData("text/plain") || "");
    document.execCommand("insertText", false, text);
  });

  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button") : null;
    if (!button) return;

    if (button.dataset.typeformRank) toggleTypeformRank(button);
    if (button.dataset.typeformNext !== undefined) moveTypeform(1);
    if (button.dataset.typeformPrev !== undefined) moveTypeform(-1);
    if (button.dataset.jumpIndex !== undefined) jumpTypeform(button.dataset.jumpIndex);

    if (button.dataset.typeformAction === "review") validateScrollableRequired();
    if (button.dataset.typeformAction === "copy") copyMarkdown();
    if (button.dataset.typeformAction === "download") downloadMarkdown();
    if (button.dataset.typeformAction === "clear") clearTypeformDraft();
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isInlineEditor = target instanceof HTMLElement && Boolean(target.dataset.inlineField);
    if (isInlineEditor && (event.key === "Enter" || event.key === "Tab")) {
      event.preventDefault();
      focusAdjacentInlineAnswer(target, event.shiftKey ? -1 : 1);
      return;
    }

    const isWriting =
      target instanceof HTMLElement && (["TEXTAREA", "INPUT"].includes(target.tagName) || target.isContentEditable);
    if (isWriting) return;

    if (event.key === "ArrowRight" || event.key === "Enter") {
      event.preventDefault();
      moveTypeform(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTypeform(-1);
    }
  });

  typeformListenersAttached = true;
}

function attachScrollableInteractions() {
  if (typeformListenersAttached) return;

  document.addEventListener("input", (event) => {
    const target = event.target;

    if (target instanceof HTMLElement && target.dataset.inlineField) {
      syncInlineAnswer(target);
      return;
    }

    if (target instanceof HTMLInputElement && target.dataset.sliderField) {
      syncSliderAnswer(target);
      return;
    }

    if (target instanceof HTMLTextAreaElement && target.dataset.noteField) {
      syncNoteAnswer(target);
      return;
    }

    if (target instanceof HTMLElement && target.dataset.field && target.matches("textarea, input[type='text']")) {
      const id = target.dataset.field;
      answers[id] = target.value;
      clearFieldError(id);
      saveDraft();
      refreshTypeformLiveUi(id);
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.dataset.field && target.type === "radio") {
      syncTypeformAnswer(target);
    }
  });

  document.addEventListener("paste", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.dataset.inlineField) return;
    event.preventDefault();
    const text = sanitizeInlineText(event.clipboardData?.getData("text/plain") || "");
    document.execCommand("insertText", false, text);
  });

  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button") : null;
    if (!button) return;

    if (button.dataset.scrollTop !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (button.dataset.scrollSection) {
      scrollToQuestionSection(button.dataset.scrollSection);
    }
    if (button.dataset.chipField) {
      toggleChip(button);
    }
    if (button.dataset.scaleField && button.dataset.scaleValue) {
      setScaleAnswer(button);
    }

    if (button.dataset.typeformAction === "review") validateScrollableRequired();
    if (button.dataset.typeformAction === "copy") copyMarkdown();
    if (button.dataset.typeformAction === "download") downloadMarkdown();
    if (button.dataset.typeformAction === "clear") {
      const confirmed = window.confirm("Clear all saved answers for this workshop form?");
      if (!confirmed) return;
      answers = {};
      errors = {};
      window.localStorage.removeItem(STORAGE_KEY);
      renderScrollableApp();
      observeScrollableQuestions();
      showToast("Draft cleared.");
    }
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isInlineEditor = target instanceof HTMLElement && Boolean(target.dataset.inlineField);
    if (isInlineEditor && (event.key === "Enter" || event.key === "Tab")) {
      event.preventDefault();
      focusAdjacentInlineAnswer(target, event.shiftKey ? -1 : 1);
    }
  });

  typeformListenersAttached = true;
}

renderScrollableApp();
attachScrollableInteractions();
observeScrollableQuestions();
