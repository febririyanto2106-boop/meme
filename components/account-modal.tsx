"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { buttonClasses } from "@/components/ui/cta";

type AccountMode = "login" | "profile";

type AccountModalProps = {
  mode: AccountMode | null;
  onClose: () => void;
  onChangeMode: (mode: AccountMode) => void;
};

export function AccountModal({
  mode,
  onClose,
  onChangeMode,
}: AccountModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [mode]);

  return (
    <Modal
      open={mode !== null}
      onClose={onClose}
      label={mode === "profile" ? "Pratinjau profil pelajar" : "Pratinjau masuk"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode ?? "closed"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
          className="relative p-6 pt-9 sm:p-7 sm:pt-9"
        >
          <div
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent"
            aria-hidden="true"
          />

          {mode === "profile" ? (
            <>
              <div className="flex items-start gap-3.5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet/30 to-cyan/15 text-white">
                  <UserRound className="size-5" />
                </span>
                <div>
                  <p className="eyebrow">Pratinjau profil</p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white">
                    Peneliti tamu
                  </h3>
                </div>
                <span className="ml-auto mt-1 rounded-full border border-cyan/20 bg-cyan/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan/80">
                  Tamu
                </span>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                Ini adalah pratinjau dashboard anggota. Progres, rentetan
                belajar, dan riset tersimpan akan tersedia di Academy lengkap.
              </p>

              <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                    Progres keseluruhan
                  </span>
                  <span className="font-mono text-[10px] text-white/55">0%</span>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-[2%] rounded-full bg-gradient-to-r from-violet to-acid" />
                </div>
                <p className="mt-2.5 text-[10.5px] text-white/30">
                  0 dari 24 pelajaran inti sudah dimulai
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {[
                  { label: "Pelajaran", value: "0" },
                  { label: "Rentetan", value: "0 hr" },
                  { label: "Catatan riset", value: "0" },
                  { label: "Akses", value: "Tamu" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3"
                  >
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/30">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white/85">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/#learning"
                onClick={onClose}
                className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-violet/10 text-violet-soft">
                  <BookOpen className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/30">
                    Berikutnya
                  </span>
                  <span className="mt-0.5 block truncate text-[12.5px] font-medium text-white/80">
                    Dasar-Dasar Memecoin
                  </span>
                </span>
                <ChevronRight className="size-4 text-white/25" />
              </a>

              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="/#learning"
                  onClick={onClose}
                  className={buttonClasses("primary", "md", "w-full")}
                >
                  Mulai belajar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <button
                  type="button"
                  onClick={() => onChangeMode("login")}
                  className={buttonClasses("ghost", "md", "w-full")}
                >
                  Pratinjau masuk
                </button>
              </div>

              <p className="mt-4 text-center text-[10px] leading-relaxed text-white/25">
                Tidak ada akun atau data pribadi yang dibuat di pratinjau ini.
              </p>
            </>
          ) : (
            <>
              <span className="grid size-11 place-items-center rounded-2xl border border-violet/25 bg-violet/[0.12] text-violet-soft">
                <Sparkles className="size-5" />
              </span>
              <p className="eyebrow mt-4">Akses anggota</p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                Masuk ke Academy
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                Autentikasi masih berupa pratinjau. Tidak ada akun yang dibuat,
                dan tidak ada data yang dikirim ke server.
              </p>

              <form
                className="mt-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label
                  htmlFor="preview-email"
                  className="mb-1.5 block text-[11px] font-medium text-white/50"
                >
                  Alamat email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/25" />
                  <input
                    id="preview-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="field pl-10"
                    autoComplete="email"
                  />
                </div>

                <button
                  type="submit"
                  className={buttonClasses("primary", "md", "mt-3 w-full")}
                >
                  Lanjutkan dengan email
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-start gap-2.5 rounded-xl border border-acid/20 bg-acid/[0.05] p-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-acid" />
                      <p className="text-[11.5px] leading-relaxed text-acid/85">
                        Pratinjau terkirim. Pengiriman email dan akun belum
                        terhubung di demo ini — kamu bisa menjelajahi kurikulum
                        secara bebas.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/[0.07]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  atau
                </span>
                <span className="h-px flex-1 bg-white/[0.07]" />
              </div>

              <button
                type="button"
                onClick={() => onChangeMode("profile")}
                className={buttonClasses("ghost", "md", "w-full")}
              >
                Lihat profil tamu
              </button>

              <p className="mt-4 text-center text-[10px] leading-relaxed text-white/25">
                Dengan melanjutkan, kamu menyetujui{" "}
                <a
                  href="/terms"
                  onClick={onClose}
                  className="text-white/45 underline decoration-white/20 underline-offset-2 hover:text-white/70"
                >
                  Syarat
                </a>{" "}
                dan memahami{" "}
                <a
                  href="/risk-disclaimer"
                  onClick={onClose}
                  className="text-white/45 underline decoration-white/20 underline-offset-2 hover:text-white/70"
                >
                  Penafian Risiko
                </a>
                .
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
}
