/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//@ts-ignore
import { getApiContext } from "dremio-ui-common/contexts/ApiContext.js";
import { getArcticCatalogGrantsUrl } from "./utils";
import { InlineResponse2001 } from "./ArcticCatalogGrants.types";

export const modifyArcticCatalogGrants = (
  catalogId: string,
  payload: InlineResponse2001
): Promise<InlineResponse2001> =>
  getApiContext()
    .fetch(getArcticCatalogGrantsUrl(catalogId), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((res: any) => res.json())
    .catch((e: any) => {
      throw e;
    });