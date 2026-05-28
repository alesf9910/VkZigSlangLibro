/**
 * DATA.JS - Contenido del libro
 * Este archivo contiene toda la estructura y contenido del libro
 */

const bookData = {
    meta: {
        title: "Vulkan 1.4 con Zig 0.17.0",
        author: "Alesf9910",
        version: "1.0.0",
        language: "es",
        totalPages: 450
    },

    // Página de inicio
    inicio: {
        id: "inicio",
        title: "Vulkan 1.4 con Zig 0.17.0",
        subtitle: "Construye un motor gráfico moderno de alto rendimiento",
        type: "cover",
        content: `
            <div class="cover-content">
                <h1>Vulkan 1.4 con Zig 0.17.0</h1>
                <h2>Construye un motor gráfico moderno de alto rendimiento</h2>
                
                <div class="cover-meta">
                    <p><strong>Autor:</strong> Alesf9910</p>
                    <p><strong>Versión:</strong> 1.0.0</p>
                    <p><strong>Año:</strong> 2024</p>
                </div>

                <div class="cover-description">
                    <p>Este libro te guiará a través de la construcción de un motor gráfico completo utilizando Vulkan 1.4 y el lenguaje de programación Zig 0.17.0.</p>
                    
                    <p>Aprenderás:</p>
                    <ul>
                        <li>Los fundamentos de Vulkan y gráficos modernos</li>
                        <li>Cómo usar Zig para programación de bajo nivel</li>
                        <li>Construcción de un renderer 2D y 3D</li>
                        <li>Sistemas de composición y postprocesado</li>
                        <li>Integración de física y simulaciones</li>
                        <li>Arquitectura escalable de motores gráficos</li>
                    </ul>

                    <p><strong>Requisitos previos:</strong> Conocimiento de C/C++, conceptos básicos de gráficos, familiaridad con línea de comandos.</p>

                    <p><strong>Nota importante:</strong> Este libro utiliza <code>translatec</code> en lugar de <code>cImport</code>, reflejando los cambios en Zig 0.17.0.</p>
                </div>

                <div class="cover-toc">
                    <h3>Contenido Principal</h3>
                    <ul>
                        <li>9 Partes temáticas</li>
                        <li>54 Capítulos detallados</li>
                        <li>~450 páginas de contenido</li>
                        <li>Ejemplos de código completos</li>
                        <li>Ejercicios prácticos</li>
                    </ul>
                </div>
            </div>
        `
    },

    // Partes y Capítulos
    parts: [
        {
            id: "parte1",
            number: "I",
            title: "Fundamentos y preparación",
            estimatedPages: "74–98",
            chapters: [
                {
                    id: "cap1",
                    number: 1,
                    title: "Qué vas a construir y cómo pensar Vulkan + Zig",
                    pages: "12–16",
                    content: `
                        <h2>Capítulo 1: Qué vas a construir y cómo pensar Vulkan + Zig</h2>

                        <h3>Introducción</h3>
                        <p>Este primer capítulo establece el mapa mental del libro y te ayuda a entender por qué Vulkan es una opción poderosa para gráficos modernos, y por qué Zig es el lenguaje perfecto para implementarlo.</p>

                        <h3>1.1 El viaje gráfico: de OpenGL a Vulkan</h3>
                        <p>OpenGL fue revolucionario en su época. Proporcionaba una abstracción simple sobre el hardware gráfico, permitiendo que miles de desarrolladores crearan aplicaciones 3D. Sin embargo, con el tiempo, sus limitaciones se hicieron evidentes:</p>

                        <ul>
                            <li><strong>Overhead de driver:</strong> OpenGL añadía capas de abstracción que ralentizaban las aplicaciones</li>
                            <li><strong>Multihilo limitado:</strong> El modelo de contexto único de OpenGL no escalaba bien con CPUs modernas</li>
                            <li><strong>Bajo nivel de control:</strong> No podías optimizar la memoria o el timing con precisión</li>
                        </ul>

                        <p>Vulkan fue diseñado para resolver estos problemas. Es una API de bajo nivel que te da control explícito sobre:</p>
                        <ul>
                            <li>Asignación de memoria</li>
                            <li>Sincronización de comandos</li>
                            <li>Compilación y validación de shaders</li>
                            <li>Multihilo sin restricciones</li>
                        </ul>

                        <div class="box note">
                            <div class="box-title">Nota sobre abstracciones</div>
                            <p>Vulkan no es "más fácil" que OpenGL. Es más explícito. Eso significa más código, pero también significa que <strong>tú controlas todo</strong>.</p>
                        </div>

                        <h3>1.2 ¿Por qué Zig?</h3>
                        <p>Zig es un lenguaje moderno compilado que se enfoca en seguridad, rendimiento y simplicidad. Para programación gráfica, ofrece ventajas únicas:</p>

                        <ul>
                            <li><strong>Interoperabilidad C:</strong> Vulkan está basado en C, y Zig hace que trabajar con C sea seguro y ergonómico</li>
                            <li><strong>Control de memoria:</strong> Zig no tiene recolector de basura. Tú gestiona la memoria, lo que es crítico en código gráfico de alto rendimiento</li>
                            <li><strong>Errores explícitos:</strong> El sistema de errores de Zig obliga a que maneja casos fallidos, previniendo crashes silenciosos</li>
                            <li><strong>Compiles condicionales:</strong> Zig permite compilar código específico para diferentes plataformas (Windows, Linux, macOS, WebGPU)</li>
                        </ul>

                        <h3>1.3 La arquitectura de este libro</h3>
                        <p>Construiremos un motor de render completo en capas:</p>

                        ${createDiagram('arquitectura-motor', [
                            { label: 'Aplicación', color: '#6366f1' },
                            { label: 'Motor Render 3D', color: '#8b5cf6' },
                            { label: 'Motor Render 2D', color: '#8b5cf6' },
                            { label: 'Motor Física', color: '#8b5cf6' },
                            { label: 'Motor Composición', color: '#8b5cf6' },
                            { label: 'Backend Vulkan', color: '#ec4899' },
                            { label: 'Hardware GPU', color: '#666' }
                        ])}

                        <h3>1.4 Filosofía de Vulkan</h3>
                        <p>Vulkan se basa en estos principios:</p>

                        <div class="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Principio</th>
                                        <th>Significa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Explicitness</strong></td>
                                        <td>Todo debe ser explícito. No hay comportamiento mágico.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Performance</strong></td>
                                        <td>La velocidad es una característica de primer nivel.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Portability</strong></td>
                                        <td>El código funciona en múltiples plataformas sin cambios.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Predictability</strong></td>
                                        <td>No hay sorpresas. Lo que ves es lo que obtienes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Resumen del capítulo</h3>
                        <p>En este capítulo aprendiste:</p>
                        <ul>
                            <li>Por qué Vulkan es importante en gráficos modernos</li>
                            <li>Cómo Zig se complementa con Vulkan</li>
                            <li>La arquitectura general del motor que construiremos</li>
                            <li>Los principios filosóficos de Vulkan</li>
                        </ul>

                        <div class="box tip">
                            <div class="box-title">Siguiente paso</div>
                            <p>En el próximo capítulo, instalaremos Vulkan SDK, configuraremos Zig 0.17.0 y prepararemos nuestro entorno de desarrollo.</p>
                        </div>
                    `
                },
                {
                    id: "cap2",
                    number: 2,
                    title: "Instalación, herramientas y entorno de desarrollo",
                    pages: "14–18",
                    content: `
                        <h2>Capítulo 2: Instalación, herramientas y entorno de desarrollo</h2>

                        <h3>2.1 Instalación de Zig 0.17.0</h3>
                        
                        <h4>En Linux (Ubuntu/Debian)</h4>
                        ${codeBlock('bash', \`
# Descargar Zig 0.17.0
wget https://ziglang.org/download/0.17.0/zig-linux-x86_64-0.17.0.tar.xz

# Extraer
tar xf zig-linux-x86_64-0.17.0.tar.xz

# Añadir a PATH
export PATH=~/zig-0.17.0:\$PATH

# Verificar
zig version
                        \`, 'bash')}

                        <h4>En macOS</h4>
                        ${codeBlock('bash', \`
# Usando Homebrew
brew install zig

# O descargar manualmente
curl https://ziglang.org/download/0.17.0/zig-macos-x86_64-0.17.0.tar.xz -O
tar xf zig-macos-x86_64-0.17.0.tar.xz
export PATH=~/zig-0.17.0:\$PATH
                        \`, 'bash')}

                        <h4>En Windows</h4>
                        ${codeBlock('bash', \`
# Descargar desde https://ziglang.org/download/
# O usar Chocolatey
choco install zig

# Verificar en PowerShell
zig version
                        \`, 'bash')}

                        <h3>2.2 Instalación de Vulkan SDK</h3>

                        <h4>En Linux</h4>
                        ${codeBlock('bash', \`
# Instalar dependencias
sudo apt-get install -y \\
    libvulkan-dev \\
    vulkan-tools \\
    vulkan-validationlayers-dev

# Descargar Vulkan SDK
curl https://sdk.lunarg.com/sdk/download/latest/linux/vulkan-sdk.tar.gz -O
tar -xzf vulkan-sdk.tar.gz

# Establecer variables de entorno
source ~/VulkanSDK/setup-env.sh
                        \`, 'bash')}

                        <h4>En macOS</h4>
                        ${codeBlock('bash', \`
# Descargar y instalar desde https://vulkan.lunarg.com/sdk/home
# O usar Homebrew
brew install vulkan-headers vulkan-loader

# Verificar
vulkaninfo
                        \`, 'bash')}

                        <h4>En Windows</h4>
                        <p>Descargar el installer desde https://vulkan.lunarg.com/sdk/home</p>

                        <h3>2.3 Estructura de proyecto</h3>
                        
                        <p>Crearemos una estructura organizada para nuestro proyecto:</p>

                        ${codeBlock('text', \`
proyecto-vulkan-zig/
├── build.zig                    # Script de construcción de Zig
├── src/
│   ├── main.zig                # Punto de entrada
│   ├── window.zig              # Gestión de ventanas
│   ├── vulkan/
│   │   ├── instance.zig        # Instancia Vulkan
│   │   ├── device.zig          # Dispositivo lógico
│   │   ├── swapchain.zig       # Swapchain
│   │   ├── pipeline.zig        # Pipeline gráfico
│   │   └── shader.zig          # Compilación de shaders
│   ├── render/
│   │   ├── renderer_2d.zig     # Renderer 2D
│   │   ├── renderer_3d.zig     # Renderer 3D
│   │   └── composer.zig        # Composición
│   ├── physics/
│   │   ├── body.zig            # Cuerpos rígidos
│   │   ├── collision.zig       # Detección de colisiones
│   │   └── simulator.zig       # Motor físico
│   ├── math/
│   │   ├── vector.zig          # Vectores
│   │   └── matrix.zig          # Matrices
│   └── utils/
│       ├── allocator.zig       # Gestión de memoria
│       ├── logger.zig          # Logging
│       └── file.zig            # I/O de archivos
├── shaders/
│   ├── simple.vert             # Vertex shader
│   ├── simple.frag             # Fragment shader
│   └── compile.sh              # Script de compilación
├── assets/
│   ├── models/                 # Modelos 3D
│   ├── textures/               # Texturas
│   └── fonts/                  # Fuentes
└── build/                      # Salida compilada
        \`, 'text')}

                        <h3>2.4 Archivo build.zig</h3>

                        ${codeBlock('zig', \`
const std = @import("std");
const Build = std.Build;

pub fn build(b: *Build) void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});

    const exe = b.addExecutable(.{
        .name = "vulkan-zig",
        .root_source_file = b.path("src/main.zig"),
        .target = target,
        .optimize = optimize,
    });

    // Agregar dependencias (GLFW, Vulkan, etc.)
    exe.linkSystemLibrary("vulkan");
    exe.linkSystemLibrary("glfw3");
    exe.linkLibC();

    b.installArtifact(exe);

    const run_cmd = b.addRunArtifact(exe);
    if (b.args) |args| {
        run_cmd.addArgs(args);
    }

    const run_step = b.step("run", "Ejecutar la aplicación");
    run_step.dependOn(&run_cmd.step);
}
                        \`, 'zig')}

                        <h3>2.5 Herramientas complementarias</h3>

                        <h4>RenderDoc</h4>
                        <p>Herramienta de debugging para capturar y analizar frames Vulkan:</p>
                        ${codeBlock('bash', \`
# Linux
sudo apt-get install renderdoc

# macOS
brew install renderdoc

# Windows: Descargar desde https://renderdoc.org/
                        \`, 'bash')}

                        <h4>Validadores de Vulkan</h4>
                        <p>Ya incluidos en el SDK. Usa variables de entorno para habilitarlos:</p>
                        ${codeBlock('bash', \`
export VK_LAYER_PATH=/path/to/vulkan/sdk/etc/vulkan/explicit_layer.d
                        \`, 'bash')}

                        <h3>Resumen</h3>
                        <p>Has configurado exitosamente tu entorno con Zig 0.17.0, Vulkan SDK y las herramientas necesarias para comenzar.</p>
                    `
                }
                // Más capítulos...
            ]
        },
        // Más partes...
    ]
};

/**
 * Función auxiliar para crear bloques de código
 */
function codeBlock(language, code, label = null) {
    const trimmedCode = code.trim();
    return \`
        <div class="code-block">
            <div class="code-block-header">
                <span class="code-block-lang">\${label || language}</span>
                <button class="copy-code-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre class="code"><code class="language-\${language}">\${escapeHtml(trimmedCode)}</code></pre>
        </div>
    \`;
}

/**
 * Función auxiliar para crear diagramas
 */
function createDiagram(id, items) {
    const html = items.map((item, index) => \`
        <div class="diagram-item" style="background-color: \${item.color}20; border: 2px solid \${item.color};">
            \${item.label}
        </div>
    \`).join('');

    return \`
        <div class="diagram" id="\${id}">
            \${html}
        </div>
    \`;
}

/**
 * Función para escapar HTML
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Referencia de capítulos
 */
const chapterIndex = {};

// Construir índice de capítulos
bookData.parts.forEach((part, partIndex) => {
    part.chapters.forEach((chapter, chapterIndex) => {
        chapterIndex[\`cap\${chapter.number}\`] = {
            part: partIndex,
            chapter: chapterIndex,
            ...chapter
        };
    });
});

/**
 * Página de referencias
 */
const referencias = {
    id: "referencias",
    title: "Referencias y Recursos",
    subtitle: "Enlaces útiles y documentación",
    type: "reference",
    content: `
        <h2>Referencias y Recursos</h2>

        <h3>Documentación oficial</h3>
        <ul>
            <li><a href="https://vulkan.lunarg.com/" target="_blank">Vulkan SDK - LunarG</a></li>
            <li><a href="https://ziglang.org/" target="_blank">Zig Programming Language</a></li>
            <li><a href="https://www.glfw.org/" target="_blank">GLFW - Window Library</a></li>
        </ul>

        <h3>Especificaciones</h3>
        <ul>
            <li><a href="https://registry.khronos.org/vulkan/" target="_blank">Vulkan Specification</a></li>
            <li><a href="https://www.khronos.org/opengl/wiki/GLSL" target="_blank">GLSL Specification</a></li>
        </ul>

        <h3>Tutoriales recomendados</h3>
        <ul>
            <li><a href="https://vulkan-tutorial.com/" target="_blank">Vulkan Tutorial</a></li>
            <li><a href="https://learnopengl.com/" target="_blank">LearnOpenGL (conceptos similares)</a></li>
        </ul>

        <h3>Herramientas</h3>
        <ul>
            <li><a href="https://renderdoc.org/" target="_blank">RenderDoc - GPU Debugger</a></li>
            <li><a href="https://www.lunarg.com/vulkan-tools/" target="_blank">Vulkan Tools</a></li>
        </ul>
    `
};
