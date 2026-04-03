<script setup lang="ts">


const items = [

    // Dashboard
    {
        categoryName: null,
        menu: [
            {
                menuTitle: "Painel",
                strIcon: "mdi mdi-grid-large menu-icon ",
                link: "/dashboard",
                collapse: '',
                subMenu: null
            },
        ]
    },

    // UI Elements
    {
        categoryName: "UI Elements",
        menu: [
            {
                menuTitle: "UI Elements",
                strIcon: "menu-icon mdi mdi-floor-plan",
                link: "#",
                collapse: "UI_Elements",
                subMenu: [
                    { title: "Buttons", link: "@pages/ui-features/buttons.html" },
                    { title: "Dropdowns", link: "@pages/ui-features/dropdowns.html" },
                    { title: "Typography", link: "@pages/ui-features/typography.html" },
                ]
            },
            {
                menuTitle: "Kits e Ferramentas",
                strIcon: "menu-icon mdi mdi-car",
                link: "#",
                collapse: "Kits_e_Ferramentas",
                subMenu: [
                    { title: "Buttons", link: "@pages/ui-features/buttons.html" },
                    { title: "Dropdowns", link: "@pages/ui-features/dropdowns.html" },
                    { title: "Typography", link: "@pages/ui-features/typography.html" },
                ]
            },
        ]
    },

    // Help
    {
        categoryName: "help",
        menu: [
            {
                menuTitle: "Documentation",
                strIcon: "menu-icon mdi mdi-file-document",
                link: "http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html",
                collapse: "Documentation",
                subMenu: [
                    { title: "Buttons", link: "@pages/ui-features/buttons.html" },
                    { title: "Dropdowns", link: "@pages/ui-features/dropdowns.html" },
                    { title: "Typography", link: "@pages/ui-features/typography.html" },
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
                link: "http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html",
                collapse: "Utilizador",
                subMenu: [
                    { title: "Perfil", link: "@pages/ui-features/buttons.html" },
                    { title: "Documentos", link: "@pages/ui-features/dropdowns.html" },
                    { title: "Saldo", link: "@pages/ui-features/typography.html" },
                ]
            },
        ]
    },
];
</script>

<template>
    <nav class="sidebar sidebar-offcanvas text-white" id="sidebar">
        <ul class="nav ">
            <span v-for="item in items">
            <li v-if="item.categoryName" class="nav-item nav-category"><span class="nav-category-name">{{ item.categoryName }}</span></li>
                <li v-for="menu in item.menu" class="nav-item ">
                    <a class="nav-link" :href="'#' + menu.collapse" data-bs-toggle="collapse" aria-expanded="false"
                        :aria-controls="menu.collapse">
                        <i :class="menu.strIcon"></i>
                        <span class="menu-title"><span class="nav-category-name">{{ menu.menuTitle }}</span></span>
                        <i v-if="menu.subMenu" class="menu-arrow"></i>
                    </a>
                    <div v-if="menu.subMenu" class="collapse" :id="menu.collapse">
                        <ul v-for="sub in menu.subMenu" 
                        class="nav flex-column sub-menu" 
                        style="background-color: #222;">
                            <li class="nav-item" > 
                                <a class="nav-link text-white sub-menu-title"
                                 style="text-decoration: none;" :href="sub.link">{{ sub.title }}</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </span>
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