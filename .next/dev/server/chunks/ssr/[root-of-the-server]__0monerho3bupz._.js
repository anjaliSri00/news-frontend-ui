module.exports = [
(()=>{"use strict";return[
"[project]/app/category/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_create_empty_gsp_error",
    ()=>__next_create_empty_gsp_error,
    "default",
    ()=>CategoryRoute,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/category/[slug]/page.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/services/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$CategoryPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pages/CategoryPage.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllCategories"])();
    return categories.map((cat)=>({
            slug: cat.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCategoryBySlug"])(slug);
    if (!category) {
        return {
            title: 'Category Not Found · Form & Field'
        };
    }
    return {
        title: `${category.title} · Form & Field | Lumen Journal`,
        description: category.description
    };
}
// ✅ Child resolves params inside Suspense
async function CategoryContent({ params }) {
    const { slug } = await params;
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCategoryBySlug"])(slug);
    if (!category) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$CategoryPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryPage"], {
        slug: category.slug
    }, category.slug, false, {
        fileName: "[project]/app/category/[slug]/page.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
function CategoryRoute({ params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryShell, {}, void 0, false, {
            fileName: "[project]/app/category/[slug]/page.tsx",
            lineNumber: 45,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryContent, {
            params: params
        }, void 0, false, {
            fileName: "[project]/app/category/[slug]/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/category/[slug]/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
// ✅ Deterministic fallback — no Math.random / Date.now
function CategoryShell() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-slate-50 border-b border-slate-200 py-10 sm:py-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 w-32 bg-slate-200 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/category/[slug]/page.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-64 bg-slate-200 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/app/category/[slug]/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-80 bg-slate-200"
                        }, void 0, false, {
                            fileName: "[project]/app/category/[slug]/page.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/category/[slug]/page.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/category/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/category/[slug]/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/category/[slug]/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
const __next_create_empty_gsp_error = function generateStaticParams() {
    return new Error('When using Cache Components, all `generateStaticParams` functions must return at least one result. This is to ensure that we can perform build-time validation that there is no other dynamic accesses that would cause a runtime error.\n\nLearn more: https://nextjs.org/docs/messages/empty-generate-static-params');
};
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/components/pages/CategoryPage.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryPage",
    ()=>CategoryPage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CategoryPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CategoryPage() from the server but CategoryPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/pages/CategoryPage.tsx", "CategoryPage");
}),
"[project]/components/pages/CategoryPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$CategoryPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/pages/CategoryPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$CategoryPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/data/articles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARTICLES",
    ()=>ARTICLES
]);
const ARTICLES = [
    // --- LEAD HERO STORY ---
    {
        id: 'copenhagen-courtyard-homes',
        title: 'The quiet revolution inside Copenhagen’s courtyard homes',
        deck: 'Behind historic façades, a new generation of architects is making shared space the most valuable room in the house.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Copenhagen',
        kicker: 'Projects / Copenhagen',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Architecture Editor, Copenhagen',
            bio: 'Clara Voss is an architect and writer based in Copenhagen focusing on collective housing typologies and Nordic adaptive reuse.'
        },
        date: '14 Oct 2026',
        readTime: '8 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        imageAlt: 'Sunlit interior courtyard with textured plaster walls and large glass doors',
        caption: 'The shared winter garden at Vesterbro Courtyard House, where operable timber glazing mediates between private flats and communal dining.',
        content: [
            'Behind the sober, soot-toned brick facades of Copenhagen’s Vesterbro neighborhood, an quiet architectural experiment is challenging century-old assumptions about urban privacy. Where 19th-century speculative developers once subdivided courtyards into cramped service alleys and coal sheds, contemporary studios are carving open light-wells that treat the collective core not as an afterthought, but as the emotional anchor of the home.',
            'The premise is deceptively straightforward: rather than maximizing private square footage at the expense of communal connection, the architecture deliberately condenses private flats around a shared triple-height atrium. Here, a communal timber hearth, shared culinary kitchen, and indoor conservatory act as an extension of each family’s personal footprint.',
            '“For fifty years, the narrative of modern residential architecture has been one of individual containment,” explains architect Mette Holm. “We bought larger sofas, sealed our acoustic partitions, and retreated into private screens. But real domestic resilience lies in proximity, shared light, and the gentle social encounters of an unprogrammed threshold.”',
            'The materials throughout the retrofit honor this ethos of slow stewardship. Reclaimed Bornholm granite lintels support lightweight glulam timber trusses, while unpolished lime plaster walls absorb acoustic bounce and regulate seasonal moisture naturally. In the long Danish winter, when daylight dwindles to six brief hours, the glass roof channels south-facing solar gain deep into the lower residences, cutting heating loads by over thirty percent.'
        ],
        pullQuote: {
            quote: 'When the courtyard becomes the living room of the entire building, privacy stops feeling like isolation.',
            attribution: 'Mette Holm, Lead Project Architect'
        },
        tags: [
            'Copenhagen',
            'Collective Housing',
            'Adaptive Reuse',
            'Timber Architecture',
            'Nordic Design'
        ],
        featured: true,
        location: 'Copenhagen, Denmark'
    },
    // --- FEATURED STORIES (Middle & Radar) ---
    {
        id: 'can-clay-become-concrete',
        title: 'Can clay become the new concrete?',
        deck: 'Inside the material labs proving that unfired earth and geopolymer binders can bear multi-storey loads with a fraction of the carbon.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Investigation',
        kicker: 'Materials / Investigation',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '14 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Layered compressed earth blocks in warm mineral tones',
        content: [
            'Concrete has built our modern world, and it may well be dismantling its climatic stability. Responsible for nearly eight percent of global carbon dioxide emissions, Portland cement remains the most resource-intensive staple of construction. Yet across experimental testing grounds in Zurich, Rotterdam, and Lyon, an ancient alternative is undergoing a high-tech renaissance: structural unfired clay.',
            'Unlike traditional mud-brick, modern stabilized earthen composites use enzyme-activated mineral binders and hydraulic compression to achieve compressive strengths matching standard C25/30 concrete. When combined with timber framing, these monolithic earth walls provide unmatched thermal mass and acoustic attenuation.'
        ],
        pullQuote: {
            quote: 'The soil beneath our building excavations is not waste to be trucked to landfills; it is the building envelope itself.',
            attribution: 'Dr. Anna Becker, ETH Zurich'
        },
        tags: [
            'Circular Materials',
            'Earth Construction',
            'Sustainability',
            'Decarbonization'
        ],
        featured: true
    },
    {
        id: 'amara-okafor-belonging',
        title: 'Amara Okafor on designing for belonging',
        deck: 'The London and Lagos-based interior architect reflects on why hospitality spaces must prioritize acoustic warmth and communal gathering.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'In conversation',
        kicker: 'Designers / In conversation',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '13 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
        imageAlt: 'Portrait of architect Amara Okafor in a warm textured studio setting',
        content: [
            'In an era when luxury interior design has too often defaulted to sterile minimalism and polished marble, Amara Okafor’s work arrives like a deep breath. Her spaces, whether a public arts pavilion in Victoria Island or an intimate dining sanctuary in South London, are defined by tactile warmth, earth pigments, and generous proportions.',
            '“Belonging is not an abstract social feeling,” Okafor explains from her Bermondsey atelier. “Belonging is a direct physical reaction to spatial proportion, the height of a sill, the texture of a banquette, and whether a room allows eight people to converse without shouting over an echo.”'
        ],
        pullQuote: {
            quote: 'Belonging is a design decision. It is what happens when you design for human conversation rather than the camera lens.',
            attribution: 'Amara Okafor'
        },
        tags: [
            'Interview',
            'Interior Architecture',
            'Social Design',
            'Craft'
        ],
        featured: true
    },
    {
        id: 'smart-home-disappear',
        title: 'The smart home learns to disappear',
        deck: 'Home automation is moving beyond glowing screens and voice surveillance, towards spaces that quietly respond to the way we live.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'On our radar',
        kicker: 'Design Tech',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '14 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        imageAlt: 'Minimal wooden console with integrated capacitive tactile dial',
        content: [
            'The initial promise of the smart home was loud: iPad consoles mounted on drywall, multicolored LED strips reacting to notifications, and microphones listening in every corner. Today, a necessary corrective has arrived: calm technology.',
            'New architectural hardware integrates presence sensing beneath solid wood veneers and natural stone slabs. Lights transition according to circadian sun angles without an app; mechanical rotary dials replace touchscreens with satisfying tactile resistance.'
        ],
        tags: [
            'Smart Home',
            'Calm Technology',
            'Sensors',
            'Minimalism'
        ],
        featured: true
    },
    {
        id: 'modular-sofa-growing-up',
        title: 'Why the modular sofa is growing up',
        deck: 'More adaptable proportions and repairable parts give a familiar living room form a new and permanent purpose.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'On our radar',
        kicker: 'Furniture',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Furniture & Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        imageAlt: 'Modular low lounge sofa with natural oat-colored wool upholstery',
        content: [
            'The disposable sectional sofa was once the poster child of fast-furniture waste. Today’s premier furniture houses are turning the typology inside out. Steel frame clamps, replaceable slipcovers, and dry-friction joints mean modules can expand from a one-bedroom apartment to a family country house over decades.'
        ],
        tags: [
            'Furniture',
            'Modular Design',
            'Living Room',
            'Circular Economy'
        ],
        featured: true
    },
    {
        id: 'five-conversations-autumn-fairs',
        title: 'Five conversations to follow at the autumn design fairs',
        deck: 'From Milan to Seoul, the industry gathers to debate deconstructable interiors, acoustic health, and post-consumer plastics.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'On our radar',
        kicker: 'Events',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '13 Oct 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
        imageAlt: 'Design exhibition hall with natural timber pavilion structures',
        content: [
            'As the autumn design calendar gets underway, the conversations dominating the keynote halls are decidedly pragmatic. We outline the five pivotal themes every studio and specifier must watch closely this season.'
        ],
        tags: [
            'Design Fairs',
            'Milan',
            'Seoul',
            'Industry Debate'
        ],
        featured: true
    },
    // --- TRENDING STORIES (01 to 04) ---
    {
        id: 'materials-living-with-2027',
        title: 'The materials we’ll be living with in 2027',
        deck: 'From compressed hemp lime blocks to reclaimed volcanic terrazzo, our forward forecast reveals the textures shaping future interiors.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Materials',
        kicker: '01 Materials',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '14 Oct 2026',
        readTime: '8 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        imageAlt: 'Tactile material moodboard with travertine, raw linen, and terracotta',
        content: [
            'The era of synthetic polymer composites and high-gloss plastic finishes is quietly receding. What takes its place is an earthy, tactile materiality grounded in bio-reclamation and geological permanence.',
            'We examine five material breakthroughs currently scaling from pilot ateliers into standard commercial specification catalogs.'
        ],
        trendingRank: 1,
        readCount: '12.4k reads',
        tags: [
            'Materials',
            'Forecasting',
            'Tactility',
            'Natural Finishes'
        ]
    },
    {
        id: 'after-open-plan-home',
        title: 'What comes after the open-plan home?',
        deck: 'The great room had its moment. Now, homeowners and architects are craving rooms with doors, corners, and acoustic boundaries.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Spatial Design',
        kicker: '02 Home Decor',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '13 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
        imageAlt: 'Cozy study alcove with timber pocket door and floor-to-ceiling bookshelves',
        content: [
            'For three decades, residential real estate prioritized one single spatial gospel: knocking down every interior wall to produce the vast open-plan living-dining-kitchen expanse. But post-pandemic domestic reality revealed its acute shortcomings: lack of acoustic privacy, the smell of seared fish permeating living upholstery, and zero spatial sanctuary.',
            'In response, architects are reinventing the enfilade: rooms that connect through generous arched openings and sliding timber pocket doors, providing both openness and calm containment.'
        ],
        pullQuote: {
            quote: 'Walls do not isolate us; they create the acoustic and psychological conditions for deep rest and focused thought.',
            attribution: 'Dr. Mira Sen, Architectural Anthropologist'
        },
        trendingRank: 2,
        readCount: '9.8k reads',
        tags: [
            'Open Plan',
            'Floor Plans',
            'Residential Design',
            'Acoustic Comfort'
        ]
    },
    {
        id: 'studios-care-before-signature',
        title: 'Meet the studios putting care before signature',
        deck: 'Rather than stamping every building with a flamboyant brand silhouette, these architects focus on maintenance, local skills, and quiet repair.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Studio Practice',
        kicker: '03 Designers',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '13 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
        imageAlt: 'Architects reviewing hand-drawn stone joinery plans in a quiet studio',
        content: [
            'The era of the "starchitect" who drops an identical titanium-clad sculpture into any city on earth is officially over. In its wake, a thoughtful collective of practitioners is defining a new ethic: architecture as an act of repair, listening, and generational maintenance.'
        ],
        trendingRank: 3,
        readCount: '8.6k reads',
        tags: [
            'Architects',
            'Ethics',
            'Restoration',
            'Local Craft'
        ]
    },
    {
        id: 'return-of-blue-in-every-room',
        title: 'The return of blue, in every room',
        deck: 'From deep mineral lapis to smoky ink washes, interior designers are finding a complex, comforting alternative to beige neutrals.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Colour forecast',
        kicker: '04 Trends',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '12 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        imageAlt: 'Rich ink-blue lime wash wall in an elegant library with reading chair',
        content: [
            'After a decade of unrelieved greige and warm oatmeal, deep blue is reclaiming residential interiors. But unlike the navy accents of the 1990s, today’s applications use chalky mineral washes, indigo-dyed hemp textiles, and dark celadon tile that respond dynamically to ambient morning light.'
        ],
        trendingRank: 4,
        readCount: '7.2k reads',
        tags: [
            'Colour',
            'Pigment',
            'Interior Trends',
            'Lapis'
        ]
    },
    // --- LATEST NEWS SECTION ---
    {
        id: 'less-floor-area-more-possibilities',
        title: 'Less floor area. More possibilities.',
        deck: 'Inside the compact Tokyo homes challenging the idea that better living means building bigger.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Urban living / Tokyo',
        kicker: 'Urban living / Tokyo',
        author: {
            id: 'kenji-mori',
            name: 'Kenji Mori',
            role: 'Tokyo Architecture Correspondent'
        },
        date: '14 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1723642615549-ebb1544e52b0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        // imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80',
        imageAlt: 'Compact Japanese timber residence with multi-level cedar platforms',
        content: [
            'In a 42-square-meter footprint in Tokyo’s Yanaka district, architect Kenji Mori has realized a three-level sanctuary that feels remarkably expansive. By staggering floor plates, eliminating interior partition doors in favor of cedar louvers, and incorporating a vertical light scoop, the house avoids the claustrophobia common to small urban dwellings.'
        ],
        pullQuote: {
            quote: 'When space is scarce, light and vertical height become your primary luxuries.',
            attribution: 'Kenji Mori'
        },
        tags: [
            'Tokyo',
            'Micro Housing',
            'Timber',
            'Urbanism'
        ]
    },
    {
        id: 'porto-neighbourhood-library',
        title: 'A former school in Porto finds a second life as a neighbourhood library',
        deck: 'A careful retrofit puts public space ahead of spectacle, preserving granite lintels while inserting contemporary timber reading rooms.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Architecture',
        kicker: 'Architecture',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '14 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1780571249151-3baafcc7b061?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        imageAlt: 'Restored stone arches in historic Porto school turned public library',
        content: [
            'Abandoned for two decades, this 19th-century municipal school in Bonfim has been reopened as a combined public library and community greenhouse. Architect Rafael Costa used local chestnut timber to build double-height book stacks that touch the granite walls with reversible brass brackets.'
        ],
        tags: [
            'Porto',
            'Libraries',
            'Adaptive Reuse',
            'Historic Stone'
        ]
    },
    {
        id: 'kitchen-island-family-table',
        title: 'The kitchen island is making room for the family table',
        deck: 'Designers rethink the social heart of the home, replacing monumental bar-stool islands with welcoming timber tables.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Home Decor',
        kicker: 'Home Decor',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80',
        imageAlt: 'Warm kitchen with large round oak dining table and pendant lighting',
        content: [
            'For fifteen years, real estate developer floor plans mandated a central marble island lined with bar stools facing the induction cooktop. But many families discovered that eating shoulder-to-shoulder on high perches hinders real dinner conversation.',
            'Now, leading kitchen designers are pushing cook surfaces against perimeter walls and centering the room around a substantial, low timber dining table where cooking, homework, and evening meals comfortably converge.'
        ],
        tags: [
            'Kitchens',
            'Dining Tables',
            'Family Life',
            'Interior Layouts'
        ]
    },
    {
        id: 'acoustic-lighting-double-duty',
        title: 'A new generation of acoustic lighting does double duty',
        deck: 'Lighting studios turn down the volume without losing architectural warmth, integrating recycled wool felt hoods with precision LEDs.',
        category: 'products',
        categoryName: 'Products',
        subCategory: 'Products',
        kicker: 'Products',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Products Editor'
        },
        date: '14 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
        imageAlt: 'Sculptural acoustic felt pendant light hanging above timber desk',
        content: [
            'In open-plan offices and lofty loft residences, hard floors and expansive glass create harsh reverberation. A crop of new pendant luminaires addresses this directly by integrating high-density acoustic basalt or recycled wool felts that absorb up to 0.85 NRC of sound while delivering glare-free 2700K warm downlight.'
        ],
        tags: [
            'Lighting',
            'Acoustics',
            'Workplace',
            'Product Innovation'
        ]
    },
    {
        id: 'rise-of-design-collective',
        title: 'Small studios, shared resources: the rise of the design collective',
        deck: 'A more collaborative model for independent architectural practice takes root across European and South American capitals.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Industry',
        kicker: 'Industry',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '13 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
        imageAlt: 'Designers gathered around a shared workshop model table',
        content: [
            'Facing rising studio rents and costly BIM software licensing, sole practitioners are teaming up into federated design collectives. While retaining their individual creative brands, they co-fund material testing equipment, 3D printers, and legal advisory pools.'
        ],
        tags: [
            'Design Collectives',
            'Studio Practice',
            'Collaboration',
            'Future of Work'
        ]
    },
    // --- HOME DECOR SECTION ---
    {
        id: 'home-room-for-seasons',
        title: 'A home that makes room for the seasons',
        deck: 'An adaptable Amsterdam apartment finds its rhythm in light, texture and a few carefully chosen objects.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Living well / Amsterdam',
        kicker: 'Living well / Amsterdam',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
        imageAlt: 'Sunlit canal apartment with linen curtains and natural timber floors',
        content: [
            'Along the Prinsengracht, this 18th-century canal house apartment adapts to the shifting light of the North Sea. In summer, sheer linen drapery bills out onto canal breezes; in winter, thick wool rugs and sliding timber screens insulate cozy reading alcoves around a ceramic stove.'
        ],
        pullQuote: {
            quote: 'A home should breathe in sync with the weather outside rather than isolating you in an unchanging air-conditioned box.',
            attribution: 'Eva Laurent'
        },
        tags: [
            'Amsterdam',
            'Seasonal Living',
            'Canal Houses',
            'Linen'
        ]
    },
    {
        id: 'restorative-bedroom-without-cliches',
        title: 'The restorative bedroom, without the clichés',
        deck: 'A practical guide to better sleep, softer light and less visual noise without turning your sanctuary into a sterile spa retreat.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Room by room',
        kicker: 'Room by room',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '13 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1778205015308-1ed324aea202?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        imageAlt: 'Minimalist bedroom with soft indirect lighting and natural linen bedspread',
        content: [
            'The modern bedroom has become overloaded with wellness gadgets: sleep trackers, blue-light diffusers, and motorized blackouts. Our editors return to fundamental architectural principles: cross-ventilation, low indirect perimeter lighting, tactile flax bedding, and concealed storage that banishes clutter.'
        ],
        tags: [
            'Bedrooms',
            'Sleep',
            'Minimalism',
            'Lighting Design'
        ]
    },
    {
        id: 'storage-belongs-to-architecture',
        title: 'Storage that belongs to the architecture',
        deck: 'Five ways to make built-in joinery work harder while disappearing seamlessly into the plaster.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Small spaces',
        kicker: 'Small spaces',
        author: {
            id: 'lena-berg',
            name: 'Lena Berg',
            role: 'Contributing Architect'
        },
        date: '13 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        imageAlt: 'Built-in floor to ceiling oak cabinetry flush with wall plaster',
        content: [
            'Freestanding wardrobes fragment compact rooms. Architect Lena Berg demonstrates how continuous built-in cabinetry painted to match the lime plaster walls expands perceived room volume while concealing everything from HVAC ducting to folding desks.'
        ],
        tags: [
            'Joinery',
            'Built-ins',
            'Storage',
            'Small Spaces'
        ]
    },
    {
        id: 'before-you-remove-that-wall',
        title: 'Before you remove that wall, read this',
        deck: 'The case for thresholds, corners and a little privacy in contemporary home renovations.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Renovation notebook',
        kicker: 'Renovation notebook',
        author: {
            id: 'sofia-reyes',
            name: 'Sofia Reyes',
            role: 'Architect & Columnist'
        },
        date: '12 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        imageAlt: 'Architectural arched threshold framed in warm timber',
        content: [
            'Before hiring a structural engineer to hoist a heavy steel beam and eliminate your corridor, consider what you are losing. Corridors provide acoustic buffers, display galleries for art, and a gradual psychological transition from the outside world into intimate spaces.'
        ],
        tags: [
            'Renovation',
            'Walls',
            'Floorplans',
            'Architecture Advice'
        ]
    },
    // --- TRENDS SECTION ---
    {
        id: 'blue-is-back-depth',
        title: 'Blue is back. This time, it has depth.',
        deck: 'From mineral shades to ink dark rooms, designers are finding a more nuanced palette that grounds contemporary rooms.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Colour forecast',
        kicker: 'Colour forecast',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        imageAlt: 'Living room featuring rich mineral blue lime plaster walls and linen sofa',
        content: [
            'Mineral indigo, slate ultramarine, and deep Prussian washes are turning interior walls into atmospheric envelopes. Unlike synthetic flat latex, traditional mineral washes reflect sunlight through microscopic calcite crystals, causing the color to shift from azure in the morning to velvet navy at dusk.'
        ],
        tags: [
            'Colour Forecast',
            'Blue',
            'Pigment',
            'Lime Wash'
        ]
    },
    {
        id: 'new-luxury-room-with-purpose',
        title: 'The new luxury? A room with a purpose.',
        deck: 'Reading rooms and dedicated dining spaces signal a decisive move away from endless, ambiguous openness.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Spatial shifts',
        kicker: 'Spatial shifts',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '13 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507842229451-7f01be7ffc1d?w=1200&q=80',
        imageAlt: 'Dedicated library room with floor to ceiling timber shelves and reading lamp',
        content: [
            'The ultimate architectural luxury today is not an Olympic-sized great room with three televisions, but a room dedicated to doing exactly one thing well: an acoustic listening parlour, a flower arranging scullery, or a book-lined reading room with a latch on the door.'
        ],
        tags: [
            'Spatial Shifts',
            'Luxury',
            'Reading Rooms',
            'Architecture'
        ]
    },
    {
        id: 'imperfect-finishes-considered-spaces',
        title: 'Imperfect finishes, considered spaces',
        deck: 'Why evidence of the human hand is becoming an essential part of contemporary interiors.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Material culture',
        kicker: 'Material culture',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '12 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Hand-trowelled plaster surface catching warm side lighting',
        content: [
            'In a digital culture dominated by computer-generated renders and laser-perfect synthetic finishes, the slight wave of a hand-trowelled lime plaster wall or the irregular chisel mark on a granite hearth has become the truest marker of authenticity.'
        ],
        tags: [
            'Material Culture',
            'Wabi Sabi',
            'Handcraft',
            'Texture'
        ]
    },
    // --- DESIGN TECH SECTION ---
    {
        id: 'best-tech-dont-notice',
        title: 'The best technology is the kind you don’t notice',
        deck: 'Home automation is moving beyond the screen, towards spaces that quietly respond to the way we live.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Smart interiors',
        kicker: 'Smart interiors',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '14 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        imageAlt: 'Discrete architectural sensors hidden in natural walnut joinery',
        content: [
            'The smart home has finally graduated from novelty to nuance. We interview five engineers who are replacing glowing blue LEDs with silent thermal buoyancy louvers, hidden floor vibration dampers, and capacitive stone toggles that blend seamlessly into architectural stonework.'
        ],
        tags: [
            'Smart Interiors',
            'Calm Tech',
            'Hardware',
            'Sensors'
        ]
    },
    {
        id: 'ai-can-sketch-designer-decide',
        title: 'What AI can sketch—and what only a designer can decide',
        deck: 'The useful limits of generative tools in an architectural workflow, from volumetric permutations to physical fabrication.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'AI in design',
        kicker: 'AI in design',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '13 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
        imageAlt: 'Architectural drawings alongside generative computational modeling',
        content: [
            'Generative models can generate a thousand variations of a stairwell in six seconds. But can an algorithm understand how afternoon light warms a pine riser, or whether a handrail feels secure in the palm of an elderly homeowner? Leading studio directors speak frankly on where computation helps—and where it falls flat.'
        ],
        tags: [
            'AI in Design',
            'Computation',
            'Architectural Practice',
            'BIM'
        ]
    },
    {
        id: 'agricultural-waste-architectural-surface',
        title: 'From agricultural waste to architectural surface',
        deck: 'Inside the labs giving crop fibres, oat husks, and sunflower stalks a second life in acoustic and structural panels.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Innovative materials',
        kicker: 'Innovative materials',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '12 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Close-up of compressed agricultural bio-panel with organic textures',
        content: [
            'Billions of tons of agricultural stubble are incinerated annually, producing seasonal smog spikes across farming regions. Bio-composites startups are combining these waste fibres with non-toxic mycelium and lignin binders to manufacture Class A fire-rated acoustic boards that outclass drywall.'
        ],
        tags: [
            'Bio Materials',
            'Circular Economy',
            'Surfaces',
            'Acoustic Panels'
        ]
    },
    // --- FURNITURE SECTION ---
    {
        id: 'modular-sofa-reconsidered',
        title: 'The modular sofa, reconsidered',
        deck: 'More adaptable proportions and repairable parts give a familiar form a new and lasting purpose in contemporary residences.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Design evolution',
        kicker: 'Design evolution',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        imageAlt: 'Low profile modular sofa with warm oatmeal upholstery and timber base',
        content: [
            'The modern modular sofa has shed its bulky, unrepairable foam past. Leading Scandinavian and Italian workshops are returning to exposed mortise-and-tenon timber frames and independent natural latex cushions that can be refreshed or reconfigured as households evolve.'
        ],
        tags: [
            'Sofa',
            'Modular Furniture',
            'Living Room',
            'Sustainable Seating'
        ]
    },
    {
        id: 'chair-carries-mark-of-maker',
        title: 'A chair that carries the mark of its maker',
        deck: 'A visit to a small workshop where the joint is as important as the silhouette.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Made by hand',
        kicker: 'Made by hand',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '13 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
        imageAlt: 'Hand-carved solid oak dining chair displaying delicate wood grain',
        content: [
            'In a misty valley outside Porto, woodworker Miguel Sousa produces only fifty dining chairs each year. Using traditional drawknives and Japanese pulling saws, every leg and backrest is planed by hand to fit the spine’s natural curvature without mechanical sanding.'
        ],
        tags: [
            'Chairs',
            'Woodworking',
            'Handmade',
            'Craftsmanship'
        ]
    },
    {
        id: 'what-makes-table-worth-keeping',
        title: 'What makes a table worth keeping?',
        deck: 'Beyond fashion: the construction details and joinery secrets that help furniture become an enduring family heirloom.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Design history',
        kicker: 'Design history',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '12 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80',
        imageAlt: 'Solid chestnut trestle table showing natural patinated surface',
        content: [
            'What separates a table destined for a garage sale from one that grandchildren fight to inherit? We dissect breadboard ends, sliding dovetails, and non-toxic oil finishes that allow solid hardwood to expand with humidity without cracking.'
        ],
        tags: [
            'Dining Tables',
            'Joinery',
            'Heirloom Design',
            'Design History'
        ]
    },
    // --- DECOR SECTION ---
    {
        id: 'rooms-character-in-details',
        title: 'A room’s character is often in the details',
        deck: 'Handwoven textiles, a single ceramic bowl, the right pool of light. Our considered edit of the elements that make a space personal.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Textile stories',
        kicker: 'Textile stories',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '14 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80',
        imageAlt: 'Handwoven wool throw draped over an architectural timber bench',
        content: [
            'Architecture gives a room its volume and light, but the objects we inhabit it with give it a human voice. A single unglazed earthenware pot placed on a low windowsill can catch morning shadows and transform an otherwise austere corner into an invitation to pause.'
        ],
        tags: [
            'Textiles',
            'Styling',
            'Ceramics',
            'Domestic Rituals'
        ]
    },
    {
        id: 'expressive-power-ordinary-vessel',
        title: 'The expressive power of an ordinary vessel',
        deck: 'Studio ceramicists on why humble everyday cups, pitchers and bowls hold greater emotional weight than ornate sculptures.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Ceramics',
        kicker: 'Ceramics',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '13 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80',
        imageAlt: 'Handmade ceramic pitcher with textured stone glaze beside small cup',
        content: [
            'When you drink your morning water from a wheel-thrown cup bearing the potter’s thumb indentation, the tactile experience is profoundly grounded. Four international ceramicists discuss clay geology and the beauty of utility.'
        ],
        tags: [
            'Ceramics',
            'Craft',
            'Pottery',
            'Tableware'
        ]
    },
    {
        id: 'softer-light-paper-pendants',
        title: 'A softer light: the new paper pendants',
        deck: 'Why architects are turning away from sharp directional spots in favor of glowing washi and mulberry lanterns.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Lighting',
        kicker: 'Lighting',
        author: {
            id: 'lena-berg',
            name: 'Lena Berg',
            role: 'Contributing Architect'
        },
        date: '12 Oct 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
        imageAlt: 'Warm glowing layered washi paper pendant in quiet interior',
        content: [
            'Direct recessed LED downlights produce unflattering shadows and visual fatigue. Handcrafted paper lanterns scatter light evenly in 360 degrees, mimicking the flattering, comforting warmth of candlelight.'
        ],
        tags: [
            'Lighting',
            'Paper Pendants',
            'Washi',
            'Ambiance'
        ]
    },
    {
        id: 'one-well-placed-work-change-room',
        title: 'Why one well placed work can change a room',
        deck: 'How scale, negative space and generous breathing room allow contemporary art to anchor an interior.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Art at home',
        kicker: 'Art at home',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '12 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
        imageAlt: 'Large abstract canvas in muted earth pigments hung on quiet plaster wall',
        content: [
            'Rather than crowding walls with cluttered gallery collages, interior curators suggest leaving ninety percent of wall area quiet, allowing a single substantial oil canvas or textile sculpture to command the room’s horizon.'
        ],
        tags: [
            'Art at Home',
            'Curating',
            'Negative Space',
            'Interiors'
        ]
    },
    // --- EDITORIAL DESK & OPINION ---
    {
        id: 'dont-need-iconic-buildings',
        title: 'We don’t need more iconic buildings. We need better everyday spaces.',
        deck: 'The real measure of a project is not its photograph, but the life it makes possible. It’s time for the design conversation to catch up.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'The editor’s column',
        kicker: 'The editor’s column',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief',
            bio: 'Isabel Hart is the founding editor of Form & Field / Lumen Journal. She previously wrote on European architecture and civic infrastructure in Zurich and London.'
        },
        date: '14 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
        imageAlt: 'People reading and talking in a sunlit public atrium with timber benches',
        content: [
            'For the past twenty-five years, architectural culture has been intoxicated by the "Bilbao Effect": the assumption that a city or institution can only validate its relevance by erecting an undulating, computer-sculpted glass icon that photographs spectacularly on Instagram.',
            'Yet when we step past the entrance turnstiles of these photogenic monuments, what do we too often find? Dysfunctional acoustics, blinding glare, soaring maintenance budgets, and spaces that treat human bodies as temporary props rather than inhabitants.',
            'It is time to celebrate the unheralded architecture of everyday life: the well-proportioned municipal health clinic with openable windows, the primary school with wide timber window seats, the quiet neighbourhood corner bakery that provides a clean wooden bench under the morning sun. This is where architecture proves its worth.'
        ],
        pullQuote: {
            quote: 'Good design isn’t just what we see. It’s how we choose to live.',
            attribution: 'Isabel Hart, Editor-in-Chief'
        },
        tags: [
            'Editor Column',
            'Civic Design',
            'Everyday Spaces',
            'Architecture Criticism'
        ]
    },
    {
        id: 'hidden-cost-designing-for-feed',
        title: 'The hidden cost of designing for the feed',
        deck: 'When interior spaces are specified primarily to look punchy in a two-second phone scroll, physical comfort is the first casualty.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Opinion / Practice',
        kicker: 'Opinion / Practice',
        author: {
            id: 'mira-sen',
            name: 'Dr. Mira Sen',
            role: 'Architectural Anthropologist'
        },
        date: '13 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
        imageAlt: 'Contrast between high gloss rendered digital image and weathered physical wood',
        content: [
            'Social media feeds reward high contrast, saturated neon splashes, and dramatic geometric angles. But human eyes and nervous systems require softness, low glare, and natural textural variation to experience psychological calm.'
        ],
        tags: [
            'Social Media',
            'Interior Design',
            'Digital Culture',
            'Human Factors'
        ]
    },
    {
        id: 'who-gets-to-feel-at-home-in-city',
        title: 'Who gets to feel at home in the city?',
        deck: 'Public seating without armrest spikes, accessible water fountains, and spaces that welcome all ages without requiring an espresso purchase.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Perspective / Cities',
        kicker: 'Perspective / Cities',
        author: {
            id: 'daniel-adebayo',
            name: 'Daniel Adebayo',
            role: 'Urbanism Critic'
        },
        date: '12 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
        imageAlt: 'Open civic square with wide wooden stepped platforms filled with residents',
        content: [
            'The modern commercial city has steadily privatized urban rest. If you want to sit down in most central squares, you are expected to pay eight euros for an iced latte. We examine three European cities actively dismantling hostile architecture.'
        ],
        tags: [
            'Urbanism',
            'Civic Design',
            'Public Space',
            'Inclusivity'
        ]
    }
];
}),
"[project]/data/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES
]);
const CATEGORIES = [
    {
        slug: 'home-decor',
        title: 'Home Decor',
        description: 'Considered interiors, living spaces, spatial rituals, and everyday objects crafted for longevity.',
        kicker: 'Spaces for everyday life'
    },
    {
        slug: 'events',
        title: 'Events',
        description: 'International fairs, design weeks, biennial exhibitions, symposia, and gallery showcases.',
        kicker: 'The international design calendar'
    },
    {
        slug: 'trends',
        title: 'Trends',
        description: 'Critical forecasts, spatial shifts, emerging materiality, and evolving domestic philosophies.',
        kicker: 'Beyond the moodboard'
    },
    {
        slug: 'designers',
        title: 'Designers',
        description: 'Monographic profiles, studio visits, and candid dialogues with the people shaping our physical world.',
        kicker: 'The people behind the places'
    },
    {
        slug: 'design-tech',
        title: 'Design Tech',
        description: 'Subtle automation, computational fabrication, smart domesticity, and regenerative surfaces.',
        kicker: 'Intelligence, without intrusion'
    },
    {
        slug: 'furniture',
        title: 'Furniture',
        description: 'Master joinery, modular typologies, archival reissues, and furniture built to be passed down.',
        kicker: 'Form, function, staying power'
    },
    {
        slug: 'special-reports',
        title: 'Special Reports',
        description: 'In-depth investigations, long-form journalism, and data-driven briefings on the forces shaping architecture, interiors, and the built environment.',
        kicker: 'Deep dives and investigations'
    },
    {
        slug: 'showroom-showcase',
        title: 'Showroom Showcase',
        description: 'Immersive spaces, flagships, and spatial studies reimagining retail as an architectural experience.',
        kicker: 'Retail as an architectural experience'
    },
    {
        slug: 'projects',
        title: 'Projects',
        description: 'Built residential, civic, cultural, and adaptive reuse architecture across continents.',
        kicker: 'Built ideas, around the world'
    },
    {
        slug: 'products',
        title: 'Products',
        description: 'Independently selected lighting, surfaces, architectural hardware, and interior fittings.',
        kicker: 'New & noteworthy / Independently selected'
    }
];
}),
"[project]/data/designers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESIGNERS",
    ()=>DESIGNERS
]);
const DESIGNERS = [
    {
        id: 'lena-berg',
        name: 'Lena Berg',
        studio: 'Studio Berg',
        city: 'Stockholm',
        country: 'Sweden',
        discipline: 'Spatial Design & Interior Architecture',
        tagline: 'Working with what a building already knows',
        bio: 'Lena Berg founded her Stockholm practice in 2018 after a decade working between Copenhagen and Tokyo. Her work centers on quiet interventions in heritage Nordic buildings, highlighting the raw grain of local pine, patinated plaster, and soft diffuse daylight.',
        quote: 'Architecture is not about erasing what came before, but tuning the instrument that is already standing.',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
        featuredProjects: [
            'Gamla Stan Loft Retrofit',
            'Skeppsholmen Archive Studio',
            'Östermalm Apartment'
        ],
        foundedYear: 2018
    },
    {
        id: 'rafael-costa',
        name: 'Rafael Costa',
        studio: 'Costa Atelier',
        city: 'Porto',
        country: 'Portugal',
        discipline: 'Restoration & Timber Architecture',
        tagline: 'A practice built on the art of repair',
        bio: 'Trained in traditional joinery and civil engineering in northern Portugal, Rafael Costa operates at the threshold between restoration and contemporary living. His studio uses reclaimed granite, chestnut timber, and lime wash to revitalize neglected urban structures.',
        quote: 'Repair is an act of deep cultural optimism; it acknowledges that the past still holds practical wisdom for our climate.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
        featuredProjects: [
            'Bonfim Library Conversion',
            'Rua das Flores Courtyard Home',
            'Douro Valley Stone Pavilion'
        ],
        foundedYear: 2015
    },
    {
        id: 'yuki-tanaka',
        name: 'Yuki Tanaka',
        studio: 'Tanaka & Associates',
        city: 'Kyoto',
        country: 'Japan',
        discipline: 'Environmental Interiors & Craft',
        tagline: 'The everyday rituals behind enduring rooms',
        bio: 'Yuki Tanaka weaves ancient Kyoto joinery (sashimono) with passive thermal architecture. She designs domestic environments around morning tea rituals, seasonal cross-ventilation, and paper light screens that diffuse changing skies.',
        quote: 'A room should slow your breathing. When the light moves across a textured wall, time returns to human scale.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
        featuredProjects: [
            'Gion Machiya Conservation',
            'Kamigamo Tea Pavilion',
            'Kitayama Forest House'
        ],
        foundedYear: 2014
    },
    {
        id: 'amara-okafor',
        name: 'Amara Okafor',
        studio: 'Okafor Studio',
        city: 'Lagos & London',
        country: 'Nigeria / UK',
        discipline: 'Interior Architecture & Cultural Spaces',
        tagline: 'Belonging is a design decision',
        bio: 'Amara Okafor directs projects between West Africa and the United Kingdom. Her multidisciplinary practice investigates communal gathering typologies, locally sourced clay renders, and terracotta acoustics for civic and residential sanctuaries.',
        quote: 'When spaces honor how people actually converse, cook, and shelter together, belonging ceases to be theoretical.',
        imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
        featuredProjects: [
            'Victoria Island Arts Pavilion',
            'Brixton Community Kitchen',
            'Epe Peninsula Sanctuary'
        ],
        foundedYear: 2017
    },
    {
        id: 'noah-haddad',
        name: 'Noah Haddad',
        studio: 'Atelier Haddad',
        city: 'Beirut',
        country: 'Lebanon',
        discipline: 'Architecture & Stone Masonry',
        tagline: 'Repair is a form of optimism',
        bio: 'Noah Haddad leads an architecture and historic conservation studio in Beirut. Specializing in vaulted limestone arches and thermal mass strategies, the studio reconstructs earthquake- and blast-damaged historical residences into resilient public-facing institutions.',
        quote: 'Every stone set back into an arch is a promise to the community that memory will outlive trauma.',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80',
        featuredProjects: [
            'Gemmayzeh Heritage Reconstruction',
            'Batroun Coastal Haven',
            'Achrafieh Cultural Archive'
        ],
        foundedYear: 2012
    },
    {
        id: 'clara-voss',
        name: 'Clara Voss',
        studio: 'Voss Arkitekter',
        city: 'Copenhagen',
        country: 'Denmark',
        discipline: 'Residential & Courtyard Architecture',
        tagline: 'Courtyards as the collective heart of the home',
        bio: 'Clara Voss has established a quiet reputation for courtyard homes that invert Scandinavian residential isolation, turning collective greenery and light wells into shared spatial living rooms.',
        quote: 'The street front can be sober and solid; the interior world must be light, porous and welcoming.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80',
        featuredProjects: [
            'Nørrebro Shared Hearth',
            'Vesterbro Perimeter Haven',
            'Christianshavn Canal House'
        ],
        foundedYear: 2016
    },
    {
        id: 'sofia-reyes',
        name: 'Sofia Reyes',
        studio: 'Reyes Arquitectura',
        city: 'Barcelona',
        country: 'Spain',
        discipline: 'Adaptive Reuse & Mediterranean Interiors',
        tagline: 'Holding industrial memory while opening to life',
        bio: 'Based in Poblenou, Sofia Reyes specializes in transforming obsolete textile mills and carpenter workshops into breathable family habitats filled with terracotta tiles and lush interior courtyards.',
        quote: 'Industrial bones do not need sanitizing; they need sun, breeze, and warm materials to feel like home.',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
        featuredProjects: [
            'Poblenou Workshop Conversion',
            'Gràcia Carpenter Loft',
            'Eixample Gallery Flat'
        ],
        foundedYear: 2019
    },
    {
        id: 'kenji-mori',
        name: 'Kenji Mori',
        studio: 'Mori Spatial Workshop',
        city: 'Tokyo',
        country: 'Japan',
        discipline: 'Micro-Architecture & Compact Urbanism',
        tagline: 'Less floor area, limitless spatial nuance',
        bio: 'Kenji Mori explores high-density urban living in Tokyo. His houses challenge the square-meter footprint metric by layering multi-height cedar platforms, pocket courtyards, and movable tatami partitions.',
        quote: 'Limitation is the best editor in spatial design.',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80',
        featuredProjects: [
            'Meguro Micro Sanctuary',
            'Yanaka Stepped House',
            'Setagaya Pocket Garden'
        ],
        foundedYear: 2015
    }
];
}),
"[project]/data/events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENTS",
    ()=>EVENTS
]);
const EVENTS = [
    {
        id: 'open-materials-forum',
        title: 'Salone del Mobile.Milano 2025',
        category: 'Talks & Material Research',
        day: '22',
        month: 'OCT',
        dates: '22–24 Oct 2026',
        year: 2026,
        location: 'Van Nelle Fabriek',
        city: 'Rotterdam',
        country: 'Netherlands',
        description: 'An international symposium convening biomaterial chemists, structural engineers, and interior architects to evaluate low-embodied carbon alternatives to gypsum, concrete, and synthetic polymers.',
        status: 'Registration open',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        isEditorSelection: true
    },
    {
        id: 'new-habitats-design-week',
        title: 'New Habitats: Design Week',
        category: 'Exhibitions & Studio Visits',
        day: '05',
        month: 'NOV',
        dates: '5–8 Nov 2026',
        year: 2026,
        location: 'Dongdaemun Design Plaza',
        city: 'Seoul',
        country: 'South Korea',
        description: 'A city-wide celebration of future domestic typologies featuring 140 emerging Asian spatial practices, interactive pavilions, and urban retrofit demonstrations.',
        status: 'Programme announced',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
        isEditorSelection: true
    },
    {
        id: 'independent-objects-salon',
        title: 'Independent Objects Salon',
        category: 'Collectible Design & Launches',
        day: '12',
        month: 'NOV',
        dates: '12–15 Nov 2026',
        year: 2026,
        location: 'Convento do Beato',
        city: 'Lisbon',
        country: 'Portugal',
        description: 'A curated fair spotlighting independent ceramicists, timber woodturners, and metal craftsmen who operate outside mass industrial supply chains.',
        status: 'Preview exhibitors',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
        isEditorSelection: true
    },
    {
        id: 'autumn-design-fairs',
        title: 'Autumn Design Fairs: Five Critical Dialogues',
        category: 'Keynotes & Panel Discussions',
        day: '18',
        month: 'NOV',
        dates: '18–20 Nov 2026',
        year: 2026,
        location: 'Fiera Milano Rho',
        city: 'Milan',
        country: 'Italy',
        description: 'A high-level summit interrogating the future of circular workplace fittings, acoustic comfort, and sustainable contract specification standards.',
        status: 'Registration open',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
        isEditorSelection: false
    },
    {
        id: 'nordic-light-symposium',
        title: 'Nordic Light & Well-being Symposium',
        category: 'Lighting & Human Factors',
        day: '28',
        month: 'NOV',
        dates: '28–29 Nov 2026',
        year: 2026,
        location: 'Danish Architecture Center',
        city: 'Copenhagen',
        country: 'Denmark',
        description: 'Explorations into circadian architectural lighting, shadow play in domestic wellbeing, and new non-glare Japanese washi paper lanterns.',
        status: 'Registration open',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        isEditorSelection: false
    },
    {
        id: 'circular-interior-assembly',
        title: 'Global Circular Interior Assembly',
        category: 'Standards & Specifiers',
        day: '04',
        month: 'DEC',
        dates: '4–6 Dec 2026',
        year: 2026,
        location: 'Barbican Centre',
        city: 'London',
        country: 'United Kingdom',
        description: 'Convening European interior designers, facility managers, and reclamation brokers to establish universal deconstruction blueprints.',
        status: 'Programme announced',
        imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80',
        isEditorSelection: false
    },
    {
        id: 'kyoto-craft-triennial',
        title: 'Kyoto Craft & Joinery Triennial',
        category: 'Heritage Craft',
        day: '14',
        month: 'JAN',
        dates: '14–19 Jan 2027',
        year: 2027,
        location: 'Kyoto Museum of Crafts and Design',
        city: 'Kyoto',
        country: 'Japan',
        description: 'A master-level exposition of interlocking cedar joinery, urushi lacquerwares, and contemporary residential adaptations.',
        status: 'Preview exhibitors',
        imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80',
        isEditorSelection: false
    },
    {
        id: 'adaptive-reuse-summit',
        title: 'Mediterranean Adaptive Reuse Summit',
        category: 'Architecture & Urbanism',
        day: '02',
        month: 'FEB',
        dates: '2–4 Feb 2027',
        year: 2027,
        location: 'Fundació Joan Miró',
        city: 'Barcelona',
        country: 'Spain',
        description: 'Case studies and workshops detailing municipal code modifications that ease conversion of commercial lofts into cooperative housing.',
        status: 'Registration open',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
        isEditorSelection: false
    }
];
}),
"[project]/data/moreArticles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MORE_ARTICLES",
    ()=>MORE_ARTICLES
]);
const MORE_ARTICLES = [
    // --- HOME DECOR (+4 items) ---
    {
        id: 'acoustic-curtains-urban-flat',
        title: 'The acoustic curtain: Silencing the street without closing the shutters',
        deck: 'Heavy multi-layer natural wool and flax drapes that turn single-glazed bay windows into serene sound buffers.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Window treatments',
        kicker: 'Window treatments',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '10 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        imageAlt: 'Wool drapery framing high windows in an urban apartment',
        content: [
            'Urban noise pollution is a chronic stressor. We test five high-density natural textile assemblies that cut decibel intrusion by half.'
        ],
        tags: [
            'Acoustics',
            'Curtains',
            'Textiles',
            'Apartment Living'
        ]
    },
    {
        id: 'bathroom-sanctuary-warmth',
        title: 'Warm minimalism in the wet room: Moving beyond sterile white subway tile',
        deck: 'Tadelakt plaster, non-slip honed basalt, and timber slats create a tactile bathing ritual.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Bath & Wellness',
        kicker: 'Bath & Wellness',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '08 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
        imageAlt: 'Tadelakt plaster bathroom with freestanding stone tub',
        content: [
            'Bathing should be an architectural sensory experience. Tadelakt waterproof lime plaster from Marrakech breathes while resisting mold.'
        ],
        tags: [
            'Bathrooms',
            'Tadelakt',
            'Stone',
            'Wellness'
        ]
    },
    {
        id: 'entryway-vestibule-ritual',
        title: 'In praise of the genkan: Reclaiming the domestic threshold',
        deck: 'Why having a dedicated transitional zone between the outside street and bare floorboards changes the psychology of homecoming.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Rituals',
        kicker: 'Rituals',
        author: {
            id: 'yuki-tanaka',
            name: 'Yuki Tanaka',
            role: 'Contributing Architect'
        },
        date: '05 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
        imageAlt: 'Japanese timber entryway with sunken stone genkan threshold',
        content: [
            'Stepping down to remove shoes is not merely hygienic; it is a ritual boundary separating public urgency from domestic peace.'
        ],
        tags: [
            'Entryways',
            'Genkan',
            'Japanese Design',
            'Thresholds'
        ]
    },
    {
        id: 'lighting-levels-living-room',
        title: 'Never use the big ceiling light: A masterclass in layered domestic luminescence',
        deck: 'Five fixtures, three heights, zero glare. How to orchestrate lamps for conversation, solitary reading, and late dinners.',
        category: 'home-decor',
        categoryName: 'Home Decor',
        subCategory: 'Lighting',
        kicker: 'Lighting',
        author: {
            id: 'lena-berg',
            name: 'Lena Berg',
            role: 'Contributing Architect'
        },
        date: '02 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
        imageAlt: 'Low floor lamp illuminating warm timber arm chair',
        content: [
            'Overhead central lighting flattens faces and triggers alertness. Floor-level uplighting and shaded table lamps invite relaxation.'
        ],
        tags: [
            'Lighting',
            'Living Room',
            'Interior Design',
            'Atmosphere'
        ]
    },
    // --- EVENTS (+6 items) ---
    {
        id: 'event-salone-milano-circular-focus',
        title: 'Salone del Mobile: The circular pavilion mandate takes effect',
        deck: 'Milan organizers enforce strict zero-landfill booth construction guidelines for all exhibiting brands.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'Fair previews',
        kicker: 'Fair previews',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '10 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
        imageAlt: 'Milan exhibition pavilion built from dry-stacked timber blocks',
        content: [
            'Temporary exhibition stands used to generate mountains of drywall waste. Milan’s new charter requires modular disassemblability.'
        ],
        tags: [
            'Salone del Mobile',
            'Milan',
            'Circular Pavilions',
            'Exhibitions'
        ]
    },
    {
        id: 'event-3days-copenhagen-preview',
        title: '3daysofdesign Copenhagen: Ten independent workshops to visit by bike',
        deck: 'Our curated route through Refshaleøen and Nørrebro during Scandinavia’s most intimate design festival.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'City guide',
        kicker: 'City guide',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '06 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        imageAlt: 'Copenhagen canal side workshop with bicycles and timber prototypes',
        content: [
            'Bypass the commercial brand showrooms and head straight into the converted shipyards where craftspeople demonstrate timber bending.'
        ],
        tags: [
            'Copenhagen',
            '3daysofdesign',
            'Workshops',
            'Scandinavia'
        ]
    },
    {
        id: 'event-venice-architecture-biennale',
        title: 'Venice Architecture Biennale: Decolonizing the national pavilions',
        deck: 'How curators in the Giardini are re-evaluating indigenous timber and passive cooling systems.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'Biennale dispatch',
        kicker: 'Biennale dispatch',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '01 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
        imageAlt: 'Venice Giardini pavilion surrounded by lush trees and canal reflections',
        content: [
            'The Biennale turns its gaze toward the global south, highlighting earthen vaulting, communal irrigation, and decentralized stewardship.'
        ],
        tags: [
            'Venice Biennale',
            'Architecture',
            'Giardini',
            'Global South'
        ]
    },
    {
        id: 'event-london-design-festival-highlights',
        title: 'London Design Festival: The craft of deconstruction',
        deck: 'Landmark timber installations across Brompton and Shoreditch probe how buildings can be designed for future reuse.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'Festival review',
        kicker: 'Festival review',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '27 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
        imageAlt: 'Timber pavilion installation in London public courtyard',
        content: [
            'Architects assembled an entirely demountable pavilion in Victoria & Albert Museum courtyard without using a single nail or adhesive.'
        ],
        tags: [
            'LDF',
            'London',
            'Timber',
            'V&A'
        ]
    },
    {
        id: 'event-seoul-design-biennale-tech',
        title: 'Seoul Biennale: High-density robotics meets traditional Hanok courtyards',
        deck: 'In South Korea’s capital, algorithms are used to optimize centuries-old cross-ventilation principles.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'Exhibitions',
        kicker: 'Exhibitions',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '20 Sep 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
        imageAlt: 'Seoul cityscape blending high-tech facades and traditional tiled Hanok roofs',
        content: [
            'The juxtaposition between Seoul’s futuristic skyline and its low-rise Hanok villages provides the ideal sandbox for climate-responsive architecture.'
        ],
        tags: [
            'Seoul',
            'Hanok',
            'Robotics',
            'Biennale'
        ]
    },
    {
        id: 'event-lisbon-triennial-announcement',
        title: 'Lisbon Architecture Triennale Announces theme: "Terra Firme"',
        deck: 'Focusing on geological permanence, non-extractive stone quarries, and Mediterranean sea-facing architecture.',
        category: 'events',
        categoryName: 'Events',
        subCategory: 'Triennale news',
        kicker: 'Triennale news',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '15 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
        imageAlt: 'Sunlit Lisbon street with yellow tram and limestone facades',
        content: [
            'Chief curators reveal their central thesis: architectural design must align with geological rhythms rather than quarterly developer cycles.'
        ],
        tags: [
            'Lisbon',
            'Triennale',
            'Stone',
            'Mediterranean'
        ]
    },
    // --- TRENDS (+5 items) ---
    {
        id: 'trend-terracotta-interiors',
        title: 'Terracotta tiles: The tactile flooring grounding northern homes',
        deck: 'Warm unglazed clay pavers are replacing poured resin and bleached oak in modern Scandinavian kitchens.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Flooring',
        kicker: 'Flooring',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '09 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        imageAlt: 'Handmade terracotta tile floor catching sunlight in open kitchen',
        content: [
            'Terracotta retains radiant floor heat longer than wood, developing a rich, weathered patina that improves with every spilled drop of olive oil.'
        ],
        tags: [
            'Terracotta',
            'Flooring',
            'Materials',
            'Kitchens'
        ]
    },
    {
        id: 'trend-screenless-sanctuaries',
        title: 'The screen-free salon: Homeowners banish digital monitors from the hearth',
        deck: 'A deliberate cultural pushback against television black-holes in primary gathering spaces.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Cultural shift',
        kicker: 'Cultural shift',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '04 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
        imageAlt: 'Living room oriented toward a stone fireplace and bookshelves instead of a television',
        content: [
            'Instead of arranging armchairs facing a giant black screen, designers are orienting living rooms around fireplaces, window gardens, and vinyl players.'
        ],
        tags: [
            'Slow Living',
            'Digital Detox',
            'Living Rooms',
            'Interior Trends'
        ]
    },
    {
        id: 'trend-raw-timber-slats',
        title: 'The acoustic warmth of unsealed timber screening',
        deck: 'Vertical cedar and larch fins provide spatial division without blocking daylight or airflow.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Spatial elements',
        kicker: 'Spatial elements',
        author: {
            id: 'kenji-mori',
            name: 'Kenji Mori',
            role: 'Correspondent'
        },
        date: '29 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80',
        imageAlt: 'Vertical Japanese cedar slats filtering soft daylight into a reading room',
        content: [
            'Timber louvers modulate privacy gracefully, casting kinetic striped shadows across morning floors.'
        ],
        tags: [
            'Timber',
            'Screens',
            'Acoustics',
            'Partitions'
        ]
    },
    {
        id: 'trend-lime-wash-resurgence',
        title: 'Breathable walls: Why natural lime wash is superseding synthetic emulsion',
        deck: 'Naturally anti-fungal, zero VOC, and radiant in shifting natural daylight.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Surface finishes',
        kicker: 'Surface finishes',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '25 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Soft chalky lime wash plaster wall with subtle brush marks',
        content: [
            'Unlike plastic paint films that trap moisture and peel, lime wash calcifies with the masonry, creating an organic vapor-permeable skin.'
        ],
        tags: [
            'Lime Wash',
            'Plaster',
            'Non-Toxic',
            'Wall Finishes'
        ]
    },
    {
        id: 'trend-heavy-stone-monoliths',
        title: 'Monolithic stone: Travertine and volcanic basalt as architectural furniture',
        deck: 'Tables and kitchen islands carved from solid quarry blocks anchor light-filled spaces.',
        category: 'trends',
        categoryName: 'Trends',
        subCategory: 'Materiality',
        kicker: 'Materiality',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '18 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80',
        imageAlt: 'Chiseled travertine dining table in sunlit minimalist pavilion',
        content: [
            'The contrast between feather-light linen drapery and hundreds of kilograms of solid honed stone creates compelling architectural tension.'
        ],
        tags: [
            'Stone',
            'Travertine',
            'Monoliths',
            'Sculptural Furniture'
        ]
    },
    // --- DESIGNERS (+5 items) ---
    {
        id: 'designer-sofia-reyes-interview',
        title: 'Sofia Reyes on holding industrial memory while opening to life',
        deck: 'The Barcelona architect on why industrial workshops should be retrofitted with humility rather than hyper-polished gentrification.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Interview',
        kicker: 'Designers / Interview',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '11 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80',
        imageAlt: 'Architect Sofia Reyes in her Poblenou workspace surrounded by brick models',
        content: [
            'Sofia Reyes believes every scratch on an old concrete beam tells a story of urban labor that deserves preservation alongside family comfort.'
        ],
        tags: [
            'Sofia Reyes',
            'Barcelona',
            'Adaptive Reuse',
            'Interviews'
        ]
    },
    {
        id: 'designer-yuki-tanaka-profile',
        title: 'Yuki Tanaka: The everyday rituals behind enduring Kyoto rooms',
        deck: 'How centuries-old cedar joinery and passive shadow design foster deep domestic calm.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Studio profile',
        kicker: 'Designers / Studio profile',
        author: {
            id: 'kenji-mori',
            name: 'Kenji Mori',
            role: 'Correspondent'
        },
        date: '08 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
        imageAlt: 'Architect Yuki Tanaka examining hand-planed timber joinery joint',
        content: [
            'Tanaka builds without nails, allowing wood to expand and contract with the high humidity of Kyoto’s river basins.'
        ],
        tags: [
            'Yuki Tanaka',
            'Kyoto',
            'Joinery',
            'Passive Design'
        ]
    },
    {
        id: 'designer-noah-haddad-beirut',
        title: 'Noah Haddad: Rebuilding Beirut stone by stone',
        deck: 'Why historic limestone masonry holds psychological healing power for traumatized neighborhoods.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Conversation',
        kicker: 'Designers / Conversation',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '04 Oct 2026',
        readTime: '8 min read',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80',
        imageAlt: 'Noah Haddad standing before a reconstructed vaulted archway in Gemmayzeh',
        content: [
            'Atelier Haddad combines 3D lidar laser scans with master stone cutters to reconstruct centuries-old cross-vaults that withstand future seismic events.'
        ],
        tags: [
            'Noah Haddad',
            'Beirut',
            'Restoration',
            'Stone Masonry'
        ]
    },
    {
        id: 'designer-kenji-mori-tokyo',
        title: 'Kenji Mori: The mathematics of compact spatial joy',
        deck: 'Designing micro-homes that feel like sanctuaries in the dense sprawl of Tokyo.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Architect profile',
        kicker: 'Designers / Architect profile',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Editor'
        },
        date: '30 Sep 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80',
        imageAlt: 'Kenji Mori sketching compact floor plans in his studio',
        content: [
            'Mori explains why vertical ceiling shifts of just twenty centimeters create an instinctive sense of separate rooms without building walls.'
        ],
        tags: [
            'Kenji Mori',
            'Tokyo',
            'Micro Architecture',
            'Spatial Design'
        ]
    },
    {
        id: 'designer-lena-berg-stockholm',
        title: 'Lena Berg: Working with what a building already knows',
        deck: 'The Swedish architect on tuning historic Nordic envelopes rather than stripping them down.',
        category: 'designers',
        categoryName: 'Designers',
        subCategory: 'Monograph',
        kicker: 'Designers / Monograph',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '23 Sep 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
        imageAlt: 'Lena Berg looking over architectural plans in bright Stockholm studio',
        content: [
            'Berg’s restorations in Gamla Stan preserve old maritime pine floorboards, treating every knot as an irreplaceable historic drawing.'
        ],
        tags: [
            'Lena Berg',
            'Stockholm',
            'Nordic Architecture',
            'Heritage'
        ]
    },
    // --- DESIGN TECH (+5 items) ---
    {
        id: 'tech-passive-thermal-modeling',
        title: 'Computational thermodynamics: Modeling air drafts before pouring foundations',
        deck: 'How architects are replacing energy-guzzling HVAC chillers with aerodynamic airflow simulations.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Thermodynamics',
        kicker: 'Thermodynamics',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '08 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
        imageAlt: 'Airflow velocity gradient simulation displayed over architectural section',
        content: [
            'By aligning window openings with micro-climate summer thermal currents, new software eliminates 70% of mechanical cooling requirements.'
        ],
        tags: [
            'Simulation',
            'Passive Solar',
            'Climate Architecture',
            'Tech'
        ]
    },
    {
        id: 'tech-3d-printed-clay-acoustic-tiles',
        title: '3D printed ceramic baffles: Acoustic beauty sculpted by mathematical algorithms',
        deck: 'Parametric acoustic tiles that disperse sound frequencies while celebrating the warmth of fired terracotta.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Fabrication',
        kicker: 'Fabrication',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '03 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Intricate undulating 3D printed terracotta acoustic wall tiles',
        content: [
            'Robotic clay extrusion enables variable acoustic depths that would be impossible to manufacture with traditional slip casting molds.'
        ],
        tags: [
            '3D Printing',
            'Ceramics',
            'Acoustics',
            'Parametric'
        ]
    },
    {
        id: 'tech-offline-first-home-hubs',
        title: 'Why your smart lighting should never depend on cloud servers',
        deck: 'The rising architectural demand for local-first, privacy-respecting hardware controllers that work when the internet is down.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Privacy & infrastructure',
        kicker: 'Privacy & infrastructure',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '28 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        imageAlt: 'Discreet brass dial embedded in wall paneling',
        content: [
            'When a manufacturer goes bankrupt or cloud APIs break, whole homes have been left in darkness. Local-first Zigbee and Matter architectures restore autonomy.'
        ],
        tags: [
            'Offline First',
            'Matter',
            'Privacy',
            'Smart Home'
        ]
    },
    {
        id: 'tech-robotic-timber-joinery',
        title: 'Robotic milling meets master carpentry: The resurgence of complex wood joints',
        deck: 'Seven-axis CNC arms carve intricate Japanese timber joinery joints that assemble in minutes on construction sites.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Robotic fabrication',
        kicker: 'Robotic fabrication',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Design & Tech Editor'
        },
        date: '21 Sep 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
        imageAlt: 'Robotic arm milling interlocking wooden joint with surgical precision',
        content: [
            'High-precision timber joints eliminate structural steel plates and toxic epoxies, making modern multi-storey timber buildings completely demountable.'
        ],
        tags: [
            'Robotics',
            'Timber',
            'Joinery',
            'CNC'
        ]
    },
    {
        id: 'tech-mycelium-thermal-insulation',
        title: 'Growing your own insulation: Fungi composites outperform petrochemical foam',
        deck: 'Mycelium grown on hemp stalks matches the thermal R-value of fiberglass while sequestering atmospheric carbon.',
        category: 'design-tech',
        categoryName: 'Design Tech',
        subCategory: 'Bio-tech',
        kicker: 'Bio-tech',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '16 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        imageAlt: 'Dense organic mycelium insulation board displaying fibrous texture',
        content: [
            'Fungal root networks bind agricultural waste into dense, fire-resistant blocks in just five days, requiring near-zero manufacturing energy.'
        ],
        tags: [
            'Mycelium',
            'Insulation',
            'Bio Tech',
            'Regenerative'
        ]
    },
    // --- FURNITURE (+5 items) ---
    {
        id: 'furniture-solid-oak-extendable-table',
        title: 'The mechanics of the silent butterfly table',
        deck: 'How master woodworkers are engineering smooth wooden gears that extend dining surfaces without plastic slides or metal rattle.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Dining',
        kicker: 'Dining',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '09 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80',
        imageAlt: 'Solid oak dining table expanding smoothly with interlocking wood gear mechanism',
        content: [
            'A dining table should grow gracefully when friends arrive. We review three European joiners crafting entirely wooden extension mechanisms.'
        ],
        tags: [
            'Dining Tables',
            'Woodcraft',
            'Oak',
            'Furniture Details'
        ]
    },
    {
        id: 'furniture-armchair-paper-cord',
        title: 'The craft of Danish paper cord weaving',
        deck: 'Why hand-twisted Danish cord seats outlast leather upholstery and breathe in summer humidity.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Chairs',
        kicker: 'Chairs',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '05 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
        imageAlt: 'Close-up of intricate woven paper cord seat on a solid beech armchair',
        content: [
            'A skilled weaver takes four hours to complete a single envelope pattern, producing a resilient, flexible seat that lasts forty years.'
        ],
        tags: [
            'Paper Cord',
            'Danish Design',
            'Chairs',
            'Craft'
        ]
    },
    {
        id: 'furniture-freestanding-oak-credenza',
        title: 'The architectural credenza: Low sideboards that define room zones',
        deck: 'Instead of drywalled half-walls, low timber sideboards organize open layouts while providing tactile surfaces for ceramics.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Storage',
        kicker: 'Storage',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '29 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        imageAlt: 'Low oiled oak credenza with sliding slatted doors beneath picture window',
        content: [
            'Low horizontal furniture preserves eye-level lines across spaces while storing tableware and audio components out of sight.'
        ],
        tags: [
            'Credenzas',
            'Storage',
            'Oak',
            'Living Room'
        ]
    },
    {
        id: 'furniture-daybed-versatility',
        title: 'The daybed returns: The versatile furnishing missing from modern floor plans',
        deck: 'Neither sofa nor bed, the daybed offers the perfect spot for afternoon reading, listening to records, or hosting overnight guests.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Seating',
        kicker: 'Seating',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '22 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        imageAlt: 'Minimalist leather and oak daybed in sunny architectural study',
        content: [
            'Positioned next to a floor-to-ceiling garden window, a daybed creates a restful threshold that requires very little visual bulk.'
        ],
        tags: [
            'Daybeds',
            'Seating',
            'Living Room',
            'Versatility'
        ]
    },
    {
        id: 'furniture-cast-bronze-hardware',
        title: 'Lost-wax bronze: The drawer pulls that age with human touch',
        deck: 'How unlacquered cast bronze door and drawer pulls develop rich golden highlights along the contact edges.',
        category: 'furniture',
        categoryName: 'Furniture',
        subCategory: 'Fittings',
        kicker: 'Fittings',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '17 Sep 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        imageAlt: 'Hand-cast bronze cabinet pull mounted on solid dark walnut timber',
        content: [
            'Every time you open a drawer, your fingertips polish the bronze. Over decades, the metal mirrors the life of the household.'
        ],
        tags: [
            'Bronze',
            'Hardware',
            'Patina',
            'Metalcraft'
        ]
    },
    // --- DECOR (+4 items) ---
    {
        id: 'decor-raw-linen-bedspreads',
        title: 'The unmatched comfort of heavyweight stonewashed flax',
        deck: 'Why natural European linen regulates sleep temperature better than any synthetic microfiber.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Bedding',
        kicker: 'Bedding',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '07 Oct 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?w=1200&q=80',
        imageAlt: 'Layered rumpled flax linen bedding in calm neutral bedroom',
        content: [
            'Flax fibers are hollow, acting as natural thermal conductors that cool in summer and insulate during freezing winter nights.'
        ],
        tags: [
            'Linen',
            'Bedding',
            'Flax',
            'Natural Fiber'
        ]
    },
    {
        id: 'decor-hand-knotted-moroccan-rugs',
        title: 'The geometry of Berber carpets: Uncut sheep’s wool in high-contrast interiors',
        deck: 'In high-ceilinged modern rooms, thick un-dyed wool carpets absorb footstep echoes while grounding seating islands.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Rugs',
        kicker: 'Rugs',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '02 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80',
        imageAlt: 'High-pile natural sheep wool Moroccan rug beneath minimal low coffee table',
        content: [
            'Each hand-knotted carpet carries subtle asymmetrical shifts that reflect the weaver’s mood and village traditions.'
        ],
        tags: [
            'Carpets',
            'Wool',
            'Rugs',
            'Acoustic Comfort'
        ]
    },
    {
        id: 'decor-sculptural-brass-candleholders',
        title: 'Candlelight as an intentional evening ritual',
        deck: 'Heavy machined brass candle blocks that encourage switching off electric fixtures after dinner.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Objects',
        kicker: 'Objects',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '26 Sep 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80',
        imageAlt: 'Turned solid brass candleholders casting gentle warm glow across dinner table',
        content: [
            'The flicker of genuine flame stimulates melatonin production, signaling to tired eyes that the work day is truly over.'
        ],
        tags: [
            'Candles',
            'Evening Rituals',
            'Brass',
            'Objects'
        ]
    },
    {
        id: 'decor-botanical-branches-ikebana',
        title: 'Ikebana for modern apartments: The art of single-branch floral composition',
        deck: 'How a single winter plum or bare quince branch in a heavy stoneware vessel outlasts ephemeral bouquets.',
        category: 'decor',
        categoryName: 'Decor',
        subCategory: 'Florals',
        kicker: 'Florals',
        author: {
            id: 'yuki-tanaka',
            name: 'Yuki Tanaka',
            role: 'Contributing Architect'
        },
        date: '19 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        imageAlt: 'Single sculptural quince branch in rustic Japanese stoneware vase',
        content: [
            'Ikebana focuses on negative space, celebrating asymmetry, curved twigs, and the quiet dignity of seasonal transition.'
        ],
        tags: [
            'Ikebana',
            'Florals',
            'Ceramics',
            'Japanese Design'
        ]
    },
    // --- SHOWROOM SHOWCASE (+5 items) ---
    {
        id: 'showroom-copenhagen-living-archive',
        title: 'Copenhagen’s 1790 waterfront warehouse turned living design archive',
        deck: 'Where architects test vintage Arne Jacobsen prototypes before specifying reissues.',
        category: 'showroom-showcase',
        categoryName: 'Showroom Showcase',
        subCategory: 'Copenhagen / Archive',
        kicker: 'Copenhagen / Archive',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '08 Oct 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        imageAlt: 'Historic timber-beamed warehouse showroom with Scandinavian design chairs',
        content: [
            'In Christianshavn, this former grain storehouse hosts rotating exhibitions of Danish furniture prototypes and timber test joints.'
        ],
        tags: [
            'Copenhagen',
            'Showrooms',
            'Danish Design',
            'Heritage'
        ]
    },
    {
        id: 'showroom-tokyo-aoyama-craft-sanctuary',
        title: 'Concealed behind a cedar screen: Aoyama’s quietest furniture temple',
        deck: 'Minamiaoyama showroom strips away sales counters in favor of tatami tea rooms and natural indirect sunlight.',
        category: 'showroom-showcase',
        categoryName: 'Showroom Showcase',
        subCategory: 'Tokyo / Flagship',
        kicker: 'Tokyo / Flagship',
        author: {
            id: 'kenji-mori',
            name: 'Kenji Mori',
            role: 'Tokyo Correspondent'
        },
        date: '03 Oct 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
        imageAlt: 'Minimalist Tokyo showroom with cedar batten walls and stone floor',
        content: [
            'Visitors are asked to remove shoes upon entry, experiencing the cedar floorboards and low seating at the intended human scale.'
        ],
        tags: [
            'Tokyo',
            'Showrooms',
            'Craft',
            'Cedar'
        ]
    },
    {
        id: 'showroom-london-clerkenwell-material-forge',
        title: 'Inside Clerkenwell’s Victorian foundry turned circular materials exchange',
        deck: 'Architects drop off reclaimed facade samples and test disassemblable dry-fit wall systems.',
        category: 'showroom-showcase',
        categoryName: 'Showroom Showcase',
        subCategory: 'London / Hub',
        kicker: 'London / Hub',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '27 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        imageAlt: 'Industrial brick London showroom with material sample tables and drawings',
        content: [
            'The space functions as part design gallery and part material testing laboratory for architects drafting circular specifications.'
        ],
        tags: [
            'London',
            'Clerkenwell',
            'Materials',
            'Circular Design'
        ]
    },
    {
        id: 'showroom-paris-marais-limestone-vaults',
        title: 'Limestone vaulted cellars host collectible contemporary furniture in Paris',
        deck: 'In the Marais, 17th-century masonry creates dramatic shadows for bronze consoles and carved oak credenzas.',
        category: 'showroom-showcase',
        categoryName: 'Showroom Showcase',
        subCategory: 'Paris / Curated',
        kicker: 'Paris / Curated',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '21 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
        imageAlt: 'Parisian historic stone vaulted cellar displaying sculptural bronze furniture',
        content: [
            'The raw, salt-crusted limestone vaults provide the perfect backdrop for tactile contemporary design pieces.'
        ],
        tags: [
            'Paris',
            'Marais',
            'Collectible Design',
            'Vaults'
        ]
    },
    {
        id: 'showroom-newyork-soho-loft',
        title: 'Cast-iron grandeur paired with domestic warmth on Greene Street',
        deck: 'SoHo loft showroom demonstrates how soaring 14-foot ceilings can still feel intimate and grounded.',
        category: 'showroom-showcase',
        categoryName: 'Showroom Showcase',
        subCategory: 'New York / Spatial',
        kicker: 'New York / Spatial',
        author: {
            id: 'isabel-hart',
            name: 'Isabel Hart',
            role: 'Editor-in-Chief'
        },
        date: '15 Sep 2026',
        readTime: '5 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        imageAlt: 'SoHo loft showroom with cast iron columns and wide oak floorboards',
        content: [
            'By dividing the expansive loft with sheer linen drapes and low floating credenzas, the space teaches visitors how to conquer industrial scale.'
        ],
        tags: [
            'New York',
            'SoHo',
            'Lofts',
            'Interior Styling'
        ]
    },
    // --- PROJECTS (+4 items) ---
    {
        id: 'project-kyoto-forest-house-full',
        title: 'Kitayama Forest House: Floating lightly over cedar groves',
        deck: 'An elevated post-and-beam retreat in Kyoto Prefecture that touches the mountain slope with non-invasive rock footings.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Residential',
        kicker: 'Residential',
        author: {
            id: 'yuki-tanaka',
            name: 'Yuki Tanaka',
            role: 'Contributing Architect'
        },
        date: '07 Oct 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
        imageAlt: 'Japanese timber house hovering gently on slope amidst mist-shrouded cedar trees',
        content: [
            'Built without concrete piles, the structure relies on dry-stacked granite boulders and cedar timber bracing, leaving mountain runoff streams undisturbed.'
        ],
        tags: [
            'Kyoto',
            'Timber',
            'Forest House',
            'Japanese Architecture'
        ]
    },
    {
        id: 'project-victoria-island-arts-pavilion',
        title: 'Victoria Island Arts Pavilion: Compressed earth meets Atlantic sea breeze',
        deck: 'In Lagos, Amara Okafor builds an open-air cultural civic sanctuary using site-excavated red soil.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Public space',
        kicker: 'Public space',
        author: {
            id: 'clara-voss',
            name: 'Clara Voss',
            role: 'Contributing Editor'
        },
        date: '02 Oct 2026',
        readTime: '8 min read',
        imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
        imageAlt: 'Red earth brick colonnade overlooking Atlantic coastline in Lagos',
        content: [
            'The pavilion utilizes thermal mass and high ocean breezes to create a naturally shaded sanctuary without mechanical fans or air conditioners.'
        ],
        tags: [
            'Lagos',
            'Earth Architecture',
            'Public Space',
            'Pavilion'
        ]
    },
    {
        id: 'project-porto-douro-stone-quinta',
        title: 'Quinta das Carvalhas: Reviving a 300-year-old Douro granite winery',
        deck: 'Rafael Costa restores dry-stacked schist terrace walls and converts a barrel barn into family guest quarters.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Adaptive reuse',
        kicker: 'Adaptive reuse',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Contributing Architect'
        },
        date: '25 Sep 2026',
        readTime: '7 min read',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
        imageAlt: 'Dry stacked stone vineyard estate overlooking Douro river valley',
        content: [
            'Retaining walls built without mortar allow natural drainage during torrential autumn storms, preserving the steep hillside vines.'
        ],
        tags: [
            'Portugal',
            'Douro Valley',
            'Stone Masonry',
            'Restoration'
        ]
    },
    {
        id: 'project-melbourne-brunswick-housing',
        title: 'The Nightingale Brunswick model: Cooperative mass-timber homes',
        deck: 'Apartments built with shared rooftop gardens, zero private car parks, and 100% certified renewable energy.',
        category: 'projects',
        categoryName: 'Projects',
        subCategory: 'Collective housing',
        kicker: 'Collective housing',
        author: {
            id: 'daniel-adebayo',
            name: 'Daniel Adebayo',
            role: 'Urbanism Critic'
        },
        date: '18 Sep 2026',
        readTime: '6 min read',
        imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
        imageAlt: 'Modern cross-laminated timber apartment building with lush balcony greenery',
        content: [
            'By eliminating marketing costs and developer profits, the cooperative model delivers architect-designed homes at 20% below market price.'
        ],
        tags: [
            'Melbourne',
            'Cooperative Housing',
            'Mass Timber',
            'Sustainability'
        ]
    },
    // --- PRODUCTS (+4 items) ---
    {
        id: 'product-recycled-aluminium-pendant',
        title: 'Alba: Spun recycled aluminium pendant with brass canopy',
        deck: 'Precision spun in southern Sweden from discarded automotive rims, finished with a subtle satin bead blast.',
        category: 'products',
        categoryName: 'Products',
        subCategory: 'Lighting',
        kicker: 'Lighting',
        author: {
            id: 'marcus-chen',
            name: 'Marcus Chen',
            role: 'Products Editor'
        },
        date: '08 Oct 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        imageAlt: 'Sleek spun aluminium pendant light casting warm downlight',
        content: [
            'The luminaire disassembles completely with three brass screws, ensuring 100% material recyclability.'
        ],
        tags: [
            'Lighting',
            'Aluminium',
            'Product Design',
            'Recycled'
        ]
    },
    {
        id: 'product-honed-basalt-basin',
        title: 'Vulcan: Hand-carved volcanic basalt bathroom vessel',
        deck: 'Carved from single basalt boulders salvaged from road excavation works in Sicily.',
        category: 'products',
        categoryName: 'Products',
        subCategory: 'Bath',
        kicker: 'Bath',
        author: {
            id: 'eva-laurent',
            name: 'Eva Laurent',
            role: 'Living Editor'
        },
        date: '03 Oct 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
        imageAlt: 'Dark honed volcanic stone sink basin with brass faucet',
        content: [
            'The raw chiseled exterior contrasts dramatically with the silky honed interior basin bowl.'
        ],
        tags: [
            'Bath',
            'Basalt',
            'Stone',
            'Sinks'
        ]
    },
    {
        id: 'product-unlacquered-brass-lever',
        title: 'Forma 01: Unlacquered solid architectural brass door handle',
        deck: 'Cast and hand-polished in Birmingham to develop an organic, human-touched golden brown patina.',
        category: 'products',
        categoryName: 'Products',
        subCategory: 'Hardware',
        kicker: 'Hardware',
        author: {
            id: 'rafael-costa',
            name: 'Rafael Costa',
            role: 'Architect'
        },
        date: '27 Sep 2026',
        readTime: '3 min read',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        imageAlt: 'Solid unlacquered architectural brass lever handle on solid oak door',
        content: [
            'Engineered with dual stainless steel ball bearings guaranteed for 500,000 opening cycles.'
        ],
        tags: [
            'Hardware',
            'Brass',
            'Fittings',
            'Architecture'
        ]
    },
    {
        id: 'product-cork-acoustic-cladding',
        title: 'Suber: Expanded Portuguese cork acoustic wall tiles',
        deck: 'Harvested without felling cork oak trees, steam-expanded using the bark’s natural resins.',
        category: 'products',
        categoryName: 'Products',
        subCategory: 'Surfaces',
        kicker: 'Surfaces',
        author: {
            id: 'henrik-lind',
            name: 'Henrik Lind',
            role: 'Materials Correspondent'
        },
        date: '20 Sep 2026',
        readTime: '4 min read',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        imageAlt: 'Textured dark brown cork wall cladding tiles in quiet room',
        content: [
            'Cork forests in the Alentejo support endangered Iberian lynx while providing one of nature’s most effective acoustic absorbers.'
        ],
        tags: [
            'Cork',
            'Acoustics',
            'Surfaces',
            'Portugal'
        ]
    }
];
}),
"[project]/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS
]);
const PRODUCTS = [
    {
        id: 'arc-task-light',
        title: 'Arc: a task light with a lighter footprint',
        category: 'Lighting',
        designer: 'Studio Form & Light',
        materials: 'Recycled aluminium / Replaceable LED',
        featureBadge: 'Product brief',
        description: 'Constructed from 85% post-consumer extrusion aluminium with a fully disassemblable magnetic LED core designed for infinite repairability and zero glare.',
        price: '$380',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        dateAdded: '14 Oct 2026',
        rating: 4.9
    },
    {
        id: 'terra-panels',
        title: 'Terra panels turn waste into texture',
        category: 'Surfaces',
        designer: 'Mineral Works',
        materials: 'Reclaimed minerals / Interior application',
        featureBadge: 'Material review',
        description: 'Acoustic and tactile wall cladding engineered from compressed quarry tailings and bio-based binders, offering rich mineral depth without open-pit extraction.',
        price: '$140/sqm',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        dateAdded: '13 Oct 2026',
        rating: 4.8
    },
    {
        id: 'ceramic-basin-reimagined',
        title: 'A ceramic basin, quietly reimagined',
        category: 'Bath',
        designer: 'Kanso Ceramics',
        materials: 'Glazed ceramic / Water saving design',
        featureBadge: 'Product brief',
        description: 'A shallow, gently sloped vessel that slows the water spiral to eliminate splashing while reducing domestic water usage by twenty-two percent.',
        price: '$520',
        imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
        dateAdded: '12 Oct 2026',
        rating: 4.7
    },
    {
        id: 'modular-door-hardware',
        title: 'The small detail that changes the door',
        category: 'Hardware',
        designer: 'Haddad Architecture Goods',
        materials: 'Brushed steel / Modular construction',
        featureBadge: 'Specification notes',
        description: 'A precision-milled architectural lever handle featuring interchangeable tactile grip sleeves in raw hornbeam, cork, or cold-rolled stainless steel.',
        price: '$195',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        dateAdded: '12 Oct 2026',
        rating: 4.9
    },
    {
        id: 'modular-lounge-sofa',
        title: 'Norden: The modular sofa with replaceable cushions',
        category: 'Seating',
        designer: 'Studio Berg',
        materials: 'FSC Solid Oak / Organic Wool Weave',
        featureBadge: 'Design evolution',
        description: 'Built with exposed mortise-and-tenon oak frames and individual non-glued latex cushions that can be unzipped, cleaned, or reupholstered at home.',
        price: '$2,450',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        dateAdded: '11 Oct 2026',
        rating: 5.0
    },
    {
        id: 'washi-paper-pendant',
        title: 'Komyo: Layered paper pendant light',
        category: 'Lighting',
        designer: 'Tanaka & Associates',
        materials: 'Handmade Mulberry Washi / Brass',
        featureBadge: 'Craft spotlight',
        description: 'Hand-pressed Japanese mulberry washi paper forms concentric soft glowing discs that shield the direct lamp while showering the dining table in warm amber.',
        price: '$410',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
        dateAdded: '10 Oct 2026',
        rating: 4.8
    },
    {
        id: 'raw-linen-curtains',
        title: 'Fjord: Unbleached natural flax linen drapery',
        category: 'Textiles',
        designer: 'Eva Laurent Studio',
        materials: '100% European Flax Linen',
        featureBadge: 'Textile story',
        description: 'Heavyweight organic linen curtains washed with pumice stones to produce a soft architectural drape that filters bright summer light into gentle morning haze.',
        price: '$290/panel',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        dateAdded: '09 Oct 2026',
        rating: 4.9
    },
    {
        id: 'heirloom-trestle-table',
        title: 'Silvas: Hand-planed chestnut trestle dining table',
        category: 'Seating',
        designer: 'Costa Atelier',
        materials: 'Salvaged Chestnut Timber / Iron Pegs',
        featureBadge: 'Heirloom study',
        description: 'Crafted without screws or chemical adhesives using traditional Portuguese sliding dovetails and wedge-locked legs that settle with atmospheric humidity.',
        price: '$3,800',
        imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80',
        dateAdded: '08 Oct 2026',
        rating: 4.9
    }
];
}),
"[project]/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: 'barcelona-workshop-living',
        title: 'An old workshop becomes a new way of living',
        category: 'Residential',
        location: 'Barcelona, Spain',
        architect: 'Sofia Reyes',
        year: 2026,
        summary: 'A sensitive conversion holds onto the building’s industrial memory while opening it to light, air and family life.',
        description: 'In Barcelona’s historic Poblenou quarter, an early 20th-century textile mechanics workshop has been revived as a luminous family home and collective studio. Instead of stripping out the historic trusses, architect Sofia Reyes preserved the original steel frames and sandblasted brickwork, inserting a central bioclimatic courtyard filled with lemon trees, jasmine, and terracotta pavers.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
        ],
        photographer: 'Carlos Arnaiz',
        area: '340 m²'
    },
    {
        id: 'copenhagen-courtyard-homes',
        title: 'The quiet revolution inside Copenhagen’s courtyard homes',
        category: 'Residential',
        location: 'Copenhagen, Denmark',
        architect: 'Clara Voss',
        year: 2026,
        summary: 'Behind historic façades, a new generation of architects is making shared space the most valuable room in the house.',
        description: 'Rejecting isolated single-family sprawl, this adaptive residential cluster in Vesterbro integrates six family dwellings around a shared winter garden. Triple-glazed operable glass partitions allow the communal dining space and children’s play library to expand or contract according to the seasons.',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80'
        ],
        photographer: 'Rasmus Hjortshøj',
        area: '780 m²'
    },
    {
        id: 'mexico-city-courtyard-hotel',
        title: 'A courtyard hotel shaped by shade and silence',
        category: 'Hospitality',
        location: 'Mexico City, Mexico',
        architect: 'Estudio Macías Peredo',
        year: 2025,
        summary: 'Volcanic stone walls, deep colonnades and trickling fountains carve an acoustically pristine refuge in the heart of Roma Norte.',
        description: 'Thick volcanic recinto masonry forms a thermal buffer against the bustling streetscape, while layered courtyards cool air naturally before funneling breezes through cross-laminated timber guest suites.',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80'
        ],
        photographer: 'Rafael Gamo',
        area: '1,200 m²'
    },
    {
        id: 'melbourne-neighbourhood-office',
        title: 'An office that puts the neighbourhood first',
        category: 'Workplace',
        location: 'Melbourne, Australia',
        architect: 'Breathe Architecture',
        year: 2025,
        summary: 'A 100% fossil-fuel-free hybrid mass timber workplace with ground-floor civic courtyards, community bike workshops and natural ventilation.',
        description: 'Built along a former rail spur in Brunswick, this six-storey cross-laminated timber office completely replaces air-conditioning chillers with thermal chimneys, rooftop solar, and lush vertical gardens accessible to local residents.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80'
        ],
        photographer: 'Peter Bennetts',
        area: '2,400 m²'
    },
    {
        id: 'helsinki-civic-reading-room',
        title: 'A reading room with a civic purpose',
        category: 'Public space',
        location: 'Helsinki, Finland',
        architect: 'ALA Architects',
        year: 2026,
        summary: 'Curved spruce ceilings and quiet acoustic alcoves transform this harbourfront pavilion into a winter sanctuary for democratic study.',
        description: 'Designed as an open living room for the city, the pavilion integrates tactile timber seating, radiant ground heating, and free civic gathering nooks where books, tools, and digital media are shared equally.',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80',
            'https://images.unsplash.com/photo-1507842229451-7f01be7ffc1d?w=1200&q=80'
        ],
        photographer: 'Tuomas Uusheimo',
        area: '1,850 m²'
    },
    {
        id: 'porto-school-library',
        title: 'A former school in Porto finds a second life as a neighbourhood library',
        category: 'Adaptive reuse',
        location: 'Porto, Portugal',
        architect: 'Rafael Costa',
        year: 2026,
        summary: 'A careful retrofit puts public space ahead of spectacle, restoring granite lintels and introducing chestnut reading tables.',
        description: 'Constructed in 1892 as a municipal elementary school, the long-abandoned masonry structure now houses community reading archives, an open courtyard cafe, and study alcoves lined in local Portuguese cork.',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80'
        ],
        photographer: 'Fernando Guerra',
        area: '920 m²'
    },
    {
        id: 'kyoto-forest-house',
        title: 'Kitayama Forest House: Living alongside cedar groves',
        category: 'Residential',
        location: 'Kyoto Prefecture, Japan',
        architect: 'Yuki Tanaka',
        year: 2025,
        summary: 'Elevated post-and-beam construction minimizes site footprint while framing misty mountain vistas through hand-made washi partitions.',
        description: 'Hovering lightly over a forested slope, this residence utilizes traditional joinery without metal bolts, paired with deep overhanging eaves that shield against monsoon rains and regulate thermal gain.',
        imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80'
        ],
        photographer: 'Iwan Baan',
        area: '160 m²'
    },
    {
        id: 'lagos-cultural-pavilion',
        title: 'Victoria Island Arts Pavilion: Earth meets ocean air',
        category: 'Public space',
        location: 'Lagos, Nigeria',
        architect: 'Amara Okafor',
        year: 2026,
        summary: 'Compressed earth block colonnades filter Atlantic sea breezes, providing passive shade for music and poetry assemblies.',
        description: 'Designed as a gift to the city waterfront, the pavilion is built entirely from soil excavated on site, mixed with natural pozzolanic binder and capped by a sweeping timber latticework canopy.',
        imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'
        ],
        photographer: 'Tolani Alli',
        area: '1,450 m²'
    }
];
}),
"[project]/data/reports.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPECIAL_REPORTS",
    ()=>SPECIAL_REPORTS
]);
const SPECIAL_REPORTS = [
    {
        id: 'circular-interiors-report-2026',
        title: 'The circular interiors report',
        kicker: 'Industry analysis / 2026',
        typeBadge: 'Annual report',
        year: '2026',
        description: 'Repair, reuse and the realities of specifying for a lower impact future. Our comprehensive global investigation into circular procurement, mechanical disassemblability, and real-world reclamation pipelines.',
        readTime: '18 min read',
        publishedDate: '14 Oct 2026',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        keyFindings: [
            '78% of architectural fittings specified as "recyclable" end in incineration due to toxic adhesive bonding.',
            'Mechanical friction joinery reduces end-of-life deconstruction labor costs by 64%.',
            'The secondary market for reclaimed architectural stone grew 210% across Europe between 2023 and 2026.'
        ]
    },
    {
        id: 'next-domestic-landscape-2027',
        title: 'The next domestic landscape',
        kicker: 'Annual outlook / 2027',
        typeBadge: 'Forecasting study',
        year: '2027',
        description: 'Ten shifts in how we live and what they mean for the spaces we build. How shifting multi-generational demographics, decentralized work, and climate resilience are reconfiguring domestic floor plans.',
        readTime: '15 min read',
        publishedDate: '10 Oct 2026',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        keyFindings: [
            'The open-plan kitchen is giving way to acoustically buffered domestic work nooks and distinct pantry vestibules.',
            'Circadian lighting protocols in residential developments correlate with an 18% improvement in reported sleep quality.',
            'Communal winter gardens have emerged as the single highest-rated shared amenity in multi-unit housing surveys.'
        ]
    },
    {
        id: 'beyond-the-sustainable-label',
        title: 'Beyond the sustainable label',
        kicker: 'Material research / Field notes',
        typeBadge: 'Field investigation',
        year: '2026',
        description: 'A critical guide to reading environmental claims in the materials market. Demystifying EPD declarations, bio-composite greenwashing, and lifecycle carbon accounting for practicing interior architects.',
        readTime: '12 min read',
        publishedDate: '7 Oct 2026',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        keyFindings: [
            'Over 40% of bio-plastic surfacing materials incorporate non-biodegradable polyurethane backings.',
            'Locally sourced unfired earth plaster has 1/12th the embodied carbon of standard gypsum drywall.',
            'Independent life-cycle audits are becoming mandatory for Tier 1 institutional tenders in 14 EU jurisdictions.'
        ]
    },
    {
        id: 'adaptive-reuse-monograph',
        title: 'The retrofit imperative: Adaptive reuse across 12 cities',
        kicker: 'Monograph / Case studies',
        typeBadge: 'Global monograph',
        year: '2026',
        description: 'An empirical comparison between building anew and preserving structural concrete skeletons, evaluating cost, carbon payback, and civic cultural continuity.',
        readTime: '22 min read',
        publishedDate: '24 Sep 2026',
        imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=1200&q=80',
        keyFindings: [
            'Structural retrofits save on average 480 kg CO2-eq per square meter compared to demolition and replacement.',
            'Heritage acoustic solutions such as sheep’s wool baffles and lime plaster achieve comparable NRC ratings to synthetic mineral foams.',
            'Public approval ratings for adaptive reuse projects exceed new developments by 34 percentage points.'
        ]
    },
    {
        id: 'quiet-tech-manifesto',
        title: 'Quiet Technology: The post-screen domestic interior',
        kicker: 'Technology briefing / Whitepaper',
        typeBadge: 'Whitepaper',
        year: '2026',
        description: 'An architectural manifesto advocating for invisible computation, mechanical analog feedback, and local-first offline networks that respect spatial sanctuary.',
        readTime: '14 min read',
        publishedDate: '15 Sep 2026',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        keyFindings: [
            'Screen fatigue has driven an 85% surge in client requests for screen-free primary living rooms.',
            'Analog tactile switches engineered with mechanical haptics demonstrate 3x longer operational lifespans than capacitive glass touchpanels.',
            'Privacy-first local network hubs reduce IoT electromagnetic interference within timber frame structures.'
        ]
    }
];
}),
"[project]/data/showrooms.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHOWROOMS",
    ()=>SHOWROOMS
]);
const SHOWROOMS = [
    {
        id: 'casa-forma-milan',
        name: 'Casa Forma',
        city: 'Milan',
        country: 'Italy',
        kicker: 'Milan / Space study',
        headline: 'A furniture gallery designed like a lived-in home',
        description: 'At Casa Forma, rooms not product rows tell the story. Clients wander through kitchen hearths, sunlit breakfast corners, and courtyard libraries where every piece can be tested and inhabited.',
        address: 'Via Solferino 18, 20121 Milano, Italy',
        hours: 'Mon–Sat: 10:00 – 19:00',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
        featuredBrands: [
            'De Padova',
            'Flos Architectural',
            'Studio Berg Editions',
            'Kanso Ceramics'
        ]
    },
    {
        id: 'eden-gallery-singapore',
        name: 'The Biophilic Studio',
        city: 'Singapore',
        country: 'Singapore',
        kicker: 'Singapore / New spaces',
        headline: 'The showroom that brings the garden indoors',
        description: 'A tropical approach to architectural display blurs the boundary between inside and out, creating natural cooling corridors and living moss acoustics for sustainable fittings.',
        address: '42 Tanjong Pagar Road, Singapore 088463',
        hours: 'Tue–Sun: 11:00 – 20:00',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
        featuredBrands: [
            'Kettal',
            'Vibia',
            'Boffi Outdoor',
            'Living Carbon Surfaces'
        ]
    },
    {
        id: 'antwerp-material-library',
        name: 'Atelier Materia',
        city: 'Antwerp',
        country: 'Belgium',
        kicker: 'Also on our map',
        headline: 'A material library in Antwerp makes the specification process tangible',
        description: 'Over 2,000 tactile swatches of bio-resins, raw limestone, acoustic wool felts, and reclaimed timber allow architects to curate physically coherent palettes in real daylight.',
        address: 'Kloosterstraat 68, 2000 Antwerpen, Belgium',
        hours: 'Wed–Sat: 10:00 – 18:00',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        featuredBrands: [
            'Mineral Works',
            'Dinesen',
            'Forbo Marmoleum',
            'Bencore'
        ]
    },
    {
        id: 'tokyo-craft-sanctuary',
        name: 'Aoyama Craft House',
        city: 'Tokyo',
        country: 'Japan',
        kicker: 'Tokyo / Flagship study',
        headline: 'Tactile quietude amidst the neon pulse of Minato',
        description: 'Concealed behind a cedar batten screen, this dual-level sanctuary presents Japanese joinery, raw volcanic tableware, and architectural lighting in meditative silence.',
        address: '5-7-22 Minamiaoyama, Minato-ku, Tokyo 107-0062',
        hours: 'Wed–Sun: 12:00 – 19:00',
        imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
        featuredBrands: [
            'Maruni',
            'Time & Style',
            'Tanaka Joinery',
            'New Light Pottery'
        ]
    },
    {
        id: 'copenhagen-nordic-hearth',
        name: 'The Living Archive',
        city: 'Copenhagen',
        country: 'Denmark',
        kicker: 'Copenhagen / Concept space',
        headline: 'A working design library where prototype chairs never gather dust',
        description: 'Occupying a 1790 canal warehouse, visitors borrow design classics for their workspace or attend Friday evening wine forums focused on repair cultures.',
        address: 'Strandgade 44, 1401 København K, Denmark',
        hours: 'Mon–Fri: 09:30 – 17:30',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        featuredBrands: [
            'Fritz Hansen Archive',
            'Muuto',
            'Carl Hansen & Søn',
            'Voss Editions'
        ]
    },
    {
        id: 'london-clerkwell-exchange',
        name: 'Clerkenwell Material Forge',
        city: 'London',
        country: 'United Kingdom',
        kicker: 'London / Specification hub',
        headline: 'Connecting circular manufacturers directly with commercial specifiers',
        description: 'Housed in a Victorian iron foundry, the showroom hosts live deconstruction workshops demonstrating how interior partitions can be reclaimed without landfill waste.',
        address: '14 St John’s Square, London EC1M 4DE',
        hours: 'Mon–Fri: 09:00 – 18:00',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
        featuredBrands: [
            'Interface',
            'Econyl Fabrics',
            'Honext Boards',
            'Okafor Spatial'
        ]
    },
    {
        id: 'paris-marais-galerie',
        name: 'Galerie du Seuil',
        city: 'Paris',
        country: 'France',
        kicker: 'Paris / Curated salons',
        headline: 'Limestone vaults spotlighting experimental French collectible furniture',
        description: 'Ancient 17th-century vaulted cellars create dramatic chiaroscuro for bronze consoles, cast glass luminaires, and carved oak credenzas.',
        address: '22 Rue de Turenne, 75004 Paris, France',
        hours: 'Tue–Sat: 11:00 – 19:00',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
        featuredBrands: [
            'Pierre Augustin Rose',
            'Galerie Kreo',
            'Eva Laurent',
            'Mouvements Modernes'
        ]
    },
    {
        id: 'new-york-soho-loft',
        name: 'Greene Street Sanctuary',
        city: 'New York',
        country: 'USA',
        kicker: 'New York / Spatial showcase',
        headline: 'Cast iron grandeur paired with intimate domestic rituals',
        description: 'High ceilings and weathered timber floorboards host rotating room sets that explore the intersection of American industrial heritage and Scandinavian calm.',
        address: '104 Greene Street, New York, NY 10012',
        hours: 'Mon–Sat: 10:00 – 18:00',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
        featuredBrands: [
            'Apparatus',
            'BassamFellows',
            'BDDW',
            'Mineral Works'
        ]
    }
];
}),
"[project]/data/videos.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEDIA_ITEMS",
    ()=>MEDIA_ITEMS
]);
const MEDIA_ITEMS = [
    {
        id: 'podcast-amara-okafor',
        title: 'Amara Okafor: designing a sense of belonging',
        type: 'podcast',
        duration: '38:12',
        kicker: 'The Field Notes podcast / Episode 042',
        hostOrDirector: 'Hosted by Isabel Hart',
        date: '14 Oct 2026',
        description: 'Interior architect Amara Okafor on why public spaces must be designed from the hearth outward, and how African earth construction informs contemporary London residential sanctuaries.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
        audioUrl: 'https://example.com/audio/field-notes-042.mp3'
    },
    {
        id: 'video-wood-second-life',
        title: 'Inside a workshop where wood gets a second life',
        type: 'video',
        duration: '12:48',
        kicker: 'Studio visit / Video',
        hostOrDirector: 'Film by Luca Bell',
        date: '13 Oct 2026',
        description: 'We spend three days in northern Portugal with master craftsman Rafael Costa, documenting the slow recovery of 200-year-old chestnut roof timbers into heirloom dining furniture.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 'video-reading-light',
        title: 'How to read a room through its light',
        type: 'video',
        duration: '08:26',
        kicker: 'Design explained / Video',
        hostOrDirector: 'With Lena Berg',
        date: '12 Oct 2026',
        description: 'Stockholm architect Lena Berg breaks down three distinct lighting layers—perimeter grazing, task focus, and low ambient pools—that transform cold northern interiors into warm domestic envelopes.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 'podcast-materials-clay',
        title: 'Can clay replace concrete? A candid material audit',
        type: 'podcast',
        duration: '42:15',
        kicker: 'The Field Notes podcast / Episode 041',
        hostOrDirector: 'Hosted by Isabel Hart',
        date: '07 Oct 2026',
        description: 'Structural bio-chemist Dr. Henrik Lind and architect Sofia Reyes debate the structural load limits, seismic resilience, and drying curves of unstabilized rammed earth.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        audioUrl: 'https://example.com/audio/field-notes-041.mp3'
    },
    {
        id: 'video-copenhagen-courtyards',
        title: 'Behind the brick: Copenhagen’s collective courtyards',
        type: 'video',
        duration: '15:20',
        kicker: 'Architecture in motion / Video',
        hostOrDirector: 'Directed by Rasmus Hjortshøj',
        date: '04 Oct 2026',
        description: 'Step past the sober 19th-century street façades of Vesterbro into six vibrant family homes sharing a temperate glass winter garden.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 'podcast-noah-haddad',
        title: 'Noah Haddad: The architecture of recovery and stone memory',
        type: 'podcast',
        duration: '45:50',
        kicker: 'The Field Notes podcast / Episode 040',
        hostOrDirector: 'Hosted by Isabel Hart',
        date: '28 Sep 2026',
        description: 'Beirut conservation architect Noah Haddad discusses stone vaulting, seismic bracing, and why restoring destroyed domestic spaces is an essential civic act.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80',
        audioUrl: 'https://example.com/audio/field-notes-040.mp3'
    },
    {
        id: 'video-kyoto-joinery',
        title: 'The sound of the hand plane in Kyoto',
        type: 'video',
        duration: '10:14',
        kicker: 'Craft monographs / Video',
        hostOrDirector: 'Cinematography by Kenji Mori',
        date: '22 Sep 2026',
        description: 'An intimate, ambient documentary following carpenter Yuki Tanaka as she shapes Japanese red cedar for a tea pavilion using only non-motorized hand tools.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 'podcast-smart-home-quiet',
        title: 'The invisible home: Designing technology that fades away',
        type: 'podcast',
        duration: '34:05',
        kicker: 'The Field Notes podcast / Episode 039',
        hostOrDirector: 'Hosted by Clara Voss',
        date: '15 Sep 2026',
        description: 'Why tactile rotary dials, offline sensors, and hidden acoustic dampening are replacing glowing screens and voice surveillance in the bedroom.',
        thumbnailUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
        audioUrl: 'https://example.com/audio/field-notes-039.mp3'
    }
];
}),
"[project]/lib/services/articlesService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllArticles",
    ()=>getAllArticles,
    "getArticleById",
    ()=>getArticleById,
    "getArticlesByCategory",
    ()=>getArticlesByCategory,
    "getFeaturedArticles",
    ()=>getFeaturedArticles,
    "getLatestArticles",
    ()=>getLatestArticles,
    "getRelatedArticles",
    ()=>getRelatedArticles,
    "getTrendingArticles",
    ()=>getTrendingArticles,
    "searchAllData",
    ()=>searchAllData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$moreArticles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/moreArticles.ts [app-rsc] (ecmascript)");
;
;
const ALL_ARTICLES = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARTICLES"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$moreArticles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MORE_ARTICLES"]
];
function getAllArticles() {
    return ALL_ARTICLES;
}
function getArticleById(id) {
    return ALL_ARTICLES.find((a)=>a.id === id);
}
function getArticlesByCategory(category) {
    return ALL_ARTICLES.filter((a)=>a.category === category);
}
function getFeaturedArticles() {
    return ALL_ARTICLES.filter((a)=>a.featured);
}
function getTrendingArticles() {
    return ALL_ARTICLES.filter((a)=>a.trendingRank !== undefined).sort((a, b)=>(a.trendingRank || 99) - (b.trendingRank || 99));
}
function getLatestArticles(limit = 6) {
    return ALL_ARTICLES.slice(0, limit);
}
function getRelatedArticles(currentId, category, limit = 3) {
    return ALL_ARTICLES.filter((a)=>a.id !== currentId && a.category === category).slice(0, limit);
}
function searchAllData(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_ARTICLES.filter((a)=>a.title.toLowerCase().includes(q) || a.deck.toLowerCase().includes(q) || a.categoryName.toLowerCase().includes(q) || a.author.name.toLowerCase().includes(q) || a.tags.some((t)=>t.toLowerCase().includes(q)));
}
}),
"[project]/lib/services/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories,
    "getAllDesigners",
    ()=>getAllDesigners,
    "getAllEvents",
    ()=>getAllEvents,
    "getAllMedia",
    ()=>getAllMedia,
    "getAllProducts",
    ()=>getAllProducts,
    "getAllProjects",
    ()=>getAllProjects,
    "getAllReports",
    ()=>getAllReports,
    "getAllShowrooms",
    ()=>getAllShowrooms,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getDesignerById",
    ()=>getDesignerById,
    "getEventById",
    ()=>getEventById,
    "getMediaById",
    ()=>getMediaById,
    "getProductById",
    ()=>getProductById,
    "getProjectById",
    ()=>getProjectById,
    "getReportById",
    ()=>getReportById,
    "getShowroomById",
    ()=>getShowroomById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$designers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/designers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/events.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$showrooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/showrooms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$videos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/videos.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/reports.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$articlesService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/articlesService.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function getAllCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORIES"];
}
function getCategoryBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORIES"].find((c)=>c.slug === slug);
}
function getAllDesigners() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$designers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DESIGNERS"];
}
function getDesignerById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$designers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DESIGNERS"].find((d)=>d.id === id);
}
function getAllEvents() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EVENTS"];
}
function getEventById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EVENTS"].find((e)=>e.id === id);
}
function getAllProducts() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"];
}
function getProductById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].find((p)=>p.id === id);
}
function getAllProjects() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"];
}
function getProjectById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"].find((p)=>p.id === id);
}
function getAllShowrooms() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$showrooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHOWROOMS"];
}
function getShowroomById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$showrooms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHOWROOMS"].find((s)=>s.id === id);
}
function getAllMedia() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$videos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MEDIA_ITEMS"];
}
function getMediaById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$videos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MEDIA_ITEMS"].find((m)=>m.id === id);
}
function getAllReports() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SPECIAL_REPORTS"];
}
function getReportById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reports$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SPECIAL_REPORTS"].find((r)=>r.id === id);
}
}),
]})(),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/category/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/category/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0monerho3bupz._.js.map