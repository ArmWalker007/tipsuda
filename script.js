/* ==========================================
   INDUSTRIAL PRODUCT DESIGN PORTFOLIO LOGIC
   ========================================== */

// --- Default Project Data ---
let defaultProjectsData = [
    {
        title: "เครื่องบำบัดอากาศอัจฉริยะในห้องนั่งเล่น",
        tag: "Thesis Project",
        summary: "นวัตกรรมการออกแบบเครื่องฟอกและกรองอากาศแนวรักษ์โลกที่ผสมผสานวัสดุไม้ธรรมชาติเข้ากับเทคโนโลยีระบบเซ็นเซอร์ตรวจจับมลพิษอัจฉริยะ (IoT)",
        heroImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=450",
        tabs: [
            {
                text: "ฝุ่นละออง PM2.5 และมลพิษทางอากาศในห้องนั่งเล่นเป็นปัญหาสำคัญสำหรับครอบครัวและเด็กเล็ก ชิ้นงานนี้ออกแบบมาเพื่อฟอกอากาศพร้อมทั้งกรองกลิ่น สารเคมีระเหยง่าย ด้วยดีไซน์สไตล์มินิมอลผสานลวดลายไม้เพื่อให้เข้ากันกับเฟอร์นิเจอร์หลักภายในบ้านได้อย่างลงตัว",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "เริ่มต้นร่างภาพดีไซน์กว่า 30 แบบ เพื่อหาสัดส่วนช่องนำอากาศเข้า-ออกที่สอดคล้องตามหลักกลศาสตร์ไหลเวียนอากาศ (Aerodynamics) และปุ่มสวิตช์ปรับทิศทางลมแบบหมุนเพื่อสัมผัสที่ตอบสนองเป็นธรรมชาติ",
                img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "นำโครงสร้างชิ้นงานที่คัดเลือกมาขึ้นรูป 3D ในโปรแกรม SolidWorks เพื่อทดสอบโครงสร้างคลิปล็อกประกบตู้กรอง มอเตอร์พัดลมระบายอากาศ และระบบไส้กรอง HEPA 13 แบบหมุนล็อกถอดล้างทำความสะอาดได้สะดวก",
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "การทำ CMF (Color, Material, Finish) โดยใช้ไม้แอชขัดธรรมชาติแมตช์คู่กับพลาสติก ABS เคลือบสารกึ่งเงากึ่งแมตสีขาวงาช้าง และสีส้มอุตสาหกรรมในส่วนจุดจับเปิดฝา เพื่อบอกนัยยะการใช้งาน (Affordance)",
                img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "การจำลองสร้างโมเดลตัวอย่างด้วย FDM 3D Printing สเกล 1:1 ของปุ่มหมุนทดลองใช้กับผู้ใช้ และการทำโมเดลไฟเบอร์กลาสพ่นสีรองพื้นขัดเงาเพื่อแสดงนิทรรศการผลงานปลายภาคปริญญาตรี",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=350"
            }
        ]
    },
    {
        title: "เก้าอี้กระดาษลูกฟูกถอดประกอบชิ้นงาน",
        tag: "Furniture Design",
        summary: "โครงสร้างเฟอร์นิเจอร์แบบ Flat-pack ประกอบได้โดยไม่ต้องใช้กาวหรือสกรู ผลิตจากวัสดุกระดาษลูกฟูกรีไซเคิล แข็งแรงและรับน้ำหนักได้สูงสุด 120 กก.",
        heroImg: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=450",
        tabs: [
            {
                text: "การขยายตัวของเมืองใหญ่ทำให้นิสิตนักศึกษาและวัยรุ่นอาศัยในห้องพักเดี่ยวหรือคอนโดมิเนียมมากขึ้น ผลงานชิ้นนี้แก้ปัญหาเฟอร์นิเจอร์มีน้ำหนักมาก ย้ายลำบาก ด้วยการใช้วัสดุกระดาษลูกฟูกคุณภาพสูงพับประกอบได้เอง",
                img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "ร่างภาพข้อต่อแบบสลักเสียบขัดเหลี่ยม (Interlocking Joints) โดยศึกษาแรงดึงและกระจายแรงกดของการพับกระดาษหลายทิศทาง เพื่อหลีกเลี่ยงกระบวนการเจาะและการใช้กาว",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "คำนวณขนาดแผ่นกระดาษในระบบ CAD (Rhinoceros) เพื่อทำโครงร่างการกางกระดาษ 2D (Unfolded sheet) สัดส่วนแม่นยำ เตรียมส่งตัดด้วยกระบวนการตอกพับเลเซอร์คัทเทอร์",
                img: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "เน้นพื้นผิวดั้งเดิมของกระดาษสีคราฟท์ธรรมชาติ (Kraft paper brown) เพิ่มความอบอุ่นแบบเป็นมิตรต่อสิ่งแวดล้อม และเคลือบน้ำยาพ่นกันละอองน้ำและความชื้นแบบบางเบาที่ไม่ขัดขวางการย่อยสลาย",
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "การทำต้นแบบ 1:1 ด้วยเครื่องยิงเลเซอร์แผ่นกระดาษแข็ง และให้กลุ่มผู้ทดลองน้ำหนักตัวต่างกัน 50-100 กก. ทดสอบการนั่งทำงานต่อเนื่อง 4 ชั่วโมง เพื่อตรวจสอบความมั่นคงของโครงสร้างร่วมกับการยศาสตร์ท่านั่ง",
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600&h=350"
            }
        ]
    },
    {
        title: "ของเล่นชุดวิศวกรน้อยต่อท่อประปา",
        tag: "Toy Design",
        summary: "ของเล่นพลาสติกประเภทถอดประกอบและสวมสร้างโครงสร้างที่ฝึกทักษะกล้ามเนื้อมัดเล็ก ตรรกะกระบวนการแก้ปัญหา ผ่านการคำนวณข้อต่อท่อสามมิติ",
        heroImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450",
        tabs: [
            {
                text: "ปัญหาเด็กปฐมวัยติดจอโทรศัพท์ทำให้การประสานระหว่างระบบตาและกล้ามเนื้อมือลดลง ของเล่นชุดต่อท่อประปากระตุ้นให้เด็กสัมผัสสิ่งของจริง และมองความสัมพันธ์มิติตำแหน่งสามมิติเพื่อสร้างโครงสร้างผ่านมุมมองสนุกสนาน",
                img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "ร่างแบบรูปทรงท่อและมุมข้อต่อประเภทต่างๆ (90 องศา, สามทาง, สี่ทาง) ออกแบบขนาดเส้นผ่านศูนย์กลางให้พอเหมาะและมีขอบลบมุมมนที่เด็กอายุ 3-5 ปี สามารถจับถือได้อย่างกระชับปลอดภัย",
                img: "https://images.unsplash.com/photo-1515256427842-7ba4af520aa7?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "ขึ้นโมเดล 3D ใน SolidWorks พร้อมทั้งออกแบบระบบกลไกการสวมต่อที่มีระยะความแน่น (Fit tolerance) พอดีเพื่อให้เด็กสามารถสวมต่อและถอดออกจากกันได้ด้วยตนเองโดยไม่ต้องใช้แรงกดมากเกินสัดส่วนกำลังเด็ก",
                img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "เลือกใช้วัสดุ Polypropylene (PP) เกรดอาหาร ปลอดภัยไร้สารเคมีปนเปื้อน (BPA Free) พ่นทำสีเม็ดพลาสติกด้วยสีโทนพาสเทลเหลืองอมส้ม แดงคอรัล และเขียวหัวเป็ด เพื่อดึงดูดสายตาตามธรรมชาติการพัฒนาของเด็ก",
                img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=350"
            },
            {
                text: "ทำหุ่นต้นแบบพลาสติกพิมพ์ 3D (PLA non-toxic) นำไปให้เด็กนักเรียนในชั้นเรียนเตรียมอนุบาลทดลองเล่น 2 สัปดาห์ เพื่อสังเกตการณ์พฤติกรรม รูปทรงที่เด็กต่อมากที่สุด และจดบันทึกการปรับปรุงความแน่นข้อต่อ",
                img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600&h=350"
            }
        ]
    }
];

// Load local storage if it exists, otherwise use defaults
let projectsData = JSON.parse(localStorage.getItem('ipd_projects_data')) || defaultProjectsData;
let activeProjectIndex = 0;
let activeTabIndex = 0;
let isEditMode = false;

// Variables to handle image changing
let selectedImageElementId = null;

// --- DOM elements ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const navItems = document.querySelectorAll('.nav-item');
const projectModal = document.getElementById('projectModal');
const editorPanel = document.getElementById('editorPanel');
const editorControls = document.getElementById('editorControls');
const toggleEditBtn = document.getElementById('toggleEditBtn');
const editTextSpan = document.getElementById('editText');
const editHintToast = document.getElementById('editHintToast');
const imgUrlModal = document.getElementById('imgUrlModal');
const imageUrlInput = document.getElementById('imageUrlInput');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioTextData();
    renderProjectCards();
    setupScrollSpy();
    setupMobileMenu();
});

// --- Scroll Spy & Section Active State ---
function setupScrollSpy() {
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 120; // Offset for header/margin

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const linkHref = item.querySelector('a').getAttribute('href');
            if (linkHref === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });
}

// --- Mobile Navigation ---
function setupMobileMenu() {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close sidebar when menu items are clicked on mobile
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });
}

// --- Dynamic Rendering of Project Cards ---
function renderProjectCards() {
    projectsData.forEach((project, idx) => {
        const titleEl = document.getElementById(`p${idx+1}Title`);
        const summaryEl = document.getElementById(`p${idx+1}Summary`);
        const tagEl = document.getElementById(`p${idx+1}Tag`);
        const imgEl = document.getElementById(`p${idx+1}ThumbImg`);
        
        if (titleEl) titleEl.innerText = project.title;
        if (summaryEl) summaryEl.innerText = project.summary;
        if (tagEl) tagEl.innerText = project.tag;
        if (imgEl) {
            imgEl.src = project.heroImg;
            imgEl.style.display = 'block';
            if (imgEl.nextElementSibling) imgEl.nextElementSibling.style.display = 'none'; // hide placeholder
        }
    });
}

// --- Project Modal Management ---
function openProjectModal(index) {
    // Avoid opening modal during edit mode to allow editing the card text directly,
    // unless they click specifically on image areas or we handle edits in modal too.
    if (isEditMode) {
        // If edit mode is active, clicking on card selects it but doesn't pop up the viewer,
        // unless they click on "View Details". Let's allow modal edits too.
        // We'll let modal open so they can edit the process steps!
    }

    activeProjectIndex = index;
    activeTabIndex = 0;
    
    const project = projectsData[index];
    
    document.getElementById('modalHeroImg').src = project.heroImg;
    document.getElementById('modalTag').innerText = project.tag;
    document.getElementById('modalTitle').innerText = project.title;
    
    // Fill the tabs content
    fillModalTabContent();

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop page scrolling
}

function closeProjectModal(event) {
    if (!event || event.target === projectModal || event.currentTarget.classList.contains('modal-close-btn') || event.key === 'Escape') {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore page scrolling
    }
}

// Listen to Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

function fillModalTabContent() {
    const tabs = projectsData[activeProjectIndex].tabs;
    
    // Update active state in tabs header
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach((btn, idx) => {
        if (idx === activeTabIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update tab contents
    for (let i = 0; i < 5; i++) {
        const contentBox = document.getElementById(`modalTab${i}`);
        const textEl = document.getElementById(`modalTab${i}`).querySelector('.process-text');
        const imgEl = document.getElementById(`modalTab${i}`).querySelector('img');
        
        if (i === activeTabIndex) {
            contentBox.classList.add('active');
        } else {
            contentBox.classList.remove('active');
        }

        // Fill contents
        textEl.innerText = tabs[i].text;
        imgEl.src = tabs[i].img;
    }
}

function switchModalTab(tabIndex, event) {
    if (event) event.stopPropagation();
    activeTabIndex = tabIndex;
    fillModalTabContent();
}

// Fallback image helper
function showThumbnailPlaceholder(img) {
    img.style.display = 'none';
    if (img.nextElementSibling) {
        img.nextElementSibling.style.display = 'flex';
    }
}

// --- Local Storage Data Hydration ---
function loadPortfolioTextData() {
    const savedData = JSON.parse(localStorage.getItem('ipd_portfolio_text_data'));
    if (!savedData) return;

    // Map saved IDs to their textContent
    Object.keys(savedData).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = savedData[id];
            } else if (id.startsWith('skillVal')) {
                el.innerText = savedData[id];
                // Sync skill bar
                const index = id.replace('skillVal', '');
                const bar = document.getElementById(`skillBar${index}`);
                if (bar) {
                    bar.style.width = savedData[id];
                }
            } else if (id === 'profileAvatarImg') {
                el.src = savedData[id];
            } else {
                el.innerText = savedData[id];
            }
        }
    });

    // Hydrate soft skills if saved
    const savedSoftSkills = JSON.parse(localStorage.getItem('ipd_portfolio_soft_skills'));
    if (savedSoftSkills && savedSoftSkills.length > 0) {
        const container = document.getElementById('softSkillsContainer');
        container.innerHTML = '';
        savedSoftSkills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'soft-skill-tag';
            span.contentEditable = isEditMode.toString();
            span.innerText = skill;
            container.appendChild(span);
        });
    }

    // Hydrate social links if saved
    const savedSocials = JSON.parse(localStorage.getItem('ipd_portfolio_socials'));
    if (savedSocials) {
        Object.keys(savedSocials).forEach(id => {
            const link = document.getElementById(id);
            if (link) {
                link.dataset.href = savedSocials[id];
            }
        });
    }
}

// Save social links logic
function handleSocialClick(id, event) {
    if (isEditMode) {
        event.preventDefault();
        const currentHref = document.getElementById(id).dataset.href || '#';
        const newUrl = prompt(`แก้ไขลิ้งค์โซเชียล (${id}):`, currentHref);
        if (newUrl !== null) {
            document.getElementById(id).dataset.href = newUrl;
        }
    } else {
        const href = event.currentTarget.dataset.href;
        if (href && href !== '#') {
            window.open(href, '_blank');
        } else {
            event.preventDefault();
            alert('ยังไม่ได้กรอกลิ้งก์โซเชียล เปิดแก้ไข (Edit Mode) เพื่อใส่ลิงก์ได้เลย!');
        }
    }
}

// --- WYSIWYG Visual Editor Functions ---

function toggleEditMode() {
    isEditMode = !isEditMode;

    if (isEditMode) {
        // Active Edit State
        document.body.classList.add('edit-active');
        editorPanel.classList.add('edit-active');
        editTextSpan.innerText = 'อยู่ในโหมดแก้ไข';
        editHintToast.classList.add('active');

        // Make all contenteditable elements actually editable
        document.querySelectorAll('[contenteditable]').forEach(el => {
            el.setAttribute('contenteditable', 'true');
        });

        // Show add tags button
        document.querySelector('.edit-only-container').style.display = 'block';

        // Set alert to inform the user
        setTimeout(() => {
            editHintToast.classList.remove('active');
        }, 5000);
    } else {
        // Turned off via toggle (acting as cancel)
        cancelEdits();
    }
}

function addSoftSkillTag() {
    const container = document.getElementById('softSkillsContainer');
    const span = document.createElement('span');
    span.className = 'soft-skill-tag';
    span.contentEditable = 'true';
    span.innerText = 'ดับเบิ้ลคลิกแก้ไขสกิล';
    container.appendChild(span);
    span.focus();
}

function handleImageClick(imgId) {
    if (!isEditMode) return;
    
    selectedImageElementId = imgId;
    const imgEl = document.getElementById(imgId);
    imageUrlInput.value = imgEl.src;
    imgUrlModal.classList.add('active');
}

function closeImgUrlModal() {
    imgUrlModal.classList.remove('active');
    selectedImageElementId = null;
}

function confirmImageChange() {
    if (selectedImageElementId && imageUrlInput.value) {
        const imgEl = document.getElementById(selectedImageElementId);
        imgEl.src = imageUrlInput.value;
        imgEl.style.display = 'block';
        if (imgEl.nextElementSibling && imgEl.nextElementSibling.classList.contains('project-thumbnail-placeholder')) {
            imgEl.nextElementSibling.style.display = 'none'; // hide placeholder
        }

        // Also sync local data arrays if it's a project/thumbnail image
        syncModifiedImageToData(selectedImageElementId, imageUrlInput.value);
    }
    closeImgUrlModal();
}

function syncModifiedImageToData(elementId, newUrl) {
    // Check if it belongs to main projects
    if (elementId === 'p1ThumbImg') projectsData[0].heroImg = newUrl;
    if (elementId === 'p2ThumbImg') projectsData[1].heroImg = newUrl;
    if (elementId === 'p3ThumbImg') projectsData[2].heroImg = newUrl;

    // Check if it belongs to modal tabs (current active project tabs)
    if (elementId.startsWith('pTabImg')) {
        const tabIdx = parseInt(elementId.replace('pTabImg', ''));
        projectsData[activeProjectIndex].tabs[tabIdx].img = newUrl;
    }
}

// Save All Edits
function saveEdits() {
    // 1. Gather all editable text elements
    const textData = {};
    const editableSelectors = [
        'userName', 'userTitle', 'heroName', 'heroDesc', 
        'aboutName', 'aboutNickname', 'aboutUni', 'aboutDegree', 'aboutBio',
        'philosophyText', 'philosophyAuthor',
        'skillVal1', 'skillVal2', 'skillVal3', 'skillVal4', 'skillVal5', 'skillVal6',
        'contactEmail', 'contactPhone', 'contactAddress'
    ];

    editableSelectors.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            textData[id] = el.innerText.trim();
        }
    });

    // Handle Timeline text content manually to preserve their custom edit
    // Note: for this basic implementation we just let the user edit the static DOM
    // and when saving, the DOM keeps the state. For page refresh, we can also extract timeline items.
    const timelinesData = [];
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const date = item.querySelector('.timeline-date').innerText;
        const title = item.querySelector('.timeline-title').innerText;
        const inst = item.querySelector('.timeline-institution').innerText;
        const detail = item.querySelector('.timeline-details').innerText;
        timelinesData.push({ date, title, inst, detail });
    });
    localStorage.setItem('ipd_timelines_data', JSON.stringify(timelinesData));

    // Save profile avatar url
    const avatarImg = document.getElementById('profileAvatarImg');
    if (avatarImg) {
        textData['profileAvatarImg'] = avatarImg.src;
    }

    // Save soft skills tags
    const softSkills = [];
    document.querySelectorAll('.soft-skill-tag').forEach(tag => {
        const txt = tag.innerText.trim();
        if (txt) softSkills.push(txt);
    });

    // Save social links
    const socials = {
        linkBehance: document.getElementById('linkBehance').dataset.href || '#',
        linkLinkedin: document.getElementById('linkLinkedin').dataset.href || '#'
    };

    // Save project modifications (Main card edits & current modal edits)
    // First, sync details from card DOM to projectData structure
    for (let i = 0; i < 3; i++) {
        const cardTitle = document.getElementById(`p${i+1}Title`).innerText;
        const cardSummary = document.getElementById(`p${i+1}Summary`).innerText;
        projectsData[i].title = cardTitle;
        projectsData[i].summary = cardSummary;
    }

    // If modal is currently open, let's sync modal text changes before saving
    if (projectModal.classList.contains('active')) {
        for (let i = 0; i < 5; i++) {
            const textContent = document.getElementById(`modalTab${i}`).querySelector('.process-text').innerText;
            projectsData[activeProjectIndex].tabs[i].text = textContent;
        }
    }

    // Write to Local Storage
    localStorage.setItem('ipd_portfolio_text_data', JSON.stringify(textData));
    localStorage.setItem('ipd_portfolio_soft_skills', JSON.stringify(softSkills));
    localStorage.setItem('ipd_portfolio_socials', JSON.stringify(socials));
    localStorage.setItem('ipd_projects_data', JSON.stringify(projectsData));

    // Update Skill bars width
    for (let i = 1; i <= 6; i++) {
        const valText = document.getElementById(`skillVal${i}`).innerText;
        const percent = parseInt(valText.replace(/[^0-9]/g, '')) || 0;
        document.getElementById(`skillBar${i}`).style.width = `${percent}%`;
    }

    // Disable Edit Mode
    disableEditControls();
    alert('บันทึกข้อมูลผลงานสำเร็จเรียบร้อย! ข้อมูลจะถูกเก็บไว้ที่เครื่องบราวเซอร์นี้');
}

function cancelEdits() {
    // Reload original state from localStorage or refresh page
    if (confirm('คุณต้องการยกเลิกการเปลี่ยนแปลงทั้งหมดที่ยังไม่ได้บันทึกใช่หรือไม่?')) {
        location.reload();
    }
}

function disableEditControls() {
    isEditMode = false;
    document.body.classList.remove('edit-active');
    editorPanel.classList.remove('edit-active');
    editTextSpan.innerText = 'แก้ไขข้อมูลที่นี่';
    editHintToast.classList.remove('active');

    document.querySelectorAll('[contenteditable]').forEach(el => {
        el.setAttribute('contenteditable', 'false');
    });

    document.querySelector('.edit-only-container').style.display = 'none';
}

// --- Standalone HTML Export (Generates clean index.html with inline script updates) ---
function exportHTML() {
    // Setup clean cloned DOM
    const htmlClone = document.documentElement.cloneNode(true);
    
    // Remove active and edit states inside clone
    htmlClone.querySelector('body').classList.remove('edit-active');
    const panel = htmlClone.querySelector('#editorPanel');
    if (panel) panel.classList.remove('edit-active');

    // Reset edit text label
    const editText = htmlClone.querySelector('#editText');
    if (editText) editText.innerText = 'แก้ไขข้อมูลที่นี่';

    // Remove toast alert active state
    const toast = htmlClone.querySelector('#editHintToast');
    if (toast) toast.classList.remove('active');

    // Close modal if open
    const modal = htmlClone.querySelector('#projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
    htmlClone.querySelector('body').style.overflow = '';

    // Remove contenteditable attributes
    htmlClone.querySelectorAll('[contenteditable]').forEach(el => {
        el.setAttribute('contenteditable', 'false');
    });

    // Hide edit additions in the template
    const editOnly = htmlClone.querySelector('.edit-only-container');
    if (editOnly) editOnly.style.display = 'none';

    // Embed current projectsData state into the script by replacing script reference or writing inline data
    // We can inject a script tags script variables before the script tag loaded
    const scriptTag = htmlClone.querySelector('script[src="script.js"]');
    
    // Create new inline javascript to pre-load data before script runs
    const dataInjectorScript = htmlClone.createElement('script');
    dataInjectorScript.innerHTML = `
        // Baked variables saved from user editing session
        const prebakedProjectsData = ${JSON.stringify(projectsData)};
        const prebakedTextData = ${JSON.stringify(collectCurrentTextData())};
        const prebakedSoftSkills = ${JSON.stringify(collectCurrentSoftSkills())};
        const prebakedSocials = ${JSON.stringify(collectCurrentSocials())};
        const prebakedTimelines = ${JSON.stringify(collectCurrentTimelines())};

        // Write prebaked values into localStorage so script.js reads it instantly
        localStorage.setItem('ipd_projects_data', JSON.stringify(prebakedProjectsData));
        localStorage.setItem('ipd_portfolio_text_data', JSON.stringify(prebakedTextData));
        localStorage.setItem('ipd_portfolio_soft_skills', JSON.stringify(prebakedSoftSkills));
        localStorage.setItem('ipd_portfolio_socials', JSON.stringify(prebakedSocials));
        localStorage.setItem('ipd_timelines_data', JSON.stringify(prebakedTimelines));
    `;

    if (scriptTag) {
        scriptTag.parentNode.insertBefore(dataInjectorScript, scriptTag);
    }

    // Format output HTML content
    const finalHTML = '<!DOCTYPE html>\n' + htmlClone.outerHTML;

    // Create Download Link
    const blob = new Blob([finalHTML], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'index.html';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

// Helpers for data collection to bake in HTML
function collectCurrentTextData() {
    const textData = {};
    const editableSelectors = [
        'userName', 'userTitle', 'heroName', 'heroDesc', 
        'aboutName', 'aboutNickname', 'aboutUni', 'aboutDegree', 'aboutBio',
        'philosophyText', 'philosophyAuthor',
        'skillVal1', 'skillVal2', 'skillVal3', 'skillVal4', 'skillVal5', 'skillVal6',
        'contactEmail', 'contactPhone', 'contactAddress'
    ];
    editableSelectors.forEach(id => {
        const el = document.getElementById(id);
        if (el) textData[id] = el.innerText.trim();
    });
    const avatarImg = document.getElementById('profileAvatarImg');
    if (avatarImg) textData['profileAvatarImg'] = avatarImg.src;
    return textData;
}

function collectCurrentSoftSkills() {
    const softSkills = [];
    document.querySelectorAll('.soft-skill-tag').forEach(tag => {
        const txt = tag.innerText.trim();
        if (txt) softSkills.push(txt);
    });
    return softSkills;
}

function collectCurrentSocials() {
    return {
        linkBehance: document.getElementById('linkBehance').dataset.href || '#',
        linkLinkedin: document.getElementById('linkLinkedin').dataset.href || '#'
    };
}

function collectCurrentTimelines() {
    const timelinesData = [];
    document.querySelectorAll('.timeline-item').forEach((item) => {
        const date = item.querySelector('.timeline-date').innerText;
        const title = item.querySelector('.timeline-title').innerText;
        const inst = item.querySelector('.timeline-institution').innerText;
        const detail = item.querySelector('.timeline-details').innerText;
        timelinesData.push({ date, title, inst, detail });
    });
    return timelinesData;
}

// Check on start if pre-baked timelines exist and hydrate them
window.addEventListener('load', () => {
    const bakedTimelines = JSON.parse(localStorage.getItem('ipd_timelines_data'));
    if (bakedTimelines && bakedTimelines.length > 0) {
        const items = document.querySelectorAll('.timeline-item');
        bakedTimelines.forEach((data, index) => {
            if (items[index]) {
                items[index].querySelector('.timeline-date').innerText = data.date;
                items[index].querySelector('.timeline-title').innerText = data.title;
                items[index].querySelector('.timeline-institution').innerText = data.inst;
                items[index].querySelector('.timeline-details').innerText = data.detail;
            }
        });
    }
});
