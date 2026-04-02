<script setup lang="ts">
const items = [
    {
        categoryName: null,
        menu: [
            {
                menuTitle: "Painel",
                strIcon: "mdi mdi-grid-large",
                link: "/dashboard",
                collapse: '',
                subMenu: null
            },
        ]
    },
    {
        categoryName: "UI Elements",
        menu: [
            {
                menuTitle: "UI Elements",
                strIcon: "mdi mdi-floor-plan",
                collapse: "ui",
                subMenu: [
                    { title: "Buttons", link: "#" },
                    { title: "Dropdowns", link: "#" },
                    { title: "Typography", link: "#" },
                ]
            },
            {
                menuTitle: "Kits e Ferramentas",
                strIcon: "mdi mdi-car",
                collapse: "kits",
                subMenu: [
                    { title: "Tools", link: "#" },
                    { title: "Configs", link: "#" },
                ]
            },
        ]
    },
    {
        categoryName: "Utilizador",
        menu: [
            {
                menuTitle: "Conta",
                strIcon: "mdi mdi-account",
                collapse: "user",
                subMenu: [
                    { title: "Perfil", link: "#" },
                    { title: "Saldo", link: "#" },
                ]
            },
        ]
    }
];
</script>

<template>
    <nav id="sidebar">
        <ul class="nav">

            <template v-for="item in items" :key="item.categoryName">

                <!-- Categoria -->
                <li v-if="item.categoryName" class="nav-category">
                    {{ item.categoryName }}
                </li>

                <!-- Menus -->
                <li v-for="menu in item.menu" :key="menu.menuTitle" class="nav-item">

                    <!-- Link principal -->
                    <a class="nav-link"
                       :href="menu.subMenu ? '#' : menu.link"
                       data-bs-toggle="collapse"
                       :data-bs-target="'#' + menu.collapse">

                        <i :class="menu.strIcon"></i>
                        <span>{{ menu.menuTitle }}</span>

                        <i v-if="menu.subMenu" class="arrow mdi mdi-chevron-down"></i>
                    </a>

                    <!-- Submenu -->
                    <div v-if="menu.subMenu" class="collapse" :id="menu.collapse">
                        <ul class="sub-menu">
                            <li v-for="sub in menu.subMenu" :key="sub.title">
                                <a :href="sub.link">{{ sub.title }}</a>
                            </li>
                        </ul>
                    </div>

                </li>

            </template>

        </ul>
    </nav>
</template>

<style scoped>

/* SIDEBAR BASE */
#sidebar {
    width: 260px;
    height: 100vh;
    background: #222;
    padding: 15px 0;
    font-family: Arial, sans-serif;
}

/* NAV */
.nav {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* CATEGORIA */
.nav-category {
    color: #6c7293;
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px 20px;
    margin-top: 10px;
}

/* ITEM */
.nav-item {
    width: 100%;
}

/* LINK PRINCIPAL */
.nav-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #bcbddc;
    padding: 12px 20px;
    text-decoration: none;
    transition: all 0.25s ease;
    position: relative;
}

/* ICON */
.nav-link i {
    font-size: 18px;
}

/* HOVER */
.nav-link:hover {
    background: #2c2c3e;
    color: #fff;
}

/* SETA */
.arrow {
    margin-left: auto;
    transition: transform 0.3s ease;
}

/* ROTAÇÃO quando aberto */
.collapse.show + .arrow {
    transform: rotate(180deg);
}

/* SUBMENU */
.sub-menu {
    list-style: none;
    padding: 5px 0;
    margin: 0;
    background: #2c2c3e;
}

/* ITEM SUBMENU */
.sub-menu li a {
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