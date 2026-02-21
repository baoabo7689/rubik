(function redirectToMainDomain() { // doesn't allow to load the side on subdomain
  const mainDomain = 'ruwix.com';
  const currentHost = window.location.hostname;
  if (currentHost !== mainDomain && currentHost.endsWith(`.${mainDomain}`)) {
    const newUrl = `${window.location.protocol}//${mainDomain}${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.replace(newUrl);
  }
})();
!function(){var o,e=window.location.hostname,t=document.createElement("script"),n=document.getElementsByTagName("script")[0],e="https://cmp.inmobi.com".concat("/choice/","xncav4ssEzwLp","/",e,"/choice.js?tag_version=V3"),p=0;t.async=!0,t.type="text/javascript",t.src=e,n.parentNode.insertBefore(t,n),function(){for(var e,a="__tcfapiLocator",n=[],s=window;s;){try{if(s.frames[a]){e=s;break}}catch(e){}if(s===window.top)break;s=s.parent}e||(!function e(){var t,n=s.document,p=!!s.frames[a];return p||(n.body?((t=n.createElement("iframe")).style.cssText="display:none",t.name=a,n.body.appendChild(t)):setTimeout(e,5)),!p}(),s.__tcfapi=function(){var e,t=arguments;if(!t.length)return n;"setGdprApplies"===t[0]?3<t.length&&2===t[2]&&"boolean"==typeof t[3]&&(e=t[3],"function"==typeof t[2]&&t[2]("set",!0)):"ping"===t[0]?(e={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"},"function"==typeof t[2]&&t[2](e)):("init"===t[0]&&"object"==typeof t[3]&&(t[3]=Object.assign(t[3],{tag_version:"V3"})),n.push(t))},s.addEventListener("message",function(n){var p="string"==typeof n.data,e={};try{e=p?JSON.parse(n.data):n.data}catch(e){}var a=e.__tcfapiCall;a&&window.__tcfapi(a.command,a.version,function(e,t){t={__tcfapiReturn:{returnValue:e,success:t,callId:a.callId}};p&&(t=JSON.stringify(t)),n&&n.source&&n.source.postMessage&&n.source.postMessage(t,"*")},a.parameter)},!1))}(),o=["2:tcfeuv2","6:uspv1","7:usnatv1","8:usca","9:usvav1","10:uscov1","11:usutv1","12:usctv1"],window.__gpp_addFrame=function(e){var t;window.frames[e]||(document.body?((t=document.createElement("iframe")).style.cssText="display:none",t.name=e,document.body.appendChild(t)):window.setTimeout(window.__gpp_addFrame,10,e))},window.__gpp_stub=function(){var e=arguments;if(__gpp.queue=__gpp.queue||[],__gpp.events=__gpp.events||[],!e.length||1==e.length&&"queue"==e[0])return __gpp.queue;if(1==e.length&&"events"==e[0])return __gpp.events;var t=e[0],n=1<e.length?e[1]:null,p=2<e.length?e[2]:null;if("ping"===t)n({gppVersion:"1.1",cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:o,cmpId:10,sectionList:[],applicableSections:[-1],gppString:"",parsedSections:{}},!0);else if("addEventListener"===t){"lastId"in __gpp||(__gpp.lastId=0),__gpp.lastId++;var a=__gpp.lastId;__gpp.events.push({id:a,callback:n,parameter:p}),n({eventName:"listenerRegistered",listenerId:a,data:!0,pingData:{gppVersion:"1.1",cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:o,cmpId:10,sectionList:[],applicableSections:[-1],gppString:"",parsedSections:{}}},!0)}else if("removeEventListener"===t){for(var s=!1,i=0;i<__gpp.events.length;i++)if(__gpp.events[i].id==p){__gpp.events.splice(i,1),s=!0;break}n({eventName:"listenerRemoved",listenerId:p,data:s,pingData:{gppVersion:"1.1",cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:o,cmpId:10,sectionList:[],applicableSections:[-1],gppString:"",parsedSections:{}}},!0)}else"hasSection"===t?n(!1,!0):"getSection"===t||"getField"===t?n(null,!0):__gpp.queue.push([].slice.apply(e))},window.__gpp_msghandler=function(n){var p,a="string"==typeof n.data;try{var t=a?JSON.parse(n.data):n.data}catch(e){t=null}"object"==typeof t&&null!==t&&"__gppCall"in t&&(p=t.__gppCall,window.__gpp(p.command,function(e,t){t={__gppReturn:{returnValue:e,success:t,callId:p.callId}};n.source.postMessage(a?JSON.stringify(t):t,"*")},"parameter"in p?p.parameter:null,"version"in p?p.version:"1.1"))},"__gpp"in window&&"function"==typeof window.__gpp||(window.__gpp=window.__gpp_stub,window.addEventListener("message",window.__gpp_msghandler,!1),window.__gpp_addFrame("__gppLocator"));var a,s=function(){var e=arguments;typeof window.__uspapi!==s&&setTimeout(function(){void 0!==window.__uspapi&&window.__uspapi.apply(window.__uspapi,e)},500)};void 0===window.__uspapi&&(window.__uspapi=s,a=setInterval(function(){p++,window.__uspapi===s&&p<3?console.warn("USP is not accessible"):clearInterval(a)},6e3))}();
$(document).ready(function(){
var sidebarMenu ='<ul><li><a href="/rubiks-cube-programs/">Programs</a></li><li><ul><li><a href="/cube-solver/">Rubik\'s Solver</a></li><li><a href="/online-puzzle-simulators/">Puzzle Simulators</a></li><li><a href="/online-rubiks-stopwatch-timer/">Puzzle Timers</a></li><li><a href="/puzzle-scramble-generator/">Scramble Generators</a></li><li><a href="/widget/3d/">3D Widget</a></li><li><a href="/rubiks-cube-mosaic-generator/">Mosaic Generator</a></li><li><a href="/rubiks-cube-widgets/">Embeddable Widgets</a></li><li><a href="/the-rubiks-cube/algorithm/">Alg Calculator</a></li><li><a href="/secret/">Secret Message</a></li><li><a href="/widget/svg-generator/">SVG Generator</a></li><li class="hidden"><a href="/the-rubiks-cube/picube-php-rubiks-cube-image/">Image Generator</a></li></ul></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><ul><li><a href="#">To Learn</a><ul><li><a href="/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/">Terminology</a></li><li><a href="/the-rubiks-cube/faq/">FAQ</a></li><li><a href="/the-rubiks-cube/notation/">Notation</a></li><li><ul><li><a href="/the-rubiks-cube/notation/advanced/">Advanced Notation</a></li></ul></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Beginner\'s Method</a></li><li><ul><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-1-first-layer-edges/">1: First Layer Edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-2-first-layer-corners/">2: First Layer Corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step3-second-layer-f2l/">3: Second Layer (F2L)</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-4-yellow-cross/">4: Yellow Cross</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-5-swap-yellow-edges/">5: Swap The Yellow Edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-6-position-yellow-corners/">6: Position Yellow Corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/orient-yellow-corners-how-to-solve-last-layer-corner/">7: Orient Last Layer Corners</a></li></ul></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/">Advanced Method</a></li><li><ul><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/white-cross/">White Cross</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/first-two-layers-f2l/">First Two Layers - F2L</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/orient-the-last-layer-oll/">Orient Last Layer - OLL</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/permutate-the-last-layer-pll/">Permutate Last Layer - PLL</a></li></ul></li><li><a href="/the-rubiks-cube/fmc-fewest-move-count-challenge/">Fewest Move</a></li><li><a href="/the-rubiks-cube/one-handed/">One-Handed</a></li><li><a href="/the-rubiks-cube/feet/">With Feet</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/">Blindfolded</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/">SpeedSolving Methods</a></li><li><ul><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/">Roux Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/zz-method/">ZZ Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/metha-method/">Metha Method</a></li></ul></li><li><a href="/the-rubiks-cube/lubricate-rubiks-cube-silicone-vaseline-petroleum-jelly/">Lubrication</a></li><li><a href="/the-rubiks-cube/corner-cutting/">Corner Cutting</a></li><li><a href="/the-rubiks-cube/how-take-apart-disassemble-rubiks-cube/">Take It Apart</a></li></ul></li><li><a href="#">To Know</a></li><li><ul><li><a href="/blog/amazing-rubiks-cube-facts/">Amazing Facts</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/">History</a></li><li><ul><li><a href="/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/">Ernő Rubik - Inventor</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/">Important Dates Timeline</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/cubing-hardware/">Hardware Evolution</a></li><li><a href="/the-rubiks-cube/first-rubiks-cube-prototype-invention/">First Prototype</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patent-intellectual-property/">Patent</a></li><li><a href="/the-rubiks-cube/famous-cubing-personalities/">Cubing Personalities</a></li></ul></li><li><a href="/the-rubiks-cube/algorithm/">Algorithm</a></li><li><a href="/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/">Mathematics</a></li><li><a href="/the-rubiks-cube/herbert-kociemba-optimal-cube-solver-cube-explorer/">Cube Explorer</a></li><li><a href="/the-rubiks-cube/gods-number/">God\'s Number</a></li><li><a href="/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/">Unsolvable Cube</a></li><li><a href="/the-rubiks-cube/japanese-western-color-schemes/">Color Schemes</a></li><li><a href="/the-rubiks-cube/cubing-popularity-trend/">Popularity</a></li><li><a href="/the-rubiks-cube/best-speedcube-brands/">Cube Brands</a></li><li><ul><li><a href="/the-rubiks-cube/best-speedcube-brands/magnetic-cubes/">Magnetic Cubes</a></li></ul></li><li><a href="/shop/">Where To Buy?</a></li></ul></li><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><ul><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><a href="/the-rubiks-cube/popular-culture/art/">Rubik\'s Art</a></li><li><a href="/the-rubiks-cube/popular-culture/in-movies/">Movies</a></li><li><a href="/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/">Music Videos</a></li><li><a href="/the-rubiks-cube/popular-culture/commercials/">Commercials</a></li><li><a href="/the-rubiks-cube/popular-culture/buildings-architecture/">Architecture</a></li><li><a href="/the-rubiks-cube/popular-culture/statues/">Statues</a></li><li><a href="/the-rubiks-cube/beyond-rubiks-cube-exhibition/">Exhibition</a></li><li><a href="/the-rubiks-cube/museum/">Museum</a></li><li><a href="/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/">Robots</a></li><li><a href="/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/">Mosaics</a></li><li><a href="/the-rubiks-cube/rubiks-themed-gifts-souvenirs/">Gifts</a></li><li><a href="/the-rubiks-cube/magic-tricks/">Magic Tricks</a></li></ul></li><li><a href="#">For Cubers</a></li><li><ul><li><a href="/the-rubiks-cube/speedcubing-speedsolving/">Speedcubing</a></li><li><a href="/the-rubiks-cube/speedcubers/">SpeedCubers</a></li><li><ul><li><a href="/the-rubiks-cube/speedcubers/feliks-zemdegs/">Feliks Zemdegs</a></li></ul></li><li><a href="/the-rubiks-cube/rubiks-cube-competitions-wca/">Competitions</a></li><li><a href="/the-rubiks-cube/rubik-speedsolving-association-rsa/">RSA</a></li><li><a href="/the-rubiks-cube/red-bull/">Red Bull</a></li><li><a href="/the-rubiks-cube/world-cube-association-wca/">WCA</a></li><li><a href="/the-rubiks-cube/wca-regulations/">WCA Regulations</a></li><li><a href="/the-rubiks-cube/guide-wca-solves/">WCA Solve Guide</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competition-day-schedule-what-to-expect/">A Competition Day</a></li><li><a href="/the-rubiks-cube/history-of-the-world-record-evolution/">World Records</a></li><li><a href="/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/">Stackmat Timer</a></li><li><a href="/the-rubiks-cube/rubiks-cube-stickers-cubesmith/">Stickers</a></li><li><ul><li><a href="/the-rubiks-cube/twisty-puzzle-sticker-calculator/">Sticker Calculator</a></li></ul></li><li><a href="/the-rubiks-cube/fingertricks/">Finger Tricks</a></li></ul></li><li><a href="#">For Fun</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/">Funny Images</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-2/">Page 2</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-3/">Page 3</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-funny-images-page-4/">Page 4</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-5/">Page 5</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-6/">Page 6</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-7/">Page 7</a></li></ul></li><li><a href="/the-rubiks-cube/tricks/">Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/">Patterns</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/more-rubiks-patterns/">More 3x3 Patterns</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/4x4-cube-patterns/">4&times;4 Patterns</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Twisty Puzzle Patterns</a></li></ul></li><li><a href="/the-rubiks-cube/celebrities-actors-politicians-artists/">Celebrities</a></li><li><a href="/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/">YouTube Channels</a></li><li><a href="/the-rubiks-cube/you-can-do-the-cube/">You Can Do the Cube</a></li><li><a href="/the-rubiks-cube/my-rubiks-cube-collection-custom-twisty-puzzles/">Collections</a></li><li><a href="/the-rubiks-cube/rubiks-cube-quiz/">Puzzle Quiz</a></li><li><a href="/the-rubiks-cube/lego/">LEGO</a></li><li><a href="/the-rubiks-cube/juggling/">Juggling</a></li><li><a href="/competition/">Competition</a></li><li><a href="/the-rubiks-cube/curriculum/">Curriculum</a></li></ul></li></ul></li><li><a href="/twisty-puzzles/">Puzzles</a></li><li><ul><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Patterns</a></li><li><a href="/twisty-puzzles/from-easy-to-hard/">Easy &rarr; Hard</a></li><li><a href="/twisty-puzzles/designers/">Designers</a></li><li><ul><li><a href="/twisty-puzzles/designers/oskar-van-deventer/">Oskar van Deventer</a></li><li><a href="/twisty-puzzles/designers/tony-fisher/">Tony Fisher</a></li><li><a href="/twisty-puzzles/designers/uwe-meffert/">Uwe Meffert</a></li></ul></li><li><a href="/twisty-puzzles/twisty-puzzle-modding/">Puzzle Modding</a></li><li><a href="/twisty-puzzles/siamese-twisty-puzzles/">Siamese Puzzles</a></li></ul></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><ul><li><a href="/twisty-puzzles/electronic-rubiks-cube-puzzles/">Electronic Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/">Shape Mods</a></li><li><ul><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/">Mirror Blocks</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/">Fisher Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/">Ghost Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/windmill-cube/">Windmill Cube</a></li></ul></li><li><a href="/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-orient-center/">Sticker Mods</a></li><li><a href="/twisty-puzzles/bandaged-cube-puzzles/">Bandaged Cubes</a></li><li><a href="/twisty-puzzles/void-cube/">Void Cube</a></li><li><a href="/twisty-puzzles/edges-void-cube/">Edges Only Void Cube</a></li><li><a href="/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/">Gear Cube</a></li></ul></li><li><a href="/twisty-puzzles/#PuzzleShapes">Cubes</a></li><li><ul><li><a href="/twisty-puzzles/2x2x2-rubiks-cube-pocket/">2x2x2</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/">4x4x4</a></li><li><ul><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/4x4-cube-patterns/">4&times;4 Patterns</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/parity/">Parity</a></li></ul></li><li><a href="/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/">5x5x5</a></li><li><a href="/twisty-puzzles/big-cubes-nxnxn-solution/">Big Cubes</a></li><li><a href="/twisty-puzzles/square-1-back-to-square-one/">Square-1</a></li><li><a href="/twisty-puzzles/skewb-cube-puzzle-solution/">Skewb</a></li><li><ul><li><a href="/twisty-puzzles/skewb-cube-puzzle-solution/skewb-blindfolded-method/">Skewb Blindfolded</a></li></ul></li><li><a href="/twisty-puzzles/redi-cube/">Redi Cube</a></li><li><a href="/twisty-puzzles/dino-cube/">Dino Cube</a></li><li><a href="/twisty-puzzles/gear-shift-puzzle/">Gear Shift</a></li><li><a href="/twisty-puzzles/helicopter-cube/">Helicopter Cube</a></li><li><a href="/twisty-puzzles/curvy-copter/">Curvy Copter</a></li><li><a href="/twisty-puzzles/ivy-cube/">Ivy Cube</a></li><li><a href="/twisty-puzzles/1x1x1-rubiks-cube/">1x1x1</a></li></ul></li><li><a href="/twisty-puzzles/cuboid/">Cuboids</a><ul><li><a href="/twisty-puzzles/cuboid/">About Cuboids</a></li><li><a href="/twisty-puzzles/super-floppy-cube/">1x3x3 Floppy Cube</a></li><li><a href="/twisty-puzzles/2x3x3-domino-cube/">2x3x3 Domino Cube</a></li><li><a href="/twisty-puzzles/3x3x4-rubiks-cube/">3x3x4</a></li><li><a href="/twisty-puzzles/5x3x3-and-7x3x3-rubiks-cube-cuboids/">5x3x3 And 7x3x3</a></li><li><a href="/twisty-puzzles/2x2xn-cuboid-puzzles/">2x2xN Towers</a></li></ul></li><li><a href="/twisty-puzzles/#PuzzleShapes">Polyhedra</a></li><li><ul><li><a href="/twisty-puzzles/kilominx/">Kilominx</a></li><li><a href="/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/">Megaminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/">Pyraminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/master-pyraminx/">Master Pyraminx</a></li><li><a href="/twisty-puzzles/rubiks-ufo-solution/">UFO</a></li><li><a href="/twisty-puzzles/rubiks-cheese/">Cheese</a></li><li><a href="/twisty-puzzles/dayan-gem-3-jumble-solution/">DaYan Gem</a></li><li><a href="/twisty-puzzles/starminx-puzzle-solution/">Starminx</a></li></ul></li><li><a href="/twisty-puzzles/non-twisty-puzzles/">Non-Twisty Puzzles</a></li><li><ul><li><a href="/twisty-puzzles/hungarian-rings-sliding-puzzle/">Hungarian Rings</a></li><li><a href="/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/">Rubik\'s Clock</a></li><li><a href="/twisty-puzzles/rubiks-magic-master-magic/">Rubik\'s Magic</a></li><li><a href="/twisty-puzzles/rubiks-snake-twist/">Rubik\'s Snake</a></li><li><a href="/twisty-puzzles/jigsaw-puzzles/">Jigsaw Puzzle</a></li><li><a href="/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/">NeoCube</a></li><li><a href="/twisty-puzzles/smart-egg/">Smart Egg</a></li><li><a href="/twisty-puzzles/crossword-puzzles/">Crossword Puzzles</a></li><li><a href="/twisty-puzzles/sliding-15-puzzle/">Sliding 15-Puzzle</a></li></ul></li></ul></li></ul>';
var sidebarMenu ='<ul><li><a href="/rubiks-cube-programs/">Programs</a></li><li><ul><li><a href="/cube-solver/">Rubik\'s Solver</a></li><li><a href="/online-puzzle-simulators/">Puzzle Simulators</a></li><li><a href="/online-rubiks-stopwatch-timer/">Puzzle Timers</a></li><li><a href="/puzzle-scramble-generator/">Scramble Generators</a></li><li><a href="/widget/3d/">3D Widget</a></li><li><a href="/rubiks-cube-mosaic-generator/">Mosaic Generator</a></li><li><a href="/rubiks-cube-widgets/">Embeddable Widgets</a></li><li><a href="/the-rubiks-cube/algorithm/">Alg Calculator</a></li><li><a href="/secret/">Secret Message</a></li><li><a href="/widget/svg-generator/">SVG Generator</a></li><li class="hidden"><a href="/the-rubiks-cube/picube-php-rubiks-cube-image/">Image Generator</a></li></ul></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><ul><li><a href="#">To Learn</a><ul><li><a href="/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/">Terminology</a></li><li><a href="/the-rubiks-cube/faq/">FAQ</a></li><li><a href="/the-rubiks-cube/notation/">Notation</a></li><li><ul><li><a href="/the-rubiks-cube/notation/advanced/">Advanced Notation</a></li></ul></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Beginner\'s Method</a></li><li><ul><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-1-first-layer-edges/">1: First Layer Edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-2-first-layer-corners/">2: First Layer Corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step3-second-layer-f2l/">3: Second Layer (F2L)</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-4-yellow-cross/">4: Yellow Cross</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-5-swap-yellow-edges/">5: Swap The Yellow Edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-6-position-yellow-corners/">6: Position Yellow Corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/orient-yellow-corners-how-to-solve-last-layer-corner/">7: Orient Last Layer Corners</a></li></ul></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/">Advanced Method</a></li><li><ul><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/white-cross/">White Cross</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/first-two-layers-f2l/">First Two Layers - F2L</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/orient-the-last-layer-oll/">Orient Last Layer - OLL</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/permutate-the-last-layer-pll/">Permutate Last Layer - PLL</a></li></ul></li><li><a href="/the-rubiks-cube/fmc-fewest-move-count-challenge/">Fewest Move</a></li><li><a href="/the-rubiks-cube/one-handed/">One-Handed</a></li><li><a href="/the-rubiks-cube/feet/">With Feet</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/">Blindfolded</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/">SpeedSolving Methods</a></li><li><ul><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/">Roux Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/zz-method/">ZZ Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/metha-method/">Metha Method</a></li></ul></li><li><a href="/the-rubiks-cube/lubricate-rubiks-cube-silicone-vaseline-petroleum-jelly/">Lubrication</a></li><li><a href="/the-rubiks-cube/corner-cutting/">Corner Cutting</a></li><li><a href="/the-rubiks-cube/how-take-apart-disassemble-rubiks-cube/">Take It Apart</a></li></ul></li><li><a href="#">To Know</a></li><li><ul><li><a href="/blog/amazing-rubiks-cube-facts/">Amazing Facts</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/">History</a></li><li><ul><li><a href="/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/">Ernő Rubik - Inventor</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/">Important Dates Timeline</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/cubing-hardware/">Hardware Evolution</a></li><li><a href="/the-rubiks-cube/first-rubiks-cube-prototype-invention/">First Prototype</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patent-intellectual-property/">Patent</a></li><li><a href="/the-rubiks-cube/famous-cubing-personalities/">Cubing Personalities</a></li></ul></li><li><a href="/the-rubiks-cube/algorithm/">Algorithm</a></li><li><a href="/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/">Mathematics</a></li><li><a href="/the-rubiks-cube/herbert-kociemba-optimal-cube-solver-cube-explorer/">Cube Explorer</a></li><li><a href="/the-rubiks-cube/gods-number/">God\'s Number</a></li><li><a href="/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/">Unsolvable Cube</a></li><li><a href="/the-rubiks-cube/japanese-western-color-schemes/">Color Schemes</a></li><li><a href="/the-rubiks-cube/cubing-popularity-trend/">Popularity</a></li><li><a href="/the-rubiks-cube/best-speedcube-brands/">Cube Brands</a></li><li><ul><li><a href="/the-rubiks-cube/best-speedcube-brands/magnetic-cubes/">Magnetic Cubes</a></li></ul></li><li><a href="/shops/">Cubing WebShops</a></li></ul></li><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><ul><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><a href="/the-rubiks-cube/popular-culture/art/">Rubik\'s Art</a></li><li><a href="/the-rubiks-cube/popular-culture/in-movies/">Movies</a></li><li><a href="/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/">Music Videos</a></li><li><a href="/the-rubiks-cube/popular-culture/commercials/">Commercials</a></li><li><a href="/the-rubiks-cube/popular-culture/buildings-architecture/">Architecture</a></li><li><a href="/the-rubiks-cube/popular-culture/statues/">Statues</a></li><li><a href="/the-rubiks-cube/beyond-rubiks-cube-exhibition/">Exhibition</a></li><li><a href="/the-rubiks-cube/museum/">Museum</a></li><li><a href="/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/">Robots</a></li><li><a href="/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/">Mosaics</a></li><li><a href="/the-rubiks-cube/rubiks-themed-gifts-souvenirs/">Gifts</a></li><li><a href="/the-rubiks-cube/magic-tricks/">Magic Tricks</a></li></ul></li><li><a href="#">For Cubers</a></li><li><ul><li><a href="/the-rubiks-cube/speedcubing-speedsolving/">Speedcubing</a></li><li><a href="/the-rubiks-cube/speedcubers/">SpeedCubers</a></li><li><ul><li><a href="/the-rubiks-cube/speedcubers/feliks-zemdegs/">Feliks Zemdegs</a></li></ul></li><li><a href="/the-rubiks-cube/rubiks-cube-competitions-wca/">Competitions</a></li><li><a href="/the-rubiks-cube/rubik-speedsolving-association-rsa/">RSA</a></li><li><a href="/the-rubiks-cube/red-bull/">Red Bull</a></li><li><a href="/the-rubiks-cube/world-cube-association-wca/">WCA</a></li><li><a href="/the-rubiks-cube/wca-regulations/">WCA Regulations</a></li><li><a href="/the-rubiks-cube/guide-wca-solves/">WCA Solve Guide</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competition-day-schedule-what-to-expect/">A Competition Day</a></li><li><a href="/the-rubiks-cube/history-of-the-world-record-evolution/">World Records</a></li><li><a href="/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/">Stackmat Timer</a></li><li><a href="/the-rubiks-cube/rubiks-cube-stickers-cubesmith/">Stickers</a></li><li><ul><li><a href="/the-rubiks-cube/twisty-puzzle-sticker-calculator/">Sticker Calculator</a></li></ul></li><li><a href="/the-rubiks-cube/fingertricks/">Finger Tricks</a></li></ul></li><li><a href="#">For Fun</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/">Funny Images</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-2/">Page 2</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-3/">Page 3</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-funny-images-page-4/">Page 4</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-5/">Page 5</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-6/">Page 6</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-7/">Page 7</a></li></ul></li><li><a href="/the-rubiks-cube/tricks/">Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/">Patterns</a></li><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/more-rubiks-patterns/">More 3x3 Patterns</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/4x4-cube-patterns/">4&times;4 Patterns</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Twisty Puzzle Patterns</a></li></ul></li><li><a href="/the-rubiks-cube/celebrities-actors-politicians-artists/">Celebrities</a></li><li><a href="/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/">YouTube Channels</a></li><li><a href="/the-rubiks-cube/you-can-do-the-cube/">You Can Do the Cube</a></li><li><a href="/the-rubiks-cube/my-rubiks-cube-collection-custom-twisty-puzzles/">Collections</a></li><li><a href="/the-rubiks-cube/rubiks-cube-quiz/">Puzzle Quiz</a></li><li><a href="/the-rubiks-cube/lego/">LEGO</a></li><li><a href="/the-rubiks-cube/juggling/">Juggling</a></li><li><a href="/competition/">Competition</a></li><li><a href="/the-rubiks-cube/curriculum/">Curriculum</a></li></ul></li></ul></li><li><a href="/twisty-puzzles/">Puzzles</a></li><li><ul><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Patterns</a></li><li><a href="/twisty-puzzles/from-easy-to-hard/">Easy &rarr; Hard</a></li><li><a href="/twisty-puzzles/designers/">Designers</a></li><li><ul><li><a href="/twisty-puzzles/designers/oskar-van-deventer/">Oskar van Deventer</a></li><li><a href="/twisty-puzzles/designers/tony-fisher/">Tony Fisher</a></li><li><a href="/twisty-puzzles/designers/uwe-meffert/">Uwe Meffert</a></li></ul></li><li><a href="/twisty-puzzles/twisty-puzzle-modding/">Puzzle Modding</a></li><li><a href="/twisty-puzzles/siamese-twisty-puzzles/">Siamese Puzzles</a></li></ul></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><ul><li><a href="/twisty-puzzles/electronic-rubiks-cube-puzzles/">Electronic Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/">Shape Mods</a></li><li><ul><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/">Mirror Blocks</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/">Fisher Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/">Ghost Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/windmill-cube/">Windmill Cube</a></li></ul></li><li><a href="/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-orient-center/">Sticker Mods</a></li><li><a href="/twisty-puzzles/bandaged-cube-puzzles/">Bandaged Cubes</a></li><li><a href="/twisty-puzzles/void-cube/">Void Cube</a></li><li><a href="/twisty-puzzles/edges-void-cube/">Edges Only Void Cube</a></li><li><a href="/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/">Gear Cube</a></li></ul></li><li><a href="/twisty-puzzles/#PuzzleShapes">Cubes</a></li><li><ul><li><a href="/twisty-puzzles/2x2x2-rubiks-cube-pocket/">2x2x2</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/">4x4x4</a></li><li><ul><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/4x4-cube-patterns/">4&times;4 Patterns</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/parity/">Parity</a></li></ul></li><li><a href="/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/">5x5x5</a></li><li><a href="/twisty-puzzles/big-cubes-nxnxn-solution/">Big Cubes</a></li><li><a href="/twisty-puzzles/square-1-back-to-square-one/">Square-1</a></li><li><a href="/twisty-puzzles/skewb-cube-puzzle-solution/">Skewb</a></li><li><ul><li><a href="/twisty-puzzles/skewb-cube-puzzle-solution/skewb-blindfolded-method/">Skewb Blindfolded</a></li></ul></li><li><a href="/twisty-puzzles/redi-cube/">Redi Cube</a></li><li><a href="/twisty-puzzles/dino-cube/">Dino Cube</a></li><li><a href="/twisty-puzzles/gear-shift-puzzle/">Gear Shift</a></li><li><a href="/twisty-puzzles/helicopter-cube/">Helicopter Cube</a></li><li><a href="/twisty-puzzles/curvy-copter/">Curvy Copter</a></li><li><a href="/twisty-puzzles/ivy-cube/">Ivy Cube</a></li><li><a href="/twisty-puzzles/1x1x1-rubiks-cube/">1x1x1</a></li></ul></li><li><a href="/twisty-puzzles/cuboid/">Cuboids</a><ul><li><a href="/twisty-puzzles/cuboid/">About Cuboids</a></li><li><a href="/twisty-puzzles/super-floppy-cube/">1x3x3 Floppy Cube</a></li><li><a href="/twisty-puzzles/2x3x3-domino-cube/">2x3x3 Domino Cube</a></li><li><a href="/twisty-puzzles/3x3x4-rubiks-cube/">3x3x4</a></li><li><a href="/twisty-puzzles/5x3x3-and-7x3x3-rubiks-cube-cuboids/">5x3x3 And 7x3x3</a></li><li><a href="/twisty-puzzles/2x2xn-cuboid-puzzles/">2x2xN Towers</a></li></ul></li><li><a href="/twisty-puzzles/#PuzzleShapes">Polyhedra</a></li><li><ul><li><a href="/twisty-puzzles/kilominx/">Kilominx</a></li><li><a href="/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/">Megaminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/">Pyraminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/master-pyraminx/">Master Pyraminx</a></li><li><a href="/twisty-puzzles/rubiks-ufo-solution/">UFO</a></li><li><a href="/twisty-puzzles/rubiks-cheese/">Cheese</a></li><li><a href="/twisty-puzzles/dayan-gem-3-jumble-solution/">DaYan Gem</a></li><li><a href="/twisty-puzzles/starminx-puzzle-solution/">Starminx</a></li></ul></li><li><a href="/twisty-puzzles/non-twisty-puzzles/">Non-Twisty Puzzles</a></li><li><ul><li><a href="/twisty-puzzles/hungarian-rings-sliding-puzzle/">Hungarian Rings</a></li><li><a href="/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/">Rubik\'s Clock</a></li><li><a href="/twisty-puzzles/rubiks-magic-master-magic/">Rubik\'s Magic</a></li><li><a href="/twisty-puzzles/rubiks-snake-twist/">Rubik\'s Snake</a></li><li><a href="/twisty-puzzles/jigsaw-puzzles/">Jigsaw Puzzle</a></li><li><a href="/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/">NeoCube</a></li><li><a href="/twisty-puzzles/smart-egg/">Smart Egg</a></li><li><a href="/twisty-puzzles/crossword-puzzles/">Crossword Puzzles</a></li><li><a href="/twisty-puzzles/sliding-15-puzzle/">Sliding 15-Puzzle</a></li></ul></li></ul></li></ul>';
$("body").prepend("<div id='printerOnly'><strong>Source: Ruwix.com</strong><br>" + window.location.href + "</div>");
$("#sidebarContent").html('<header id="header"><div class="logo"><a href="/"><img src="/img/logo.png" width="135" height="126" alt="ruwix logo"><strong>Ruwix</strong><br>Twisty&nbsp;Puzzle&nbsp;Wiki</a></div></header><div id="mobileMenuTrigger" class="onlyMobile">Menu <span>&equiv;</span></div><div class="navigation"><div id="topOfNavBar"></div><ul><li><a href="/"><span class="menuIco1"></span>Home</a></li><li><a href="/rubiks-cube-programs/"><span class="menuIco2"></span>Programs</a></li><li><a href="/the-rubiks-cube/"><span class="menuIco3"></span>Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/"><span class="menuIco4"></span>Twisty Puzzles</a></li></ul><div id="sideBarWikiMenu">'+sidebarMenu+'</div><div class="mobileHidden"><h3><a href="/blog/">Latest News</a></h3><ul id="latestNewsUl"><li><a href="/blog/hungarian-astronaut-solves-rubiks-cube-in-space/">Astronaut Solved the Rubik\'s Cube in&nbsp;Space✨</a></li><li><a href="/blog/amazing-rubiks-cube-facts/">Amazing Rubik’s Facts</a></li><li><a href="/blog/yiheng-wang-3-91-rubiks-cube-record/">The First Sub-4 Average Record!</a></li><li><a href="/blog/xuanyi-geng-3_05-rubiks-cube-record-single/">🏆 New Rubik’s Cube Record by Xuanyi&nbsp;Geng!</a></li><li><a href="/blog/yiheng-wang-4-03-wr-average/">New 4.03s 3&times3 Record by YiHeng&nbsp;Wang</a></li><li><a href="/blog/yiheng-wang-3_08-rubiks-cube-single-world-record/">Yiheng Wang 3.08 Rubik’s Cube Single&nbsp;Record</a></li><li><a href="/blog/rubik-kocka-kirakasa/">Our New Hungarian Website</a></li><li><a href="/blog/49x49x49-big-rubiks-cube/">New 49x49x49 Cube Record</a></li><li><a href="/blog/trump-cube/">Trump Cube (Shape&nbsp;Mod)</a></li><li><a href="/blog/34x34x34-rubiks-cube-record/">34x34x34 Rubik\'s Cube&nbsp;Record</a></li><li><a href="/blog/max-park-rubik-single-record-313/">New World Record Single by Max&nbsp;Park</a></li><li><a href="/blog/santa-claus-rubiks-cube/">Santa Claus Shaped&nbsp;Cube</a></li><li><a href="/blog/nxnxn-cube-simulator-solver/">NxNxN Cube Simulator&nbsp;&amp; Solver</a></li><li><a href="/blog/spongebob-rubiks-cube-3d-pen-drawing/">Rubik\'s Cube SpongeBob: 3D&nbsp;Drawing</a></li><li><a href="/blog/25-amazing-rubiks-cube-facts/">25 Amazing Rubik\'s Cube&nbsp;Facts</a></li><li>&nbsp;</li><li><a href="/blog/">MORE...</a></li></ul></div></div>');
$("#tabsContent").html('<div class="tabsRight"><ul><li class="txta"><a href="/online-puzzle-simulators/">Play</a></li><li class="txta"><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Learn</a></li><li class="txta"><a href="/cube-solver/">Solve</a></li><li><a href="/shop/" title="Webshops"><span class="sprite shop">Rubik\'s Cube shops</span></a></li><li><a title="Ruwix on Facebook" href="https://www.facebook.com/online.rubiks.cube.solver" target="_blank"><span class="sprite fb">Facebook</span></a></li><li><a title="Ruwix on Tiktok" href="https://www.tiktok.com/@ruwix0" target="_blank"><span class="sprite tiktok">Twitter X</span></a></li><li><a title="Ruwix on X" href="https://x.com/RuwixCube" target="_blank"><span class="sprite tw">X.com</span></a></li></ul></div><div id="wrapTooltipSearch"><div id="abortTooltipSearch">&times;</div><input type="text" id="tooltipSearch" placeholder="Search..." /><div id="tooltipSearchSuggestions"></div></div><div class="menu-container"><div class="menuWidget"><nav><div id="stick-here"></div><div id="stickThis" class="menu"><p><a class="menu-mobile" href="#">Menu</a></p><ul><li><a href="/"><span class="menuIco1"></span>Home</a></li><li class="mdico"><a href="/rubiks-cube-programs/"><span class="menuIco2"></span>Programs</a><ul><li><ul class="mymegamenu"><li><a class="mymegamenuaa" href="/cube-solver/">Rubik\'s Solver</a></li><li><a class="mymegamenuaf" href="/online-puzzle-simulators/">Simulators</a></li></ul></li><li><ul class="mymegamenu"><li><a class="mymegamenuab" href="/online-rubiks-stopwatch-timer/">Online Timer</a></li><li><a class="mymegamenuac" href="/puzzle-scramble-generator/">Scrambler</a></li><li><a class="mymegamenuag" href="/the-rubiks-cube/algorithm/">Alg. Calculator</a></li></ul></li><li><ul class="mymegamenu"><li><a class="mymegamenuae" href="/widget/3d/">3D Widget</a></li><li><a class="mymegamenuad" href="/rubiks-cube-mosaic-generator/">Mosaic Gen.</a></li><li><a class="mymegamenuah" href="/secret/">Secret Message</a></li></ul></li></ul></li><li class="mdico"><a href="/the-rubiks-cube/"><span class="menuIco3"></span>Rubik\'s Cube</a><ul><li><h4>To Learn</h4><ul><li><a href="/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/">Terminology</a></li><li><a href="/the-rubiks-cube/faq/">FAQ</a></li><li><a href="/the-rubiks-cube/notation/">Notation</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Beginner\'s method</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/">Advanced method</a></li><li><a href="/the-rubiks-cube/fmc-fewest-move-count-challenge/">Fewest Move</a></li><li><a href="/the-rubiks-cube/one-handed/">One-Handed</a></li><li><a href="/the-rubiks-cube/feet/">With Feet</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/">Blindfolded</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/">Solving Methods</a></li><li><a href="/the-rubiks-cube/lubricate-rubiks-cube-silicone-vaseline-petroleum-jelly/">Lubrication</a></li><li><a href="/the-rubiks-cube/corner-cutting/">Corner Cutting</a></li><li><a href="/the-rubiks-cube/how-take-apart-disassemble-rubiks-cube/">Take It Apart</a></li></ul></li><li><h4>To Know</h4><ul><li><a href="/blog/amazing-rubiks-cube-facts/">Amazing Facts</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/">History</a></li><li><a href="/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/">Ernő Rubik - inventor</a></li><li><a href="/the-rubiks-cube/first-rubiks-cube-prototype-invention/">First prototype</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patent-intellectual-property/">Patent</a></li><li><a href="/the-rubiks-cube/algorithm/">Algorithm</a></li><li><a href="/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/">Mathematics</a></li><li><a href="/the-rubiks-cube/herbert-kociemba-optimal-cube-solver-cube-explorer/">Cube Explorer</a></li><li><a href="/the-rubiks-cube/gods-number/">God\'s Number</a></li><li><a href="/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/">Unsolvable Cube</a></li><li><a href="/the-rubiks-cube/japanese-western-color-schemes/">Color Schemes</a></li><li><a href="/the-rubiks-cube/best-speedcube-brands/">Cube Brands</a></li><li><a href="/shop/">Cubing WebShops</a></li></ul></li><li><h4>Culture</h4><ul><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><a href="/the-rubiks-cube/popular-culture/art/">Rubik\'s Art</a></li><li><a href="/the-rubiks-cube/popular-culture/in-movies/">Movies</a></li><li><a href="/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/">Music Videos</a></li><li><a href="/the-rubiks-cube/popular-culture/commercials/">Commercials</a></li><li><a href="/the-rubiks-cube/popular-culture/buildings-architecture/">Architecture</a></li><li><a href="/the-rubiks-cube/popular-culture/statues/">Statues</a></li><li><a href="/the-rubiks-cube/beyond-rubiks-cube-exhibition/">Exhibition</a></li><li><a href="/the-rubiks-cube/museum/">Museum</a></li><li><a href="/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/">Robots</a></li><li><a href="/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/">Mosaics</a></li><li><a href="/the-rubiks-cube/rubiks-themed-gifts-souvenirs/">Gifts</a></li><li><a href="/the-rubiks-cube/magic-tricks/">Magic Tricks</a></li></ul></li><li><h4>For Cubers</h4><ul><li><a href="/the-rubiks-cube/speedcubing-speedsolving/">Speedcubing</a></li><li><a href="/the-rubiks-cube/speedcubers/">SpeedCubers</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competitions-wca/">Competitions</a></li><li><a href="/the-rubiks-cube/rubik-speedsolving-association-rsa/">RSA</a></li><li><a href="/the-rubiks-cube/red-bull/">Red Bull</a></li><li><a href="/the-rubiks-cube/world-cube-association-wca/">WCA</a></li><li><a href="/the-rubiks-cube/wca-regulations/">WCA Regulations</a></li><li><a href="/the-rubiks-cube/guide-wca-solves/">WCA Solve Guide</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competition-day-schedule-what-to-expect/">A Competition Day</a></li><li><a href="/the-rubiks-cube/history-of-the-world-record-evolution/">World Records</a></li><li><a href="/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/">Stackmat</a></li><li><a href="/the-rubiks-cube/rubiks-cube-stickers-cubesmith/">Stickers</a></li><li><a href="/the-rubiks-cube/fingertricks/">Finger Tricks</a></li></ul></li><li><h4>For Fun</h4><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/">Funny Images</a></li><li><a href="/the-rubiks-cube/tricks/">Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/">Patterns</a></li><li><a href="/the-rubiks-cube/celebrities-actors-politicians-artists/">Celebrities</a></li><li><a href="/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/">YouTube Channels</a></li><li><a href="/the-rubiks-cube/you-can-do-the-cube/">You Can Do the Cube</a></li><li><a href="/the-rubiks-cube/my-rubiks-cube-collection-custom-twisty-puzzles/">Collections</a></li><li><a href="/the-rubiks-cube/rubiks-cube-quiz/">Puzzle Quiz</a></li><li><a href="/the-rubiks-cube/lego/">LEGO</a></li><li><a href="/the-rubiks-cube/juggling/">Juggling</a></li><li><a href="/competition/">Competition</a></li><li><a href="/the-rubiks-cube/curriculum/">Curriculum</a></li></ul></li></ul></li><li class="mdico"><a href="/twisty-puzzles/"><span class="menuIco4"></span>Puzzles</a><ul><li><h4><a href="/twisty-puzzles/">General</a></h4><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Patterns</a></li><li><a href="/twisty-puzzles/from-easy-to-hard/">Easy &rarr; Hard</a></li><li><a href="/twisty-puzzles/designers/">Designers</a></li><li><a href="/twisty-puzzles/twisty-puzzle-modding/">Puzzle Modding</a></li><li><a href="/twisty-puzzles/siamese-twisty-puzzles/">Siamese Puzzles</a></li></ul></li><li><h4><a href="/the-rubiks-cube/">3&times;3&times;3</a></h4><ul><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/electronic-rubiks-cube-puzzles/">Electronic Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/">Shape Mods</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/">- Mirror Blocks</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/">- Fisher Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/">- Ghost Cube</a></li><li><a href="/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-orient-center/">Sticker Mods</a></li><li><a href="/twisty-puzzles/bandaged-cube-puzzles/">Bandaged Cubes</a></li><li><a href="/twisty-puzzles/void-cube/">Void Cube</a></li><li><a href="/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/">Gear Cube</a></li></ul></li><li><h4><a href="/twisty-puzzles/#PuzzleShapes">Cubes</a></h4><ul><li><a href="/twisty-puzzles/2x2x2-rubiks-cube-pocket/">2x2x2</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/">4x4x4</a></li><li><a href="/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/">5x5x5</a></li><li><a href="/twisty-puzzles/big-cubes-nxnxn-solution/">Big Cubes</a></li><li><a href="/twisty-puzzles/square-1-back-to-square-one/">Square-1</a></li><li><a href="/twisty-puzzles/skewb-cube-puzzle-solution/">Skewb</a></li><li><a href="/twisty-puzzles/redi-cube/">Redi Cube</a></li><li><a href="/twisty-puzzles/dino-cube/">Dino Cube</a></li><li><a href="/twisty-puzzles/gear-shift-puzzle/">Gear Shift</a></li><li><a href="/twisty-puzzles/helicopter-cube/">Helicopter Cube</a></li><li><a href="/twisty-puzzles/curvy-copter/">Curvy Copter</a></li><li><a href="/twisty-puzzles/ivy-cube/">Ivy Cube</a></li><li><a href="/twisty-puzzles/1x1x1-rubiks-cube/">1x1x1</a></li></ul></li><li><h4><a href="/twisty-puzzles/#PuzzleShapes">Cuboids</a></h4><ul><li><a href="/twisty-puzzles/cuboid/">About Cuboids</a></li><li><a href="/twisty-puzzles/super-floppy-cube/">1x3x3 Floppy Cube</a></li><li><a href="/twisty-puzzles/2x3x3-domino-cube/">2x3x3 Domino Cube</a></li><li><a href="/twisty-puzzles/3x3x4-rubiks-cube/">3x3x4</a></li><li><a href="/twisty-puzzles/5x3x3-and-7x3x3-rubiks-cube-cuboids/">5x3x3 and 7x3x3</a></li><li><a href="/twisty-puzzles/2x2xn-cuboid-puzzles/">2x2xN Towers</a></li></ul></li><li><h4><a href="/twisty-puzzles/">Others</a></h4><ul><li><a href="/twisty-puzzles/kilominx/">Kilominx</a></li><li><a href="/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/">Megaminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/">Pyraminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/master-pyraminx/">Master Pyraminx</a></li><li><a href="/twisty-puzzles/rubiks-ufo-solution/">UFO</a></li><li><a href="/twisty-puzzles/rubiks-cheese/">Cheese</a></li><li><a href="/twisty-puzzles/dayan-gem-3-jumble-solution/">DaYan Gem</a></li><li><a href="/twisty-puzzles/starminx-puzzle-solution/">Starminx</a></li><li><a href="/twisty-puzzles/non-twisty-puzzles/">Non-Twisty</a></li><li><a href="/twisty-puzzles/hungarian-rings-sliding-puzzle/">Hungarian Rings</a></li><li><a href="/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/">Rubik\'s Clock</a></li><li><a href="/twisty-puzzles/rubiks-magic-master-magic/">Rubik\'s Magic</a></li><li><a href="/twisty-puzzles/rubiks-snake-twist/">Rubik\'s Snake</a></li><li><a href="/twisty-puzzles/jigsaw-puzzles/">Jigsaw Puzzle</a></li><li><a href="/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/">NeoCube</a></li><li><a href="/twisty-puzzles/sliding-15-puzzle/">Sliding 15-Puzzle</a></li></ul></li></ul></li></ul></div></nav></div></div>');
$("#footerContent").html('<footer id="footer"><p>&copy;&nbsp;Ruwix | All Rights Reserved. Author:&nbsp;<a href="/denes-ferenc/">Denes&nbsp;Ferenc</a> | <a href="/about-us/">About&nbsp;Ruwix</a> | <a href="/contact/">Contact📧</a></p><p><a href="/amp/">Mobile&nbsp;Site</a> | <a href="https://ruwix.es/" rel="nofollow">Spanish</a> | <a href="https://ruwix.cn/" rel="nofollow">Chinese</a> | <a href="https://rubikkocka.com/" rel="nofollow">Hungarian</a> | <a href="/contribute/">Contribute</a> | <a href="/terms-and-conditions-privacy-policy/">Privacy, Terms &amp;&nbsp;Conditions</a> | <a href="/sitemap/">SiteMap</a></p><p>Template by <a href="https://html5-templates.com/" target="_blank" rel="nofollow">HTML5&nbsp;Templates</a></p><p>This&nbsp;website is using cookies to improve the user experience, to collect anonymous visitor analytics and to&nbsp;show personalised&nbsp;ads.</p><div id="socialLinx"><ul><li><a title="Ruwix on Facebook" href="https://www.facebook.com/online.rubiks.cube.solver" target="blank"><img width="30" height="30" src="/pics/socialicons/fb.svg" alt="facebook" width="30" height="30"></a></li><li><a title="Ruwix on TikTok" href="https://www.tiktok.com/@ruwix0" target="blank"><img width="30" height="30" src="/pics/socialicons/tiktok.svg" alt="tiktok" width="30" height="30"></a></li><li><a title="Ruwix on X.com" href="https://x.com/RuwixCube" target="_blank" rel="noopener"><img width="30" height="30" src="/pics/socialicons/twitter.svg" alt="X twitter" width="30" height="30"></a></li><li><a title="Our Youtube Channel" href="https://www.youtube.com/user/modusbeke/videos" target="_blank" rel="noopener"><img width="30" height="30" src="/pics/socialicons/youtube.svg" alt="youtube" width="30" height="30"></a></li><li><a title="Rubik\'s Blog" href="/blog/"><img width="30" height="30" src="/pics/socialicons/rss.svg" alt="wordpress" width="30" height="30"></a></li><li><a title="Ruwix on Blogspot" href="https://ruwix.blogspot.com/" target="_blank" rel="noopener"><img width="30" height="30" src="/pics/socialicons/blogger.svg" alt="blogspot" width="30" height="30"></a></li><li><a title="Twisty puzzle photos on Flickr" href="https://www.flickr.com/photos/ruwix" target="_blank" rel="noopener"><img width="30" height="30" src="/pics/socialicons/flickr.svg" alt="flickr" width="30" height="30"></a></li><li><a title="Contact Us" href="/contact/"><img width="30" height="30" src="/pics/socialicons/mail.svg" alt="contact" width="30" height="30"></a></li></ul><div class="clearboth"></div></div></footer>');
$('#rightSidebarContent').html('<div class="widget-container"><div id="sidebarFeaturedArticles"></div></div><div class="widget-container"><h3 class="widget-title">Share This Page</h3><ul class="socialShareLinks"><li><a class="facebook" href="https://www.facebook.com/sharer.php?u=currentpagelink" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/fb.svg" alt="Facebook" width="35" height="35"></a></li><li><a class="twitter X" href="https://x.com/intent/tweet?url=currentpagelink&amp;text=Check%20this%2Bout:" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/xcom.svg" alt="Twitter X.com" width="35" height="35"></a></li><li><a class="reddit" href="https://reddit.com/submit?url=currentpagelink&amp;title=Check%2Bthis%2Bout" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/reddit.svg" alt="Reddit" width="35" height="35"></a></li><li><a class="mail" href="mailto:@gmail.com?subject=Check%20out%20this%20website&amp;body=Thought%20you%20might%20like%20this:%20currentpagelink" target="_blank" rel="noopener"><img src="/pics/socialicons/mail.svg" alt="Email to a friend" width="35" height="35"></a></li></ul></div>');
	if(document.querySelector("link[hreflang=es]")) {	// ruwix.es
		$(".tabsRight ul").append('<li><a class="langSwitch" id="spanish" title="Cambiar a español" href="' + document.querySelector("link[hreflang=es]").getAttribute("href") + '">Spanish</a></li>');
	}
	if(document.querySelector("link[hreflang=zh]")) {	// ruwix.cn
		$(".tabsRight ul").append('<li><a class="langSwitch" id="chinese" title="切换到中文" href="' + document.querySelector("link[hreflang=zh]").getAttribute("href") + '">Chinese</a></li>');
	}
	if(document.querySelector("link[hreflang=hu]")) {	// rubikkocka.com
		$(".tabsRight ul").append('<li><a class="langSwitch" id="hungarian" title="Magyar fordítás" href="' + document.querySelector("link[hreflang=hu]").getAttribute("href") + '">Hungarian</a></li>');
	}
});
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
var ttLinks = [0, 1];
var ttAnchors = [0, 1];
$(document).ready(function(){
	$(".menu > ul > li > a").each(function() {
		if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
			$(this).addClass('activeTab');
		}

		if ($(this).attr('href') != "/") {
			$(".menu > ul > li:nth-child(1) > a").removeClass('activeTab');
		}
	});
	if (window.location.pathname == "/") { // on home page
		$(".menu > ul > li:nth-child(1) > a").addClass('activeTab');
	}

     setTimeout(function ()	{
		$("#play-1").each(function() {
			$(this).addClass("firstPlayButtonBlink");
		});
		$('#play-1').on('click mouseover', function () {
			$('#play-1').removeClass("firstPlayButtonBlink");
		});
     }, 4000);

	$(".tutorialLanguageSelector").html('<span>English <strong>&#9660;</strong></span><div id="tutorialLangDropdown"></div>');
	$(".tutorialLanguageSelector span").click(function() {
	$("#tutorialLangDropdown").html('<a target="_blank" rel="external nofollow" href="https://ruwix.es/cubo-de-rubik/resolver-cubo-de-rubik-3x3-principiantes/" title="Como resolver un cubo de Rubik">Español</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/como-resolver-o-cubo-magico-pt/" title="Como resolver o Cubo M&aacute;gico">Português</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/comment-resoudre-le-cube-rubik-fr/" title="Comment r&eacute;soudre le cube Rubik">Français</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/wie-man-einen-zauberwurfel-rubiks-cube-lost-de/" title="Wie man einen Zauberw&uuml;rfel l&ouml;st">Deutsch</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/come-risolvere-un-cubo-di-rubik/" title="Come risolvere un cubo di Rubik">Italiano</a><a target="_blank" rel="external nofollow" href="https://rubikkocka.com/rubik-kocka/hogyan-rakjuk-ki-a-rubik-kockat/" title="A Rubik-kocka kirak&aacute;sa">Magyar</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/jak-ulozyc-kostke-rubika/" title="Jak ułożyć Kostkę Rubika">Polski</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/hoe-los-je-een-rubiks-kubus-op-nl/" title="Hoe los je een Rubik\'s Kubus op">Nederlands</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/rezolvarea-cubului-rubik/" title="Rezolvarea cubului Rubik">Român</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/hur-man-loser-en-rubiks-kub-swe/" title="Hur man l&ouml;ser en Rubik\'s Kub">Svenska</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%AD%D9%84-%D9%85%D9%83%D8%B9%D8%A8-%D8%B1%D9%88%D8%A8%D9%8A%D9%83/" title="طريقة حل مكعب روبيك">دزيري</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C-%D0%BA%D1%83%D0%B1%D0%B8%D0%BA-%D1%80%D1%83%D0%B1%D0%B8%D0%BA%D0%B0/" title="Как собрать Кубик Рубика">Українська</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%E0%A4%B0%E0%A5%82%E0%A4%AC%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%AC-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%B9%E0%A4%B2-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/" title="रूबिक्स क्यूब कैसे हल करें">हिन्दी </a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/c%C3%A1ch-gi%E1%BA%A3i-m%C3%A3-kh%E1%BB%91i-rubik/" title="C&aacute;ch giải m&atilde; khối Rubik">Tiếng việt</a><a target="_blank" rel="external nofollow" href="https://ruwix.cn/%E9%AD%94%E6%96%B9/%E5%88%9D%E5%AD%A6%E8%80%85%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/" title="如何解决魔方">中文</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%ED%81%90%EB%B8%8C%EB%A5%BC-%EB%A7%9E%EC%B6%94%EB%8A%94-%EB%B0%A9/" title="큐브 맞추는 방법">한국어</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%E3%83%AB%E3%83%BC%E3%83%93%E3%83%83%E3%82%AF%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%82%92%E5%AF%BE%E5%87%A6%E6%96%B9%E6%B3%95/" title="ルービックキューブを対処方法">日本語</a>');
		$(".tutorialLanguageSelector div").toggle(222);
	});
	/*Search BEGIN*/
	i = 0;
	$(".navigation a").each(function() {	// ezeket a linkeket teszi a search tooltipbe
		ttLinks[i] = $(this).attr("href");
		ttAnchors[i] = $(this).text();
		i++;
	});
	$("#abortTooltipSearch").click(function() {
		$("#tooltipSearch").val("");
		updateTooltipSearch();
	});
	$(".fullScreenTogglerButton").click(function() {
		$('body').toggleClass('fullScreenActv');
	});
	$("#tooltipSearch").keyup(function() {
		updateTooltipSearch();
	});
	$("#tooltipSearch").change(function() {
		updateTooltipSearch();
	});
     setTimeout(function ()	{
		 //$("#tooltipSearch").focus();
     }, 300);
	/*Search END*/
	var parentTitle = $('#parentTitle').text();
	var parentLink = '/';
	if($('#parentTitle').length){
		parentLink = $('#parentTitle').attr('href');

	}
	var relativeLink = window.location.pathname;
	$("#sideBarWikiMenu a, #latestNewsUl a").each(function() {
		if ($(this).attr('href') == relativeLink) {
			$(this).addClass('activeSidebar');
		}
	});
	$("#sideBarWikiMenu a").each(function() {
		$(this).addClass('sidebarHiddenLink');
	});
	i = 1;
	$('.activeSidebar').parents().each(function() {
		$(this).children().children().removeClass('sidebarHiddenLink');
	});
	
	$('.activeSidebar').parent().next().find('*').each(function() {
		$(this).removeClass('sidebarHiddenLink');
	});
	
	$(".contentsPanel").each(function() {               
		$(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
	});
    $("#mobileMenuTrigger").click(function(){
		$('.navigation').toggle(200);
    });
    $(".hidePanel").click(function(){
		$( this ).siblings('ul').hide( 150, function() {
			$(this).parent().addClass('minimizedPanel');
		});
    });
    $(".showPanel").click(function(){
		$( this ).siblings('ul').show( 150, function() {
			$(this).parent().removeClass('minimizedPanel');
		});
    });
     setTimeout(function ()	{
		 $('#preventMouseHoverOnPageLoad').hide();
     }, 2000);
	setTimeout(function ()	{
		if ($(".roofpig")[0]){// ha letezik .roofpig div akkor betolti a library-t
			var head = document.getElementsByTagName('head')[0];
			var js = document.createElement("script");
			js.type = "text/javascript";
			js.src = "/roofpig-3d/roofpig_and_three.min.js";
			head.appendChild(js);
		}
    }, 100);
});
function updateTooltipSearch() {
	var squery = $("#tooltipSearch").val().toLowerCase();
	var tooltips = '';
	var results = 0;
	if (squery.length > 1) {
		for (i = 0; i < ttLinks.length; i++) {
			if ( (ttAnchors[i].toLowerCase().includes(squery)) || (ttLinks[i].toLowerCase().includes(squery))) {
				tooltips += '<a href="' + ttLinks[i] + '">' + ttAnchors[i] +'</a>';
				results ++;
			}
		}
		if (results == 0) {
			tooltips = "<em><strong>No results</strong><br>Try something else.</em>";
		}
		$("#tooltipSearchSuggestions, #abortTooltipSearch").fadeIn(222);
	} else {
		if (squery.length == 0) {
			$("#tooltipSearchSuggestions, #abortTooltipSearch").fadeOut(222);
		} else {
			tooltips = "<em>Enter 2 characters</em>";
			$("#tooltipSearchSuggestions, #abortTooltipSearch").fadeIn(222);
		}
	}
	$("#tooltipSearchSuggestions").html(tooltips);
}
jQuery(document).ready(function(){
	setTimeout(function () {
		jQuery("#cookieConsent").fadeIn(200);
     }, 15000);
	jQuery("#closeCookieConsent").click(function() {
		jQuery("#cookieConsent").fadeOut(200);
	});
});
var alg;
var tomb;
var stri;
var classz;
var i=0;
$( document ).ready(function() {
    $('.socialShareLinks a').each(function() {
      var value = $(this).attr('href');
      $(this).attr('href', value.replace('currentpagelink',$(location).attr('href')));
    });
	renderAlgArrows();
});
function renderAlgArrows() {
	//<span class="rots"></span>
	$("span.rots").each(function() {
		alg = $(this).text() + "";
		tomb = alg.split(" ");
		stri = "";
		for (var i = 0; i < tomb.length; i++) {
			classz = tomb[i].charAt(0);
			if (tomb[i].charAt(1) == 2) {	classz = classz + "2";	}
			if ((tomb[i].charAt(1) != 2) && (tomb[i].length == 2)) {	classz = classz + 'i';	}
			if (classz == "f"){classz = "fw"}
			if (classz == "r"){classz = "rw"}
			if (classz == "u"){classz = "uw"}
			if (classz == "b"){classz = "bw"}
			if (classz == "l"){classz = "lw"}
			if (classz == "d"){classz = "dw"}			
			if (tomb[i] == "f'"){classz = "fwi"}
			if (tomb[i] == "r'"){classz = "rwi"}
			if (tomb[i] == "u'"){classz = "uwi"}
			if (tomb[i] == "b'"){classz = "bwi"}
			if (tomb[i] == "l'"){classz = "lwi"}
			if (tomb[i] == "d'"){classz = "dwi"}			
			if (classz == "f2"){classz = "fw2"}
			if (classz == "r2"){classz = "rw2"}
			if (classz == "u2"){classz = "uw2"}
			if (classz == "b2"){classz = "bw2"}
			if (classz == "l2"){classz = "lw2"}
			if (classz == "d2"){classz = "dw2"}			
			classz = classz.toLowerCase();
			stri = stri + "<span class=" + classz + ">" + tomb[i] + "</span>";
		}
		$(this).html(stri);
	});
}
$(document).ready(function(){
    $( "a.scrollLink, a.scrolllink, .contentsPanel a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: ($($(this).attr("href")).offset().top - 40) }, 500);
    });
	$(".sendThisToSidebar").each(function() {                // send to sidebar
		$(this).appendTo('#topOfSidebar');
	});
	$(".sendThisToNavBar").each(function() {                // send to navbar
		$(this).appendTo('#topOfNavBar');
	});
    setTimeout(function () {
		$(".sendThisToNavBar a").each(function() {
			if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
				$(this).parent().addClass('activePage');
			}
		});
		$(".mdico ul a").each(function() {
			if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
				if ($(this).attr('href') != "/") {
					$(this).parent().addClass('activeMunuItem');
				}
			}
		});
     }, 1000);
});
var globalScrollPos = 0;
function sticktoBottomSidebar() {
	var h = window.innerHeight;
	var window_top = $(window).scrollTop();
	if (globalScrollPos > window_top) {	// scroll up
		$('#primary').removeClass('sticked');
	}
	globalScrollPos = window_top;
	var topp = $('#theBottomOfSidebar').offset().top;
	var panelh = $("#sidebar").height();
	//console.log(h, window_top, topp, panelh);
	if (window_top + h > topp + 22) {
		$('#primary').width($('#primary').width());
		$('#primary').addClass('sticked');
		$('#sidebar').height($('#primary').outerHeight());
	} else {
		//console.log('Leszed');
		$('#primary').removeClass('sticked');
	}
}
$(function() {
	setTimeout(function () {
		var myElem = document.getElementById('theBottomOfSidebar');
		if (myElem === null) {
			console.log('No sidebar');
		} else {
			$(window).scroll(sticktoBottomSidebar);
			sticktoBottomSidebar();
		}
	}, 3000);
});
function sticktothetops() {
    var window_top = $(window).scrollTop();
	if ($('#stick-here2').length > 0) {
		var top = $('#stick-here2').offset().top;
		if (window_top > top) {
			$('#stickThis2').addClass('stick');
			$('#stick-here2').height($('#stickThis2').outerHeight());
		} else {
			$('#stickThis2').removeClass('stick');
			$('#stick-here2').height(0);
		}
	}
}
$(function() {
    $(window).scroll(sticktothetops);
    sticktothetops();
});
//Featured random articles - BEGIN
var fimage = ['solver','lego','simulator','patterns','scrambler','edgeonly','cheese','robots','1x1x1','ivy','youcandothecube','mirror','facebook','webshops','simulator','advanced','tattoos','memes','2x2solver','oskar','fmc','solution','simulator','godsnumber','statues','cubetimer','solver','domino','twistypuzzles','celebrities','fishercube','rubikubism','advanced','4x4x4','solver','ghost','tonyfisher','popculture','facebook','patterns','wca','simulator','matsvalkrecord','square1simulator','gearcube','solution','advanced','webshops','memes','largestcube20','geekprank','architecutre','speedcubers','gifts','streetart','2x2x2','timeline','solver','cubetimer','inventor','advanced','history','voidcube','shapemods','5x5x5','art','simulator','solution','movies','originalrubiks','brands','takeapart','megaminx','skewb','videoclips','pyraminxsimulator','tricks','memes','cubetimer','solver','electronic','smartegg','patterns','notation','neocubes','unsolvable','solution','advanced','rubikscslocksimulator','funnyimages','jigsawpuzzles','facebook','mosaics','stickermods','square1','lubrication','solver','stickers','twistypatterns','tonyslargest','pyraminx','quiz','memes','geekprank','scrambler','youtube','simulator','advanced','cubetimer','solution','rubiksclock','snake','terminology','solver','puzzlemodding','15puzzle','hungarianrings','speedcubing','curriculum','siamese','kilominx','floppy','ufo','memes','nontwisty','solution','stackmat','solver','mathematics','commercials','cubetimer','bld','advanced','prototype','bandagedcube','facebook','geekprank','megaminxsimulator','patternspuzzles','simulator','solver','tshirts'];
var ftitle = ['Online Cube Solver','LEGO','Online 3D Cube','Color Patterns','Puzzle Scrambler','Edges Only Cube','Rubik\'s Cheese','Rubik Robots','1x1x1 Cube','Ivy Cube','You Can Do The Cube','Mirror Cube','Like Ruwix','Buy Puzzles','Rubik Simulator','Advanced Method','Rubik Tattoos','Funny Images','2x2 Simulator','Oskar van Deventer','Fewest Moves Challenge','Beginner\'s Solution','Cube Simulator','God\'s Number','Statues','Cube Timer','Online Cube Solver','Domino Cube','Twisty Puzzles','Cubing Celebrities','Fisher Cube','Puzzle Mosaics','Advanced Method','4x4x4','Online Cube Solver','Ghost Cube','Tony Fisher','Pop Culture','Like Ruwix','Color Patterns','WCA','Rubik Simulator','World Record','Square-1 Simulator','Gear Cube','Beginner\'s Solution','Advanced Method','Cubing Webshops','Funny Images','22 x 22 x 22 Cube','Pranx.com','Architecutre','The Best SpeedCubers','Rubik\'s Gifts','Street Art','2x2x2','History Timeline','Online Solver','Cube Timer','About The Inventor','Advanced Method','Cubing History','Void Cube','Shape Mods','5x5x5','Cube Art','3D Rubik Simulator','Beginner\'s Solution','Movies','Not the Best Brand?','Best Brands','Take It Apart','Megaminx','The Skewb','Music Videos','Pyraminx Simulator','Tricks','Funny Images','Cube Timer','Online Solver','Electronic Cubes','Smart Eggs','Color Patterns','Notation','Neo Cubes','Unsolvable Cube','Beginner\'s Solution','Advanced Method','Clock Simulator','Funny Images','Jigsaw Puzzles','Like Ruwix','Mosaic Gallery','Sticker Mods','Square-1','Lubricate','Cube Solver','Puzzle Stickers','Puzzle Patterns','Largest Cube','Pyraminx','Rubik Quiz','Funny Images','Pranx.com','Puzzle Scrambler','YouTube Channels','3D Rubik Simulator','Advanced Method','Cube Timer','Beginner\'s Solution','Rubik\'s Clock','Rubik\'s Snake','Terminology','Rubik\'s Cube Solver','Puzzle Modding','15 Puzzle','Hungarian Rings','Speedcubing','Curriculum','Siamese Puzzles','Kilominx','Floppy Cube','Rubi\'s UFO','Funny Images','Non-Twisty Puzzles','Beginner\'s Solution','Stackmat Timers','Rubik\'s Cube Solver','Mathematics','Commercials','Cube Timer','Blindfolded Tutorial','Advanced Method','First Prototype','Bandaged Cubes','Like Ruwix','Pranx.com','Megaminx Simulator','Twisty Patterns','3D Rubik Simulator','Cube Solver','T-Shirts'];
var flink = ['/cube-solver/','/the-rubiks-cube/lego/','/online-puzzle-simulators/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/','/puzzle-scramble-generator/','/twisty-puzzles/edges-void-cube/','/twisty-puzzles/rubiks-cheese/','/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/','/twisty-puzzles/1x1x1-rubiks-cube/','/twisty-puzzles/ivy-cube/','/the-rubiks-cube/you-can-do-the-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/','https://www.facebook.com/online.rubiks.cube.solver','/shop/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/popular-culture/art/','/the-rubiks-cube/rubiks-cube-memes/','/online-puzzle-simulators/3d/cubes/2x2/','/twisty-puzzles/designers/oskar-van-deventer/','/the-rubiks-cube/fmc-fewest-move-count-challenge/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/online-puzzle-simulators/','/the-rubiks-cube/gods-number/','/the-rubiks-cube/popular-culture/statues/','/online-rubiks-stopwatch-timer/','/cube-solver/','/twisty-puzzles/2x3x3-domino-cube/','/twisty-puzzles/','/the-rubiks-cube/celebrities-actors-politicians-artists/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/the-rubiks-cube/advanced-cfop-fridrich/','/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/','/cube-solver/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/','/twisty-puzzles/designers/tony-fisher/','/the-rubiks-cube/popular-culture/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/rubiks-cube-patterns-algorithms/','/the-rubiks-cube/world-cube-association-wca/','/online-puzzle-simulators/','/blog/yusheng-du-record-347/','/online-puzzle-simulators/square-1-simulator.php','/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/shop/','/the-rubiks-cube/rubiks-cube-memes/','/blog/the-worlds-largest-cubic-nxnxn-rubiks-cube-puzzle-22x22x22/','https://pranx.com/','/the-rubiks-cube/popular-culture/buildings-architecture/','/the-rubiks-cube/speedcubers/','/the-rubiks-cube/rubiks-themed-gifts-souvenirs/','/the-rubiks-cube/popular-culture/art/','/twisty-puzzles/2x2x2-rubiks-cube-pocket/','/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/','/cube-solver/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/history-rubiks-cube/','/twisty-puzzles/void-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/','/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/','/the-rubiks-cube/popular-culture/art/','/online-puzzle-simulators/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/popular-culture/in-movies/','/blog/why-rubiks-brand-cube-disliked-hated/','/the-rubiks-cube/best-speedcube-brands/','/the-rubiks-cube/how-take-apart-disassemble-rubiks-cube/','/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/','/twisty-puzzles/skewb-cube-puzzle-solution/','/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/','/online-puzzle-simulators/pyraminx-simulator.php','/the-rubiks-cube/tricks/','/the-rubiks-cube/rubiks-cube-memes/','/online-rubiks-stopwatch-timer/','/cube-solver/','/twisty-puzzles/electronic-rubiks-cube-puzzles/','/twisty-puzzles/smart-egg/','/the-rubiks-cube/notation/','/the-rubiks-cube/notation/','/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/','/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-puzzle-simulators/rubiks-clock-simulator.php','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/jigsaw-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-orient-center/','/twisty-puzzles/square-1-back-to-square-one/','/the-rubiks-cube/lubricate-rubiks-cube-silicone-vaseline-petroleum-jelly/','/cube-solver/','/the-rubiks-cube/rubiks-cube-stickers-cubesmith/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/blog/tony-fisher-presents-the-worlds-largest-rubiks-cube/','/twisty-puzzles/pyraminx-triangle-rubiks-cube/','/the-rubiks-cube/rubiks-cube-quiz/','/the-rubiks-cube/rubiks-cube-memes/','https://pranx.com/','/puzzle-scramble-generator/','/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/','/twisty-puzzles/rubiks-snake-twist/','/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/','/cube-solver/','/twisty-puzzles/twisty-puzzle-modding/','/online-puzzle-simulators/sliding-15-puzzle/','/online-puzzle-simulators/hungarian-rings/','/the-rubiks-cube/speedcubing-speedsolving/','/the-rubiks-cube/curriculum/','/twisty-puzzles/siamese-twisty-puzzles/','/twisty-puzzles/kilominx/','/twisty-puzzles/super-floppy-cube/','/twisty-puzzles/rubiks-ufo-solution/','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/non-twisty-puzzles/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/','/cube-solver/','/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/','/the-rubiks-cube/popular-culture/commercials/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/first-rubiks-cube-prototype-invention/','/twisty-puzzles/bandaged-cube-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','https://pranx.com/','/online-puzzle-simulators/megaminx-simulator.php','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/online-puzzle-simulators/','/cube-solver/','/the-rubiks-cube/popular-culture/art/'];
jQuery(document).ready(function () {
    generateFeaturedArticles('#relatedThumbsFoot',6);
    generateFeaturedArticles('#sidebarFeaturedArticles',4);
    generateFeaturedArticles('#sidebarFeaturedArticles2',4);
	if ((ftitle.length != flink.length) || (fimage.length != flink.length)) {
		console.log('Thumbnail arrow lengths dont match',ftitle.length,flink.length,fimage.length);
	};
});
function htmlForOneItem(meik) {
	var content = '<a class="featuredArticle" target="_blank" title="' + ftitle[meik] + '" href="' + flink[meik] + '"><img src="/pics/featured160/' + fimage[meik] + '.jpg" alt="' + ftitle[meik] + '"><span><span>' + ftitle[meik] + '</span></span></a>';
	return content;
}
function generateFeaturedArticles(container, hanyat) {
    var rand = Math.floor((Math.random() * (fimage.length - hanyat)));
	var content = '<div id="featuredArticles">';
	for (var i = 0; i < hanyat; i++) {
		content = content + htmlForOneItem(rand + i);
	}
	content = content + '</div>';
	jQuery(container).append(content);
}
// Featured random articles - END
// MegaMenu Begin
$(document).ready(function() {
  "use strict";
  //$(".fb-comments").wrap("<div class='fbCommentsWrapper'></div>");
  $('.menu > ul > li:has( > ul)').addClass('mdico');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
  $(".menu > ul > li").hover(function(e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  $(".menu > ul > li").click(function() {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });
  $(".menu-mobile").click(function(e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
});
// 	MegaMenu END
// 		Scroll to top when arrow up clicked BEGIN
$(document).ready(function() {
	$("#back2Top").html('<svg class="circleSvg" viewBox="0 0 100 100"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/></svg>');
});
(function($) { "use strict";
  $(document).ready(function(){"use strict";
    var progressPath = document.querySelector('#back2Top path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);  
    var offset = 70;
    var duration = 500;
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('#back2Top').addClass('showProgress');
      } else {
        jQuery('#back2Top').removeClass('showProgress');
      }
    });        
    jQuery('#back2Top').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
  });
})(jQuery); 
 //		Scroll to top when arrow up clicked END
//		Pattern Gallery BEGIN
var galleryIndex = 0;
var galleryItems = 0;
var patternName = new Array();
var patternFile = new Array();
var patternAlg = new Array();
var patternDesc = new Array();
function openPattern(meik) {
	if (meik > galleryItems) {	meik = 0;	}
	if (meik < 0) {	meik = galleryItems;	}
	$('#openedPatternContent').html('<h2><span>' + (Number(meik) + 1) + '.</span> ' + patternName[meik] + '</h2><div class="patterninfo">' + patternDesc[meik] + '</div><div><strong>' + patternAlg[meik] + '</strong></div><div><img class="thisPatternImg" src="/pics/rubiks-cube/patterns/' + patternFile[meik] + '.svg" alt="' + patternName[meik] + '"><iframe src="https://ruwix.com/widget/3d/?alg=' + patternAlg[meik] + '&setupmoves=' + patternAlg[meik] + '&hover=7&speed=800&flags=showalg&colors=U:y%20F:b%20R:r%20B:g%20L:o%20D:w" scrolling="no"></iframe></div><div class="patternRotsWrap"><span class="rots">' + patternAlg[meik] + '</span></div><div class="inverseAlg">Inverse: <strong>' + calculateInverseAlg(patternAlg[meik]) + '</strong></div>');
	galleryIndex = meik;
	renderAlgArrows();
	$('#wrapOpenedPattern, #patternGalleryShadow').fadeIn(300);
}
function calculateInverseAlg(alg) {
	var inv = alg.split(" ");
	var inverse = "";
	for (var i = inv.length-1; i >= 0; i--) {
if (inv[i] == "F"){inverse += "F' ";}
if (inv[i] == "R"){inverse += "R' ";}
if (inv[i] == "U"){inverse += "U' ";}
if (inv[i] == "B"){inverse += "B' ";}
if (inv[i] == "L"){inverse += "L' ";}
if (inv[i] == "D"){inverse += "D' ";}
if (inv[i] == "f"){inverse += "f' ";}
if (inv[i] == "r"){inverse += "r' ";}
if (inv[i] == "u"){inverse += "u' ";}
if (inv[i] == "b"){inverse += "b' ";}
if (inv[i] == "l"){inverse += "l' ";}
if (inv[i] == "d"){inverse += "d' ";}
if (inv[i] == "M"){inverse += "M' ";}
if (inv[i] == "E"){inverse += "E' ";}
if (inv[i] == "S"){inverse += "S' ";}
if (inv[i] == "x"){inverse += "x' ";}
if (inv[i] == "y"){inverse += "y' ";}
if (inv[i] == "z"){inverse += "z' ";}
if (inv[i] == "F'"){inverse += "F ";}
if (inv[i] == "R'"){inverse += "R ";}
if (inv[i] == "U'"){inverse += "U ";}
if (inv[i] == "B'"){inverse += "B ";}
if (inv[i] == "L'"){inverse += "L ";}
if (inv[i] == "D'"){inverse += "D ";}
if (inv[i] == "f'"){inverse += "f ";}
if (inv[i] == "r'"){inverse += "r ";}
if (inv[i] == "u'"){inverse += "u ";}
if (inv[i] == "b'"){inverse += "b ";}
if (inv[i] == "l'"){inverse += "l ";}
if (inv[i] == "d'"){inverse += "d ";}
if (inv[i] == "M'"){inverse += "M ";}
if (inv[i] == "E'"){inverse += "E ";}
if (inv[i] == "S'"){inverse += "S ";}
if (inv[i] == "x'"){inverse += "x ";}
if (inv[i] == "y'"){inverse += "y ";}
if (inv[i] == "z'"){inverse += "z ";}
if (inv[i] == "F2"){inverse += "F2 ";}
if (inv[i] == "R2"){inverse += "R2 ";}
if (inv[i] == "U2"){inverse += "U2 ";}
if (inv[i] == "B2"){inverse += "B2 ";}
if (inv[i] == "L2"){inverse += "L2 ";}
if (inv[i] == "D2"){inverse += "D2 ";}
if (inv[i] == "M2"){inverse += "M2 ";}
if (inv[i] == "E2"){inverse += "E2 ";}
if (inv[i] == "S2"){inverse += "S2 ";}
if (inv[i] == "x2"){inverse += "x2 ";}
if (inv[i] == "y2"){inverse += "y2 ";}
if (inv[i] == "z2"){inverse += "z2 ";}
	}
	return inverse;
}
$(document).ready(function(){
	$("#patternGallery > div").each(function() {
		patternName[galleryIndex] = $(this).text();
		patternFile[galleryIndex] = $(this).attr("data-img");
		patternAlg[galleryIndex] = $(this).attr("data-alg");
		patternDesc[galleryIndex] = $(this).attr("data-desc");
		$(this).attr("data-index",galleryIndex);
		$(this).html('<h3>' + patternName[galleryIndex] + '</h3><img src="/pics/rubiks-cube/patterns/' + patternFile[galleryIndex] + '.svg" alt="' + patternName[galleryIndex] + '">');
		galleryItems = galleryIndex;
		galleryIndex++;
	});
    $("#patternGallery > div").click(function(){
        openPattern($(this).attr('data-index'));
    });
    $("#patternSliderLeft").click(function(){
        openPattern(Number(galleryIndex) - 1);
    });
    $("#patternSliderRight").click(function(){
        openPattern(Number(galleryIndex) + 1);
    });
    $("#closeOpenedPattern, #patternGalleryShadow").click(function(){
        $("#patternGalleryShadow, #wrapOpenedPattern").fadeOut(300);
    });
});
//		Pattern Gallery END

$(document).ready(function () {
    const commentBox = `
        <div class="aboutTheseComments">
			<div class="commentLink">More comments</div>
			<div class="commentLink">About comments&nbsp;plugin</div>
		</div>
		<div class="cre">
            <textarea placeholder="Write a comment..." aria-label="Write a comment"></textarea>
            <a href="#contact">
                <span>Send</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 20L20 12 4 4l3 6 7 2-7 2-3 6z"></path>
                </svg>
            </a>
        </div>
    `;
    if ($('.comments').length) {
        $('.comments').after(commentBox);
		$('.comments').before('<h3 class="commentHead">Comments💬</h3>');
    }
});
$(function () {
  const $cre = $('.cre');
  if (!$cre.length) return;
  const $textarea = $cre.find('textarea');
  const $link = $cre.find('a');
  $textarea.on('input', function () {
    let text = $textarea.val().trim().replace(/ /g, '_');
    const msg  = encodeURIComponent(text);
    const page = encodeURIComponent(window.location.pathname + window.location.search);
    $link.attr('href', `/contact/?message=${msg}&page=${page}`);
  });
});
$(document).ready(function(){
    $(".aboutTheseComments").click(function(){
        $(this).html("<p>We've archived this comment section from the&nbsp;old <strong>Facebook&nbsp;comments</strong> plugin we used for over 10 years. The&nbsp;plugin has been retired by Meta, but we wanted to preserve years of conversations&nbsp;alive in this&nbsp;archive.<br>👤The&nbsp;user&nbsp;names match the original commenters, but the avatar images are randomly&nbsp;assigned. If&nbsp;you'd like to add a new comment, you can still send it to&nbsp;us&nbsp;by&nbsp;email.</p>");
    });
});