"use client";

import { useCallback, useEffect, useState } from "react";
import { Badge, Card, Kicker, WarnBox } from "@/components/ui/Surfaces";
import { Button } from "@/components/ui/Button";
import { getMyDriver, uploadDocument, type DriverProfile } from "@/lib/api/driver";
import { ApiError } from "@/lib/api/client";

/** Figma desktop "19 · Documents", palette B (frame 57:5650, 1280×786). */

/**
 * The design lists each document with its own expiry ("Expires in 3 mo", "Valid").
 * `Driver.documents` is a `string[]` of URLs with no type and no expiry date, so per
 * document status cannot be shown without a schema change — the page says so rather
 * than inventing dates.
 */
const REQUIRED = [
  { label: "Driver's licence", note: "Re-checked on expiry" },
  { label: "Commercial insurance", note: "Re-checked on expiry" },
  { label: "Vehicle registration", note: "Re-checked yearly" },
  { label: "Background check", note: "Re-checked yearly" },
];

export default function DocumentsPage() {
  const [profile, setProfile] = useState<DriverProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(
    () =>
      getMyDriver()
        .then(setProfile)
        .catch((err) =>
          setError(
            err instanceof ApiError ? err.message : "Could not load your documents",
          ),
        ),
    [],
  );

  useEffect(() => {
    void load();
  }, [load]);

  const documents = profile?.driver.documents ?? [];

  return (
    <div className="mx-auto max-w-[1050px]">
      <h1 className="text-[1.5rem] font-bold tracking-tight text-fg">Documents</h1>
      <p className="mt-2 text-note text-fg-muted">
        Licence, insurance and registration. Dispatch stops the day one lapses.
      </p>

      {error ? <p className="mt-4 text-note font-bold text-danger">{error}</p> : null}

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <Card className="p-0">
            <div className="px-6 pt-6">
              <Kicker>On file</Kicker>
            </div>

            {documents.length === 0 ? (
              <p className="p-6 text-note text-fg-muted">
                Nothing uploaded yet. Your account stays in review until your licence and
                insurance are on file.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-border-subtle">
                {documents.map((url, index) => (
                  <li key={url} className="flex items-center gap-4 px-6 py-4">
                    <span className="text-meta font-bold text-fg">
                      Document {index + 1}
                    </span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto max-w-[18rem] truncate text-note text-accent hover:underline"
                    >
                      {url.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card className="p-5">
            <Kicker>What we need</Kicker>
            <ul className="mt-4 divide-y divide-border-subtle">
              {REQUIRED.map((item) => (
                <li key={item.label} className="flex items-center gap-4 py-3">
                  <div>
                    <p className="text-meta font-bold text-fg">{item.label}</p>
                    <p className="mt-0.5 text-note text-fg-muted">{item.note}</p>
                  </div>
                  <span className="ml-auto">
                    <Badge>required</Badge>
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <WarnBox title="Expiry dates are not tracked yet">
            The API stores a list of file URLs with no type or expiry, so this page cannot
            warn you before a document lapses. Keep your own reminders until that changes.
          </WarnBox>
        </div>

        <Card className="p-5">
          <Kicker>Upload</Kicker>
          <div className="mt-4">
            <UploadForm onDone={load} />
          </div>
        </Card>
      </div>
    </div>
  );
}

function UploadForm({ onDone }: { onDone: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{ error?: string; done?: boolean }>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        if (!file) return;
        setPending(true);
        try {
          await uploadDocument({
            fileName: file.name,
            mimeType: file.type || "application/octet-stream",
            sizeBytes: file.size,
          });
          setState({ done: true });
          setFile(null);
          onDone();
        } catch (err) {
          setState({
            error: err instanceof ApiError ? err.message : "Could not upload",
          });
        } finally {
          setPending(false);
        }
      }}
      className="space-y-4"
    >
      {state.error ? <p className="text-label text-danger">{state.error}</p> : null}

      <input
        type="file"
        accept=".pdf,image/*"
        onChange={(event) => setFile(event.target.files?.[0] ?? null)}
        className="w-full rounded-field border border-border bg-surface-raised px-3 py-2 text-note text-fg"
      />

      {/*
        The endpoint records upload metadata only — storage is a placeholder on the
        backend (utils/s3.ts), so the file itself never leaves the device yet.
      */}
      <p className="text-note leading-relaxed text-fg-muted">
        The file name, type and size are registered against your profile. Document
        storage is not connected, so the file stays on your device for now.
      </p>

      <Button type="submit" variant="accent" disabled={pending || !file}>
        {pending ? "Uploading…" : "Upload"}
      </Button>
      {state.done ? <p className="text-note font-bold text-success">Registered.</p> : null}
    </form>
  );
}
