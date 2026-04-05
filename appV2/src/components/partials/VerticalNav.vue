<script setup lang="ts">


const items = [

    // Dashboard
    {
        categoryName: null,
        menu: [
            {
                menuTitle: "Painel",
                strIcon: "mdi mdi-grid-large menu-icon ",
                link: "#",
                collapse: "painel",
                subMenu: [
                    { title: "Início", link: "/painel" },
                ]
            },
        ]
    },

    // Actividades
    {
        categoryName: "Actividades",
        menu: [
            {
                menuTitle: "Gestão de Tarefas",
                strIcon: "menu-icon mdi mdi-floor-plan",
                link: "#",
                collapse: "Tarefas",
                subMenu: [
                    { title: "Tarefas", link: "/tarefas" },
                ]
            },
            {
                menuTitle: "Classificação",
                strIcon: "menu-icon mdi mdi-floor-plan",
                link: "#",
                collapse: "pontuacao",
                subMenu: [
                    { title: "Excelentes", link: "#" },
                    { title: "Médios", link: "#" },
                    { title: "Baixos", link: "#" },
                ]
            },
        ]
    },

    // Help
    {
        categoryName: "Ajuda",
        menu: [
            {
                menuTitle: "Ajuda e Suporte",
                strIcon: "menu-icon mdi mdi-file-document",
                link: "#",
                collapse: "Documentation",
                subMenu: [
                    { title: "Reportar Erro", link: "#" },
                    { title: "Suporte Técnico", link: "#" },
                ]
            },
        ]
    },

    // Utilizador
    {
        categoryName: "Utilizador",
        menu: [
            {
                menuTitle: "Utilizador",
                strIcon: "menu-icon mdi mdi-account-circle-outline",
                link: "#",
                collapse: "Utilizador",
                subMenu: [
                    { title: "Perfil", link: "#" },
                    { title: "Documentos", link: "#" },
                    { title: "Saldo", link: "#" },
                ]
            },
        ]
    },
];
</script>

<template>
    <nav class="sidebar sidebar-offcanvas text-white" id="sidebar">
        <ul class="nav ">
            <div v-for="item in items">
                <li v-if="item.categoryName" class="nav-item nav-category">
                    <span class="nav-category-name">{{ item.categoryName }}
                        </span>
                </li>
                <li v-for="menu in item.menu" class="nav-item ">
                    <a class="nav-link" :href="menu.link + menu.collapse" data-bs-toggle="collapse" aria-expanded="false"
                        :aria-controls="menu.collapse">
                        <i :class="menu.strIcon"></i>
                        <span class="menu-title"><span class="nav-category-name">{{ menu.menuTitle }}</span></span>
                        <i v-if="menu.subMenu" class="menu-arrow"></i>
                    </a>
                    <div v-if="menu.subMenu" class="collapse" :id="menu.collapse">
                        <ul v-for="sub in menu.subMenu" class="nav flex-column sub-menu"  style="background-color: #222;">
                            <li class="nav-item" > 
                                <a class="nav-link text-white sub-menu-title"
                                 style="text-decoration: none;" :href="sub.link">{{ sub.title }}</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </div>
        </ul>
    </nav>
</template>

<style scoped>
.nav-item,
.nav {
    background: #222;
    color: white;
}

.sub-menu {
    background-color: aliceblue;
}

#sidebar {
    background-color: #222;
}

.nav .nav-item .nav-link,
.nav-category-name,
.nav-category-icon {
    color: white;
}

.nav .collapse .nav .nav-item {
    background-color: #222;
}

.nav .collapse .nav .nav-item {
    background-color: #222;
}

.sub-menu {
    list-style: none;
    padding: 5px 0;
    margin: 0;
    background: #2c2c3e;
}

/* ITEM SUBMENU */
.sub-menu li a {
    min-width: 100%;
    display: block;
    padding: 10px 40px;
    color: #a6a7c1;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.2s ease;
}

/* HOVER SUBMENU */
.sub-menu li a:hover {
    background: #3a3a50;
    color: #fff;
}

/* ITEM ATIVO (opcional) */
.sub-menu li a.active {
    background: #4b49ac;
    color: white;
}

</style>