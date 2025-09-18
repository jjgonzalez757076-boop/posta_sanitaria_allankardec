// JavaScript para Centro ALLAN KARDEC

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Inicializar todas las funcionalidades
    initNavbarScroll();
    initSmoothScrolling();
    initArticleSlider();
    initSearchFunctionality();
    initWhatsAppForm();
    initScrollAnimations();
    initParticleEffects();
    initContactForm();
});

// Funcionalidad del Navbar al hacer scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar-custom');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling para los enlaces del menú
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajustar por altura del navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Slider de artículos con rotación automática
function initArticleSlider() {
    const articles = [
        {
            title: "Importancia de los Chequeos Preventivos",
            description: "Los exámenes médicos regulares son fundamentales para detectar enfermedades en etapas tempranas y mantener un estilo de vida saludable. Conoce cuáles son los estudios que debes realizarte según tu edad.",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop",
            meta: "Nuevo"
        },
        {
            title: "Alimentación Saludable para Toda la Familia",
            description: "Una dieta equilibrada es la base de una vida saludable. Te compartimos consejos nutricionales y recetas fáciles para implementar hábitos alimentarios saludables en tu hogar.",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=200&fit=crop",
            meta: "Destacado"
        },
        {
            title: "Ejercicios para Fortalecer el Sistema Inmune",
            description: "La actividad física regular fortalece nuestras defensas naturales. Descubre qué ejercicios son más efectivos y cómo integrarlos en tu rutina diaria para mejorar tu salud integral.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
            meta: "Tendencia"
        },
        {
            title: "Manejo del Estrés y Técnicas de Relajación",
            description: "El estrés crónico puede afectar significativamente nuestra salud física y mental. Aprende técnicas efectivas de relajación y manejo del estrés para mejorar tu calidad de vida.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop",
            meta: "Salud Mental"
        },
        {
            title: "Importancia de la Vacunación en Adultos",
            description: "La vacunación no es solo para niños. Conoce qué vacunas necesitas como adulto y cómo mantener tu esquema de inmunización actualizado para protegerte y proteger a tu comunidad.",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=200&fit=crop",
            meta: "Prevención"
        },
        {
            title: "Síntomas de Alerta que No Debes Ignorar",
            description: "Aprende a reconocer los síntomas que requieren atención médica inmediata. La detección temprana puede salvar vidas y prevenir complicaciones graves de salud.",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=200&fit=crop",
            meta: "Urgente"
        }
    ];

    let currentArticleSet = 0;
    const articlesPerPage = 4;

    function updateArticles() {
        const articleCards = document.querySelectorAll('.article-card');
        
        articleCards.forEach((card, index) => {
            const articleIndex = (currentArticleSet * articlesPerPage + index) % articles.length;
            const article = articles[articleIndex];
            
            // Agregar animación de salida
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                // Actualizar contenido
                const meta = card.querySelector('.article-meta');
                const image = card.querySelector('.article-image');
                const title = card.querySelector('.article-title');
                const description = card.querySelector('.article-description');
                
                meta.textContent = article.meta;
                image.style.backgroundImage = `url('${article.image}')`;
                title.textContent = article.title;
                description.textContent = article.description;
                
                // Agregar animación de entrada
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300);
        });
        
        currentArticleSet = (currentArticleSet + 1) % Math.ceil(articles.length / articlesPerPage);
    }

    // Cambiar artículos cada 10 segundos
    setInterval(updateArticles, 10000);
}

// Funcionalidad de búsqueda
function initSearchFunctionality() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                // Simular búsqueda con efectos visuales
                searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Buscando...';
                searchBtn.disabled = true;
                
                setTimeout(() => {
                    // Restablecer botón
                    searchBtn.innerHTML = '<i class="fas fa-search me-2"></i>Buscar';
                    searchBtn.disabled = false;
                    
                    // Mostrar alerta de resultados (simulado)
                    showNotification(`Búsqueda realizada para: "${searchTerm}". Mostrando resultados relacionados.`, 'success');
                    
                    // Limpiar campo de búsqueda
                    searchInput.value = '';
                }, 2000);
            }
        });

        // Búsqueda en tiempo real (sugerencias)
        searchInput.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            const suggestions = [
                'medicina general', 'pediatría', 'cardiología', 'ginecología',
                'laboratorio', 'emergencias', 'vacunas', 'chequeos', 'análisis'
            ];
            
            if (value.length > 2) {
                const matches = suggestions.filter(s => s.includes(value));
                // Aquí podrías mostrar sugerencias en un dropdown
            }
        });
    }
}

// Funcionalidad del formulario de WhatsApp
function initWhatsAppForm() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const form = document.getElementById('consultationForm');

    if (whatsappBtn && form) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombrePaciente').value;
            const telefono = document.getElementById('telefonoPaciente').value;
            const email = document.getElementById('emailPaciente').value;
            const tipoConsulta = document.getElementById('tipoConsulta').value;
            const descripcion = document.getElementById('descripcionConsulta').value;
            
            // Validar campos obligatorios
            if (!nombre || !telefono || !descripcion) {
                showNotification('Por favor, complete todos los campos obligatorios (Nombre, Teléfono y Descripción).', 'error');
                return;
            }
            
            // Validar formato de teléfono básico
            const telefonoRegex = /^[\+]?[1-9][\d\s\-\(\)]{8,}$/;
            if (!telefonoRegex.test(telefono.replace(/\s/g, ''))) {
                showNotification('Por favor, ingrese un número de teléfono válido.', 'error');
                return;
            }
            
            // Crear mensaje para WhatsApp
            const mensaje = createWhatsAppMessage(nombre, telefono, email, tipoConsulta, descripcion);
            
            // Número de WhatsApp del centro médico (CAMBIAR POR EL NÚMERO REAL)
            const numeroWhatsApp = '5493812345678'; // Formato: código país + área + número
            
            // Crear URL de WhatsApp
            const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Limpiar formulario después de enviar
            form.reset();
            showNotification('Redirigiendo a WhatsApp... Su consulta será enviada.', 'success');
        });
    }
}

// Crear mensaje formateado para WhatsApp
function createWhatsAppMessage(nombre, telefono, email, tipoConsulta, descripcion) {
    return `🏥 *CONSULTA MÉDICA - ALLAN KARDEC*

👤 *Paciente:* ${nombre}
📱 *Teléfono:* ${telefono}
${email ? `📧 *Email:* ${email}` : ''}
🩺 *Tipo de Consulta:* ${tipoConsulta}

📋 *Descripción de la Consulta:*
${descripcion}

---
Mensaje enviado desde el sitio web del Centro de Atención Primaria ALLAN KARDEC
🕒 ${new Date().toLocaleString('es-AR')}`;
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos con clase fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Efectos de partículas médicas
function initParticleEffects() {
    const particleContainer = document.querySelector('.medical-particles');
    
    if (particleContainer) {
        // Crear partículas adicionales dinámicamente
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Propiedades aleatorias
            const size = Math.random() * 6 + 2;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = left + '%';
            particle.style.animationDuration = animationDuration + 's';
            particle.style.animationDelay = delay + 's';
            
            particleContainer.appendChild(particle);
            
            // Remover partícula después de la animación
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, (animationDuration + delay) * 1000);
        }
        
        // Crear partículas periódicamente
        setInterval(createParticle, 2000);
    }
}

// Inicializar formulario de contacto adicional
function initContactForm() {
    // Agregar validación en tiempo real a los campos del formulario
    const formInputs = document.querySelectorAll('.form-control-custom');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('focus', function() {
            this.classList.remove('is-invalid');
        });
    });
}

// Validar campo individual
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Validaciones específicas por tipo de campo
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{8,}$/;
        isValid = phoneRegex.test(value.replace(/\s/g, ''));
    }
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Aplicar estilos de validación
    if (!isValid) {
        field.classList.add('is-invalid');
        field.style.borderColor = '#dc3545';
    } else {
        field.classList.remove('is-invalid');
        field.style.borderColor = '#28a745';
    }
    
    return isValid;
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)} me-2"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        min-width: 300px;
        max-width: 500px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        animation: slideInFromRight 0.3s ease;
        font-family: inherit;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutToRight 0.3s ease forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Agregar estilos de animación adicionales para notificaciones
const additionalStyles = `
<style>
@keyframes slideInFromRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutToRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

.notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    padding: 0;
    margin-left: 15px;
}

.notification-close:hover {
    opacity: 1;
}

.is-invalid {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.error('Error en el sitio:', e.error);
});

// Optimización de rendimiento
const deferredScripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'
];

// Cargar scripts no críticos después de que la página esté completamente cargada
window.addEventListener('load', function() {
    // Precargar imágenes importantes
    const importantImages = [
        'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Navegación con teclado para elementos interactivos
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('social-icon') || 
            e.target.classList.contains('article-card')) {
            e.target.click();
        }
    }
});

console.log('🏥 Centro ALLAN KARDEC - Sistema inicializado correctamente');