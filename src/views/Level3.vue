<template>
  <div class="div">
    <div class="div-2">
      <div class="column">
        <div class="div-3">
          <img
            loading="lazy"
            srcSet="..."
            class="img"
          />
          <div class="div-4">
            <img
              loading="lazy"
              srcSet="..."
              class="img-2"
            /><img
              loading="lazy"
              srcSet="..."
              class="img-3"
            />
          </div>
          <div class="div-5"></div>
        </div>
      </div>
      <div class="column-2">
        <div class="div-6">
          <div class="div-7">
            <div class="div-8">
              <div class="div-9">
                <div class="div-10">
                  <div class="div-11">
                    <div class="div-12">首頁</div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-4"
                    />
                    <div class="div-13">流程稽催排名</div>
                  </div>
                  <div class="div-14">
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-5"
                    />
                    <div class="div-15">流程稽催排名</div>
                  </div>
                </div>
                <div class="div-16">
                  <img
                    loading="lazy"
                    srcSet="..."
                    class="img-6"
                  /><img
                    loading="lazy"
                    srcSet="..."
                    class="img-7"
                  />
                </div>
              </div>
            </div>
            <div class="div-17">
              <div class="div-18">
                <div class="div-19">
                  <div class="div-20">
                    <div class="div-21">新竹分公司</div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-8"
                    />
                  </div>
                  <div class="div-22">
                    <div class="div-23">所有部門</div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-9"
                    />
                  </div>
                  <div class="div-24">
                    <div class="div-25">2020-11-08</div>
                    <div class="div-26">
                      <img
                        loading="lazy"
                        srcSet="..."
                        class="img-10"
                      />
                      <div class="div-27">2020-12-23</div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-11"
                    />
                  </div>
                </div>
                <div class="div-28">
                  <div class="div-29">
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-12"
                    />
                    <div class="div-30">重置</div>
                  </div>
                  <div class="div-31">
                    <img
                      loading="lazy"
                      srcSet="..."
                      class="img-13"
                    />
                    <div class="div-32">搜尋</div>
                  </div>
                </div>
              </div>
              <div class="div-33">
                <div class="div-34">
                  <div class="div-35">
                    <div class="div-36">
                      <div class="div-37">
                        <div class="div-38">人員稽催排名</div>
                        <div class="div-39"></div>
                      </div>
                      <div class="div-40">部門稽催排名</div>
                    </div>
                    <div class="div-41"></div>
                  </div>
                  <div class="div-42">
                    <div class="div-43">
                      <img
                        loading="lazy"
                        srcSet="..."
                        class="img-14"
                      />
                      <div class="div-44">匯出</div>
                    </div>
                    <div class="div-45">
                      <div class="div-46">
                        <img
                          loading="lazy"
                          srcSet="..."
                          class="img-15"
                        />
                      </div>
                      <div class="div-47">
                        <img
                          loading="lazy"
                          srcSet="..."
                          class="img-16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-48">
                  <div class="div-49"></div>
                  <div class="div-50">僅顯示一層</div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  class="img-17"
                />
              </div>
            </div>
            <div class="div-51">
              ©2022 UniPortal. Flowring Technology Corp.All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const dataList = ref([]);
axios
	.get('http://localhost:8080/public/json/test.json')
	.then(function (response) {
		if (response.data.length > 0) {
			response.data.forEach((element) => {
				dataList.value.push({
					...element,
					isEditing: false,
				});
			});
		}
		// console.log(dataList);
	})
	.catch(function (error) {
		console.log('Error occurred:', error);
	});
</script>

<style scoped>
.div {
  padding: 0 20px;
}
.div-2 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-2 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 5%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  padding-top: 18px;
  align-items: flex-start;
  box-shadow: 0px 5px 12px 4px rgba(168, 159, 207, 0.09),
    0px 3px 6px 0px rgba(182, 174, 214, 0.12),
    0px 1px 2px -2px rgba(182, 174, 214, 0.16);
  background-color: var(-- -05, #fafafa);
  display: flex;
  width: 62px;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
}
.img {
  aspect-ratio: 1.36;
  object-fit: cover;
  object-position: center;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  align-self: start;
}
.div-4 {
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 14px;
  width: 100%;
  flex-direction: column;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  margin-top: 4px;
  flex-grow: 1;
}
.div-5 {
  background-color: var(--secondary-05, #fafafa);
  align-self: start;
  display: flex;
  margin-top: 14px;
  width: 100%;
  height: 586px;
  flex-direction: column;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 95%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-6 {
  align-items: flex-start;
  background-color: var(--liberty-05, #f6f7fb);
  display: flex;
  flex-grow: 1;
  padding-bottom: 8px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
  }
}
.div-7 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.div-8 {
  align-self: stretch;
  background-color: var(--primary-05, #f7f7fb);
  display: flex;
  flex-direction: column;
  padding: 12px 20px 4px;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
  }
}
.div-9 {
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1248px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-10 {
  align-self: start;
  display: flex;
  margin-top: 8px;
  flex-direction: column;
}
.div-11 {
  align-items: flex-start;
  align-self: start;
  display: flex;
  width: 136px;
  max-width: 100%;
  gap: 8px;
}
@media (max-width: 991px) {
  .div-11 {
    justify-content: center;
  }
}
.div-12 {
  color: var(--secondary-4, #a7afb2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: center;
  margin: auto 0;
}
.img-4 {
  aspect-ratio: 0.31;
  object-fit: cover;
  object-position: center;
  width: 8px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-13 {
  color: var(--primary-5, #6e5faf);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: center;
  text-wrap: nowrap;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-13 {
    text-wrap: initial;
  }
}
.div-14 {
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 4px;
  width: 192px;
  max-width: 100%;
  gap: 12px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 36px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 0px rgba(182, 174, 214, 0.16);
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-15 {
  color: var(--secondary-9, #262a2b);
  font-family: Noto Sans TC, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 125%;
  align-self: center;
  text-wrap: nowrap;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-15 {
    text-wrap: initial;
  }
}
.div-16 {
  align-items: flex-start;
  align-self: start;
  display: flex;
  gap: 12px;
}
.img-6 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.img-7 {
  aspect-ratio: 1.6;
  object-fit: cover;
  object-position: center;
  width: 64px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-17 {
  align-items: flex-start;
  border-radius: 32px;
  box-shadow: 80px 120px 100px 0px rgba(99, 86, 158, 0.05);
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.8);
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin: 8px 24px 0;
  padding: 24px 20px 44px;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    margin-right: 10px;
  }
}
.div-18 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  box-shadow: 0px 5px 12px 4px rgba(168, 159, 207, 0.09),
    0px 3px 6px 0px rgba(182, 174, 214, 0.12),
    0px 1px 2px -2px rgba(182, 174, 214, 0.16);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
    margin-right: 4px;
    flex-wrap: wrap;
  }
}
.div-19 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: auto;
  gap: 16px;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-20 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--secondary-3, #c4c4c4);
  box-shadow: 0px 2px 0px 0px rgba(34, 34, 34, 0.02);
  background-color: var(--other-color-0, #fff);
  display: flex;
  width: 280px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 7px 12px;
}
.div-21 {
  color: var(--secondary-9, #262a2b);
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
}
.img-8 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 18px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-22 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--secondary-3, #c4c4c4);
  box-shadow: 0px 2px 0px 0px rgba(34, 34, 34, 0.02);
  background-color: var(--other-color-0, #fff);
  display: flex;
  width: 280px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 7px 12px;
}
.div-23 {
  color: var(--secondary-9, #262a2b);
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
}
.img-9 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 18px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-24 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--secondary-3, #c4c4c4);
  background-color: var(--other-color-0, #fff);
  display: flex;
  width: 379px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 7px 12px;
}
@media (max-width: 991px) {
  .div-24 {
    justify-content: center;
  }
}
.div-25 {
  color: var(--secondary-9, #262a2b);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
}
.div-26 {
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}
.img-10 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 16px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-27 {
  color: var(--secondary-9, #262a2b);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-27 {
    text-wrap: initial;
  }
}
.img-11 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 16px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-28 {
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 16px;
}
.div-29 {
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid var(--secondary-5, #999);
  display: flex;
  gap: 4px;
  flex: 1;
  padding: 7px 19px 7px 18px;
}
.img-12 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
}
.div-30 {
  color: var(--secondary-5, #999);
  text-align: center;
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-30 {
    text-wrap: initial;
  }
}
.div-31 {
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 4px;
  background-color: var(--primary-5, #6e5faf);
  display: flex;
  gap: 4px;
  flex: 1;
  padding: 7px 18px;
}
.img-13 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
}
.div-32 {
  color: var(--other-color-0, #fff);
  text-align: center;
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-32 {
    text-wrap: initial;
  }
}
.div-33 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  margin-top: 24px;
  width: 100%;
  max-width: 1168px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
  }
}
.div-34 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  width: 100%;
  gap: 16px;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-35 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: auto;
}
@media (max-width: 991px) {
  .div-35 {
    max-width: 100%;
  }
}
.div-36 {
  align-items: flex-start;
  align-self: start;
  display: flex;
  width: 232px;
  max-width: 100%;
  padding-top: 7px;
  justify-content: space-between;
  gap: 20px;
}
.div-37 {
  align-items: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  width: 116px;
}
.div-38 {
  color: var(--primary-5, #6e5faf);
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
  align-self: center;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-38 {
    text-wrap: initial;
  }
}
.div-39 {
  align-self: stretch;
  background-color: var(--primary-5, #6e5faf);
  display: flex;
  margin-top: 7px;
  width: 100%;
  height: 2px;
  flex-direction: column;
}
.div-40 {
  color: var(--secondary-8, #5c6466);
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
  align-self: start;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-40 {
    text-wrap: initial;
  }
}
.div-41 {
  align-self: start;
  background-color: var(--secondary-2-disable, #dbdbdb);
  display: flex;
  width: 994px;
  height: 1px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-41 {
    max-width: 100%;
  }
}
.div-42 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 12px;
  margin: auto 0;
}
.div-43 {
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid var(--primary-5, #6e5faf);
  display: flex;
  gap: 4px;
  flex: 1;
  padding: 7px 12px;
}
.img-14 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
  margin: auto 0;
}
.div-44 {
  color: var(--primary-5, #6e5faf);
  text-align: center;
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-44 {
    text-wrap: initial;
  }
}
.div-45 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 0px;
}
.div-46 {
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  background-color: var(--primary-5, #6e5faf);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 9px 12px;
}
.img-15 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}
.div-47 {
  justify-content: center;
  align-items: center;
  border-radius: 0px 4px 4px 0px;
  border: 1px solid var(--primary-5, #6e5faf);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 9px 12px;
}
.img-16 {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}
.div-48 {
  align-items: flex-start;
  align-self: end;
  display: flex;
  margin-top: 16px;
  width: 90px;
  max-width: 100%;
  gap: 4px;
}
.div-49 {
  fill: var(--other-color-0, #fff);
  stroke-width: 1px;
  stroke: var(--secondary-3, #c4c4c4);
  align-self: stretch;
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
}
.div-50 {
  color: var(--secondary-9, #262a2b);
  font-family: Noto Sans TC, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: stretch;
  text-wrap: nowrap;
}
@media (max-width: 991px) {
  .div-50 {
    text-wrap: initial;
  }
}
.img-17 {
  aspect-ratio: 3.08;
  object-fit: cover;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;
  margin-top: 16px;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img-17 {
    max-width: 100%;
  }
}
.div-51 {
  color: var(--secondary-4, #a7afb2);
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  align-self: center;
  margin-top: 16px;
  width: 1272px;
  max-width: 1272px;
}
@media (max-width: 991px) {
  .div-51 {
    max-width: 100%;
  }
}
</style>