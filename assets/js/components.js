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
    contacts: [],
    name: '',
    phone: '',
    hapus: false,
    detail: false,
  }),
  async mounted () {
    this.contacts = (await ajax.get('/')).data;
  },
  methods: {
    async simpan() {
      try {
        const response = await ajax.post('/', {
          name: this.name,
          phone: this.phone
        })

        if (response.data.status == 'OK') {
          this.contacts = (await ajax.get('/')).data;
        } else {
          window.alert('FAIL');
        }
      } catch (er) {

      }
    }
  },
  template: `<main class="columns is-centered" style="margin-top: 10px">
    <div class="column is-6">

      <!-- TAMBAH KONTAK -->
      <div class="columns" v-if="tambahitem.show" style="margin-bottom: 25px">
        <div class="column card">
          <div class="card-header">
            <div class="card-header-title">Tambah Kontak</div>
          </div>
          <div class="card-content">
            <label class="label">Nama
              <input class="input" type="text" v-model="name" placeholder="Masukkan Nama">
            </label>
            <label class="label">Telepon
              <input class="input" type="text" v-model="phone" placeholder="Masukkan Nomor Telepon">
            </label>
          </div>
          <div class="card-footer">
            <a class="card-footer-item" style="color: #3273dc" @click="simpan()">Simpan</a>
            <a class="card-footer-item" style="color: red" @click="tambahitem.show = false; name = ''; phone = ''">Batal</a>
          </div>
        </div>
      </div>

      <!-- LIST KONTAK -->
      <div class="columns">
          <div class="column card">
            <div class="card-header">
              <div class="card-header-title">List Kontak</div>
            </div>
            <div class="card-content">
              <div class="list is-hoverable">
                <span class="list-item" v-for="(kontak, index) in contacts" :key="index">
                  <div class="columns">
                    <div class="column is-9">
                      <span>{{kontak.name}}</span>
                      <span style="color: #999">- {{kontak.phone}}</span>
                    </div>
                    <div class="column">
                      <a class="button is-success is-small" @click="detail = true">Detail</a>
                      <a class="button is-danger is-small" @click="hapus = true">Hapus</a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- DIALOG HAPUS -->
    <div class="modal" :class="hapus ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <div class="card-header-title">Konfirmasi</div>
          <div class="card-content">
            Apakah Anda yakin menghapus kontak ini?
          </div>
          <div class="card-footer">
            <a class="card-footer-item" style="color: #dc3232" @click="() => {}">Yakin</a>
            <a class="card-footer-item" style="color: #3273dc" @click="() => {}">Batal</a>
          </div>
        </div>
      </div>
      <div class="modal-close is-large" aria-label="close" @click="hapus=false"></div>
    </div>

    <!-- DIALOG DETAIL -->
    <div class="modal" :class="detail ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">
            <div class="card-header-title">Detail</div>
            <div class="card-content">
              Detail
            </div>
          </div>
        </div>
        <div class="modal-close is-large" aria-label="close" @click="detail=false"></div>
      </div>
  </main>`,
});

Vue.component('app-footer', {
  data: () => ({}),
  template: `<footer style="position: absolute; bottom: 0; left: 0; right: 0" class="navbar is-dark">
    sadsd
  </footer>`,
});

