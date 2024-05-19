<template>
  <nav class="navbar navbar-expand-lg" style="background-color: lightblue">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SHOPPING</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/home2" class="nav-link" aria-current="page"
              >หน้าแรก
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/cart2" class="nav-link" aria-current="page"
              >ตะกร้าสินค้า</router-link
            >
          </li>
        </ul>
        <div class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="ค้นหา...."
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
