<template>
  <div>
      <section class="bg-indigo py-5">
          <div class="w-75 ml-auto mr-auto h-full">
              <div class="d-flex align-items-center justify-content-center text-center h-full">
                  <div>
                      <h1 class="text-4xl sm:text-5xl font-semibold mb-3">theWishlist </h1>
                      <h2 class="text-2xl sm:text-3xl text-indigo-darker opacity-75 font-normal leading-tight mb-5"> Воплащайте Ваши желания вместе с нами!</h2>

                      <div class="d-flex  justify-content-center pt-5">
                        <router-link class="btn btn-primary mx-2 px-3" :to="{ name: 'signup'}" exact>
                            Создать Аккаунт
                        </router-link>
                        <router-link class="btn btn-outline-primary mx-2 px-3 "  :to="{ name: 'login'}" exact>
                            Войти
                        </router-link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="bg-light py-5">
          <div class="w-75 ml-auto mr-auto mt-5 mb-5">
              <div class="d-flex flex-wrap -mx-6 -my-6 justify-content-center">
                  <div class="w-25 px-3 py-3">
                      <div class="mb-3">
                        <fa :icon="['far', 'lightbulb']" size="2x" class="text-indigo" />
                      </div>
                    <h3 class="text-3xl font-semibold mb-3">Всегда видно чего бы я хотел</h3>
                    <p class="text-lg leading-normal text-grey-dark mb-8">Вы можете добавлять бесконечное количетсвао желаний. Вы можете изменять их статус или категорию. А также указать дату исполнения</p>
                  </div>
                  <div class="w-25 px-3 py-3">
                      <div class="mb-3">
                        <fa icon="mobile-alt" size="2x" class="text-indigo" />
                      </div>
                    <h3 class="text-3xl font-semibold mb-3">Современный дизайне</h3>
                    <p class="text-lg leading-normal text-grey-dark mb-8">Отлично работать за компьютером и в мобильном телефоне</p>
                  </div>
              </div>
          </div>
      </section>

      <section class="bg-white py-5">
          <div class="w-75  ml-auto mr-auto my-4">
            <div class="d-flex flex-column justify-content-center text-center pb-5">
              <h2 class="text-5xl font-semibold mb-4">Готово к использованию. Полностью.</h2>
              <h3 class="text-3xl text-dark opacity-75 font-normal mb-5">
                <router-link class=" w-full" :to="{ name: 'signup'}" exact>
                  Начни прямо сейчас!
                </router-link>
              </h3>
            </div>
          </div>
      </section>

      <footer class="bg-grey-lightest py-8">
        <p class="text-center text-grey text-xs mb-4">
          Сделано с <fa icon="heart" class="text-red" />  <a href="http://adutskevich.com" target="_blank" class="text-grey">adutskevich.com</a>
        </p>


      </footer>
  </div>
</template>

<script>
export default {}
</script>
