const projects = {
  engine: {
    title: 'V6 发动机', category: '01 / 动力与传动', image: './assets/v6-engine.png',
    alt: 'V6 发动机装配模型，清晰展示链条、齿轮、凸轮轴与排气歧管',
    description: 'V 型发动机装配模型。视图展示了气缸布局、顶部凸轮轴、链条与齿轮传动，以及一侧排气歧管的空间关系。'
  },
  arm: {
    title: '多自由度机械手', category: '02 / 机器人机构', image: './assets/multi-axis-arm.png',
    alt: '多自由度机械手装配模型，展示基座、关节、连杆和末端夹爪',
    description: '机械手整体装配模型。基座、关节、连杆和末端夹爪共同构成可观察的多段机械结构。'
  },
  drone: {
    title: '农业无人机', category: '03 / 整机布局', image: './assets/agricultural-drone.png',
    alt: '农业无人机整机模型，展示多旋翼、机臂、机体和起落结构',
    description: '多旋翼无人机整机模型。机臂与旋翼围绕中央机体布置，并呈现下部起落结构。'
  },
  fivejaw: {
    title: '五爪夹持机构', category: '04 / 末端执行器', image: './assets/five-jaw-gripper.png',
    alt: '五爪夹持机构模型，展示弧形指爪、铰接点和支撑结构',
    description: '多爪夹持装配模型。多个弧形指爪围绕中心结构布置，展示了铰接、支撑和夹持空间的关系。'
  },
  hand: {
    title: '五指气动机械爪', category: '05 / 气动机构', image: './assets/pneumatic-hand.png',
    alt: '五指气动机械爪模型，展示上部驱动件、连杆与五指夹爪',
    description: '气动机械爪装配模型。上部驱动结构与下方连杆、指爪相连，呈现五指机构的整体构型。'
  }
};

const dialog = document.getElementById('project-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogTitle = document.getElementById('dialog-title');
const dialogCategory = document.getElementById('dialog-category');
const dialogDescription = document.getElementById('dialog-description');
let previousFocus = null;

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    previousFocus = card;
    dialogImage.src = project.image;
    dialogImage.alt = project.alt;
    dialogTitle.textContent = project.title;
    dialogCategory.textContent = project.category;
    dialogDescription.textContent = project.description;
    dialog.showModal();
    dialog.querySelector('.dialog-close').focus();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogImage.removeAttribute('src');
  if (previousFocus) previousFocus.focus();
});
