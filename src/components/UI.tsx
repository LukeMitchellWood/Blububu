import type { FC, PropsWithChildren } from 'hono/jsx';
import { Page } from './Page';
import { Home } from './Home';

export const UI = {
  Home: () => <Home />,
  Illustrations: () => {
    return (
      <Page pagetitle="Ali Mai's Portfolio">
        <section className="min-h-dvh relative">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-48">
            <h1 className="text-4xl mb-8 goodfood">Illustrations</h1>
            <div className="max-w-2xl">
              <p className="pb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolorum facilis maiores nesciunt, aperiam beatae. Laudantium
                temporibus quae, omnis optio nihil officiis hic! Fugiat natus
                minus et maxime molestias odio?
              </p>
              <p className="pb-4">
                Alias neque et cum laborum necessitatibus non quidem nostrum
                aperiam debitis. Dolores velit sequi tenetur animi beatae
                consectetur. Voluptates ad soluta quibusdam id nam delectus
                laborum et facere tenetur consequatur.
              </p>
              <p className="pb-4">
                Animi repellendus soluta accusamus qui unde voluptas, voluptatem
                impedit, maiores quos porro inventore aut sit esse quasi saepe
                praesentium quae nobis perferendis perspiciatis, ad nemo sint
                laudantium. Iure, id blanditiis.
              </p>
              <p className="pb-4">
                Ad quam, quidem amet repellat enim nam nisi, nostrum porro
                beatae sunt accusantium perspiciatis, aut voluptatum impedit non
                a ea tenetur laboriosam unde voluptate. Tempore nam quis vel
                architecto modi.
              </p>
              <p className="pb-4">
                Molestias tenetur suscipit aperiam qui numquam et eum vero
                laboriosam consequuntur similique, atque, labore debitis nam
                enim pariatur iste eaque minima quisquam mollitia tempore
                adipisci! Voluptatum, aliquid! Quasi, dolorem rerum.
              </p>
              <p className="pb-4">
                Quod vitae impedit, ab provident cumque repellat? Ipsa eligendi
                sapiente eius cupiditate aperiam. Porro dolores ut dicta, magnam
                sequi quae, veritatis architecto eaque expedita voluptates aut
                sapiente enim asperiores a!
              </p>
            </div>
          </div>
        </section>
      </Page>
    );
  },
  ConceptArt: () => {
    return (
      <Page pagetitle="Ali Mai's Portfolio">
        <section className="min-h-dvh relative">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-48">
            <h1 className="text-4xl mb-8 goodfood">Concept Art</h1>
            <div className="max-w-2xl">
              <p className="pb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                culpa suscipit possimus praesentium? At quasi consequuntur
                cupiditate optio voluptatum sunt ipsam, tempora consectetur
                amet.
              </p>
              <p className="pb-4">
                Voluptas, excepturi necessitatibus hic accusamus ut molestiae
                mollitia quaerat ipsum qui fuga aspernatur accusantium corporis
                illum tempora explicabo omnis officia fugit quod architecto
                dolore!
              </p>
              <p className="pb-4">
                Reiciendis nemo itaque dolorem quod quis? Nostrum quaerat
                quisquam, facere dicta molestiae nam saepe nobis eius. Eius
                sapiente voluptates praesentium ut expedita architecto vitae.
              </p>
              <p className="pb-4">
                Reprehenderit debitis odit quaerat porro maiores numquam
                corporis doloremque harum eveniet exercitationem aperiam
                suscipit ut quia, quasi voluptates architecto at laboriosam?
                Non, culpa ducimus!
              </p>
              <p className="pb-4">
                Ullam optio magni dolores, nostrum quas ipsa eum mollitia
                laborum hic, reiciendis recusandae? Quos laudantium libero in a
                incidunt voluptate iste beatae quam illum!
              </p>
              <p className="pb-4">
                Expedita, aspernatur! Libero, nulla amet. Maxime, perferendis
                architecto sunt perspiciatis, hic possimus veritatis at,
                dignissimos voluptate saepe reprehenderit delectus velit
                doloremque non dicta! Ut!
              </p>
            </div>
          </div>
        </section>
      </Page>
    );
  },
  Storyboards: () => {
    return (
      <Page pagetitle="Ali Mai's Portfolio">
        <section className="min-h-dvh relative">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-48">
            <h1 className="text-4xl mb-8 goodfood">Storyboards</h1>
            <div className="max-w-2xl">
              <p className="pb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nesciunt iusto aliquam aspernatur vel magni
                consectetur, itaque quae natus reiciendis possimus maiores omnis
                facilis!
              </p>
              <p className="pb-4">
                Quisquam commodi dicta reiciendis possimus quod recusandae
                itaque ad, ipsa adipisci nostrum neque labore, odio minus sequi
                temporibus! At ad voluptates dolore inventore maiores?
              </p>
              <p className="pb-4">
                Est adipisci dolore excepturi totam beatae ipsum nesciunt. Eum
                architecto laboriosam molestias est ducimus aperiam ipsam at
                ipsa ut, odit, dignissimos officiis itaque beatae!
              </p>
              <p className="pb-4">
                Nam reprehenderit sapiente saepe eius quo architecto excepturi
                commodi, assumenda facilis rerum consequuntur iste distinctio
                maiores rem minima ex suscipit incidunt debitis tempora vitae?
              </p>
              <p className="pb-4">
                Numquam distinctio accusantium unde veniam soluta ullam incidunt
                alias labore fuga, velit beatae illo, enim tenetur ipsa harum
                facilis. Natus iure ab excepturi dolores?
              </p>
              <p className="pb-4">
                Quo ullam aut in repellendus delectus nobis, itaque unde iste.
                Unde doloremque amet nam cupiditate! Fugit molestias
                exercitationem dolore eligendi esse neque nam dolores?
              </p>
              <p className="pb-4">
                Laudantium molestias repudiandae facere corporis quasi accusamus
                reprehenderit suscipit tempore assumenda enim hic odit nisi,
                atque distinctio odio corrupti eveniet nobis molestiae adipisci
                id.
              </p>
            </div>
          </div>
        </section>
      </Page>
    );
  },
  Animations: () => {
    return (
      <Page>
        <section className="min-h-dvh relative">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-48">
            <h1 className="text-4xl mb-8 goodfood">Animations</h1>
            <div className="max-w-xl">
              <p className="pb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                quo ipsum delectus quidem ad. Neque, odit ducimus deleniti
                accusamus laborum at corrupti nihil aspernatur molestiae officia
                magni itaque eum cumque.
              </p>
              <p className="pb-4">
                Odio ab quos numquam pariatur repellat facilis excepturi
                similique corrupti odit possimus reiciendis, qui iusto maiores
                iure, ipsum suscipit fuga quas, blanditiis esse quisquam sunt
                architecto sint laudantium facere. Assumenda.
              </p>
              <p className="pb-4">
                Possimus dolores, culpa modi ducimus et eius rerum sint neque
                eum est repellendus aliquid ea itaque. At pariatur quo,
                aspernatur repellendus quos minima voluptates dolore, distinctio
                iure dolor qui obcaecati!
              </p>
              <p className="pb-4">
                Repudiandae obcaecati accusantium asperiores odio, dignissimos
                nihil optio corrupti reiciendis vero nemo blanditiis odit
                dolorum mollitia exercitationem maiores dolores minima eius
                culpa voluptatem accusamus ipsa animi hic sed soluta. Nemo!
              </p>
              <p className="pb-4">
                Ad magnam minima explicabo ipsum quis laboriosam deleniti id
                maxime excepturi necessitatibus, provident ab dolorem
                repudiandae, vero molestias eum dolorum atque, in temporibus.
                Rem temporibus ab ut adipisci totam omnis.
              </p>
              <p className="pb-4">
                Dolore deserunt ab in tempora odio doloribus voluptatum, minima
                minus error quia recusandae beatae praesentium illum numquam
                deleniti quam. Vel fuga atque ut ipsa, perferendis labore
                quaerat porro omnis aliquid?
              </p>
              <p className="pb-4">
                Voluptatem expedita exercitationem debitis quisquam quos
                voluptate reprehenderit mollitia temporibus ratione aut saepe
                dolores vitae quaerat eum magnam dolore, maiores repudiandae
                aliquid inventore rerum quod laborum laudantium? Illum,
                quibusdam accusantium.
              </p>
              <p className="pb-4">
                Doloribus odio quaerat iusto totam laborum neque, aspernatur
                enim. Corporis eaque suscipit reprehenderit, quam aut inventore
                voluptates obcaecati nisi tempora sit sint impedit magni sed
                facilis blanditiis rem. Fugiat, numquam.
              </p>
            </div>
          </div>
        </section>
      </Page>
    );
  },
  Contact: () => (
    <Page pagetitle="Ali Mai's Portfolio">
      <section className="min-h-dvh relative">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-48">
          <h1 className="text-4xl mb-8 goodfood">Contact</h1>
          <div className="max-w-xl">
            <p className="pb-4 text-xl">Send me a message!</p>
            <p className="pb-4">
              Arrange a collaboration, commission some work, talk about an
              upcoming project, or just keep posted about my goings on!
            </p>

            <form id="contact-form" action="/contact" method="post">
              <script src="/static/js/message.js" defer></script>

              <div className="flex flex-col gap-4 py-4">
                <label className="uppercase text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  min="2"
                  maxlength={32}
                  className="py-4 px-2 rounded-xl border-green-500 border-opacity-0 border-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 py-4">
                <label className="uppercase text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="py-4 px-2 rounded-xl border-green-500 border-opacity-0 border-2"
                  maxlength={64}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 py-4">
                <label className="uppercase text-sm" htmlFor="msg">
                  Message
                </label>
                <textarea
                  min="12"
                  maxlength={500}
                  className="py-4 px-2 rounded-xl min-h-48  border-green-500 border-opacity-0 border-2"
                  name="msg"
                  id="msg"
                  placeholder="Write me a message. I'd love to hear from you!"
                  required
                ></textarea>
                <p id="char-count" class="text-xs text-opacity-40 text-right">
                  0 / 500
                </p>
              </div>
              <div className="relative py-12">
                <input
                  className="absolute top-0 left-0 w-full bg-amber-600 hover:bg-amber-700 disabled:bg-slate-400 disabled:opacity-50  disabled:cursor-not-allowed text-white text-opacity-80 uppercase p-4 text-center rounded-xl font-medium tracking-wider transition"
                  type="submit"
                  value="Message Me!"
                  disabled
                />
                <div
                  id="form-sending"
                  className="absolute top-0 left-0 pointer-events-none opacity-0 w-full bg-red-600 text-white text-opacity-80 p-4 uppercase text-center rounded-xl transition"
                >
                  Submitting...
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Page>
  ),
};
