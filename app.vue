<template>
  <div>
    <Hero :items="['home']">
      <h1 class="text-4xl text-secondary py-6"> echo <u style="color: #ACA98A">~</u> <strong style="color: #cacaca" >/home/wyli</strong></h1>
      <p class="py-3">wylited</p>
      <p class="text-base-100">dhairya</p>
      <p class="py-3">International Baccalaureate 'm25</p>
      <p class="text-base-100">Math AA Hl, Physics Hl, Comp Sci Hl, Econ Hl</p>

      <h2 class="text-3xl text-primary py-6 underline">blogs</h2>

      <table class="w-full leading-7">
        <tr>
          <td class="text-center">
            <a class="text-6xl text-warning" href="https://blog.wyli.tech/2023">Δ</a>
            <div class="text-warning">2023</div>
          </td>
          <td class="text-center">
            <a class="text-6xl text-accent" href="https://blog.wyli.tech/2023">φ</a>
            <div class="text-accent">2024</div>
          </td>
        </tr>
      </table>

      <div class="leading-6 py-6">
        <h2 class="text-3xl text-primary py-3 underline">quick links</h2>
        <p class="py-1"> &lt;-&lt; <a href="https://notes.wyli.tech"><strong>notes</strong></a> &gt;-&gt; </p>
        <p> &lt;-&lt; <a href="https://blog.wyli.tech"><strong>blogs</strong></a> &gt;-&gt; </p>
        <p> &lt;-&lt; <a href="https://shots.wyli.tech"><strong>1shot</strong></a> &gt;-&gt; </p>
        <p> &lt;-&lt; <a href="https://shots.wyli.tech"><strong>prjct</strong></a> &gt;-&gt; </p>
        <p> &lt;-&lt; <a href="/about"><strong>about</strong></a> &gt;-&gt; </p>
      </div>
    </Hero>
  </div>
</template>
