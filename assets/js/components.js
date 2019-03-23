'use strict'

let tambahitem = {
  show: false
};

Vue.component('app-header', {
  data: () => ({
    tambahitem,
    menu: false,
  }),
  methods: {
    showmenu() {
      this.menu = !this.menu;
    },
  },
  template: `<header>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item is-size-4">Buku Telepon</a>
        <a role="button" class="navbar-burger burger" @click="showmenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      
      <div class="navbar-menu" :class="menu ? 'is-active': ''">
        <div class="navbar-start">
          <!-- <a href="#" class="navbar-item">asdsd</a> -->
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="navbar-item button is-primary" @click="tambahitem.show = true">Tambah Item</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>`,
});

Vue.component('app-main', {
  data: () => ({
    tambahitem,
  }),
  template: `<main class="columns is-centered" style="margin-top: 10px">
    <div class="column is-6">

      <!-- TAMBAH KONTAK -->
      <div class="columns" v-if="tambahitem.show">
        <div class="column card">
          <div class="card-header">
            <div class="card-header-title">Tambah Kontak</div>
          </div>
          <div class="card-content">
            Nama: <br/> Nomor:
          </div>
          <div class="card-footer">
            <a class="card-footer-item" style="color: #3273dc">Simpan</a>
            <a class="card-footer-item" style="color: red" @click="tambahitem.show = false">Batal</a>
          </div>
        </div>
      </div>

      <!-- LIST KONTAK -->
      <div class="columns">
          <div class="column">list kontak</div>
        </div>
    </div>
  </main>`,
});

Vue.component('app-footer', {
  data: () => ({}),
  template: `<footer style="position: absolute; bottom: 0; left: 0; right: 0" class="navbar is-dark">
    sadsd
  </footer>`,
});

