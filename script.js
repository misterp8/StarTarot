/**
 * ------------------------------------------------------------------
 * 星光塔羅 (Star Tarot) 
 * ------------------------------------------------------------------
 * @author  陳阿P
 * @version 1.0.0
 * @year    2026.2.11
 * * 沉浸式 3D 星空塔羅，在璀璨星河中揭示你的命運指引。
 * ------------------------------------------------------------------
 */
import * as THREE from 'three';
import TWEEN from 'three/addons/libs/tween.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { CARD_MEANINGS as DB1 } from './card_meanings1.js';
import { CARD_MEANINGS as DB2 } from './card_meanings2.js';
import { CARD_MEANINGS as DB3 } from './card_meanings3.js';

const BASE_PATH = "cards/";
const ALL_DATABASES = [DB1, DB2, DB3];
let currentDatabase = DB1;

const TAROT_DATA = [
    { id: 0, name: "愚者", url: `${BASE_PATH}00-TheFool.jpg` },
    { id: 1, name: "魔術師", url: `${BASE_PATH}01-TheMagician.jpg` },
    { id: 2, name: "女祭司", url: `${BASE_PATH}02-TheHighPriestess.jpg` },
    { id: 3, name: "皇后", url: `${BASE_PATH}03-TheEmpress.jpg` },
    { id: 4, name: "皇帝", url: `${BASE_PATH}04-TheEmperor.jpg` },
    { id: 5, name: "教皇", url: `${BASE_PATH}05-TheHierophant.jpg` },
    { id: 6, name: "戀人", url: `${BASE_PATH}06-TheLovers.jpg` },
    { id: 7, name: "戰車", url: `${BASE_PATH}07-TheChariot.jpg` },
    { id: 8, name: "力量", url: `${BASE_PATH}08-Strength.jpg` },
    { id: 9, name: "隱者", url: `${BASE_PATH}09-TheHermit.jpg` },
    { id: 10, name: "命運之輪", url: `${BASE_PATH}10-WheelOfFortune.jpg` },
    { id: 11, name: "正義", url: `${BASE_PATH}11-Justice.jpg` },
    { id: 12, name: "倒吊人", url: `${BASE_PATH}12-TheHangedMan.jpg` },
    { id: 13, name: "死神", url: `${BASE_PATH}13-Death.jpg` },
    { id: 14, name: "節制", url: `${BASE_PATH}14-Temperance.jpg` },
    { id: 15, name: "惡魔", url: `${BASE_PATH}15-TheDevil.jpg` },
    { id: 16, name: "高塔", url: `${BASE_PATH}16-TheTower.jpg` },
    { id: 17, name: "星星", url: `${BASE_PATH}17-TheStar.jpg` },
    { id: 18, name: "月亮", url: `${BASE_PATH}18-TheMoon.jpg` },
    { id: 19, name: "太陽", url: `${BASE_PATH}19-TheSun.jpg` },
    { id: 20, name: "審判", url: `${BASE_PATH}20-Judgement.jpg` },
    { id: 21, name: "世界", url: `${BASE_PATH}21-TheWorld.jpg` },
    { id: 22, name: "權杖一", url: `${BASE_PATH}Wands01.jpg` },
    { id: 23, name: "權杖二", url: `${BASE_PATH}Wands02.jpg` },
    { id: 24, name: "權杖三", url: `${BASE_PATH}Wands03.jpg` },
    { id: 25, name: "權杖四", url: `${BASE_PATH}Wands04.jpg` },
    { id: 26, name: "權杖五", url: `${BASE_PATH}Wands05.jpg` },
    { id: 27, name: "權杖六", url: `${BASE_PATH}Wands06.jpg` },
    { id: 28, name: "權杖七", url: `${BASE_PATH}Wands07.jpg` },
    { id: 29, name: "權杖八", url: `${BASE_PATH}Wands08.jpg` },
    { id: 30, name: "權杖九", url: `${BASE_PATH}Wands09.jpg` },
    { id: 31, name: "權杖十", url: `${BASE_PATH}Wands10.jpg` },
    { id: 32, name: "權杖侍者", url: `${BASE_PATH}Wands11.jpg` },
    { id: 33, name: "權杖騎士", url: `${BASE_PATH}Wands12.jpg` },
    { id: 34, name: "權杖王后", url: `${BASE_PATH}Wands13.jpg` },
    { id: 35, name: "權杖國王", url: `${BASE_PATH}Wands14.jpg` },
    { id: 36, name: "聖杯一", url: `${BASE_PATH}Cups01.jpg` },
    { id: 37, name: "聖杯二", url: `${BASE_PATH}Cups02.jpg` },
    { id: 38, name: "聖杯三", url: `${BASE_PATH}Cups03.jpg` },
    { id: 39, name: "聖杯四", url: `${BASE_PATH}Cups04.jpg` },
    { id: 40, name: "聖杯五", url: `${BASE_PATH}Cups05.jpg` },
    { id: 41, name: "聖杯六", url: `${BASE_PATH}Cups06.jpg` },
    { id: 42, name: "聖杯七", url: `${BASE_PATH}Cups07.jpg` },
    { id: 43, name: "聖杯八", url: `${BASE_PATH}Cups08.jpg` },
    { id: 44, name: "聖杯九", url: `${BASE_PATH}Cups09.jpg` },
    { id: 45, name: "聖杯十", url: `${BASE_PATH}Cups10.jpg` },
    { id: 46, name: "聖杯侍者", url: `${BASE_PATH}Cups11.jpg` },
    { id: 47, name: "聖杯騎士", url: `${BASE_PATH}Cups12.jpg` },
    { id: 48, name: "聖杯王后", url: `${BASE_PATH}Cups13.jpg` },
    { id: 49, name: "聖杯國王", url: `${BASE_PATH}Cups14.jpg` },
    { id: 50, name: "寶劍一", url: `${BASE_PATH}Swords01.jpg` },
    { id: 51, name: "寶劍二", url: `${BASE_PATH}Swords02.jpg` },
    { id: 52, name: "寶劍三", url: `${BASE_PATH}Swords03.jpg` },
    { id: 53, name: "寶劍四", url: `${BASE_PATH}Swords04.jpg` },
    { id: 54, name: "寶劍五", url: `${BASE_PATH}Swords05.jpg` },
    { id: 55, name: "寶劍六", url: `${BASE_PATH}Swords06.jpg` },
    { id: 56, name: "寶劍七", url: `${BASE_PATH}Swords07.jpg` },
    { id: 57, name: "寶劍八", url: `${BASE_PATH}Swords08.jpg` },
    { id: 58, name: "寶劍九", url: `${BASE_PATH}Swords09.jpg` },
    { id: 59, name: "寶劍十", url: `${BASE_PATH}Swords10.jpg` },
    { id: 60, name: "寶劍侍者", url: `${BASE_PATH}Swords11.jpg` },
    { id: 61, name: "寶劍騎士", url: `${BASE_PATH}Swords12.jpg` },
    { id: 62, name: "寶劍王后", url: `${BASE_PATH}Swords13.jpg` },
    { id: 63, name: "寶劍國王", url: `${BASE_PATH}Swords14.jpg` },
    { id: 64, name: "錢幣一", url: `${BASE_PATH}Pentacles01.jpg` },
    { id: 65, name: "錢幣二", url: `${BASE_PATH}Pentacles02.jpg` },
    { id: 66, name: "錢幣三", url: `${BASE_PATH}Pentacles03.jpg` },
    { id: 67, name: "錢幣四", url: `${BASE_PATH}Pentacles04.jpg` },
    { id: 68, name: "錢幣五", url: `${BASE_PATH}Pentacles05.jpg` },
    { id: 69, name: "錢幣六", url: `${BASE_PATH}Pentacles06.jpg` },
    { id: 70, name: "錢幣七", url: `${BASE_PATH}Pentacles07.jpg` },
    { id: 71, name: "錢幣八", url: `${BASE_PATH}Pentacles08.jpg` },
    { id: 72, name: "錢幣九", url: `${BASE_PATH}Pentacles09.jpg` },
    { id: 73, name: "錢幣十", url: `${BASE_PATH}Pentacles10.jpg` },
    { id: 74, name: "錢幣侍者", url: `${BASE_PATH}Pentacles11.jpg` },
    { id: 75, name: "錢幣騎士", url: `${BASE_PATH}Pentacles12.jpg` },
    { id: 76, name: "錢幣王后", url: `${BASE_PATH}Pentacles13.jpg` },
    { id: 77, name: "錢幣國王", url: `${BASE_PATH}Pentacles14.jpg` }
];

const STATE = {
    currentScreen: 'screen-intro',
    deck: [],
    pickedCards: [],
    isPicking: false,
    canPick: false,
    selectedTopicKey: 'daily'
};

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

scene.fog = new THREE.FogExp2(0x05070B, 0.014);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 15, 10);

const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enabled = false;

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.18, 0.6);
const outputPass = new OutputPass();
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
const fxaaPass = new ShaderPass(FXAAShader);
const pixelRatio = renderer.getPixelRatio();
fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
composer.addPass(fxaaPass);
composer.addPass(outputPass);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const dirLightL = new THREE.DirectionalLight(0xfff0dd, 2.0);
dirLightL.position.set(5, 10, 7);
scene.add(dirLightL);
const dirLightR = new THREE.DirectionalLight(0xddf0ff, 2.5);
dirLightR.position.set(-5, 10, 7);
scene.add(dirLightR);
const lightBlue = new THREE.PointLight(0x0088ff, 20.0, 100);
const lightPurple = new THREE.PointLight(0xff00ff, 20.0, 100);
scene.add(lightBlue, lightPurple);

function createCircularTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32; canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
}
const particleTex = createCircularTexture();

let stars;

function createStars() {
    const count = 5000;
    const geometry = new THREE.BufferGeometry();
    const vertices = [], colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
        vertices.push((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 200);
        const colorChoice = Math.random();
        if (colorChoice > 0.9) color.setHex(0xcc88ff);
        else if (colorChoice > 0.8) color.setHex(0x88ccff);
        else color.setHex(0xffffff);
        colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
        size: 0.3, vertexColors: true, map: particleTex, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
    });
    stars = new THREE.Points(geometry, material);
    scene.add(stars);
}
createStars();

const planeGeo = new THREE.PlaneGeometry(1000, 1000);
const planeMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
const mousePlane = new THREE.Mesh(planeGeo, planeMat);
mousePlane.position.z = 0;
scene.add(mousePlane);

let sparklerEnabled = true;
const sparklerCount = 80;
const sparklerGeo = new THREE.BufferGeometry();
const sparklerPos = new Float32Array(sparklerCount * 3);
sparklerGeo.setAttribute('position', new THREE.BufferAttribute(sparklerPos, 3));

const sparklerMat = new THREE.PointsMaterial({
    color: 0xaaccff,
    size: 0.25,
    map: particleTex,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

const sparklerSystem = new THREE.Points(sparklerGeo, sparklerMat);
scene.add(sparklerSystem);

const sparks = [];
for (let i = 0; i < sparklerCount; i++) {
    sparks.push({ x: 9999, y: 9999, z: 9999, vx: 0, vy: 0, vz: 0, life: 0 });
}

function updateSparkler(targetPos) {
    if (targetPos && sparklerEnabled) {
        let spawned = 0;
        for (let i = 0; i < sparklerCount; i++) {
            if (sparks[i].life <= 0 && spawned < 3) {
                sparks[i].life = 1.0;
                sparks[i].x = targetPos.x + (Math.random() - 0.5) * 0.2;
                sparks[i].y = targetPos.y + (Math.random() - 0.5) * 0.2;
                sparks[i].z = targetPos.z + (Math.random() - 0.5) * 0.2;
                sparks[i].vx = (Math.random() - 0.5) * 0.01;
                sparks[i].vy = (Math.random() - 0.5) * 0.01;
                sparks[i].vz = (Math.random() - 0.5) * 0.01;
                spawned++;
            }
        }
    }

    const positions = sparklerSystem.geometry.attributes.position.array;

    for (let i = 0; i < sparklerCount; i++) {
        const s = sparks[i];
        if (s.life > 0) {
            s.x += s.vx;
            s.y += s.vy;
            s.z += s.vz;
            s.life -= 0.04;
            positions[i * 3] = s.x;
            positions[i * 3 + 1] = s.y;
            positions[i * 3 + 2] = s.z;
        } else {
            positions[i * 3] = 9999;
        }
    }

    sparklerSystem.geometry.attributes.position.needsUpdate = true;
}

const fairyDusts = [];

function createFairyDust(targetMesh) {
    const particleCount = 60;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const offsets = [];

    for (let i = 0; i < particleCount; i++) {
        positions.push(0, 0, 0);
        const r = 1.1 + Math.random() * 0.3;
        const theta = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 3.2;
        offsets.push({ r, theta, y, speed: Math.random() * 0.02 + 0.01 });
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x4488ff,
        size: 0.15,
        map: particleTex,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    fairyDusts.push({
        system: points,
        target: targetMesh,
        offsets: offsets,
        time: Math.random() * 100,
        isFading: false
    });
}

function updateFairyDust() {
    for (let i = fairyDusts.length - 1; i >= 0; i--) {
        const dust = fairyDusts[i];
        if (!dust.target || !dust.target.parent || !dust.system.parent) {
            if (dust.system.parent && !dust.isFading) {
                scene.remove(dust.system);
                fairyDusts.splice(i, 1);
            } else if (!dust.isFading) {
                fairyDusts.splice(i, 1);
            }
        }

        dust.time += 0.02;
        const positions = dust.system.geometry.attributes.position.array;

        let targetPos = new THREE.Vector3();
        if (dust.target && dust.target.parent) {
            dust.target.getWorldPosition(targetPos);
        }

        for (let j = 0; j < dust.offsets.length; j++) {
            const off = dust.offsets[j];
            const angle = off.theta + dust.time * off.speed;
            const lx = Math.cos(angle) * off.r;
            const lz = Math.sin(angle) * off.r;
            const ly = off.y + Math.sin(dust.time + j) * 0.2;

            if (!dust.isFading) {
                positions[j * 3] = targetPos.x + lx;
                positions[j * 3 + 1] = targetPos.y + ly;
                positions[j * 3 + 2] = targetPos.z + lz;
            } else {
                positions[j * 3 + 1] += 0.01;
            }
        }
        dust.system.geometry.attributes.position.needsUpdate = true;

        if (!dust.isFading) {
            dust.system.material.opacity = 0.5 + Math.sin(dust.time * 3) * 0.3;
        }
    }
}

const textureLoader = new THREE.TextureLoader();

const cardBackTextures = [];
for (let i = 1; i <= 8; i++) {
    const tex = textureLoader.load(`${BASE_PATH}cardback${i}.jpg`);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    cardBackTextures.push(tex);
}

let currentBackIndex = 0;
const baseMatBack = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: cardBackTextures[0],
    roughness: 0.5,
    metalness: 0.1
});

function processTextureWithBorder(imgOrUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = typeof imgOrUrl === 'string' ? imgOrUrl : imgOrUrl.src;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const borderRatio = 0.08;
            const w = img.width; const h = img.height;
            canvas.width = w * (1 + borderRatio); canvas.height = h * (1 + borderRatio);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const offsetX = (canvas.width - w) / 2; const offsetY = (canvas.height - h) / 2;
            ctx.drawImage(img, offsetX, offsetY, w, h);
            const tex = new THREE.CanvasTexture(canvas);
            tex.colorSpace = THREE.SRGBColorSpace;
            resolve(tex);
        };
        img.onerror = () => resolve(new THREE.CanvasTexture(document.createElement('canvas')));
    });
}

const cardGeometry = new RoundedBoxGeometry(2, 3.5, 0.2, 16, 0.15);
cardGeometry.scale(1, 1, 0.05);

const glowGeometry = new RoundedBoxGeometry(2, 3.5, 0.2, 16, 0.15);
glowGeometry.scale(1, 1, 0.05);

const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xCFE9FF,
    transparent: true,
    opacity: 0
});
const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
glowMesh.raycast = function () { };
const baseMatSide = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2, metalness: 0.8 });
const baseMatFront = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.5 });

const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.1;

const mouse = new THREE.Vector2();
const deckGroup = new THREE.Group();
scene.add(deckGroup);

class StarAudioEngine {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.8;
        this.masterGain.connect(this.ctx.destination);

        this.convolver = this.ctx.createConvolver();
        this.convolver.buffer = this.createImpulseResponse(6.0, 3.0);
        this.reverbGain = this.ctx.createGain();
        this.reverbGain.gain.value = 0.7; // Wet mix
        this.convolver.connect(this.reverbGain);
        this.reverbGain.connect(this.masterGain);

        this.isAmbiencePlaying = false;
        this.ambienceNodes = [];
    }

    resume() {
        if (this.ctx.state === 'suspended') {
            this.ctx.resume().then(() => {
                this.startAmbience();
            });
        } else if (!this.isAmbiencePlaying) {
            this.startAmbience();
        }
    }

    createImpulseResponse(duration, decay) {
        const rate = this.ctx.sampleRate;
        const length = rate * duration;
        const impulse = this.ctx.createBuffer(2, length, rate);
        const left = impulse.getChannelData(0);
        const right = impulse.getChannelData(1);

        for (let i = 0; i < length; i++) {
            const n = i / length;
            const volume = Math.pow(1 - n, decay);
            left[i] = (Math.random() * 2 - 1) * volume;
            right[i] = (Math.random() * 2 - 1) * volume;
        }
        return impulse;
    }

    startAmbience() {
        if (this.isAmbiencePlaying) return;
        this.isAmbiencePlaying = true;

        const bufferSize = 4096;
        const pinkNoise = (function (ctx) {
            let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

            const node = ctx.createScriptProcessor(bufferSize, 1, 1);
            node.onaudioprocess = function (e) {
                const output = e.outputBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    const white = Math.random() * 2 - 1;
                    b0 = 0.99886 * b0 + white * 0.0555179;
                    b1 = 0.99332 * b1 + white * 0.0750759;
                    b2 = 0.96900 * b2 + white * 0.1538520;
                    b3 = 0.86650 * b3 + white * 0.3104856;
                    b4 = 0.55000 * b4 + white * 0.5329522;
                    b5 = -0.7616 * b5 - white * 0.0168980;

                    output[i] = b0 + b1 + b2 + b3 + b4 + b5 + white * 0.5362;
                    output[i] *= 0.11;

                    b6 = white * 0.115926;
                }
            };
            return node;
        })(this.ctx);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        filter.Q.value = 1;

        const lfo = this.ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.1;
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 150;

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const gainNode = this.ctx.createGain();
        gainNode.gain.value = 0.15;

        pinkNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.masterGain);
        gainNode.connect(this.convolver);

        lfo.start();
        this.ambienceNodes = [pinkNoise, lfo, gainNode];
    }

    play(type) {
        const t = this.ctx.currentTime;

        if (type === 'hover') {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const pan = this.ctx.createStereoPanner();

            const freqs = [880, 1174, 1318, 1760, 2093];
            const freq = freqs[Math.floor(Math.random() * freqs.length)];

            osc.frequency.setValueAtTime(freq, t);
            osc.frequency.exponentialRampToValueAtTime(freq + 10, t + 0.1);

            pan.pan.value = (Math.random() * 2 - 1) * 0.5;

            gain.gain.setValueAtTime(0.05, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

            osc.connect(pan);
            pan.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            osc.start();
            osc.stop(t + 0.35);

        } else if (type === 'click' || type === 'select') {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, t);
            osc.frequency.exponentialRampToValueAtTime(100, t + 0.2);

            gain.gain.setValueAtTime(0.3, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

            osc.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            osc.start();
            osc.stop(t + 0.25);

        } else if (type === 'activate' || type === 'start') {
            const oscLow = this.ctx.createOscillator();
            const oscHigh = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            oscLow.type = 'triangle';
            oscLow.frequency.setValueAtTime(55, t);
            oscLow.frequency.linearRampToValueAtTime(220, t + 1.5);

            oscHigh.type = 'sine';
            oscHigh.frequency.setValueAtTime(440, t);
            oscHigh.frequency.linearRampToValueAtTime(1760, t + 1.5);

            const lfo = this.ctx.createOscillator();
            lfo.frequency.value = 15;
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 0.2;
            lfo.connect(lfoGain.gain);

            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.4, t + 0.5);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 2.0);

            oscLow.connect(gain);
            oscHigh.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            oscLow.start();
            oscHigh.start();
            lfo.start();

            oscLow.stop(t + 2.1);
            oscHigh.stop(t + 2.1);
            lfo.stop(t + 2.1);

        } else if (type === 'flip' || type === 'whoosh') {
            const bufferSize = this.ctx.sampleRate * 0.5;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.Q.value = 1.0;
            filter.frequency.setValueAtTime(200, t);
            filter.frequency.exponentialRampToValueAtTime(3000, t + 0.3);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.4, t);
            gain.gain.linearRampToValueAtTime(0, t + 0.4);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterGain);
            gain.connect(this.convolver);

            noise.start();

        } else if (type === 'reveal') {
            const bufferSize = this.ctx.sampleRate * 2.0;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            const windFilter = this.ctx.createBiquadFilter();
            windFilter.type = 'bandpass';
            windFilter.Q.value = 0.5;
            windFilter.frequency.setValueAtTime(400, t);
            windFilter.frequency.linearRampToValueAtTime(800, t + 2.0);

            const windGain = this.ctx.createGain();
            windGain.gain.setValueAtTime(0, t);
            windGain.gain.linearRampToValueAtTime(0.25, t + 1.0);
            windGain.gain.linearRampToValueAtTime(0, t + 3.0);

            noise.connect(windFilter);
            windFilter.connect(windGain);
            windGain.connect(this.convolver);
            windGain.connect(this.masterGain);
            noise.start();

            const chimeCount = 15;
            const baseFreqs = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51, 1567.98];

            for (let i = 0; i < chimeCount; i++) {
                const delay = Math.random() * 2.5;

                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const pan = this.ctx.createStereoPanner();

                osc.type = 'sine';
                const note = baseFreqs[Math.floor(Math.random() * baseFreqs.length)];
                osc.frequency.value = note;

                pan.pan.value = (Math.random() * 2 - 1) * 0.7;

                gain.gain.setValueAtTime(0, t + delay);
                gain.gain.linearRampToValueAtTime(0.12, t + delay + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 2.5);

                osc.connect(pan);
                pan.connect(gain);
                gain.connect(this.convolver);
                gain.connect(this.masterGain);

                osc.start(t + delay);
                osc.stop(t + delay + 3.0);
            }

        } else if (type === 'reset') {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.frequency.setValueAtTime(100, t);
            osc.frequency.exponentialRampToValueAtTime(800, t + 0.8);

            gain.gain.setValueAtTime(0.01, t);
            gain.gain.linearRampToValueAtTime(0.3, t + 0.6);
            gain.gain.linearRampToValueAtTime(0, t + 0.8);

            osc.connect(gain);
            gain.connect(this.convolver);
            gain.connect(this.masterGain);
            osc.start();
            osc.stop(t + 1.0);
        }
    }
}

const soundEngine = new StarAudioEngine();

function playSound(type) {
    soundEngine.play(type);
}

function fisherYatesShuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function switchScreen(id) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    if (id === 'screen-pick') {
        document.getElementById('controls-hint').style.display = 'block';
        document.getElementById('controls-hint').innerText = "左右滑動旋轉星盤，點擊選擇卡牌";

        const skinSwitcher = document.getElementById('skin-switcher-container');
        if (skinSwitcher) skinSwitcher.style.display = 'block';

        controls.enabled = false;

        const swipeHint = document.getElementById('mobile-swipe-hint');
        if (swipeHint) {
            swipeHint.style.display = '';
            swipeHint.style.opacity = '';
        }
    } else {
        document.getElementById('controls-hint').style.display = 'none';

        const skinSwitcher = document.getElementById('skin-switcher-container');
        if (skinSwitcher) skinSwitcher.style.display = 'none';

        controls.enabled = false;
    }
}

document.getElementById('artifact-wrapper').addEventListener('click', function () {
    if (this.classList.contains('artifact-active')) return;
    soundEngine.resume();
    playSound('activate');

    this.classList.add('artifact-active');
    setTimeout(() => {
        initDeck();
        startPicking();
        setTimeout(() => { this.classList.remove('artifact-active'); }, 1000);
    }, 500);
});

const topics = [
    { key: 'general', label: '全面分析' },
    { key: 'love', label: '感情分析' },
    { key: 'career', label: '事業分析' },
    { key: 'finance', label: '財務分析' },
    { key: 'health', label: '健康分析' },
    { key: 'decision', label: '抉擇指引' },
    { key: 'daily', label: '今日運勢' }
];

let currentTopicIndex = 6;

function updateTopicDisplay() {
    const topic = topics[currentTopicIndex];
    document.getElementById('topic-display').innerText = topic.label;
    STATE.selectedTopicKey = topic.key;
}
updateTopicDisplay();

document.getElementById('topic-prev').addEventListener('click', () => {
    currentTopicIndex = (currentTopicIndex - 1 + topics.length) % topics.length;
    updateTopicDisplay();
    playSound('hover');
});

document.getElementById('topic-next').addEventListener('click', () => {
    currentTopicIndex = (currentTopicIndex + 1) % topics.length;
    updateTopicDisplay();
    playSound('hover');
});

document.getElementById('btn-skin-switch').addEventListener('click', () => {
    playSound('click');
    currentBackIndex = (currentBackIndex + 1) % cardBackTextures.length;
    const newTex = cardBackTextures[currentBackIndex];

    STATE.deck.forEach(mesh => {
        if (mesh.material && mesh.material[5]) {
            mesh.material[5].map = newTex;
            mesh.material[5].needsUpdate = true;
        }
    });
});

let isMuted = false;
const btnAudio = document.getElementById('btn-audio-toggle');

if (btnAudio) {
    btnAudio.addEventListener('click', () => {
        isMuted = !isMuted;

        if (isMuted) {
            if (soundEngine && soundEngine.masterGain) {
                soundEngine.masterGain.gain.setTargetAtTime(0, soundEngine.ctx.currentTime, 0.1);
            }
            btnAudio.innerText = "星空靜音";
            btnAudio.style.opacity = "0.6";
        } else {
            soundEngine.resume();

            if (soundEngine && soundEngine.masterGain) {
                soundEngine.masterGain.gain.setTargetAtTime(0.8, soundEngine.ctx.currentTime, 0.1);
            }
            btnAudio.innerText = "星空迴響";
            btnAudio.style.opacity = "1";
        }
        playSound('click');
    });
}

document.getElementById('btn-reset').addEventListener('click', () => resetGame());

function resetGame() {
    playSound('reset');
    const randomIndex = Math.floor(Math.random() * ALL_DATABASES.length);
    currentDatabase = ALL_DATABASES[randomIndex];
    document.getElementById('result-overlay').style.display = 'none';
    document.getElementById('pick-instruction').style.display = 'block';

    while (deckGroup.children.length > 0) deckGroup.remove(deckGroup.children[0]);

    fairyDusts.forEach(dust => scene.remove(dust.system));
    fairyDusts.length = 0;

    deckGroup.rotation.set(0, 0, 0);
    STATE.pickedCards.forEach(card => { if (card.mesh && card.mesh.parent === scene) scene.remove(card.mesh); });

    new TWEEN.Tween(bloomPass).to({ strength: 0.7 }, 1000).start();
    new TWEEN.Tween(camera.position).to({ x: 0, y: 15, z: 10 }, 1000).start();
    new TWEEN.Tween(camera.rotation).to({ x: -1.0, y: 0, z: 0 }, 1000).start();

    sparklerEnabled = true;
    new TWEEN.Tween(sparklerMat).to({ opacity: 0.9 }, 1000).start();
    deckGroup.visible = true;

    STATE.deck = []; STATE.pickedCards = []; STATE.isPicking = false; STATE.canPick = false;
    initDeck();
    startPicking();
}

function initDeck() {
    while (deckGroup.children.length > 0) deckGroup.remove(deckGroup.children[0]);
    STATE.deck = []; STATE.pickedCards = [];
    deckGroup.visible = false;

    const shuffledData = fisherYatesShuffle([...TAROT_DATA]);

    const currentBackMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: cardBackTextures[currentBackIndex],
        roughness: 0.5,
        metalness: 0.1
    });

    for (let i = 0; i < 78; i++) {
        const materials = [
            baseMatSide.clone(), baseMatSide.clone(), baseMatSide.clone(), baseMatSide.clone(),
            baseMatFront.clone(), currentBackMat.clone()
        ];
        const mesh = new THREE.Mesh(cardGeometry, materials);
        mesh.position.set(0, -20, 0);
        const cardIdentity = shuffledData[i];
        const isReversed = Math.random() < 0.3;
        mesh.userData = { picked: false, cardInfo: { ...cardIdentity, reversed: isReversed } };
        deckGroup.add(mesh);
        STATE.deck.push(mesh);
    }
}

function startPicking() {
    switchScreen('screen-pick');
    STATE.isPicking = true; STATE.canPick = false;
    deckGroup.visible = true;

    const isMobileLandscape = window.innerHeight < 600;
    const targetY = isMobileLandscape ? 8 : 8;
    const targetZ = isMobileLandscape ? 33 : 35;

    controls.target.set(0, targetY, 0);
    mousePlane.position.y = targetY;
    mousePlane.lookAt(camera.position);

    new TWEEN.Tween(camera.position)
        .to({ x: 0, y: targetY, z: targetZ }, 2000)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();

    new TWEEN.Tween(camera.rotation).to({ x: -0.1, y: 0, z: 0 }, 2000).start();

    const totalCards = 78;
    const radius = 22;
    const angleStep = (Math.PI * 2) / totalCards;

    STATE.deck.forEach((mesh, i) => {
        const angle = i * angleStep;
        const tx = Math.cos(angle) * radius;
        const tz = Math.sin(angle) * radius;
        const ty = targetY + 2;
        const rotX = 0;
        const rotY = -angle + Math.PI / 2 - 0.26;
        const rotZ = 0;
        const finalRotY = rotY + Math.PI;

        new TWEEN.Tween(mesh.position)
            .to({ x: tx, y: ty, z: tz }, 2000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .delay(i * 10)
            .start();

        new TWEEN.Tween(mesh.rotation)
            .to({ x: rotX, y: finalRotY, z: rotZ }, 2000)
            .delay(i * 10)
            .onComplete(() => { if (i === 77) STATE.canPick = true; })
            .start();
    });
}

let mouseDownTime = 0;
let lastClickTime = 0;
let isProcessingClick = false;

window.addEventListener('mousedown', () => { mouseDownTime = Date.now(); });
window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});
window.addEventListener('mouseup', () => {
    if (Date.now() - mouseDownTime < 200) handleTap();
});

let touchStartX = 0;
let isDragging = false;
let rotationVelocity = 0;
let isHoveringUI = false;
const uiContainer = document.getElementById('skin-switcher-container');
if (uiContainer) {
    uiContainer.addEventListener('mouseenter', () => {
        isHoveringUI = true;
    });
    uiContainer.addEventListener('mouseleave', () => {
        isHoveringUI = false;
    });
}

window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        mouseDownTime = Date.now();
        isDragging = false;
        rotationVelocity = 0;
    }
}, { passive: false });

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        isDragging = true;
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - touchStartX;

        if (STATE.isPicking && STATE.canPick) {
            rotationVelocity = deltaX * 0.001;
            deckGroup.rotation.y += rotationVelocity;

            const swipeHint = document.getElementById('mobile-swipe-hint');
            if (swipeHint && swipeHint.style.opacity !== '0') {
                swipeHint.style.opacity = '0';
            }
        }

        touchStartX = currentX;

        mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
}, { passive: false });

window.addEventListener('touchend', () => {
    isDragging = false;
    if (Date.now() - mouseDownTime < 200) {
        handleTap();
    }
});

function handleTap() {
    if (!STATE.isPicking || !STATE.canPick || STATE.pickedCards.length >= 3) return;

    const now = Date.now();
    if (now - lastClickTime < 500) return;
    lastClickTime = now;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(deckGroup.children);

    if (intersects.length > 0) {
        const mesh = intersects[0].object;
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        if (worldPos.z < 5) {
            return;
        }
        if (!mesh.userData.picked) pickCard(mesh);
    }
}

let hoveredCard = null;

function updateHover() {
    const vec = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vec.unproject(camera);
    vec.sub(camera.position).normalize();
    const distance = 25;
    const point = camera.position.clone().add(vec.multiplyScalar(distance));

    if ('ontouchstart' in window) {
        updateSparkler(null);
        return;
    }

    updateSparkler(point);

    if (!STATE.isPicking || !STATE.canPick) {
        container.style.cursor = 'default';
        return;
    }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(deckGroup.children);

    let targetMesh = null;
    let targetPoint = null;

    if (intersects.length > 0) {

        for (let i = 0; i < intersects.length; i++) {
            const mesh = intersects[i].object;
            const p = intersects[i].point;

            const worldPos = new THREE.Vector3();
            mesh.getWorldPosition(worldPos);

            if (worldPos.z > 5) {
                targetMesh = mesh;
                targetPoint = p;
                break;
            }
        }
    }

    if (targetMesh) {
        container.style.cursor = 'pointer';

        updateSparkler(targetPoint);

        if (hoveredCard !== targetMesh && !targetMesh.userData.picked) {

            if (hoveredCard) {
                new TWEEN.Tween(hoveredCard.scale).to({ x: 1, y: 1, z: 1 }, 200).start();
                if (glowMesh.parent === hoveredCard) hoveredCard.remove(glowMesh);
            }

            hoveredCard = targetMesh;
            playSound('hover');

            new TWEEN.Tween(targetMesh.scale).to({ x: 1.2, y: 1.2, z: 1.2 }, 200).easing(TWEEN.Easing.Back.Out).start();

            targetMesh.add(glowMesh);
            glowMesh.position.set(0, 0, 0.02);
            glowMesh.scale.set(1, 1, 1);
            glowMesh.material.opacity = 0;
            new TWEEN.Tween(glowMesh.scale).to({ x: 1.03, y: 1.03, z: 1 }, 200).start();
            new TWEEN.Tween(glowMesh.material).to({ opacity: 1 }, 200).start();
        }
    } else {
        container.style.cursor = 'none';

        if (hoveredCard) {
            new TWEEN.Tween(hoveredCard.scale).to({ x: 1, y: 1, z: 1 }, 200).start();
            if (glowMesh.parent === hoveredCard) hoveredCard.remove(glowMesh);
            hoveredCard = null;
        }
    }
}

let time = 0;

function updateAnims() {
    time += 0.005;
    lightBlue.position.x = Math.sin(time) * 25;
    lightBlue.position.z = Math.cos(time) * 25;
    lightBlue.position.y = 10 + Math.sin(time * 2) * 5;
    lightPurple.position.x = Math.sin(time + Math.PI) * 25;
    lightPurple.position.z = Math.cos(time + Math.PI) * 25;
    lightPurple.position.y = 5 + Math.cos(time * 2) * 5;
    if (stars) stars.rotation.y += 0.0002;
    if (STATE.isPicking && STATE.canPick) {
        const threshold = 0.2;
        let mouseSpeed = 0;
        if (!('ontouchstart' in window)) {
            if (isHoveringUI) {
                mouseSpeed = 0;
            }
            else if (mouse.x > threshold) {
                mouseSpeed = Math.min((mouse.x - threshold) * 0.01, 0.05);
            }
            else if (mouse.x < -threshold) {
                mouseSpeed = Math.max((mouse.x + threshold) * 0.01, -0.05);
            }
        }

        if (!isDragging) {
            deckGroup.rotation.y += rotationVelocity;
            rotationVelocity *= 0.98;
            if (Math.abs(rotationVelocity) < 0.001) {
                rotationVelocity = 0;
                if (!('ontouchstart' in window)) {
                    deckGroup.rotation.y -= (0.0005 + mouseSpeed);
                }
            }
        }
    }

    updateFairyDust();
}

function pickCard(mesh) {
    playSound('select');
    mesh.userData.picked = true;
    createFairyDust(mesh);

    if (glowMesh.parent === mesh) mesh.remove(glowMesh);
    new TWEEN.Tween(mesh.scale).to({ x: 1, y: 1, z: 1 }, 200).start();

    const fate = mesh.userData.cardInfo;
    STATE.pickedCards.push({ ...fate, mesh: mesh });

    const slotIndex = STATE.pickedCards.length - 1;
    scene.attach(mesh);
    const isMobileLandscape = window.innerHeight < 600;
    const targetY = isMobileLandscape ? 5.1 : 4.8;
    const targetZ = 26;
    const targetX = (slotIndex - 1) * 2.6;

    const targetZRot = fate.reversed ? Math.PI : 0;

    new TWEEN.Tween(mesh.position).to({ x: targetX, y: targetY, z: targetZ }, 800).easing(TWEEN.Easing.Back.Out).start();
    new TWEEN.Tween(mesh.rotation).to({ x: 0, y: Math.PI, z: targetZRot }, 800).start();

    setTimeout(() => playSound('flip'), 100);

    if (STATE.pickedCards.length === 3) {
        STATE.canPick = false;

        // ▼ 選滿三張牌後，強制淡出並隱藏滑動提示
        const swipeHint = document.getElementById('mobile-swipe-hint');
        if (swipeHint) {
            swipeHint.style.opacity = '0';
            setTimeout(() => { swipeHint.style.display = 'none'; }, 500);
        }

        setTimeout(startRitual, 1000);
    }
}

async function startRitual() {
    document.getElementById('pick-instruction').style.display = 'none';
    document.getElementById('controls-hint').style.display = 'none';
    const skinSwitcher = document.getElementById('skin-switcher-container');
    if (skinSwitcher) skinSwitcher.style.display = 'none';

    controls.enabled = false;

    new TWEEN.Tween(sparklerMat).to({ opacity: 0 }, 1000).start();
    setTimeout(() => { sparklerEnabled = false; }, 1000);

    STATE.deck.forEach(m => { if (!m.userData.picked) new TWEEN.Tween(m.scale).to({ x: 0, y: 0, z: 0 }, 500).start(); });

    setTimeout(() => { deckGroup.visible = false; }, 600);

    fairyDusts.forEach(dust => {
        dust.isFading = true;
        new TWEEN.Tween(dust.system.material)
            .to({ opacity: 0 }, 1500)
            .onComplete(() => {
                if (dust.system.parent) scene.remove(dust.system);
            })
            .start();
    });
    setTimeout(() => { fairyDusts.length = 0; }, 1600);

    const isMobileLandscape = window.innerHeight < 600;
    const camTargetY = isMobileLandscape ? 0 : 0;
    const camTargetZ = isMobileLandscape ? 10.8 : 12;

    new TWEEN.Tween(camera.position).to({ x: 0, y: camTargetY, z: camTargetZ }, 1500).start();
    new TWEEN.Tween(camera.rotation).to({ x: 0, y: 0, z: 0 }, 1500).start();

    const targetCardY = isMobileLandscape ? 0 : 0;
    const targetCardZ = isMobileLandscape ? 3.0 : 3.0;
    const movePromises = STATE.pickedCards.map((c, i) => {
        return new Promise(resolve => {
            new TWEEN.Tween(c.mesh.position)
                .to({ x: (i - 1) * 2.6, y: targetCardY, z: targetCardZ }, 1500)
                .onComplete(resolve)
                .start();
        });
    });

    const texturePromise = Promise.all(STATE.pickedCards.map(c => processTextureWithBorder(c.url)));
    const [_, textures] = await Promise.all([Promise.all(movePromises), texturePromise]);

    new TWEEN.Tween(bloomPass).to({ strength: 0 }, 1500).start();
    revealCards(textures);
}

function revealCards(textures) {
    let completedCount = 0;
    STATE.pickedCards.forEach((c, i) => {
        const mat = new THREE.MeshBasicMaterial({ map: textures[i], color: 0xffffff });
        mat.color.multiplyScalar(2.2);
        c.mesh.material[4] = mat;
        c.mesh.material[4].needsUpdate = true;

        new TWEEN.Tween(c.mesh.rotation)
            .to({ y: 0 }, 1500)
            .delay(i * 1000)
            .easing(TWEEN.Easing.Elastic.Out)
            .onStart(() => {
                playSound('flip');
            })
            .onComplete(() => {
                completedCount++;
                if (completedCount === 3) {
                    playSound('reveal');
                    setTimeout(showResultOverlay, 500);
                }
            }).start();
    });
}

function showResultOverlay() {
    const overlay = document.getElementById('result-overlay');
    const container = document.getElementById('result-cards-container');
    container.innerHTML = '';
    const labels = ["過去", "現在", "未來"];
    STATE.pickedCards.forEach((c, i) => {
        const div = document.createElement('div'); div.className = 'res-card';
        const rotateStyle = c.reversed ? 'transform: rotate(180deg);' : '';
        div.innerHTML = `
            <div class="card-pos">${labels[i]}</div>
            <img src="${c.url}" style="${rotateStyle}">
            <div class="card-name">${c.name}</div>
            <div class="card-rev">${c.reversed ? '(逆位)' : '(正位)'}</div>`;
        container.appendChild(div);
    });
    switchScreen('screen-result'); overlay.style.display = 'flex';
}

function getCardMeaning(cardId, topicKey, isReversed) {
    const card = currentDatabase[cardId];
    if (!card) return "【星光訊號中斷】無法讀取牌意數據...";

    let meaningText = null;

    if (card.topics && card.topics[topicKey]) {
        meaningText = isReversed ? card.topics[topicKey].reversed : card.topics[topicKey].upright;
    }

    if (!meaningText) {
        if (card.general) {
            meaningText = isReversed ? card.general.reversed : card.general.upright;
        } else {
            meaningText = isReversed ? card.reversed : card.upright;
        }
    }

    if (!meaningText) {
        return isReversed ? "逆位能量顯現，請靜心感受。" : "正位能量顯現，請靜心感受。";
    }

    return meaningText;
}

document.getElementById('btn-interpret').addEventListener('click', () => {
    playSound('click');
    const interpretModal = document.getElementById('interpret-modal');

    const currentTopicLabel = topics[currentTopicIndex].label;
    const titleEl = document.querySelector('#interpret-modal .holo-subtitle');
    if (titleEl) titleEl.innerText = `星痕解讀 - ${currentTopicLabel}`;

    const contentArea = document.getElementById('interpret-content');
    const labels = ["過去", "現在", "未來"];
    contentArea.innerHTML = '';

    STATE.pickedCards.forEach((card, index) => {
        const text = getCardMeaning(card.id, STATE.selectedTopicKey, card.reversed);
        const status = card.reversed ? "(逆位)" : "(正位)";

        const div = document.createElement('div');
        div.className = 'interpret-item';
        div.innerHTML = `
            <div class="interpret-title">${labels[index]}：${card.name} ${status}</div>
            <div class="interpret-text">${text}</div>
        `;
        contentArea.appendChild(div);
    });

    interpretModal.classList.add('active');
});

const closeInterpretBtn = document.getElementById('btn-close-interpret');
if (closeInterpretBtn) {
    closeInterpretBtn.addEventListener('click', () => {
        playSound('click');
        document.getElementById('interpret-modal').classList.remove('active');
    });
}

document.getElementById('btn-ai-prompt').addEventListener('click', () => {
    playSound('click');
    const currentTopicLabel = topics[currentTopicIndex].label;

    const cards = STATE.pickedCards.map((c, i) => `第${['一', '二', '三'][i]}張：${c.name}（${c.reversed ? '逆位' : '正位'}）`).join('\n');

    const prompt = `你是一位經驗豐富、風格直接、不粉飾、不安撫的專業塔羅占卜師。
請根據以下資訊，對「${currentTopicLabel}」進行三張塔羅牌的【明確解讀】。

【基本原則】
- 不使用模稜兩可、模糊安慰、兩面說法。
- 不說「可能」、「也許」、「視情況而定」。
- 明確指出是【有利 / 不利 / 警示 / 結束 / 成長 / 停滯】其中之一。
- 若結果偏負面，直接說明問題與風險，不要轉成勉勵語氣。
- 解讀必須符合塔羅牌的正逆位意義，不可自行美化逆位。
- 所有結論必須由牌義推導，不可空泛。

【牌陣結構】
第一張牌：過去（或現況）
第二張牌：現在（或核心問題）
第三張牌：未來（或走向結果）

【抽到的牌】
${cards}

【解讀輸出格式（請嚴格遵守）】

一、整體結論（先給明確判斷）
→ 用一句話直接說結果是「好 / 壞 / 偏壞 / 偏好 / 需要結束 / 不適合 / 有成長但伴隨代價」。

二、逐張解讀（簡潔、明確）
- 第一張牌（過去/現況）：
  說明目前形成狀況的原因與基礎，直指問題本質。
- 第二張牌（現在/核心）：
  說明當下真正卡住或發揮作用的關鍵因素。
- 第三張牌（未來/結果）：
  明確指出走向，不能模糊收尾。

三、關鍵提醒（務實建議）
→ 給 1–2 點可執行的提醒或行動方向，避免空泛心靈雞湯。

【語氣要求】
- 像真人占卜師說話，不像 AI。
- 冷靜、誠實、有判斷力。
- 不需要道德說教或情緒安撫。

請開始解讀。
最後補充說明：本解讀僅為身心與能量層面的指引，不構成醫療建議。`;

    document.getElementById('prompt-output').value = prompt;
    document.getElementById('prompt-modal').classList.add('active');
});

document.getElementById('btn-copy-modal').addEventListener('click', () => {
    playSound('click');
    const promptText = document.getElementById('prompt-output');
    promptText.select();
    navigator.clipboard.writeText(promptText.value).then(() => {
        const toast = document.getElementById('toast');
        toast.style.opacity = '1';
        setTimeout(() => toast.style.opacity = '0', 3000);
    });
});

document.getElementById('btn-close-modal').addEventListener('click', () => {
    playSound('click');
    document.getElementById('prompt-modal').classList.remove('active');
});

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    updateHover(); updateAnims();
    composer.render();
}
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
});
animate();